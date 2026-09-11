'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PracticeDetailModal from './PracticeDetailModal';

const defaultCategories = [
  { id: 'constitutional', label: 'CONSTITUTIONAL', href: '#constitutional' },
  { id: 'commercial', label: 'COMMERCIAL', href: '#commercial' },
  { id: 'criminal', label: 'CRIMINAL', href: '#criminal' },
  { id: 'civil', label: 'CIVIL', href: '#civil' },
  { id: 'administrative', label: 'ADMINISTRATIVE', href: '#administrative' },
];

const sidePillars = ['LAW', 'PEOPLE', 'JUSTICE', 'SOCIETY'];

export default function PracticeAreasHeroSection({
  eyebrow = 'PRACTICE AREAS',
  titleLine1 = 'Complex Matters.',
  titleLine2 = 'Considered Counsel.',
  description = 'Our practice is built around matters that demand careful legal analysis, strategic preparation and decisive courtroom advocacy.',
  stepNumber = '01',
  categories = defaultCategories,
  onCategoryClick,
}) {
  const [activeCategory, setActiveCategory] = useState('constitutional');
  const [selectedCategory, setSelectedCategory] = useState('constitutional');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (cat, e) => {
    e.preventDefault();
    setActiveCategory(cat.id);
    setSelectedCategory(cat.id);
    setIsModalOpen(true);
    if (onCategoryClick) {
      onCategoryClick(cat);
    }
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5] flex flex-col justify-start selection:bg-[#9E6728]/15 sm:min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] lg:max-h-[800px] lg:justify-between">
      
      {/* ================= BACKGROUND IMAGE & GRADIENT OVERLAYS ================= */}
      <div className="absolute inset-0 z-0">
        {/* Base Background Image featuring Lady Justice, Constitution of India and Civil Procedure on the desk */}
        <Image
          src="/pratices-area-hero.png"
          alt="Trinetra Law Chambers Practice Areas - Lady Justice and Legal Texts"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[82%_20%] sm:object-right select-none pointer-events-none"
        />

        {/* Left Soft Warm Light/Cream Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/96 via-65% sm:via-55% lg:via-50% to-[#FAF8F5]/25 pointer-events-none" />

        {/* Bottom vertical gradient fade to cleanly cut off dark books and keep background spotless */}
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-32 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/90 via-40% to-transparent pointer-events-none" />

        {/* Mobile ambient tint for crystal-clear readability */}
        <div className="absolute inset-0 bg-[#FAF8F5]/35 sm:bg-transparent pointer-events-none" />
      </div>

      {/* ================= TOP HEADER STRIP ================= */}
      <div className="relative z-10 w-full border-b border-[#E8E1D5]/90 bg-[#FAF8F5]/80 backdrop-blur-[2px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-2 sm:py-2.5 flex flex-col xs:flex-row items-center justify-between gap-1 xs:gap-2 text-[8.5px] sm:text-[10px] font-semibold tracking-[0.16em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm text-center xs:text-left">
          <span className="hover:text-[#1A1817] transition-colors whitespace-normal xs:whitespace-nowrap">ADVOCACY FOR A STRONGER TOMORROW</span>
          <div className="flex items-center gap-1.5 sm:gap-2.5 text-center xs:text-right text-[8px] sm:text-[10px]">
            <span>LAW</span>
            <span className="text-[#C4B8A5]">|</span>
            <span>STRATEGY</span>
            <span className="text-[#C4B8A5]">|</span>
            <span>JUSTICE</span>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT BODY ================= */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-4 xs:pt-5 sm:pt-14 lg:pt-22 pb-8 xs:pb-10 sm:pb-5 lg:pb-6 flex-grow flex flex-col justify-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-start">
          
          {/* Left Column: Eyebrow + Huge Two-Tone Headline + Narrative Description */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-start pr-0 lg:pr-6">
            
            {/* Eyebrow with Ochre Bronze Accent Line */}
            <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
              <span className="w-8 sm:w-11 h-[1.5px] bg-[#9E6728]" />
              <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#2D2926] uppercase font-dm">
                {eyebrow}
              </span>
            </div>

            {/* Main Headline: Bold Charcoal ("Complex Matters.") & Warm Ochre ("Considered Counsel.") with proper breathing room */}
            <h1 className="font-heading text-[30px] sm:text-5xl lg:text-[50px] xl:text-[56px] font-bold tracking-tight leading-[1.2] sm:leading-[1.08] text-[#1A1817]">
              <span className="block">Complex Matters.</span>
              <span className="block gold-gradient-shine mt-1.5 sm:mt-2">Considered Counsel.</span>
            </h1>

            {/* Narrative Subtitle Paragraph with airy line-height */}
            <p className="mt-4 sm:mt-5 text-[#554E46] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.65] max-w-[480px] font-dm font-normal">
              {description}
            </p>

            {/* Category Navigation Pills / Links with proper vertical & horizontal spacing */}
            <div className="mt-6 sm:mt-7">
              <nav 
                aria-label="Practice Area Navigation"
                className="flex flex-wrap items-center gap-y-3 text-[10px] sm:text-[10.5px] lg:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.22em] uppercase font-dm"
              >
                {categories.map((cat, idx) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <div key={cat.id} className="inline-flex items-center">
                      <Link
                        href={cat.href || `#${cat.id}`}
                        onClick={(e) => handleCategoryClick(cat, e)}
                        className={`group relative py-1 transition-all duration-200 ${
                          isActive
                            ? 'text-[#9E6728] font-bold'
                            : 'text-[#605850] hover:text-[#1A1817]'
                        }`}
                      >
                        <span className="relative z-10">{cat.label}</span>
                        {isActive && (
                          <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[#9E6728]" />
                        )}
                      </Link>

                      {/* Thin Vertical Separator */}
                      {idx < categories.length - 1 && (
                        <span className="mx-2.5 sm:mx-3 text-[#D0C7B8] select-none font-normal">|</span>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Center Column: Delicate Vertical Line with "01" & Vertical Pillars Stack */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-4 items-start justify-start pl-6 xl:pl-10 pt-8 lg:pt-10">
            <div className="flex items-start gap-3.5">
              {/* Thin Elegant Vertical Divider */}
              <div className="w-[1px] h-28 xl:h-36 bg-[#D4CCC0] rounded-full self-stretch" />

              {/* Number and Vertically Stacked Pillars */}
              <div className="flex flex-col justify-between py-0.5">
                {/* Step / Edition Number */}
                <div className="font-dm text-xs xl:text-sm font-normal text-[#6B635B] tracking-widest mb-2.5">
                  {stepNumber}
                </div>

                {/* Stack of Core Tenets: LAW, PEOPLE, JUSTICE, SOCIETY */}
                <div className="flex flex-col gap-1 text-[8.5px] xl:text-[9px] font-semibold tracking-[0.26em] text-[#78716A] uppercase font-dm leading-tight">
                  {sidePillars.map((pillar, pIdx) => (
                    <span 
                      key={pIdx}
                      className="hover:text-[#9E6728] transition-colors cursor-default"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM FOOTER STRIP ================= */}
      <div className="hidden sm:block relative z-10 w-full border-t border-[#E8E1D5]/80 bg-[#FAF8F5]/60 backdrop-blur-[2px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-2 sm:py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-0 text-[8.5px] sm:text-[10px] font-semibold tracking-[0.24em] font-dm">
          {/* Left Tagline */}
          <div className="flex items-center gap-2 text-[#78716A] uppercase">
            <span>PEOPLE</span>
            <span className="text-[#C4B8A5]">|</span>
            <span>LAW</span>
            <span className="text-[#C4B8A5]">|</span>
            <span>A FAIRER TOMORROW</span>
          </div>

          {/* Right Brand Badge */}
          <div className="flex items-center gap-2.5 text-[#3D352E] uppercase">
            <span className="w-8 sm:w-12 h-[1px] bg-[#9E6728]" />
            <span className="tracking-[0.22em] text-[#4A423A]">TRINETRA LAW CHAMBERS</span>
          </div>
        </div>
      </div>

      {/* ================= PRACTICE DETAIL MODAL POPUP ================= */}
      <PracticeDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        practiceKey={selectedCategory}
      />
    </section>
  );
}
