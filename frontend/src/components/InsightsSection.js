'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: '01',
    category: 'CONSTITUTIONAL LAW',
    date: '12 AUG 2024',
    title: 'Revisiting Constitutional Morality in Modern Times',
    description:
      'Exploring how constitutional values continue to guide India’s evolving democracy.',
    image: '/blog-constitutional.jpg',
  },
  {
    id: '02',
    category: 'DISPUTE RESOLUTION',
    date: '28 JUL 2024',
    title: 'The Growing Relevance of Mediation in India',
    description:
      'How alternative dispute resolution is reshaping access to justice.',
    image: '/blog-dispute.jpg',
  },
  {
    id: '03',
    category: 'PUBLIC POLICY',
    date: '15 JUN 2024',
    title: 'Policy Reforms for a Stronger Tomorrow',
    description:
      'Key changes, challenges, and opportunities in India’s policy landscape.',
    image: '/blog-policy.jpg',
  },
  {
    id: '04',
    category: 'APPELLATE PRACTICE',
    date: '02 MAY 2024',
    title: 'Precision in Appellate Documentation & Decrees',
    description:
      'Strategic analysis of revenue and title records before Constitutional Benches.',
    image: '/chamber-legacy.jpg',
  },
  {
    id: '05',
    category: 'COMMERCIAL LAW',
    date: '18 APR 2024',
    title: 'Navigating Cross-Border Shareholder Deadlocks',
    description:
      'Resolving corporate governance conflicts through specialized courtroom advocacy.',
    image: '/practice-constitutional.jpg',
  },
  {
    id: '06',
    category: 'JUDICIAL REFORMS',
    date: '09 MAR 2024',
    title: 'Statutory Mastery in High-Stakes Litigation',
    description:
      'The imperative of courtroom scholarship in protecting institutional rights.',
    image: '/senior-counsel.jpg',
  },
];

// 3 sets of articles for seamless infinite looping
const extendedArticles = [
  ...articles,
  ...articles,
  ...articles,
];

