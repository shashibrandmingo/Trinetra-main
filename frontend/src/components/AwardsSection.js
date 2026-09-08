'use client';

import { useState, useEffect, useCallback } from 'react';
import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'Top Law Firms India',
    description: 'Recognized for excellence in dispute resolution and impact.',
    quote: 'Recognition strengthens our resolve to create a fairer tomorrow.',
  },
  {
    year: '2023',
    title: 'Legal Leadership Award',
    description: 'For outstanding contribution to constitutional law.',
    quote:
      'Leadership in law is measured by the constitutional protections we secure for those without a voice.',
  },
  {
    year: '2022',
    title: 'Pioneers in Legal Innovation',
    description: 'Recognized for forward-thinking solutions in law.',
    quote:
      'Innovation in legal jurisprudence transforms complex statutory obstacles into clear institutional pathways.',
  },
  {
    year: '2021',
    title: 'Client Excellence Award',
    description: 'Honoured for consistent client satisfaction.',
    quote:
      'Excellence is not an act before the bench, but an unwavering standard cultivated over decades of chamber practice.',
  },
  {
    year: '2020',
    title: 'Emerging Law Firm Recognition',
    description: 'For promising legal practice and client focus.',
    quote:
      'From our inception, every decree drafted has been rooted in integrity, scholarship, and uncompromising defense of justice.',
  },
];

