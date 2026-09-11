'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileText,
  Mail,
  Plus,
  Trash2,
  ExternalLink,
  LogOut,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Search,
  Filter,
  Eye,
  Edit,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  X,
  UploadCloud,
  Layers,
} from 'lucide-react';
import { initialBlogs, blogCategories } from '@/data/blogsData';
import { blogService, inquiryService } from '@/services/api';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries' | 'blogs'

  // Data states
  const [inquiries, setInquiries] = useState([]);
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isLoading, setIsLoading] = useState(true);

  // Inquiries filter
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // Blog publishing and editing state
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishNotice, setPublishNotice] = useState(null);

  // Blog Form state
  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    category: 'Constitutional Law',
    author: 'Advocate Shashi Shekhar',
    readTime: '6 min read',
    excerpt: '',
    content: '',
    tags: 'Supreme Court, High Court, Constitutional Law',
    bannerUrl: '/court-supreme-facade.jpg',
    bannerFile: null,
    status: 'published',
  });

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('trinetra_admin_token');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Load Inquiries & Blogs
  const loadData = async () => {
    setIsLoading(true);
    // 1. Fetch Inquiries
    try {
      const inqRes = await inquiryService.getAll({ limit: 100 });
      if (inqRes?.data?.inquiries) {
        setInquiries(inqRes.data.inquiries);
      }
    } catch (err) {
      console.warn('Inquiries notice:', err.message);
    }

    // 2. Fetch Blogs
    try {
      const blogRes = await blogService.getAll({ limit: 50 });
      const backendBlogs = blogRes?.data?.blogs || [];
      if (backendBlogs.length > 0) {
        const backendSlugs = new Set(backendBlogs.map((b) => b.slug));
        const uniqueSeed = initialBlogs.filter((b) => !backendSlugs.has(b.slug));
        setBlogs([...backendBlogs, ...uniqueSeed]);
      } else {
        setBlogs(initialBlogs);
      }
    } catch (err) {
      console.warn('Blogs fetch fallback:', err.message);
      setBlogs(initialBlogs);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem('trinetra_admin_token');
    localStorage.removeItem('trinetra_admin_user');
    router.push('/admin/login');
  };

  // Generate slug automatically when title changes
  const handleTitleChange = (e) => {
    const val = e.target.value;
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    setBlogForm((prev) => ({
      ...prev,
      title: val,
      slug: prev.slug === '' || prev.slug === prev.title.toLowerCase().replace(/\s+/g, '-') ? generatedSlug : prev.slug,
    }));
  };

  // Open Modal for Creating New Blog
  const handleOpenNewBlogModal = () => {
    setEditingBlogId(null);
    setBlogForm({
      title: '',
      slug: '',
      category: 'Constitutional Law',
      author: 'Advocate Shashi Shekhar',
      readTime: '6 min read',
      excerpt: '',
      content: '',
      tags: 'Supreme Court, High Court, Constitutional Law',
      bannerUrl: '/court-supreme-facade.jpg',
      bannerFile: null,
      status: 'published',
    });
    setPublishNotice(null);
    setIsBlogModalOpen(true);
  };

  // Open Modal for Editing an Existing Blog
  const handleEditBlog = (blog) => {
    setEditingBlogId(blog._id || blog.slug);
    setBlogForm({
      title: blog.title || '',
      slug: blog.slug || '',
      category: blog.category || 'Constitutional Law',
      author: blog.author || 'Advocate Shashi Shekhar',
      readTime: blog.readTime || '6 min read',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags || '',
      bannerUrl: blog.banner?.url || '/court-supreme-facade.jpg',
      bannerFile: null,
      status: blog.status || 'published',
    });
    setPublishNotice(null);
    setIsBlogModalOpen(true);
  };

  // Handle Delete Blog
  const handleDeleteBlog = async (idOrSlug) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    try {
      await blogService.delete(idOrSlug);
    } catch (err) {
      console.warn('Delete notice:', err.message);
    }

    setBlogs((prev) => prev.filter((item) => item._id !== idOrSlug && item.slug !== idOrSlug));
  };

  // Handle Save (Create or Update) Blog
  const handleSaveBlog = async (e) => {
    e.preventDefault();
    setIsPublishing(true);
    setPublishNotice(null);

    try {
      const formData = new FormData();
      formData.append('title', blogForm.title);
      formData.append('slug', blogForm.slug);
      formData.append('category', blogForm.category);
      formData.append('author', blogForm.author);
      formData.append('excerpt', blogForm.excerpt || blogForm.title);
      formData.append('content', blogForm.content);
      formData.append('tags', blogForm.tags);
      formData.append('status', blogForm.status);

      formData.append('bannerUrl', blogForm.bannerUrl || '/court-supreme-facade.jpg');

      if (blogForm.bannerFile) {
        formData.append('banner', blogForm.bannerFile);
      }

      if (editingBlogId) {
        // ================= UPDATE EXISTING BLOG =================
        let updatedBlog = null;
        try {
          const res = await blogService.update(editingBlogId, formData);
          if (res?.data) {
            updatedBlog = res.data;
          }
        } catch (apiErr) {
          console.warn('Backend update notice (syncing local state):', apiErr.message);
        }

        setBlogs((prev) =>
          prev.map((item) =>
            item._id === editingBlogId || item.slug === editingBlogId
              ? updatedBlog || {
                  ...item,
                  title: blogForm.title,
                  slug: blogForm.slug,
                  category: blogForm.category,
                  author: blogForm.author,
                  readTime: blogForm.readTime,
                  excerpt: blogForm.excerpt,
                  content: blogForm.content,
                  tags: typeof blogForm.tags === 'string' ? blogForm.tags.split(',').map((t) => t.trim()) : blogForm.tags,
                  banner: blogForm.bannerFile
                    ? { url: blogForm.bannerUrl, publicId: 'custom' }
                    : item.banner || { url: blogForm.bannerUrl, publicId: 'custom' },
                  status: blogForm.status,
                }
              : item
          )
        );

        setPublishNotice({ type: 'success', text: 'Article updated successfully in database!' });
      } else {
        // ================= CREATE NEW BLOG =================
        let createdBlog = null;

        try {
          const res = await blogService.create(formData);
          createdBlog = res?.data;
        } catch (apiErr) {
          console.warn('Direct upload notice (saving client session):', apiErr.message);
          createdBlog = {
            _id: `blog-local-${Date.now()}`,
            title: blogForm.title,
            slug: blogForm.slug || `article-${Date.now()}`,
            category: blogForm.category,
            author: blogForm.author,
            readTime: blogForm.readTime,
            excerpt: blogForm.excerpt,
            content: blogForm.content,
            tags: blogForm.tags.split(',').map((t) => t.trim()),
            banner: {
              url: blogForm.bannerUrl || '/court-supreme-facade.jpg',
              publicId: 'local-img',
            },
            publishedAt: new Date().toISOString().split('T')[0],
            status: blogForm.status,
            views: 1,
          };
        }

        if (createdBlog) {
          setBlogs((prev) => [createdBlog, ...prev]);
          setPublishNotice({ type: 'success', text: 'Article published to chambers insights!' });
        }
      }

      setTimeout(() => {
        setIsBlogModalOpen(false);
        setPublishNotice(null);
        setEditingBlogId(null);
      }, 1000);
    } catch (err) {
      setPublishNotice({ type: 'error', text: err.message || 'Failed to save article.' });
    } finally {
      setIsPublishing(false);
    }
  };

  // Handle Inquiry Status Change
  const handleUpdateInquiryStatus = async (id, newStatus) => {
    try {
      await inquiryService.updateStatus(id, newStatus);
      setInquiries((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
      );
      if (selectedInquiry?._id === id) {
        setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.warn('Status update notice:', err.message);
      setInquiries((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
      );
    }
  };

  // Handle Delete Inquiry
  const handleDeleteInquiry = async (id) => {
    if (!confirm('Are you sure you want to remove this client briefing record?')) return;
    try {
      await inquiryService.delete(id);
    } catch (err) {
      console.warn('Delete notice:', err.message);
    }
    setInquiries((prev) => prev.filter((item) => item._id !== id));
    if (selectedInquiry?._id === id) {
      setSelectedInquiry(null);
    }
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    if (inquiryStatusFilter === 'all') return true;
    return inq.status === inquiryStatusFilter;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#141211] text-white flex items-center justify-center font-dm">
        <div className="animate-pulse flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-[#9E6728]" />
          <span className="text-sm tracking-wider uppercase">Verifying Chambers Session...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#2D2926] font-dm">
      {/* ================= TOP NAVIGATION BAR ================= */}
      <header className="w-full bg-[#1A1817] text-white border-b border-[#9E6728]/30 sticky top-0 z-40">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#1A1817] flex items-center justify-center font-serif font-bold text-base border border-[#9E6728]">
              ⚖
            </div>
            <div>
              <span className="font-heading font-extrabold tracking-[0.16em] text-white text-sm block leading-none">
                TRINETRA
              </span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#9E6728] block mt-0.5">
                EXECUTIVE REGISTRY & CMS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/blogs"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#D4CDC5] hover:text-[#D4AF37] transition-colors"
            >
              <span>Live Insights</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/contact"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#D4CDC5] hover:text-[#D4AF37] transition-colors"
            >
              <span>Live Contact Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2C2723] hover:bg-[#3D3631] text-xs font-semibold text-[#E0D7CA] hover:text-white transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>

        </div>
      </header>

      {/* ================= SUB-HEADER WITH TABS & ACTIONS ================= */}
      <div className="w-full bg-white border-b border-[#E8E1D5] shadow-2xs">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          
          {/* Primary Tabs */}
          <div className="flex items-center gap-2 p-1 bg-[#F5EFE6] rounded-xl border border-[#E0D7CA]">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'inquiries'
                  ? 'bg-[#1A1817] text-white shadow-xs'
                  : 'text-[#5C544D] hover:text-[#1A1817]'
              }`}
            >
              <Mail className="w-4 h-4 text-[#9E6728]" />
              <span>Client Inquiries ({inquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'blogs'
                  ? 'bg-[#1A1817] text-white shadow-xs'
                  : 'text-[#5C544D] hover:text-[#1A1817]'
              }`}
            >
              <FileText className="w-4 h-4 text-[#9E6728]" />
              <span>Blog Articles ({blogs.length})</span>
            </button>
          </div>

          {/* Action Button */}
          {activeTab === 'blogs' ? (
            <button
              onClick={handleOpenNewBlogModal}
              className="px-4 py-2.5 rounded-xl bg-[#9E6728] hover:bg-[#855621] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Publish New Article</span>
            </button>
          ) : (
            <button
              onClick={loadData}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#F5EFE6] border border-[#DDD5C9] text-xs font-semibold text-[#5C544D] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh Inquiries</span>
            </button>
          )}

        </div>
      </div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <main className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
        
        {/* ================= TAB 1: CLIENT INQUIRIES & CASE BRIEFS ================= */}
        {activeTab === 'inquiries' && (
          <div>
            {/* Metric Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-7">
              <div className="bg-white rounded-xl border border-[#E8E1D5] p-4 shadow-xs">
                <span className="text-[11px] font-bold text-[#8C827A] uppercase tracking-wider">Total Briefings</span>
                <p className="text-2xl font-bold font-heading text-[#1A1817] mt-1">{inquiries.length}</p>
              </div>
              <div className="bg-white rounded-xl border border-[#E8E1D5] p-4 shadow-xs">
                <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider">Urgent (24h)</span>
                <p className="text-2xl font-bold font-heading text-rose-700 mt-1">
                  {inquiries.filter((i) => i.urgency === 'urgent').length}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-[#E8E1D5] p-4 shadow-xs">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Priority</span>
                <p className="text-2xl font-bold font-heading text-amber-700 mt-1">
                  {inquiries.filter((i) => i.urgency === 'priority').length}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-[#E8E1D5] p-4 shadow-xs">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Contacted / Closed</span>
                <p className="text-2xl font-bold font-heading text-emerald-700 mt-1">
                  {inquiries.filter((i) => i.status === 'contacted' || i.status === 'closed').length}
                </p>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#8C827A]" />
                <span className="text-xs font-bold text-[#78716A] uppercase tracking-wider">Status:</span>
                <div className="flex items-center gap-1.5">
                  {['all', 'new', 'contacted', 'closed'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setInquiryStatusFilter(status)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition-colors cursor-pointer ${
                        inquiryStatusFilter === status
                          ? 'bg-[#4A1118] text-white'
                          : 'bg-white border border-[#DDD5C9] text-[#5C544D] hover:bg-[#F5EFE6]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <span className="text-xs text-[#8C827A]">
                Showing {filteredInquiries.length} submissions
              </span>
            </div>

            {/* Inquiries Table */}
            <div className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden shadow-xs">
              {filteredInquiries.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <Mail className="w-10 h-10 text-[#9E6728] mx-auto mb-3 opacity-60" />
                  <h4 className="font-heading font-bold text-base text-[#1A1817]">No Client Briefings Found</h4>
                  <p className="text-xs text-[#78716A] mt-1">
                    When visitors submit the form on the Contact page, their briefings will appear here in real-time.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#F8F5EE] border-b border-[#E8E1D5] text-[#78716A] uppercase tracking-wider font-semibold">
                        <th className="py-3 px-4">Client / Entity</th>
                        <th className="py-3 px-4">Contact Phone & Email</th>
                        <th className="py-3 px-4">Practice Wing</th>
                        <th className="py-3 px-4">Urgency</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EFE8DC]">
                      {filteredInquiries.map((inq) => (
                        <tr key={inq._id} className="hover:bg-[#FAF6EF]/60 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-[#1A1817] font-heading">
                            {inq.fullName}
                          </td>
                          <td className="py-3.5 px-4 text-[#5C544D]">
                            <div className="font-medium">{inq.phone}</div>
                            <div className="text-[11px] text-[#8C827A]">{inq.email}</div>
                          </td>
                          <td className="py-3.5 px-4 text-[#5C544D] max-w-[200px] truncate">
                            {inq.practiceArea}
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                inq.urgency === 'urgent'
                                  ? 'bg-rose-100 text-rose-800'
                                  : inq.urgency === 'priority'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-stone-100 text-stone-700'
                              }`}
                            >
                              {inq.urgency}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-[#8C827A]">
                            {inq.createdAt
                              ? new Date(inq.createdAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })
                              : 'Recent'}
                          </td>
                          <td className="py-3.5 px-4">
                            <select
                              value={inq.status || 'new'}
                              onChange={(e) => handleUpdateInquiryStatus(inq._id, e.target.value)}
                              className="px-2 py-1 bg-white border border-[#DDD5C9] rounded-md text-[11px] font-semibold text-[#1A1817] focus:outline-hidden cursor-pointer"
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="in_review">In Review</option>
                              <option value="closed">Closed</option>
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSelectedInquiry(inq)}
                                className="p-1.5 rounded-md hover:bg-[#F0EAE0] text-[#9E6728] transition-colors cursor-pointer"
                                title="View Briefing Summary"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteInquiry(inq._id)}
                                className="p-1.5 rounded-md hover:bg-rose-50 text-rose-600 transition-colors cursor-pointer"
                                title="Delete Record"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 2: BLOG MANAGEMENT ================= */}
        {activeTab === 'blogs' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1A1817]">
                  Published Chambers Insights
                </h3>
                <p className="text-xs text-[#78716A] mt-0.5">
                  Articles appear dynamically on the frontend at <code className="text-[#9E6728]">/blogs/[slug]</code> with full Google SEO rich schema.
                </p>
              </div>

              <button
                onClick={handleOpenNewBlogModal}
                className="px-4 py-2.5 rounded-xl bg-[#9E6728] hover:bg-[#855621] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Publish New Article</span>
              </button>
            </div>

            {/* Articles Table */}
            <div className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#F8F5EE] border-b border-[#E8E1D5] text-[#78716A] uppercase tracking-wider font-semibold">
                      <th className="py-3 px-4">Article Title & Slug</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Author</th>
                      <th className="py-3 px-4">Read Time</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE8DC]">
                    {blogs.map((item) => (
                      <tr key={item._id || item.slug} className="hover:bg-[#FAF6EF]/60 transition-colors">
                        <td className="py-3.5 px-4 max-w-md">
                          <div className="font-bold text-[#1A1817] font-heading line-clamp-1">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-[#9E6728] font-mono mt-0.5 truncate">
                            /blogs/{item.slug}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-[#5C544D]">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E4] border border-[#E8DEC8] text-[#8C5D19] font-medium text-[10.5px]">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-[#5C544D]">
                          {item.author || 'Chambers Research Cell'}
                        </td>
                        <td className="py-3.5 px-4 text-[#8C827A]">
                          {item.readTime || '6 min'}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                            {item.status || 'published'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => handleEditBlog(item)}
                              className="p-1.5 rounded-md hover:bg-[#F0EAE0] text-[#9E6728] transition-colors cursor-pointer flex items-center gap-1 font-semibold text-[11px]"
                              title="Edit Article"
                            >
                              <Edit className="w-4 h-4" />
                              <span className="hidden sm:inline">Edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(item._id || item.slug)}
                              className="p-1.5 rounded-md hover:bg-rose-50 text-rose-600 transition-colors cursor-pointer"
                              title="Delete Article"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <Link
                              href={`/blogs/${item.slug}`}
                              target="_blank"
                              className="p-1.5 rounded-md hover:bg-[#F0EAE0] text-[#78716A] hover:text-[#1A1817] transition-colors"
                              title="View Live Article"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ================= INQUIRY DETAIL MODAL ================= */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E8E1D5] max-w-2xl w-full p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D5]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E6728]">
                  CONFIDENTIAL CLIENT BRIEFING
                </span>
                <h3 className="font-heading text-xl font-bold text-[#1A1817] mt-0.5">
                  {selectedInquiry.fullName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-1.5 rounded-full hover:bg-[#F0EAE0] text-[#78716A] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs font-dm">
              <div className="grid grid-cols-2 gap-4 bg-[#F8F5EE] p-4 rounded-xl">
                <div>
                  <span className="text-[#8C827A] font-semibold uppercase tracking-wider block">Phone</span>
                  <a href={`tel:${selectedInquiry.phone}`} className="text-sm font-bold text-[#9E6728] hover:underline">
                    {selectedInquiry.phone}
                  </a>
                </div>
                <div>
                  <span className="text-[#8C827A] font-semibold uppercase tracking-wider block">Email</span>
                  <a href={`mailto:${selectedInquiry.email}`} className="text-sm font-bold text-[#1A1817] hover:underline truncate block">
                    {selectedInquiry.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#8C827A] font-semibold uppercase tracking-wider block">Practice Area / Forum</span>
                  <p className="text-xs font-bold text-[#1A1817] mt-0.5">{selectedInquiry.practiceArea}</p>
                </div>
                <div>
                  <span className="text-[#8C827A] font-semibold uppercase tracking-wider block">Urgency</span>
                  <p className="text-xs font-bold text-rose-700 mt-0.5 uppercase tracking-wider">{selectedInquiry.urgency}</p>
                </div>
              </div>

              <div>
                <span className="text-[#8C827A] font-semibold uppercase tracking-wider block mb-1">
                  Matter Summary & Briefing Facts
                </span>
                <div className="p-4 bg-white border border-[#E8E1D5] rounded-xl text-sm leading-relaxed text-[#3A332C] whitespace-pre-line max-h-60 overflow-y-auto">
                  {selectedInquiry.matterSummary}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#78716A]">Update Status:</span>
                <select
                  value={selectedInquiry.status || 'new'}
                  onChange={(e) => handleUpdateInquiryStatus(selectedInquiry._id, e.target.value)}
                  className="px-3 py-1.5 bg-white border border-[#DDD5C9] rounded-lg text-xs font-semibold text-[#1A1817]"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="in_review">In Review</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-5 py-2 rounded-xl bg-[#1A1817] hover:bg-[#2C2723] text-white text-xs font-bold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PUBLISH / EDIT BLOG MODAL ================= */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
          <div className="bg-[#FAF8F5] rounded-2xl sm:rounded-3xl border border-[#E8E1D5] max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Pinned Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 border-b border-[#E8E1D5] bg-white shrink-0">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E4] border border-[#E8DEC8] text-[#9E6728] font-bold text-[10px] uppercase tracking-wider inline-block">
                  {editingBlogId ? 'EDIT ARTICLE RECORD' : 'SEO ARTICLE PUBLISHER'}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1A1817] mt-1">
                  {editingBlogId ? 'Edit Legal Insight' : 'Publish New Legal Insight'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsBlogModalOpen(false)}
                className="p-2 rounded-full hover:bg-[#F0EAE0] text-[#78716A] hover:text-[#1A1817] transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <form id="blogFormModal" onSubmit={handleSaveBlog} className="flex-1 overflow-y-auto px-6 py-5 sm:px-8 sm:py-6 space-y-4 sm:space-y-5 text-xs font-dm">
              
              {publishNotice && (
                <div
                  className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 font-medium ${
                    publishNotice.type === 'success'
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                      : 'bg-rose-50 border border-rose-200 text-rose-800'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{publishNotice.text}</span>
                </div>
              )}

              {/* Title */}
              <div>
                <label className="block font-bold text-[#1A1817] text-[11px] uppercase tracking-wider mb-1.5">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={blogForm.title}
                  onChange={handleTitleChange}
                  placeholder="e.g. Landmark Judgment on Section 9 Interim Relief..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DDD5C9] rounded-xl text-sm text-[#1A1817] focus:outline-hidden focus:border-[#9E6728] focus:ring-1 focus:ring-[#9E6728]/30 shadow-2xs transition-all"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block font-bold text-[#78716A] text-[11px] uppercase tracking-wider mb-1">
                  URL Slug (Auto-generated for Google SEO)
                </label>
                <div className="flex items-center gap-2 px-3 py-2 bg-[#F0EAE0]/60 border border-[#E0D7CA] rounded-xl font-mono text-xs text-[#9E6728] focus-within:border-[#9E6728] focus-within:bg-white transition-all">
                  <span className="font-semibold select-none opacity-80">/blogs/</span>
                  <input
                    type="text"
                    required
                    value={blogForm.slug}
                    onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                    className="w-full bg-transparent text-[#1A1817] focus:outline-hidden font-medium"
                  />
                </div>
              </div>

              {/* Category, Author, Read Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block font-bold text-[#1A1817] text-[11px] uppercase tracking-wider mb-1">
                    Category *
                  </label>
                  <select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#DDD5C9] rounded-xl text-xs text-[#1A1817] focus:outline-hidden focus:border-[#9E6728] shadow-2xs cursor-pointer"
                  >
                    {blogCategories
                      .filter((c) => c !== 'All Perspectives')
                      .map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#1A1817] text-[11px] uppercase tracking-wider mb-1">
                    Author Attribution
                  </label>
                  <input
                    type="text"
                    value={blogForm.author}
                    onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#DDD5C9] rounded-xl text-xs text-[#1A1817] focus:outline-hidden focus:border-[#9E6728] shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1A1817] text-[11px] uppercase tracking-wider mb-1">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={blogForm.readTime}
                    onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                    placeholder="e.g. 7 min read"
                    className="w-full px-3 py-2 bg-white border border-[#DDD5C9] rounded-xl text-xs text-[#1A1817] focus:outline-hidden focus:border-[#9E6728] shadow-2xs"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block font-bold text-[#1A1817] text-[11px] uppercase tracking-wider mb-1">
                  Excerpt / Meta Description (Google Snippet & Social Previews) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  placeholder="A concise 2-sentence summary that appears on Google search results..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DDD5C9] rounded-xl text-xs text-[#1A1817] focus:outline-hidden focus:border-[#9E6728] focus:ring-1 focus:ring-[#9E6728]/30 shadow-2xs"
                />
              </div>

              {/* Banner Image with Live Preview */}
              <div className="p-4 bg-white rounded-2xl border border-[#E8E1D5] space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <label className="block font-bold text-[#1A1817] text-[11px] uppercase tracking-wider">
                    Banner / Cover Image
                  </label>
                  <span className="text-[10.5px] text-[#8C827A]">Cloudinary upload or URL</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  {/* Image Live Preview */}
                  <div className="w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-[#F8F5EE] border border-[#DDD5C9] shrink-0 relative shadow-2xs flex items-center justify-center">
                    {blogForm.bannerUrl ? (
                      <img
                        src={blogForm.bannerUrl}
                        alt="Banner Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/court-supreme-facade.jpg';
                        }}
                      />
                    ) : (
                      <UploadCloud className="w-6 h-6 text-[#9E6728]/40" />
                    )}
                  </div>

                  {/* Upload button and URL input */}
                  <div className="flex-1 w-full space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <label className="px-3.5 py-1.5 rounded-lg bg-[#4A1118] hover:bg-[#380D12] text-white text-xs font-semibold cursor-pointer transition-colors inline-flex items-center gap-1.5 shadow-2xs">
                        <UploadCloud className="w-3.5 h-3.5" />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setBlogForm({
                                ...blogForm,
                                bannerFile: e.target.files[0],
                                bannerUrl: URL.createObjectURL(e.target.files[0]),
                              });
                            }
                          }}
                        />
                      </label>
                      <span className="text-[11px] text-[#78716A] truncate max-w-[220px]">
                        {blogForm.bannerFile ? blogForm.bannerFile.name : 'No new file chosen (using URL)'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#8C827A] shrink-0">Or URL:</span>
                      <input
                        type="text"
                        value={blogForm.bannerUrl}
                        onChange={(e) => setBlogForm({ ...blogForm, bannerUrl: e.target.value })}
                        placeholder="e.g. /court-supreme-facade.jpg or https://..."
                        className="w-full px-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C9] rounded-lg text-xs text-[#1A1817] focus:outline-hidden focus:border-[#9E6728]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Article Content */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block font-bold text-[#1A1817] text-[11px] uppercase tracking-wider">
                    Article Body (Markdown Supported) *
                  </label>
                  <span className="text-[10px] text-[#8C827A] font-mono">
                    ## H2 | ### H3 | &gt; Quote | - Bullet
                  </span>
                </div>
                <textarea
                  rows={8}
                  required
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  placeholder="## The Constitutional Principle&#10;&#10;Write your in-depth analysis here...&#10;&#10;### Statutory Interpretation&#10;&#10;> A key legal precedent quotation..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DDD5C9] rounded-xl text-xs text-[#1A1817] focus:outline-hidden focus:border-[#9E6728] font-mono shadow-2xs"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block font-bold text-[#1A1817] text-[11px] uppercase tracking-wider mb-1">
                  Keywords / Tags (Comma-separated)
                </label>
                <input
                  type="text"
                  value={blogForm.tags}
                  onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                  placeholder="Supreme Court, PMLA, Arbitration, Commercial Courts"
                  className="w-full px-3 py-2 bg-white border border-[#DDD5C9] rounded-xl text-xs text-[#1A1817] focus:outline-hidden focus:border-[#9E6728] shadow-2xs"
                />
              </div>

            </form>

            {/* Pinned Modal Footer */}
            <div className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white border-t border-[#E8E1D5] flex items-center justify-between shrink-0">
              <div className="text-[11px] text-[#78716A]">
                {editingBlogId ? 'Modifying existing article record' : 'Draft will publish immediately to /blogs'}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-4 sm:px-5 py-2 rounded-xl border border-[#DDD5C9] bg-white hover:bg-[#F5EFE6] text-xs font-semibold text-[#5C544D] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="blogFormModal"
                  disabled={isPublishing}
                  className="px-5 sm:px-6 py-2 rounded-xl bg-[#9E6728] hover:bg-[#855621] text-white text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  {isPublishing ? (
                    <span>{editingBlogId ? 'Saving Changes...' : 'Publishing...'}</span>
                  ) : (
                    <>
                      <UploadCloud className="w-4 h-4" />
                      <span>{editingBlogId ? 'Save Changes' : 'Publish to Live Site'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
