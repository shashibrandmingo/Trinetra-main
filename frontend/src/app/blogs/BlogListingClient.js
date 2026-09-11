'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Tag,
  Scale,
  ChevronRight,
  ChevronLeft,
  Eye,
} from 'lucide-react';
import { initialBlogs, blogCategories } from '@/data/blogsData';
import { blogService } from '@/services/api';

export default function BlogListingClient() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [activeCategory, setActiveCategory] = useState('All Perspectives');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Auto-sliding Spotlight Card states
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSlidePaused, setIsSlidePaused] = useState(false);

  // Auto-slide right to left every 3.8 seconds
  useEffect(() => {
    if (blogs.length <= 1 || isSlidePaused) return;

    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % blogs.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [blogs.length, isSlidePaused]);

  const handlePrevSlide = (e) => {
    e?.stopPropagation();
    setSlideIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const handleNextSlide = (e) => {
    e?.stopPropagation();
    setSlideIndex((prev) => (prev + 1) % blogs.length);
  };

  // Fetch blogs from backend API and combine with initial sample blogs
  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      try {
        const response = await blogService.getAll({ limit: 50 });
        const backendBlogs = response?.data?.blogs || [];

        if (isMounted) {
          if (backendBlogs.length > 0) {
            // Merge backend blogs first, then seed blogs that are not duplicates
            const backendSlugs = new Set(backendBlogs.map((b) => b.slug));
            const uniqueSeed = initialBlogs.filter((b) => !backendSlugs.has(b.slug));
            setBlogs([...backendBlogs, ...uniqueSeed]);
          } else {
            setBlogs(initialBlogs);
          }
        }
      } catch (err) {
        console.warn('Using local chambers knowledge repository:', err.message);
        if (isMounted) {
          setBlogs(initialBlogs);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter blogs based on active category & search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === 'All Perspectives' ||
        blog.category?.toLowerCase() === activeCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        blog.title?.toLowerCase().includes(q) ||
        blog.excerpt?.toLowerCase().includes(q) ||
        blog.category?.toLowerCase().includes(q) ||
        (Array.isArray(blog.tags) && blog.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategory, searchQuery]);

  // Featured Lead Article is either the first matching article or top of list
  const featuredArticle = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridArticles = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#2D2926] min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <section className="relative w-full pt-6 xs:pt-7 sm:pt-16 lg:pt-24 pb-8 sm:pb-14 border-b border-[#E8E1D5] bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] overflow-hidden">
        {/* Subtle decorative background watermark (Desktop only to keep mobile clean) */}
        <div className="hidden sm:block absolute -right-16 -top-16 opacity-[0.035] pointer-events-none select-none text-[320px] font-serif font-black">
          §
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#8C827A] mb-3 sm:mb-4 font-dm">
            <Link href="/" className="hover:text-[#9E6728] transition-colors">
              Chambers
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B8AFA6]" />
            <span className="text-[#9E6728]">Insights & Jurisprudence</span>
          </nav>

          {/* Overline Badge */}
          <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
            <span className="w-6 sm:w-9 h-[1.5px] bg-[#9E6728]" />
            <span className="text-[10px] sm:text-[12px] font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm">
              APPELLATE DISCOURSE & LEGAL COMMENTARY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 items-start">
            {/* Left Column: Authoritative Two-Tone Headline (30px on mobile) */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className="font-heading text-[30px] sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold tracking-tight text-[#1A1817] leading-[1.16]">
                <span className="block">Legal Intelligence.</span>
                <span className="inline-block gold-gradient-shine mt-1.5 sm:mt-1">
                  Strategic Precedents.
                </span>
              </h1>
              <p className="mt-4 sm:mt-5 text-[#5C544D] text-[13px] sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-dm">
                Curated briefing papers, constitutional analyses, and procedural guides authored by 
                advocates at Trinetra Law Chambers. Translating complex statutory amendments and judicial 
                precedents before the Supreme Court of India into actionable legal clarity.
              </p>
            </div>

            {/* Right Column: Square-Type Auto-Sliding Spotlight Card (Raised Higher & Enlarged) */}
            <div
              className="lg:col-span-5 xl:col-span-5 w-full flex justify-center lg:justify-start lg:pl-2 xl:pl-4 mt-2 sm:mt-0 lg:-mt-12 xl:-mt-16"
              onMouseEnter={() => setIsSlidePaused(true)}
              onMouseLeave={() => setIsSlidePaused(false)}
            >
              {blogs.length > 0 && (() => {
                const currentSlide = blogs[slideIndex % blogs.length];
                return (
                  <div className="relative w-full max-w-[430px] xl:max-w-[465px] bg-white rounded-2xl sm:rounded-3xl border border-[#E8E1D5] hover:border-[#9E6728]/60 shadow-xl shadow-black/6 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                    
                    {/* Top Control Bar */}
                    <div className="px-5 py-3.5 bg-[#FAF7F2] border-b border-[#EFE8DC] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#9E6728] animate-pulse" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716A] font-dm">
                          SPOTLIGHT PRECEDENT
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono text-[#8C827A] font-bold">
                          {String((slideIndex % blogs.length) + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(blogs.length).padStart(2, '0')}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={handlePrevSlide}
                            aria-label="Previous Precedent"
                            className="w-6 h-6 rounded-full border border-[#DDD5C9] bg-white hover:bg-[#F3ECE0] flex items-center justify-center text-[#5C544D] hover:text-[#1A1817] transition-colors cursor-pointer shadow-2xs"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={handleNextSlide}
                            aria-label="Next Precedent"
                            className="w-6 h-6 rounded-full border border-[#DDD5C9] bg-white hover:bg-[#F3ECE0] flex items-center justify-center text-[#5C544D] hover:text-[#1A1817] transition-colors cursor-pointer shadow-2xs"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Sliding Square Content Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div
                        key={currentSlide._id || currentSlide.slug || slideIndex}
                        className="animate-in fade-in slide-in-from-right-8 duration-500 ease-out flex-1 flex flex-col justify-between"
                      >
                        <Link
                          href={`/blogs/${currentSlide.slug}`}
                          className="group block flex-1 flex flex-col justify-between"
                        >
                          {/* Crisp Square Image Container (Enlarged) */}
                          <div className="relative w-full h-[210px] sm:h-[230px] rounded-xl overflow-hidden bg-[#1A1817] border border-[#E8E1D5]/60 shadow-xs">
                            <Image
                              src={currentSlide.banner?.url || '/court-supreme-facade.jpg'}
                              alt={currentSlide.title}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                            />
                            {/* Subtle clear gradient so image remains bright */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            {/* Category Pill Floating on Top */}
                            <div className="absolute top-3 left-3 z-10">
                              <span className="px-3 py-1 rounded-full bg-[#4A1118]/95 backdrop-blur-xs text-white text-[10.5px] font-bold tracking-wider uppercase font-heading shadow-md">
                                {currentSlide.category}
                              </span>
                            </div>

                            {/* Read Time Badge Floating at Bottom */}
                            <div className="absolute bottom-3 right-3 z-10">
                              <span className="px-2.5 py-0.5 rounded-md bg-[#1A1817]/85 backdrop-blur-xs text-[#FAF8F5] text-[11px] font-dm flex items-center gap-1.5 font-medium shadow-xs">
                                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                                {currentSlide.readTime || '6 min read'}
                              </span>
                            </div>
                          </div>

                          {/* Headline (Enlarged & Prominent) */}
                          <div className="mt-4">
                            <h4 className="font-heading font-bold text-[15.5px] sm:text-[17px] text-[#1A1817] group-hover:text-[#9E6728] transition-colors line-clamp-2 leading-[1.32] tracking-tight">
                              {currentSlide.title}
                            </h4>
                          </div>

                          {/* Author & Action Footer */}
                          <div className="mt-3.5 pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between">
                            <span className="text-[11.5px] font-medium text-[#78716A] truncate max-w-[190px] font-dm">
                              {currentSlide.author || 'Chambers Research Cell'}
                            </span>
                            <span className="text-xs font-bold text-[#9E6728] uppercase tracking-wider font-dm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              Read Brief
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Auto-Slide Progress Bar */}
                    <div className="w-full h-[2.5px] bg-[#EFE8DE] overflow-hidden">
                      <div
                        key={`progress-${slideIndex}`}
                        className="h-full bg-gradient-to-r from-[#9E6728] via-[#B8860B] to-[#9E6728] w-full origin-left"
                        style={{
                          animation: isSlidePaused ? 'none' : 'autoProgress 3.8s linear',
                        }}
                      />
                    </div>

                  </div>
                );
              })()}
            </div>
          </div>

          {/* ================= SEARCH & FILTER CONTROLS ================= */}
          <div className="mt-10 sm:mt-14 pt-8 border-t border-[#E8E1D5]">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-stretch md:items-center justify-between">
              
              {/* Search Box */}
              <div className="relative w-full md:max-w-md">
                <Search className="w-4 h-4 text-[#8C827A] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, precedents, acts, or keywords..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#DDD6CA] rounded-xl text-sm text-[#1A1817] placeholder:text-[#9C9388] focus:outline-hidden focus:border-[#9E6728] focus:ring-2 focus:ring-[#9E6728]/15 transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C827A] hover:text-[#1A1817] bg-[#F0EBE1] px-2 py-0.5 rounded-full"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Live Count Indicator */}
              <div className="text-xs font-semibold text-[#78716A] tracking-wider uppercase font-dm self-center md:self-auto">
                Showing <span className="text-[#9E6728] font-bold">{filteredBlogs.length}</span> Articles
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-5 scrollbar-none">
              {blogCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.04em] transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#4A1118] text-white shadow-sm'
                        : 'bg-white hover:bg-[#F3ECE0] text-[#5C544D] border border-[#E4DDD1]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLES FEED ================= */}
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {filteredBlogs.length === 0 ? (
            /* Empty Search State */
            <div className="text-center py-20 bg-white rounded-2xl border border-[#E8E1D5] p-8 max-w-xl mx-auto">
              <BookOpen className="w-12 h-12 text-[#9E6728] mx-auto mb-4 opacity-70" />
              <h3 className="font-heading text-xl font-bold text-[#1A1817]">
                No Briefings Match Your Criteria
              </h3>
              <p className="text-sm text-[#78716A] mt-2 mb-6 font-dm">
                We could not find any published articles matching &ldquo;{searchQuery}&rdquo;. 
                Try searching for broader keywords like &ldquo;Writ&rdquo;, &ldquo;Arbitration&rdquo;, or &ldquo;Supreme Court&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All Perspectives');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#9E6728] hover:bg-[#855621] text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <>
              {/* ================= FEATURED LEAD ARTICLE ================= */}
              {featuredArticle && (
                <div className="mb-14 sm:mb-20">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-[1.5px] bg-[#9E6728]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#9E6728] uppercase font-dm">
                      FEATURED JURISPRUDENTIAL ANALYSIS
                    </span>
                  </div>

                  <Link
                    href={`/blogs/${featuredArticle.slug}`}
                    className="group block bg-white rounded-2xl sm:rounded-3xl border border-[#E8E1D5] hover:border-[#9E6728]/50 overflow-hidden transition-all duration-300 shadow-lg shadow-black/3 hover:shadow-xl"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                      {/* Left: Lead Image */}
                      <div className="lg:col-span-6 xl:col-span-7 relative min-h-[260px] sm:min-h-[360px] lg:min-h-full overflow-hidden bg-[#1A1817]">
                        <Image
                          src={featuredArticle.banner?.url || '/court-supreme-facade.jpg'}
                          alt={featuredArticle.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1.5 rounded-full bg-[#4A1118]/90 backdrop-blur-xs text-white text-[11px] font-bold tracking-wider uppercase font-heading shadow-md">
                            {featuredArticle.category}
                          </span>
                        </div>
                      </div>

                      {/* Right: Editorial Metadata */}
                      <div className="lg:col-span-6 xl:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                          <div className="hidden lg:flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-[#4A1118] text-white text-[10.5px] font-bold tracking-wider uppercase font-heading">
                              {featuredArticle.category}
                            </span>
                            <span className="text-xs text-[#8C827A] flex items-center gap-1.5 font-dm">
                              <Clock className="w-3.5 h-3.5" />
                              {featuredArticle.readTime || '7 min read'}
                            </span>
                          </div>

                          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1817] group-hover:text-[#9E6728] transition-colors leading-[1.2] tracking-tight">
                            {featuredArticle.title}
                          </h2>

                          <p className="mt-4 text-[#5C544D] text-sm sm:text-base leading-relaxed line-clamp-4 font-dm">
                            {featuredArticle.excerpt}
                          </p>

                          {/* Tags */}
                          {featuredArticle.tags && featuredArticle.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-5">
                              {featuredArticle.tags.slice(0, 4).map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-[11px] font-medium bg-[#F5EFE6] text-[#73685C] px-2.5 py-1 rounded-md"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Author & Read Action */}
                        <div className="mt-8 pt-6 border-t border-[#E8E1D5] flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold text-[#1A1817] font-heading">
                              {featuredArticle.author || 'Chambers Legal Research Cell'}
                            </p>
                            <p className="text-[11px] text-[#8C827A] mt-0.5 font-dm flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {featuredArticle.publishedAt || 'March 2026'}
                            </p>
                          </div>

                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9E6728] group-hover:translate-x-1 transition-transform uppercase tracking-wider font-dm">
                            Read Briefing
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* ================= REMAINING ARTICLES GRID ================= */}
              {gridArticles.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E1D5]">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1A1817]">
                      Recent Briefings & Legal Papers
                    </h3>
                    <span className="text-xs font-semibold text-[#8C827A] font-dm uppercase tracking-wider">
                      {gridArticles.length} Further Articles
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
                    {gridArticles.map((article) => (
                      <article
                        key={article._id || article.slug}
                        className="group bg-white rounded-2xl border border-[#E8E1D5] hover:border-[#9E6728]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-xs"
                      >
                        {/* Top: Cover Image with Badge */}
                        <div>
                          <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#1A1817]">
                            <Image
                              src={article.banner?.url || '/court-supreme-facade.jpg'}
                              alt={article.title}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute top-3.5 left-3.5 z-10">
                              <span className="px-2.5 py-1 rounded-full bg-[#1A1817]/85 backdrop-blur-xs text-[#FAF8F5] text-[10px] font-bold tracking-wider uppercase font-heading">
                                {article.category}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-5 sm:p-6">
                            <div className="flex items-center gap-3 text-[11px] text-[#8C827A] mb-2.5 font-dm">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {article.publishedAt || '2026'}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime || '6 min read'}
                              </span>
                            </div>

                            <h4 className="font-heading text-lg font-bold text-[#1A1817] group-hover:text-[#9E6728] transition-colors line-clamp-2 leading-snug tracking-tight">
                              <Link href={`/blogs/${article.slug}`}>
                                {article.title}
                              </Link>
                            </h4>

                            <p className="mt-2.5 text-xs sm:text-sm text-[#5C544D] line-clamp-3 leading-relaxed font-dm">
                              {article.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Bottom: Author & Read CTA */}
                        <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#F2ECE3] flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-[#73685C] truncate max-w-[160px]">
                            {article.author || 'Chambers Counsel'}
                          </span>

                          <Link
                            href={`/blogs/${article.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#9E6728] group-hover:text-[#4A1118] transition-colors uppercase tracking-wider font-dm shrink-0"
                          >
                            Read More
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ================= CONSULTATION CTA BANNER ================= */}
          <div className="mt-16 sm:mt-24 bg-[#1A1817] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#9E6728]/30">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-radial from-[#9E6728] to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#D4AF37] uppercase font-dm">
                CHAMBERS DIRECT ENGAGEMENT
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
                Facing High-Stakes Litigation Before the Apex Court?
              </h3>
              <p className="text-sm sm:text-base text-[#D4CDC5] font-dm leading-relaxed mb-8">
                The research and appellate advocacy cells at Trinetra Chambers operate with urgent 
                advisory readiness. Connect directly with senior counsel to evaluate maintainability 
                and formulate litigation strategy.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-[#9E6728] hover:bg-[#855621] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md"
                >
                  Schedule Chamber Briefing
                </Link>
                <Link
                  href="/practice-areas"
                  className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all"
                >
                  Explore Practice Wings
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