export default function AwardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === milestones.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-slide effect (every 2.5s, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const activeMilestone = milestones[activeIndex];

  return (
    <section
      id="awards"
      className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-14 sm:pt-16 pb-12 sm:pb-14">
        {/* Top Header Row on Desktop / Stacks on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* Left Column: Eyebrow, Heading, Subtitle & Journey Card */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-full">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5">
                <span className="h-[1.5px] w-6 sm:w-8 bg-[#B88E44] rounded-full" />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                  AWARDS & RECOGNITION
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-heading font-extrabold text-[30px] sm:text-3xl lg:text-[38px] xl:text-[40px] text-[#1A1817] leading-[1.14] tracking-tight">
                <span className="block">Milestones that</span>
                <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                  matter.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-3.5 sm:mt-4 text-xs sm:text-[13.5px] text-[#6B635B] font-dm leading-relaxed max-w-none sm:max-w-[340px]">
                Each recognition is a reflection of the trust we&apos;ve built,
                the lives we&apos;ve impacted, and the higher standards we
                continue to set.
              </p>
            </div>

            {/* A journey of purpose box */}
            <div className="mt-6 sm:mt-12 p-4 sm:p-5 bg-[#F6F0E6]/70 border border-[#E8DFCFC5] rounded-2xl flex items-center gap-4 w-full sm:max-w-[320px] shadow-2xs">
              <div className="w-11 h-11 rounded-xl bg-white/90 border border-[#E2D6C5] flex items-center justify-center shrink-0 shadow-2xs">
                <Trophy className="w-5 h-5 text-[#A67C38]" strokeWidth={1.75} />
              </div>
              <div className="h-9 w-[1px] bg-[#DCD3C5]" />
              <p className="font-heading font-medium text-xs sm:text-[12.5px] text-[#3A332C] leading-snug">
                A journey of
                <br />
                purpose, people
                <br />
                and progress.
              </p>
            </div>
          </div>

          {/* Center Column: Interactive Vertical Timeline */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center py-0 sm:py-4">
            <div className="flex flex-col">
              {milestones.map((item, idx) => {
                const isActive = idx === activeIndex;
                const isFirst = idx === 0;
                const isLast = idx === milestones.length - 1;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex items-stretch gap-3 sm:gap-4 group text-left cursor-pointer focus:outline-none transition-all duration-200 py-2 sm:py-2.5 px-2 rounded-xl ${
                      isActive
                        ? 'bg-[#F4ECE1]/60 lg:bg-transparent'
                        : 'hover:bg-[#F6F0E6]/40 lg:hover:bg-transparent'
                    }`}
                  >
                    {/* Year text on left */}
                    <span
                      className={`w-[44px] sm:w-[48px] shrink-0 font-heading font-bold text-sm sm:text-base tracking-wider text-right transition-colors duration-200 self-center ${
                        isActive
                          ? 'text-[#4A1118]'
                          : 'text-[#2B2724] group-hover:text-[#4A1118]'
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Timeline Track: Continuous mathematically centered line & node */}
                    <div className="relative flex flex-col items-center justify-center self-stretch shrink-0 w-5 sm:w-6">
                      {/* Top line segment */}
                      <div
                        className={`w-[1px] bg-[#E2D8C9] flex-1 ${
                          isFirst ? 'opacity-0' : 'opacity-100'
                        }`}
                      />

                      {/* Node circle */}
                      <div className="relative z-10 flex items-center justify-center my-1 shrink-0">
                        {isActive ? (
                          <div className="w-4 h-4 rounded-full border-2 border-[#4A1118] bg-[#FAF8F5] flex items-center justify-center shadow-xs">
                            <div className="w-2 h-2 rounded-full bg-[#4A1118]" />
                          </div>
                        ) : (
                          <div className="w-3 h-3 rounded-full border-[1.5px] border-[#C4B7A4] bg-[#FAF8F5] group-hover:border-[#4A1118] group-hover:scale-110 transition-all duration-200" />
                        )}
                      </div>

                      {/* Bottom line segment */}
                      <div
                        className={`w-[1px] bg-[#E2D8C9] flex-1 ${
                          isLast ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                    </div>

                    {/* Milestone title & description on right */}
                    <div className="flex-1 min-w-0 pl-1 self-center py-1">
                      <h4
                        className={`font-heading font-bold text-xs sm:text-[13.5px] transition-colors duration-200 leading-tight ${
                          isActive
                            ? 'text-[#4A1118]'
                            : 'text-[#1A1817] group-hover:text-[#4A1118]'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="font-dm text-[11px] sm:text-xs text-[#78716A] mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Motto, Large Inspirational Quote & Controls */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-full pt-0 lg:pt-1 lg:pl-4">
            {/* Top Motto: PEOPLE PERSPECTIVE PROGRESS (Hidden on mobile to eliminate stranded text) */}
            <div className="hidden lg:flex items-start justify-end">
              <div className="flex items-center gap-2.5 sm:gap-3 text-left">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#B88E44]" />
                <div className="flex flex-col text-[9px] sm:text-[10px] font-bold tracking-[0.24em] uppercase font-dm leading-[1.35]">
                  <span className="text-[#8C6D37]">PEOPLE</span>
                  <span className="text-[#9E9080]">PERSPECTIVE</span>
                  <span className="text-[#B5A898]">PROGRESS</span>
                </div>
              </div>
            </div>

            {/* Middle Quote Content / Styled Card on Mobile */}
            <div className="bg-[#F6F0E6]/60 lg:bg-transparent border border-[#E8DFCFC5] lg:border-0 rounded-2xl p-5 sm:p-6 lg:p-0 shadow-2xs lg:shadow-none mt-0.5 mb-2 sm:my-4 lg:my-8">
              {/* Mobile Milestone Badge */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E8DFCFC5]/70 lg:hidden">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#4A1118] text-white text-[10px] font-heading font-bold tracking-wider">
                  {activeMilestone.year} CITATION
                </span>
                <span className="text-[11px] font-heading font-semibold text-[#6E6459] truncate max-w-[200px]">
                  {activeMilestone.title}
                </span>
              </div>

              {/* Stylized Double Quote Icon */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#CBB89A]/50 leading-none select-none mb-1.5 sm:mb-2">
                “
              </div>

              {/* Dynamic Quote Text with stable height & smooth transition */}
              <div className="min-h-[85px] sm:min-h-[105px] lg:min-h-[120px] flex items-start">
                <blockquote
                  key={activeMilestone.year}
                  className="font-heading font-medium text-[15px] sm:text-xl xl:text-[22px] text-[#1A1817] leading-[1.4] sm:leading-[1.35] tracking-tight animate-in fade-in duration-300"
                >
                  {activeMilestone.quote}
                </blockquote>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-8 h-[1.5px] bg-[#B88E44] my-3.5 sm:my-4" />

              {/* Spaced Sub-motto */}
              <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#8C847B] uppercase font-dm">
                PEOPLE · PERSPECTIVE · PROGRESS
              </div>

              {/* Slider Controls (< > and 04 / 05 indicator) */}
              <div className="flex items-center justify-between sm:justify-start lg:justify-end gap-4 pt-4 mt-4 border-t border-[#E8DFCFC5]/60 lg:border-0 lg:mt-0 lg:pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#DCD3C5] bg-[#F7F4EE] hover:bg-[#EFE9DF] text-[#4A4036] flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-xs focus:outline-none"
                    aria-label="Previous Milestone"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4A1118] hover:bg-[#380C12] text-white flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm focus:outline-none"
                    aria-label="Next Milestone"
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>

                {/* Progress Line & Page Counter */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="relative w-12 sm:w-16 h-[2px] bg-[#E0D5C3] rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 bottom-0 bg-[#4A1118] rounded-full transition-all duration-300 ease-out"
                      style={{
                        left: `${(activeIndex / milestones.length) * 100}%`,
                        width: `${100 / milestones.length}%`,
                      }}
                    />
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#8C847B] tracking-wider">
                    0{activeIndex + 1} / 0{milestones.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section Bar: Chamber Title + Horizontal Timeline Pills + Slogan (Hidden on Phone Mode) */}
        <div className="hidden sm:flex mt-10 sm:mt-16 pt-5 border-t border-[#E8E1D5] flex-col md:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-dm tracking-[0.16em] sm:tracking-[0.2em] text-[#8C847B] uppercase">
          {/* Left Chamber Title with Dash */}
          <div className="flex items-center gap-2.5">
            <span className="w-4 sm:w-6 h-[1.5px] bg-[#B88E44]" />
            <span>TRINETRA LAW CHAMBERS</span>
          </div>

          {/* Center Horizontal Timeline Pills */}
          <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto no-scrollbar py-1 max-w-full">
            {milestones.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div key={item.year} className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`cursor-pointer transition-all duration-200 font-heading text-[11px] sm:text-[12.5px] font-bold px-3 sm:px-3.5 py-1 rounded-full text-center ${
                      isActive
                        ? 'bg-[#4A1118] text-white shadow-xs'
                        : 'text-[#8C847B] hover:text-[#1A1817] hover:bg-[#EFE9DF]/60'
                    }`}
                  >
                    {item.year}
                  </button>
                  {idx < milestones.length - 1 && (
                    <span className="w-2.5 sm:w-5 h-[1px] bg-[#DCD3C5]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Slogan with Dash */}
          <div className="flex items-center gap-2.5">
            <span>LAW FOR A BRIGHTER TOMORROW</span>
            <span className="w-4 sm:w-6 h-[1.5px] bg-[#B88E44]" />
          </div>
        </div>
      </div>
    </section>
  );
}