export default function InsightsSection() {
  const [index, setIndex] = useState(articles.length);
  const [withTransition, setWithTransition] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const [cardWidthPx, setCardWidthPx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Measure card and step dimensions accurately
  const updateStep = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.getBoundingClientRect().width;
      const isDesktop = window.innerWidth >= 1024;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      const gap = 20; // 20px gap

      let cardsPerView = 1;
      if (isDesktop) cardsPerView = 3;
      else if (isTablet) cardsPerView = 2;

      const cardWidth = (width - gap * (cardsPerView - 1)) / cardsPerView;
      const step = cardWidth + gap;
      setStepWidth(step);
      setCardWidthPx(cardWidth);
    }
  }, []);

  useEffect(() => {
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, [updateStep]);

  // Current display index (0 to 5) for progress indicators
  const currentDisplayIndex =
    ((index % articles.length) + articles.length) % articles.length;

  // Slide navigation handlers
  const handlePrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setIndex((prev) => prev + 1);
  }, []);

  // Infinite loop reset
  const handleTransitionEnd = (e) => {
    if (e && e.target !== e.currentTarget) return;
    isAnimatingRef.current = false;
    if (index >= articles.length * 2) {
      setWithTransition(false);
      setIndex(index - articles.length);
    } else if (index < articles.length) {
      setWithTransition(false);
      setIndex(index + articles.length);
    }
  };

  // Auto-slide effect (advances every 4.5s, pauses on hover or drag)
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, handleNext]);

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('button') || e.target.closest('a')) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    setWithTransition(false);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e) => {
      const diff = e.clientX - startXRef.current;
      setDragOffset(diff);
    };

    const onMouseUp = (e) => {
      const diff = e.clientX - startXRef.current;
      setIsDragging(false);
      setWithTransition(true);
      if (diff < -50) {
        handleNext();
      } else if (diff > 50) {
        handlePrev();
      }
      setDragOffset(0);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, handleNext, handlePrev]);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    startXRef.current = e.targetTouches[0].clientX;
    setWithTransition(false);
  };

  const handleTouchMove = (e) => {
    const diff = e.targetTouches[0].clientX - startXRef.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setWithTransition(true);
    if (dragOffset < -50) {
      handleNext();
    } else if (dragOffset > 50) {
      handlePrev();
    }
    setDragOffset(0);
  };

  const translateX = stepWidth > 0 ? -(index * stepWidth) + dragOffset : 0;

  return (
    <section
      id="insights"
      className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-10 sm:pt-14 pb-6 sm:pb-8">
        {/* Top Header Row: Eyebrow + Headline on Left | Description + CTA Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-8 mb-6 sm:mb-10">
          {/* Left Column: Eyebrow and Headline */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
              <span className="h-[1.5px] w-6 sm:w-8 bg-[#B88E44] rounded-full" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                INSIGHTS & PERSPECTIVES
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading font-extrabold text-[30px] sm:text-3xl lg:text-[38px] xl:text-[40px] text-[#1A1817] leading-[1.14] tracking-tight">
              Ideas that
              <span className="block mt-0.5">
                <span className="gold-gradient-shine">make an impact.</span>
              </span>
            </h2>
          </div>

          {/* Right Column: Brief Description & CTA Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:max-w-xl">
            <p className="text-xs sm:text-[13px] text-[#6B635B] font-dm leading-relaxed max-w-sm sm:max-w-[360px] lg:max-w-[380px]">
              Thoughts, analysis, and perspectives on law, policy,<br className="hidden sm:inline" /> and what&apos;s shaping a better tomorrow.
            </p>

            <Link
              href="/blogs"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-wider uppercase rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 shrink-0 self-start sm:self-auto"
            >
              <span>EXPLORE ALL BLOGS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Sliding Carousel Track Container */}
        <div
          ref={containerRef}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-5 will-change-transform"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: withTransition
                ? 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedArticles.map((article, idx) => (
              <article
                key={`${article.id}-${idx}`}
                style={{
                  width: cardWidthPx > 0 ? `${cardWidthPx}px` : undefined,
                }}
                className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)] bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden shadow-[0_4px_16px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Compact Card Image with Badges */}
                <div className="relative w-full h-[165px] sm:h-[180px] overflow-hidden bg-[#1A1817] pointer-events-none">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />

                  {/* Overlaid Category Tag on Top Left */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#FAF8F5] uppercase font-dm drop-shadow">
                      {article.category}
                    </span>
                  </div>

                  {/* Overlaid Date on Top Right */}
                  <div className="absolute top-3 right-3 pointer-events-none">
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-[#FAF8F5]/90 uppercase drop-shadow">
                      {article.date}
                    </span>
                  </div>
                </div>

                {/* Compact Content: Title, Description, and Read More */}
                <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-[15px] text-[#1A1817] group-hover:text-[#4A1118] transition-colors duration-200 leading-snug line-clamp-2 min-h-[42px]">
                      {article.title}
                    </h3>
                    <p className="font-dm text-xs text-[#6B635B] mt-1.5 leading-relaxed line-clamp-2 min-h-[34px]">
                      {article.description}
                    </p>
                  </div>

                  {/* Bottom Read More Action Row */}
                  <div className="mt-4 pt-3 border-t border-[#EFE9DF] flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#8C6D37] uppercase font-dm group-hover:text-[#4A1118] transition-colors">
                      READ MORE
                    </span>
                    <div className="flex-1 h-[1px] bg-[#E8E1D5] mx-3" />
                    <div className="w-7 h-7 rounded-full bg-[#FAF3E8] group-hover:bg-[#4A1118] group-hover:text-white text-[#3D352F] flex items-center justify-center transition-colors duration-200 shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Carousel Controls: Left Indicator Pills + Right Prev/Next Arrows */}
        <div className="mt-5 sm:mt-6 flex items-center justify-between">
          {/* Left Progress Indicators */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {articles.map((_, idx) => {
              const isActive = idx === currentDisplayIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setWithTransition(true);
                    setIndex(articles.length + idx);
                  }}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? 'w-8 bg-[#4A1118]' : 'w-4 bg-[#E2D8C9] hover:bg-[#C9BDAA]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Right Navigation Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DCD3C5] bg-[#F7F4EE] hover:bg-[#EFE9DF] text-[#4A4036] flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-xs focus:outline-none"
              aria-label="Previous Articles"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4A1118] hover:bg-[#380C12] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm focus:outline-none"
              aria-label="Next Articles"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile CTA Button: Positioned BELOW cards and controls */}
        <div className="mt-6 flex sm:hidden">
          <Link
            href="/blogs"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-wider uppercase rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20"
          >
            <span>EXPLORE ALL BLOGS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
