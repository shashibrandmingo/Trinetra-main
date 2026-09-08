'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: '01',
    practiceLine1: 'CORPORATE',
    practiceLine2: 'ADVISORY',
    quote:
      'Fearless, composed, and deeply grounded in statutory scholarship. Trinetra Law Chambers stood as an unshakable shield for our rights before the Apex Benches.',
    author: 'DR. ANANYA MUKHERJEE',
    titleLine1: 'Managing Partner,',
    titleLine2: 'Apex Healthcare & Life Sciences',
    image: '/testimonial-ananya.jpg',
  },
  {
    id: '02',
    practiceLine1: 'APPELLATE',
    practiceLine2: 'PRACTICE',
    quote:
      'Their attention to detail across decades of historical revenue records and disputed title documentation is second to none in the country.',
    author: 'VIKRAMADITYA VARMA',
    titleLine1: 'Group Chairman,',
    titleLine2: 'Varma Hospitality & Land Holdings',
    image: '/testimonial-varma.jpg',
  },
  {
    id: '03',
    practiceLine1: 'COMMERCIAL',
    practiceLine2: 'LITIGATION',
    quote:
      'In high-stakes shareholder deadlocks, Trinetra delivers decisive tactical superiority. Their cross-examination and bench presentation are exemplary.',
    author: 'RAHUL SINGHANIA',
    titleLine1: 'Chief Legal Officer,',
    titleLine2: 'Apex Capital Partners',
    image: '/testimonial-rahul.jpg',
  },
  {
    id: '04',
    practiceLine1: 'CONSTITUTIONAL',
    practiceLine2: 'DEFENSE',
    quote:
      'Their statutory mastery before Constitutional Benches protected our institutional autonomy against arbitrary regulatory overreach.',
    author: 'MEERA SEN-GUPTA',
    titleLine1: 'Trustee Director,',
    titleLine2: 'National Education Foundation',
    image: '/testimonial-meera.jpg',
  },
];

