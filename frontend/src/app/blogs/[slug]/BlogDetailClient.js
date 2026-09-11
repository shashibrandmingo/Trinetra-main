'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  ChevronRight,
  Scale,
  Building2,
  ArrowRight,
  BookMarked,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

export default function BlogDetailClient({ blog, relatedArticles }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShare = (platform) => {
    if (typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog.title);

    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
    }
  };

  return (
    <article className="w-full bg-[#FAF8F5] text-[#2D2926] min-h-screen">
      {/* ================= EDITORIAL HERO HEADER ================= */}
      <header className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 bg-gradient-to-b from-[#F3EFEA] to-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C827A] mb-4 font-dm flex-wrap">
            <Link href="/" className="hover:text-[#9E6728] transition-colors">
              Chambers
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B8AFA6]" />
            <Link href="/blogs" className="hover:text-[#9E6728] transition-colors">
              Insights & Jurisprudence
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B8AFA6]" />
            <span className="text-[#9E6728] truncate max-w-[240px] sm:max-w-[320px]">
              {blog.category}
            </span>
          </nav>

          {/* Category & Read Time Pills */}
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3.5 py-1.5 rounded-full bg-[#4A1118] text-white text-[11px] font-bold tracking-wider uppercase font-heading">
              {blog.category}
            </span>
            <span className="text-xs text-[#78716A] font-medium flex items-center gap-1.5 font-dm">
              <Clock className="w-3.5 h-3.5 text-[#9E6728]" />
              {blog.readTime || '6 min read'}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-bold text-[#1A1817] leading-[1.14] tracking-tight">
            {blog.title}
          </h1>

          {/* Excerpt / Lead Paragraph */}
          {blog.excerpt && (
            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#5C544D] leading-relaxed font-dm font-normal border-l-3 border-[#9E6728] pl-4 sm:pl-6 italic">
              {blog.excerpt}
            </p>
          )}

          {/* Author & Publication Metadata */}
          <div className="mt-8 pt-6 border-t border-[#E8E1D5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#1A1817] text-[#FAF8F5] flex items-center justify-center font-serif font-bold text-lg border border-[#9E6728]/40 shadow-xs">
                ⚖
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1817] font-heading">
                  {blog.author || 'Chambers Legal Research Cell'}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#8C827A] font-dm mt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.publishedAt || (blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'March 2026')}
                  </span>
                  <span>•</span>
                  <span>Supreme Court Bar Association</span>
                </div>
              </div>
            </div>

            {/* Social Sharing Toolbar */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#8C827A] uppercase tracking-wider font-dm mr-1 hidden sm:inline">
                Share:
              </span>
              <button
                onClick={() => handleShare('whatsapp')}
                aria-label="Share on WhatsApp"
                className="w-8 h-8 rounded-full bg-white border border-[#E0D7CA] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white text-[#5C544D] flex items-center justify-center text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                WA
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                aria-label="Share on LinkedIn"
                className="w-8 h-8 rounded-full bg-white border border-[#E0D7CA] hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white text-[#5C544D] flex items-center justify-center text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                IN
              </button>
              <button
                onClick={() => handleShare('twitter')}
                aria-label="Share on X / Twitter"
                className="w-8 h-8 rounded-full bg-white border border-[#E0D7CA] hover:border-black hover:bg-black hover:text-white text-[#5C544D] flex items-center justify-center text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                X
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E0D7CA] hover:border-[#9E6728] text-xs font-semibold text-[#5C544D] hover:text-[#9E6728] transition-all shadow-2xs cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* ================= ARTICLE BODY & CONTENT ================= */}
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
        
        {/* Full-width Banner Image */}
        <div className="relative w-full h-[280px] sm:h-[440px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-14 border border-[#E8E1D5] shadow-lg bg-[#1A1817]">
          <Image
            src={blog.banner?.url || '/court-supreme-facade.jpg'}
            alt={blog.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white text-xs font-dm flex items-center justify-between">
            <span className="opacity-90">
              Chambers Archive • Supreme Court & High Court Appellate Practice
            </span>
            <span className="text-[#D4AF37] font-semibold hidden sm:inline">
              Trinetra Law Chambers
            </span>
          </div>
        </div>

        {/* Content Columns: Main Article + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left / Main: Article Text */}
          <div className="lg:col-span-8">
            
            {/* Key Legal Takeaways Callout Box */}
            <div className="bg-[#FAF4EC] border border-[#E4D5C0] rounded-2xl p-6 sm:p-7 mb-10 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#9E6728]" />
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#1A1817] tracking-wider uppercase">
                  Chambers Strategic Takeaways
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4E463E] font-dm">
                <li className="flex items-start gap-2">
                  <span className="text-[#9E6728] font-bold font-serif">•</span>
                  <span><strong>Doctrinal Maintainability:</strong> Strict compliance with procedural thresholds must precede substantive arguments before apex constitutional benches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9E6728] font-bold font-serif">•</span>
                  <span><strong>Urgent Interim Injunctions:</strong> Demonstrating irreparable institutional balance of convenience is decisive at the *ad-interim* issuance phase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9E6728] font-bold font-serif">•</span>
                  <span><strong>Statutory Precedents:</strong> Continuous monitoring of recent five-judge and three-judge constitution bench interpretations is essential.</span>
                </li>
              </ul>
            </div>

            {/* Formatted Article Body */}
            <div className="prose prose-stone max-w-none text-[#3A332C] text-base sm:text-[17px] leading-[1.8] font-dm space-y-6">
              {blog.content ? (
                // Parse simple markdown headers and line breaks
                blog.content.split('\n\n').map((paragraph, idx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  if (trimmed.startsWith('### ')) {
                    return (
                      <h3
                        key={idx}
                        className="font-heading text-xl sm:text-2xl font-bold text-[#1A1817] pt-4 pb-1 tracking-tight"
                      >
                        {trimmed.replace('### ', '')}
                      </h3>
                    );
                  }

                  if (trimmed.startsWith('## ')) {
                    return (
                      <h2
                        key={idx}
                        className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1817] pt-6 pb-2 border-b border-[#E8E1D5] tracking-tight"
                      >
                        {trimmed.replace('## ', '')}
                      </h2>
                    );
                  }

                  if (trimmed.startsWith('> ')) {
                    return (
                      <blockquote
                        key={idx}
                        className="border-l-4 border-[#9E6728] pl-5 py-2 my-6 bg-[#FAF4EB] rounded-r-xl italic text-[#4A4036] font-editorial text-lg"
                      >
                        {trimmed.replace('> ', '')}
                      </blockquote>
                    );
                  }

                  if (trimmed.startsWith('1. ') || trimmed.startsWith('- ')) {
                    const lines = trimmed.split('\n');
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-2 pl-2 my-4">
                        {lines.map((li, i) => (
                          <li key={i} className="text-[#3A332C]">
                            {li.replace(/^(\d+\.\s*|-\s*)/, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={idx} className="text-[#3A332C]">
                      {trimmed}
                    </p>
                  );
                })
              ) : (
                <p>No article body provided.</p>
              )}
            </div>

            {/* Tags Footer */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-[#E8E1D5]">
                <div className="flex items-center gap-2 mb-3">
                  <BookMarked className="w-4 h-4 text-[#9E6728]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#78716A] font-dm">
                    Index & Statutory Tags
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#E0D7CA] text-xs font-semibold text-[#5C544D] hover:border-[#9E6728] transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Profile Bio Box */}
            <div className="mt-12 bg-white rounded-2xl border border-[#E8E1D5] p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-center sm:items-start shadow-xs">
              <div className="w-16 h-16 rounded-full bg-[#1A1817] text-[#FAF8F5] flex items-center justify-center font-serif text-2xl font-bold border-2 border-[#9E6728] shrink-0">
                ⚖
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#9E6728] uppercase font-dm">
                  AUTHOR & CHAMBERS PRACTICE CELL
                </span>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#1A1817] mt-0.5">
                  {blog.author || 'Advocate Shashi Shekhar'}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C544D] font-dm leading-relaxed mt-2">
                  Specializing in constitutional writ jurisprudence, commercial disputes, and appellate 
                  litigation before the Supreme Court of India and High Court of Delhi. Committed to 
                  advancing institutional clarity through rigorous jurisprudential scholarship.
                </p>
              </div>
            </div>

          </div>

          {/* Right / Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
            
            {/* Chambers Engagement Card */}
            <div className="bg-[#1A1817] text-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#9E6728]/40 shadow-xl relative overflow-hidden">
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#D4AF37] uppercase font-dm">
                DIRECT ADVOCACY BRIEFING
              </span>
              <h4 className="font-heading text-xl font-bold text-white mt-2 mb-3 leading-snug">
                Require Strategic Oversight on this Subject?
              </h4>
              <p className="text-xs sm:text-sm text-[#CDC4BA] font-dm leading-relaxed mb-6">
                Our chambers intake desk reviews urgent briefing memos, trial court decrees, and 
                administrative notices under strict professional privilege.
              </p>
              <Link
                href="/contact"
                className="w-full block text-center py-3 rounded-xl bg-[#9E6728] hover:bg-[#855621] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Quick Practice Wings */}
            <div className="bg-white rounded-2xl border border-[#E8E1D5] p-6 shadow-xs">
              <h4 className="font-heading text-sm font-bold text-[#1A1817] uppercase tracking-wider mb-4 pb-3 border-b border-[#E8E1D5]">
                Practice Wings
              </h4>
              <div className="space-y-2 text-xs font-medium font-dm">
                <Link
                  href="/practice-areas"
                  className="flex items-center justify-between py-2 text-[#5C544D] hover:text-[#9E6728] border-b border-[#F4EFE6] transition-colors"
                >
                  <span>Constitutional & Writ Law</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E6728]" />
                </Link>
                <Link
                  href="/practice-areas"
                  className="flex items-center justify-between py-2 text-[#5C544D] hover:text-[#9E6728] border-b border-[#F4EFE6] transition-colors"
                >
                  <span>Commercial & Corporate Disputes</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E6728]" />
                </Link>
                <Link
                  href="/practice-areas"
                  className="flex items-center justify-between py-2 text-[#5C544D] hover:text-[#9E6728] border-b border-[#F4EFE6] transition-colors"
                >
                  <span>Criminal Defense & White Collar</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E6728]" />
                </Link>
                <Link
                  href="/practice-areas"
                  className="flex items-center justify-between py-2 text-[#5C544D] hover:text-[#9E6728] transition-colors"
                >
                  <span>Appellate Tribunals (NCLAT / CAT)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E6728]" />
                </Link>
              </div>
            </div>

            {/* Back to all articles button */}
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-[#DDD5C9] bg-white hover:bg-[#F3ECE0] text-xs font-bold text-[#1A1817] uppercase tracking-wider font-dm transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              Explore All Insights
            </Link>

          </aside>
        </div>

        {/* ================= RELATED ARTICLES SECTION ================= */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-12 border-t border-[#E8E1D5]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#9E6728] uppercase font-dm">
                  CONTINUE READING
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1817] mt-1">
                  Related Legal Analysis
                </h3>
              </div>
              <Link
                href="/blogs"
                className="text-xs font-bold text-[#9E6728] hover:text-[#4A1118] uppercase tracking-wider font-dm hidden sm:inline"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {relatedArticles.map((item) => (
                <article
                  key={item._id || item.slug}
                  className="group bg-white rounded-2xl border border-[#E8E1D5] hover:border-[#9E6728]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg shadow-2xs"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-[#1A1817]">
                      <Image
                        src={item.banner?.url || '/court-supreme-facade.jpg'}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#1A1817]/80 text-[#FAF8F5] text-[10px] font-bold tracking-wider uppercase font-heading">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-[11px] text-[#8C827A] mb-2 font-dm">
                        {item.readTime || '5 min read'}
                      </p>
                      <h4 className="font-heading text-base font-bold text-[#1A1817] group-hover:text-[#9E6728] transition-colors line-clamp-2 leading-snug">
                        <Link href={`/blogs/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div className="px-5 pb-4 pt-2 border-t border-[#F2ECE3] flex items-center justify-between">
                    <span className="text-[10px] text-[#8C827A] font-dm">
                      {item.publishedAt || '2026'}
                    </span>
                    <Link
                      href={`/blogs/${item.slug}`}
                      className="text-xs font-bold text-[#9E6728] uppercase tracking-wider font-dm flex items-center gap-1"
                    >
                      Read Brief
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
