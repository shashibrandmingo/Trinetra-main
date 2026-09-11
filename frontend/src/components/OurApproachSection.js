'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const approachSteps = [
  {
    step: '01',
    title: 'UNDERSTAND',
    image: '/approach-step1-facts.jpg',
    alt: 'Understand the facts and evidence - Case briefs with FACTS stamp and fountain pen',
    description: 'Understand the facts and the real issues.',
  },
  {
    step: '02',
    title: 'ANALYSE',
    image: '/approach-step2-law.jpg',
    alt: 'Analyse legal position - Magnifying glass over THE LAW document',
    description: 'Examine the legal position and possible paths.',
  },
  {
    step: '03',
    title: 'PREPARE',
    image: '/approach-step3-strategy.jpg',
    alt: 'Prepare legal strategy - Leather law books STRATEGY, RESEARCH, PRECEDENTS, ARGUMENTS',
    description: 'Build a strategy with clarity and precision.',
  },
  {
    step: '04',
    title: 'ADVOCATE',
    image: '/approach-step4-advocate.jpg',
    alt: 'Advocate in court - Bronze Lady Justice holding scales',
    description: 'Present your case with conviction.',
  },
];

export default function OurApproachSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5] py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-between">
        
        {/* ================= TOP GRID: MAIN CONTENT + RIGHT ARCHITECTURAL COLUMN ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* ================= LEFT 8-9 COLS: NARRATIVE HEADER + 4 ARCHED STEP CARDS ================= */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between">
            
            {/* Header: Narrative + Right Mini Tagline */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 sm:pb-10 border-b border-[#E8E1D5]/80">
              
              {/* Left Headline */}
              <div className="max-w-xl">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-3 sm:mb-3.5">
                  <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
                  <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                    OUR APPROACH
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="font-heading text-[30px] sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-[#1A1817] leading-[1.08]">
                  <span className="block">A Clearer Path</span>
                  <span className="block mt-0.5 sm:mt-1">
                    to <span className="gold-gradient-shine">Stronger Outcomes.</span>
                  </span>
                </h2>

                {/* Subtitle Paragraph */}
                <p className="mt-3.5 sm:mt-4 text-[#6B635B] text-xs sm:text-sm lg:text-[14.5px] font-dm leading-relaxed max-w-lg">
                  Every matter begins with understanding the facts, finding the legal
                  position and building a strategy around what is ultimately at stake.
                </p>
              </div>

              {/* Right Mini Tagline (PEOPLE | LAW | A FAIRER TOMORROW - Desktop & Tablet only) */}
              <div className="hidden sm:flex items-start gap-3.5 sm:self-start pt-1">
                <div className="w-[1.5px] h-12 bg-[#9E6728] rounded-full self-stretch" />
                <div className="flex flex-col gap-0.5 text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm leading-tight">
                  <span>PEOPLE</span>
                  <span>LAW</span>
                  <span>A FAIRER</span>
                  <span>TOMORROW</span>
                  <span className="text-[#9E6728] font-bold">—</span>
                </div>
              </div>

            </div>

            {/* 4 Arched Pill Cards Row (2x2 Grid on Mobile, 4 Cols on Desktop) */}
            <div className="mt-6 sm:mt-10 lg:mt-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3.5 sm:gap-4 lg:gap-3 xl:gap-4 relative items-stretch">
                
                {approachSteps.map((item, idx) => (
                  <div key={item.step} className="relative flex items-center">
                    
                    {/* Arched Pill Card */}
                    <div className="group relative w-full bg-[#FAF8F5] border border-[#EADBCC] rounded-t-[48px] xs:rounded-t-[56px] sm:rounded-t-[80px] rounded-b-xl sm:rounded-b-2xl p-2.5 xs:p-3 sm:p-3.5 xl:p-4 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:border-[#9E6728]/50 hover:shadow-md hover:-translate-y-1">
                      
                      {/* Step Number in Serif */}
                      <span className="font-serif text-xl xs:text-2xl sm:text-3xl lg:text-[32px] text-[#9E6728] font-normal pt-1.5 xs:pt-2 sm:pt-4 select-none">
                        {item.step}
                      </span>

                      {/* Step Title */}
                      <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#1A1817] uppercase font-dm mt-0.5 mb-2 sm:mb-3">
                        {item.title}
                      </span>

                      {/* Circular Thumbnail Frame */}
                      <div className="relative w-16 h-16 xs:w-18 xs:h-18 sm:w-26 sm:h-26 lg:w-28 lg:h-28 xl:w-30 xl:h-30 rounded-full overflow-hidden border border-[#D9CEBF] bg-[#EAE4D9] shadow-sm my-1 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 640px) 75px, (max-width: 1024px) 120px, 130px"
                          className="object-cover object-center"
                        />
                      </div>

                      {/* Small Ochre Divider Accent */}
                      <span className="w-4 sm:w-6 h-[1.5px] bg-[#9E6728] my-2 sm:my-3" />

                      {/* Step Description */}
                      <p className="text-[10px] xs:text-[11px] sm:text-xs text-[#5C544D] font-dm leading-snug sm:leading-relaxed max-w-[170px] pb-2 sm:pb-4">
                        {item.description}
                      </p>

                    </div>

                    {/* Right-Pointing Connector Arrow (Visible between cards on desktop) */}
                    {idx < approachSteps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-2.5 xl:-right-3 z-10 text-[#B88E44] pointer-events-none">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}

                  </div>
                ))}

              </div>
            </div>

            {/* Bottom Brand Stamp (Desktop only) */}
            <div className="hidden sm:flex mt-8 sm:mt-10 pt-4 border-t border-[#E8E1D5]/60 items-center justify-between">
              <span className="text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                TRINETRA LAW CHAMBERS
              </span>
            </div>

          </div>

          {/* ================= RIGHT 4 COLS: MONUMENTAL ARCHITECTURAL COLONNADE + INSPIRATIONAL QUOTE ================= */}
          <div className="lg:col-span-4 xl:col-span-4 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full rounded-sm overflow-hidden border border-[#E8E1D5] bg-[#2A2420] flex flex-col justify-end shadow-sm">
            
            {/* Background Courthouse Architectural Image */}
            <Image
              src="/pratice-area-4.png"
              alt="Courthouse Sandstone Classical Columns and Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center select-none pointer-events-none"
            />

            {/* Soft dark vignette gradient overlay for pristine quote legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 via-40% to-black/10 pointer-events-none" />

            {/* Bottom Quote & Motto Overlay */}
            <div className="relative z-10 p-6 sm:p-8 text-white">
              
              {/* Bronze Quotation Mark */}
              <div className="text-[#B88E44] text-4xl sm:text-5xl font-serif leading-none select-none mb-1">
                “
              </div>

              {/* Quote Headline */}
              <div className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#FAF8F5] uppercase font-dm leading-relaxed">
                <div>PREPARATION</div>
                <div>TURNS COMPLEXITY</div>
                <div>INTO CLARITY.</div>
              </div>

              {/* Gold Accent Divider */}
              <div className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44] mt-3 sm:mt-4 mb-3" />

              {/* Judicial Motto */}
              <div className="text-[9px] sm:text-[10px] font-semibold tracking-[0.24em] text-[#CBBDB1] uppercase font-dm">
                JUSTICE THROUGH PRINCIPLE
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