// Extended list (3 sets of 4 items = 12 items) for seamless infinite slider
const extendedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function TestimonialsSection() {
  // Start at index 4 (first item of middle set)
  const [index, setIndex] = useState(testimonials.length);
  const [withTransition, setWithTransition] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Measure card step width on mount and window resize with subpixel accuracy
  const updateStep = useCallback(() => {
    if (containerRef.current) {
      const isDesktop = window.innerWidth >= 768; // md breakpoint
      const rect = containerRef.current.getBoundingClientRect();
      const containerWidth = rect.width;
      const gap = 16; // 1rem gap
      const step = isDesktop
        ? (containerWidth - gap) / 2 + gap
        : containerWidth + gap;
      setStepWidth(step);
    }
  }, []);

  useEffect(() => {
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, [updateStep]);

  // Current logical index (0 to 3) for progress bar and slide indicator
  const currentDisplayIndex =
    ((index % testimonials.length) + testimonials.length) % testimonials.length;

  // Next and Prev button handlers with smooth animation & click debounce
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

  // Auto-scroll / auto-slide effect (every 2.5s, pauses on hover or drag)
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, handleNext]);

  // Seamless infinite loop transition reset - only trigger on track element
  const handleTransitionEnd = (e) => {
    if (e && e.target !== e.currentTarget) return;
    isAnimatingRef.current = false;
    if (index >= testimonials.length * 2) {
      setWithTransition(false);
      setIndex(index - testimonials.length);
    } else if (index < testimonials.length) {
      setWithTransition(false);
      setIndex(index + testimonials.length);
    }
  };

  // Mouse Drag handlers ("card pr cursor se slide")
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('button')) return;
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
      if (diff < -45) {
        setIndex((prev) => prev + 1);
      } else if (diff > 45) {
        setIndex((prev) => prev - 1);
      }
      setDragOffset(0);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging]);

  // Touch handlers for mobile swipe
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
    if (dragOffset < -45) {
      setIndex((prev) => prev + 1);
    } else if (dragOffset > 45) {
      setIndex((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  // Total horizontal translation in pixels
  const translateX = stepWidth > 0 ? -(index * stepWidth) + dragOffset : 0;

  return (
    <section
      id="testimonials"
      className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5] overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
        {/* Top-Right Motto Bar (Desktop Only: perfectly balances the wide grid, hidden on mobile) */}
        <div className="hidden lg:flex justify-end mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 sm:gap-3 text-left">
            <span className="h-9 sm:h-11 w-[1.5px] bg-[#B88E44]" />
            <div className="flex flex-col text-[9px] sm:text-[10px] font-bold tracking-[0.24em] uppercase font-dm leading-[1.35]">
              <span className="text-[#8C6D37]">PEOPLE</span>
              <span className="text-[#9E9080]">PERSPECTIVE</span>
              <span className="text-[#B5A898]">PROGRESS</span>
            </div>
          </div>
        </div>

        {/* Main Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
          {/* Left Column: Heading, Subtitle & Desktop Slider Controls */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 pt-1 sm:pt-0">
                <span className="h-[1.5px] w-6 sm:w-8 bg-[#B88E44] rounded-full" />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                  CLIENT TESTIMONIALS
                </span>
              </div>

              {/* Main Headline - Exactly 30px on mobile, 2 lines */}
              <h2 className="font-heading font-extrabold text-[30px] sm:text-3xl lg:text-[40px] xl:text-[44px] text-[#1A1817] leading-[1.14] tracking-tight">
                <span className="block whitespace-nowrap">TRUSTED BY THOSE</span>
                <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                  WE REPRESENT.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#78716A] font-dm">
                Real experiences. Lasting impact.
              </p>
            </div>

            {/* Desktop-Only Slider Controls (Hidden on mobile) */}
            <div className="hidden lg:flex mt-8 lg:mt-auto pt-2 items-center gap-4">
              {/* Prev / Next Circular Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#DCD3C5] bg-[#F7F4EE] hover:bg-[#EFE9DF] text-[#4A4036] flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-xs focus:outline-none"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#4A1118] hover:bg-[#380C12] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm focus:outline-none"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Line & Page Counter */}
              <div className="flex items-center gap-3">
                <div className="relative w-14 sm:w-16 h-[2px] bg-[#E0D5C3] rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 bottom-0 bg-[#4A1118] rounded-full transition-all duration-300 ease-out"
                    style={{
                      left: `${(currentDisplayIndex / testimonials.length) * 100}%`,
                      width: `${100 / testimonials.length}%`,
                    }}
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-[#8C847B] tracking-wider">
                  0{currentDisplayIndex + 1} / 0{testimonials.length}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Smooth Interactive Draggable / Swipeable Carousel */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between">
            <div
              ref={containerRef}
              className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex gap-4 h-full will-change-transform"
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: withTransition
                    ? 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)'
                    : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedTestimonials.map((card, idx) => (
                  <div
                    key={`${card.id}-${idx}`}
                    className="w-full md:w-[calc(50%-8px)] shrink-0 bg-white rounded-2xl border border-[#E8E1D5] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 p-3 sm:p-3.5 flex flex-col sm:flex-row gap-3 sm:gap-3.5 items-stretch select-none h-full min-h-[250px] sm:min-h-[265px]"
                  >
                    {/* Client Portrait & Practice Tag */}
                    <div className="relative w-full sm:w-[42%] shrink-0 aspect-[16/10] sm:aspect-[4/5] h-48 min-[380px]:h-52 sm:h-auto sm:min-h-[235px] rounded-xl overflow-hidden bg-[#1F1413] pointer-events-none">
                      <Image
                        src={card.image}
                        alt={card.author}
                        fill
                        draggable={false}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className="object-cover object-center pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      {/* Practice Tag inside Image */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 pointer-events-none text-left">
                        <span className="block text-[9px] sm:text-[9.5px] font-bold tracking-[0.2em] text-[#FAF8F5] uppercase font-dm leading-tight drop-shadow">
                          {card.practiceLine1}
                        </span>
                        <span className="block text-[9px] sm:text-[9.5px] font-bold tracking-[0.2em] text-[#FAF8F5] uppercase font-dm leading-tight drop-shadow">
                          {card.practiceLine2}
                        </span>
                      </div>
                    </div>

                    {/* Right Side: Quote, Line, Author Name & Title */}
                    <div className="flex-1 flex flex-col justify-between py-0.5 sm:py-1 text-left select-none pointer-events-none">
                      <div>
                        {/* Double Quote Icon & Horizontal Line */}
                        <div className="flex items-center gap-2 mb-1.5 sm:mb-2.5">
                          <svg
                            className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#96712E] shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <span className="h-[1.5px] w-8 sm:w-14 bg-[#B88E44]" />
                        </div>

                        {/* Quote Paragraph with stabilized min-height */}
                        <div className="min-h-[58px] sm:min-h-[82px] flex items-start">
                          <p className="font-heading font-medium text-xs sm:text-[12.5px] text-[#2B2724] leading-[1.5]">
                            {card.quote}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Author Section */}
                      <div className="pt-1.5 mt-1.5 sm:pt-2 sm:mt-3">
                        {/* Small horizontal rule above author name */}
                        <div className="w-6 sm:w-7 h-[1.5px] bg-[#B88E44] mb-1.5 sm:mb-2.5" />

                        <h4 className="font-heading font-bold text-xs sm:text-[12.5px] tracking-[0.07em] text-[#1A1817] uppercase">
                          {card.author}
                        </h4>
                        <p className="font-dm text-[10.5px] sm:text-[11px] text-[#78716A] mt-0.5 leading-tight">
                          {card.titleLine1}
                        </p>
                        <p className="font-dm text-[10.5px] sm:text-[11px] text-[#78716A] leading-tight">
                          {card.titleLine2}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile-Only Slider Controls (Rendered BELOW the Cards on mobile, HIDDEN on desktop) */}
            <div className="lg:hidden mt-5 flex items-center justify-between">
              {/* Prev / Next Circular Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#DCD3C5] bg-[#F7F4EE] hover:bg-[#EFE9DF] text-[#4A4036] flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-xs focus:outline-none active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#4A1118] hover:bg-[#380C12] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm focus:outline-none active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Line & Page Counter */}
              <div className="flex items-center gap-3 font-dm">
                <div className="relative w-16 h-[2px] bg-[#E0D5C3] rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 bottom-0 bg-[#4A1118] rounded-full transition-all duration-300 ease-out"
                    style={{
                      left: `${(currentDisplayIndex / testimonials.length) * 100}%`,
                      width: `${100 / testimonials.length}%`,
                    }}
                  />
                </div>
                <span className="font-mono text-xs font-bold text-[#8C6D37] tracking-wider">
                  0{currentDisplayIndex + 1} <span className="text-[#8C847B] font-normal">/ 0{testimonials.length}</span>
                </span>
              </div>
            </div>

            {/* Mobile Bottom Motto Seal Box */}
            <div className="lg:hidden mt-5 p-3.5 rounded-xl bg-white/75 border border-[#E4DACB] flex items-center gap-3.5 shadow-2xs">
              <div className="border-l-2 border-[#B88E44] pl-2.5 text-[10px] font-bold tracking-[0.22em] uppercase font-dm leading-[1.25] flex flex-col justify-center">
                <span className="text-[#8C6D37]">PEOPLE</span>
                <span className="text-[#9E9080]">PERSPECTIVE</span>
                <span className="text-[#B5A898]">PROGRESS</span>
              </div>
              <div className="w-px h-8 bg-[#E8E0D2]" />
              <div className="text-[10.5px] font-medium tracking-[0.16em] uppercase font-dm leading-snug flex-1">
                <div className="font-bold text-[#2B2724]">AUTHENTIC ADVOCACY.</div>
                <div className="text-[#8C6D37] font-semibold mt-0.5">LASTING COURT IMPACT.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section Verification Line (Hidden in Phone Mode) */}
        <div className="hidden sm:flex mt-10 sm:mt-12 pt-4 border-t border-[#E8E1D5] items-center justify-between text-[10px] sm:text-[11px] font-dm tracking-[0.2em] text-[#8C847B] uppercase">
          <span>TRINETRA LAW CHAMBERS</span>
          <span>LAW FOR A BRIGHTER TOMORROW</span>
        </div>
      </div>
    </section>
  );
}
