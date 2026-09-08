'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const practiceAreas = [
  {
    id: '01',
    title: 'Constitutional & Writ Law',
    forum: 'SUPREME COURT OF INDIA',
    description:
      'Article 32 & 226 writ petitions, fundamental rights enforcement, public interest litigation (PIL), and landmark constitutional challenges before Apex Benches.',
    image: '/practice-constitutional.jpg',
    tags: ['Article 32 & 226', 'Fundamental Rights', 'Writ Jurisdiction'],
    motto: 'UPHOLDING CONSTITUTIONAL VALUES SINCE 2008',
    tabBg: 'bg-[#FAF8F5]',
    tabBorder: 'border-[#D9CFBF]',
    tabTextColor: 'text-[#2B2724]',
  },
  {
    id: '02',
    title: 'Service & Administrative Law',
    forum: 'CENTRAL ADMINISTRATIVE TRIBUNAL & HIGH COURTS',
    description:
      'Disciplinary proceedings, seniority disputes, pension entitlements, and constitutional service safeguards for civil servants and armed forces personnel.',
    image: '/chamber-legacy.jpg',
    tags: ['CAT Litigation', 'Civil Services', 'Promotion Disputes'],
    motto: 'EQUITABLE DISPENSATION OF MERIT & RANK',
    tabBg: 'bg-[#EAE4D9]',
    tabBorder: 'border-[#D2C5B3]',
    tabTextColor: 'text-[#362E27]',
  },
  {
    id: '03',
    title: 'Commercial & Civil Litigation',
    forum: 'COMMERCIAL COURTS & ARBITRAL TRIBUNALS',
    description:
      'High-value shareholder deadlocks, breach of contract claims, injunctions, insolvency proceedings, and domestic and cross-border commercial arbitration.',
    image: '/apex-benches.jpg',
    tags: ['Commercial Injunctions', 'Arbitration & Conciliation', 'IBC Recovery'],
    motto: 'SECURED ENTERPRISE & FISCAL REMEDIES',
    tabBg: 'bg-[#DDD1BF]',
    tabBorder: 'border-[#C4B49F]',
    tabTextColor: 'text-[#2F2720]',
  },
  {
    id: '04',
    title: 'Criminal Law',
    forum: 'SPECIAL COURTS & HIGH COURTS',
    description:
      'White-collar defense, PMLA investigations, CBI & ED prosecutions, anticipatory bails, and trials involving complex statutory financial crimes.',
    image: '/senior-counsel.jpg',
    tags: ['PMLA Defense', 'CBI Prosecutions', 'Special Leave Petitions'],
    motto: 'STATUTORY PROTECTION OF LIBERTY & JUSTICE',
    tabBg: 'bg-[#C2B29A]',
    tabBorder: 'border-[#A6957E]',
    tabTextColor: 'text-[#221C16]',
  },
  {
    id: '05',
    title: 'Appellate Practice',
    forum: 'APPELLATE TRIBUNALS & SUPREME COURT',
    description:
      'Special Leave Petitions (SLP), statutory appeals, revision petitions, and constitutional references challenging lower court decrees across jurisdictions.',
    image: '/hero-bg-image.png',
    tags: ['Article 136 SLPs', 'Review Petitions', 'Constitutional Benches'],
    motto: 'DECISIVE BENCHMARK APPELLATE ADVOCACY',
    tabBg: 'bg-[#85745E]',
    tabBorder: 'border-[#6F5F4C]',
    tabTextColor: 'text-[#FAF8F5]',
  },
  {
    id: '06',
    title: 'Legislative & Policy Advisory',
    forum: 'REGULATORY COMMISSIONS & STATUTORY BODIES',
    description:
      'Parliamentary bill scrutiny, regulatory compliance frameworks, public policy advocacy, and institutional governance advice for statutory authorities.',
    image: '/practice-constitutional.jpg',
    tags: ['Statutory Drafting', 'Policy Scrutiny', 'Regulatory Compliance'],
    motto: 'SHAPING REGULATORY INTEGRITY & COMMERCE',
    tabBg: 'bg-[#3A3026]',
    tabBorder: 'border-[#261E16]',
    tabTextColor: 'text-[#FAF8F5]',
  },
];

export default function PracticeAreasSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? practiceAreas.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === practiceAreas.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-slide effect (advances every 2.5s, pauses on hover / touch)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile
  const minSwipeDistance = 45;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const activeArea = practiceAreas[activeIndex];
  const nextArea = practiceAreas[(activeIndex + 1) % practiceAreas.length];
  const nextNextArea = practiceAreas[(activeIndex + 2) % practiceAreas.length];

  return (
    <section
      id="practice-areas"
      className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Heading, Paragraph, Action & Pagination */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="h-[1.5px] w-8 bg-[#B88E44] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#8C6D37] uppercase font-dm">
                SELECTED PRACTICE AREAS
              </span>
            </div>

            {/* Main Headline (Poppins) - Identical to Legacy & Bar Admissions */}
            <h2 className="font-heading font-extrabold text-[25px] min-[380px]:text-[27px] sm:text-3xl lg:text-[40px] xl:text-[44px] text-[#1A1817] leading-[1.14] tracking-tight">
              <span className="block">Examine Our Core</span>
              <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                Jurisprudence.
              </span>
            </h2>

            {/* Subtitle description */}
            <p className="mt-3.5 sm:mt-4 text-[#554E46] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-dm max-w-lg">
              We are more than just courtroom litigators—our chambers engineer constitutional
              depth, statutory mastery, and strategic court presentation that puts client
              protection at the center.
            </p>

            {/* Desktop Only: Pill CTA Button, Pagination Controls, and Bottom Motto */}
            <div className="hidden lg:block">
              {/* Pill CTA Button */}
              <div className="mt-5 sm:mt-6">
                <Link
                  href="#consultation"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98]"
                >
                  <span>SCHEDULE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Pagination Numbers & Arrow Slider Controls */}
              <div className="mt-7 sm:mt-8 flex items-center gap-5">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold tracking-wider text-[#2B2724] font-dm">
                  <span className="text-[#8C6D37] font-heading">{activeArea.id}</span>
                  <span className="w-7 h-[1.5px] bg-[#B88E44]" />
                  <span className="text-[#8C847B]">06</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-8.5 h-8.5 rounded-full bg-[#EFE9DF] hover:bg-[#E3D9C9] text-[#4A443E] flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                    aria-label="Previous Practice Area"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-8.5 h-8.5 rounded-full bg-[#4A1118] hover:bg-[#380C12] text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none cursor-pointer"
                    aria-label="Next Practice Area"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Motto Logo / Tagline */}
              <div className="mt-8 sm:mt-10 flex items-center gap-3.5 pt-5 border-t border-[#E8E1D5]/80">
                <div className="border-l-2 border-[#B88E44] pl-2.5 text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#8C6D37] uppercase font-dm leading-tight">
                  <div>LAW</div>
                  <div className="text-[#A89B8C]">PEOPLE</div>
                  <div className="text-[#C2B7A8]">PURPOSE</div>
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] text-[#78716A] uppercase font-dm leading-relaxed">
                  <div>CONSTITUTIONAL VALUES.</div>
                  <div>PRACTICAL SOLUTIONS.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card Stack Deck */}
          <div className="lg:col-span-7 relative w-full">
            {/* 3D Card Deck with Perspective & Layered Depth */}
            <div
              className="relative w-full h-auto sm:h-[415px] lg:h-[425px] flex items-stretch card-stack-deck pr-4 min-[400px]:pr-5 sm:pr-0"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Mobile 3D Stack Layer 2 (Card + 2) - Fanned on the Right Edge */}
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 2) % practiceAreas.length)}
                className={`sm:hidden absolute top-3 bottom-3 -right-3.5 w-full rounded-2xl border ${nextNextArea.tabBorder} ${nextNextArea.tabBg} shadow-xs -z-20 flex items-center justify-end pr-1 cursor-pointer transition-all duration-300 transform scale-y-[0.92] active:scale-[0.98]`}
                aria-label={`Switch to ${nextNextArea.title}`}
              >
                <span className={`text-[10px] font-mono font-bold ${nextNextArea.tabTextColor} [writing-mode:vertical-rl] rotate-180 select-none tracking-widest opacity-80`}>
                  {nextNextArea.id}
                </span>
              </button>

              {/* Mobile 3D Stack Layer 1 (Card + 1) - Fanned on the Right Edge */}
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % practiceAreas.length)}
                className={`sm:hidden absolute top-1.5 bottom-1.5 -right-1.5 w-full rounded-2xl border ${nextArea.tabBorder} ${nextArea.tabBg} shadow-sm -z-10 flex items-center justify-end pr-1 cursor-pointer transition-all duration-300 transform scale-y-[0.96] active:scale-[0.98]`}
                aria-label={`Switch to ${nextArea.title}`}
              >
                <span className={`text-[10px] font-mono font-bold ${nextArea.tabTextColor} [writing-mode:vertical-rl] rotate-180 select-none tracking-widest`}>
                  {nextArea.id}
                </span>
              </button>

              {/* 1. Main Active Expanded Card (Front 3D Card) */}
              <div
                key={activeArea.id}
                className="relative z-30 flex-1 grid grid-cols-1 md:grid-cols-12 rounded-2xl border border-[#2B2724] bg-[#FAF8F5] active-card-3d overflow-hidden animate-card-reveal shadow-xl sm:shadow-md"
              >
                {/* Left Half: Active Card Image with Cinematic Zoom */}
                <div className="w-full md:w-auto md:col-span-6 relative h-48 min-[400px]:h-52 sm:h-56 md:h-full min-h-[190px] bg-[#1F1514] overflow-hidden">
                  <Image
                    src={activeArea.image}
                    alt={activeArea.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center animate-ken-burns"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

                  {/* Overlaid index badge on top left */}
                  <div className="absolute top-3.5 left-3.5 pointer-events-none animate-stagger-1">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#FAF8F5] bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/15">
                      {activeArea.id} / 06
                    </span>
                  </div>

                  {/* Overlaid chamber motto on bottom left */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 pointer-events-none animate-stagger-2">
                    <p className="text-[9px] font-bold tracking-[0.2em] text-[#EFE9DF] uppercase leading-snug font-dm drop-shadow">
                      {activeArea.motto}
                    </p>
                  </div>
                </div>

                {/* Right Half: Active Card Content Details with Staggered Cascading Reveal */}
                <div className="md:col-span-6 p-4 sm:p-5 lg:p-6 flex flex-col justify-between bg-[#FAF8F5]">
                  <div>
                    {/* Forum Eyebrow (Stagger 1) */}
                    <div className="flex items-center gap-2 mb-1.5 animate-stagger-1">
                      <span className="h-[1.5px] w-4 bg-[#B88E44]" />
                      <span className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.2em] text-[#8C6D37] uppercase font-dm">
                        {activeArea.forum}
                      </span>
                    </div>

                    {/* Title (Stagger 2) */}
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl lg:text-[21px] text-[#1A1817] leading-snug tracking-tight animate-stagger-2">
                      {activeArea.title}
                    </h3>

                    {/* Description (Stagger 3) */}
                    <p className="mt-2 text-xs sm:text-[12.5px] text-[#554E46] leading-relaxed font-dm line-clamp-3 animate-stagger-3">
                      {activeArea.description}
                    </p>

                    {/* Tag Chips (Stagger 4) */}
                    <div className="mt-3 flex flex-wrap gap-1.5 animate-stagger-4">
                      {activeArea.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-sm bg-[#EFE9DF] text-[#554E46] text-[10px] font-medium font-dm border border-[#E0D5C3]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link (Stagger 5) */}
                  <div className="pt-3.5 mt-3 sm:mt-2 border-t border-[#E8E1D5] animate-stagger-5">
                    <Link
                      href="#consultation"
                      className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#1A1817] hover:text-[#8C6D37] uppercase transition-colors"
                    >
                      <span className="border-b border-[#B88E44] pb-0.5">
                        EXPLORE PRACTICE AREA
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 2. Inactive Stacked Tab Ribbons (Desktop / Tablet Layered 3D Card Stack Behind) */}
              <div className="hidden sm:flex items-stretch -ml-4 z-20">
                {practiceAreas
                  .filter((_, idx) => idx !== activeIndex)
                  .map((area, listIdx) => {
                    const originalIdx = practiceAreas.findIndex((p) => p.id === area.id);
                    const isFirst = listIdx === 0;

                    return (
                      <button
                        key={area.id}
                        type="button"
                        onClick={() => setActiveIndex(originalIdx)}
                        style={{ zIndex: 25 - listIdx }}
                        className={`group relative w-12 lg:w-13 xl:w-14 ${
                          !isFirst ? '-ml-2.5 lg:-ml-3' : ''
                        } rounded-r-2xl border-t border-r border-b ${area.tabBorder} ${
                          area.tabBg
                        } tab-card-3d flex flex-col items-center justify-between py-4 cursor-pointer active:scale-[0.98] focus:outline-none ${
                          isFirst ? 'pl-2.5' : ''
                        }`}
                        title={`Switch to ${area.title}`}
                      >
                        {/* Top ID Number (Crisp & Completely Visible) */}
                        <div className="w-full flex items-center justify-center pt-1">
                          <span className={`font-mono text-xs lg:text-[13px] font-bold tracking-wider ${area.tabTextColor}`}>
                            {area.id}
                          </span>
                        </div>

                        {/* Clean Vertical Title (Rotated 90 degrees) */}
                        <div className="flex-1 flex items-center justify-center my-3 overflow-hidden">
                          <span
                            className={`text-[9.5px] lg:text-[10px] font-bold tracking-[0.22em] uppercase font-dm whitespace-nowrap transition-transform duration-200 group-hover:scale-105 [writing-mode:vertical-rl] rotate-180 ${area.tabTextColor}`}
                          >
                            {area.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Mobile-Only Controls & Actions (Positioned BELOW the Card on Mobile, Hidden on Desktop) */}
            <div className="lg:hidden flex flex-col mt-5">
              {/* Pagination Numbers & Arrow Slider Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#2B2724] font-dm">
                  <span className="text-[#8C6D37] font-heading font-extrabold text-sm">{activeArea.id}</span>
                  <div className="flex items-center gap-1">
                    {practiceAreas.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === activeIndex ? 'w-5 bg-[#8C6D37]' : 'w-1.5 bg-[#D8CEBE]'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-[#8C847B]">06</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-8.5 h-8.5 rounded-full bg-[#EFE9DF] hover:bg-[#E3D9C9] active:scale-95 text-[#4A443E] flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                    aria-label="Previous Practice Area"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-8.5 h-8.5 rounded-full bg-[#4A1118] hover:bg-[#380C12] active:scale-95 text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none cursor-pointer"
                    aria-label="Next Practice Area"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Full Width Pill CTA Button */}
              <div className="mt-4">
                <Link
                  href="#consultation"
                  className="w-full py-3 px-6 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98] flex items-center justify-center gap-2.5"
                >
                  <span>SCHEDULE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Bottom Motto Logo / Tagline */}
              <div className="mt-5 p-3.5 rounded-xl bg-white/75 border border-[#E4DACB] flex items-center gap-3.5 shadow-2xs">
                {/* Left: 3-tier creed */}
                <div className="border-l-2 border-[#B88E44] pl-2.5 text-[10px] font-bold tracking-[0.22em] uppercase font-dm leading-[1.25] flex flex-col justify-center">
                  <span className="text-[#8C6D37]">LAW</span>
                  <span className="text-[#A89B8C]">PEOPLE</span>
                  <span className="text-[#C2B7A8]">PURPOSE</span>
                </div>

                {/* Subtle Vertical Divider */}
                <div className="w-px h-8 bg-[#E8E0D2]" />

                {/* Right: Constitutional statement */}
                <div className="text-[10.5px] font-medium tracking-[0.16em] uppercase font-dm leading-snug flex-1">
                  <div className="font-bold text-[#2B2724]">CONSTITUTIONAL VALUES.</div>
                  <div className="text-[#8C6D37] font-semibold mt-0.5">PRACTICAL SOLUTIONS.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

