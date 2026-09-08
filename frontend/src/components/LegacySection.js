'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Landmark, FileText } from 'lucide-react';

export default function LegacySection() {
  return (
    <section className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5]">
      {/* 1. TOP METRICS & STATS BAR (Compact & Sleek) */}
      <div className="w-full border-b border-[#E8E1D5]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {/* Stat 1: 18+ Years */}
          <div className="p-3.5 sm:p-4 lg:px-6 xl:px-8 lg:py-4.5 flex flex-col justify-center border-r border-b lg:border-b-0 border-[#E8E1D5]">
            <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-[28px] text-[#1A1817] tracking-tight leading-none">
              18+
            </span>
            <span className="text-[9px] sm:text-[10px] lg:text-[10.5px] font-bold tracking-[0.16em] text-[#2B2724] uppercase mt-1">
              YEARS OF PRACTICE
            </span>
            <p className="text-[10px] sm:text-[11px] text-[#6B635B] font-dm mt-0.5 leading-snug line-clamp-2">
              Trusted legal counsel across complex matters
            </p>
          </div>

          {/* Stat 2: 500+ Matters */}
          <div className="p-3.5 sm:p-4 lg:px-6 xl:px-8 lg:py-4.5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E8E1D5]">
            <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-[28px] text-[#1A1817] tracking-tight leading-none">
              500+
            </span>
            <span className="text-[9px] sm:text-[10px] lg:text-[10.5px] font-bold tracking-[0.16em] text-[#2B2724] uppercase mt-1">
              MATTERS DECREED
            </span>
            <p className="text-[10px] sm:text-[11px] text-[#6B635B] font-dm mt-0.5 leading-snug line-clamp-2">
              Representing individuals, businesses and institutions
            </p>
          </div>

          {/* Stat 3: Supreme Court & High Courts */}
          <div className="p-3.5 sm:p-4 lg:px-6 xl:px-8 lg:py-4.5 flex items-center gap-2.5 sm:gap-3 border-r border-[#E8E1D5]">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#EFE9DF] border border-[#D9CFC1] flex items-center justify-center flex-shrink-0 text-[#8C6D37]">
              <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-heading font-bold text-[11.5px] sm:text-[13px] xl:text-[14px] text-[#1A1817] leading-tight">
                Supreme Court &amp; High Courts
              </h3>
              <p className="text-[9.5px] sm:text-[11px] text-[#6B635B] font-dm mt-0.5 leading-snug line-clamp-2">
                Regularly appearing before the highest courts in India
              </p>
            </div>
          </div>

          {/* Stat 4: Strategic Litigation */}
          <div className="p-3.5 sm:p-4 lg:px-6 xl:px-8 lg:py-4.5 flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#EFE9DF] border border-[#D9CFC1] flex items-center justify-center flex-shrink-0 text-[#8C6D37]">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-heading font-bold text-[11.5px] sm:text-[13px] xl:text-[14px] text-[#1A1817] leading-tight">
                Strategic Litigation
              </h3>
              <p className="text-[9.5px] sm:text-[11px] text-[#6B635B] font-dm mt-0.5 leading-snug line-clamp-2">
                Principled. Analytical. Results-driven.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN "OUR LEGACY" CONTENT SECTION (Generous top gap & Hero-matched headline) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12">
        {/* MOBILE ONLY: Heading Block (Appears first above image on mobile) */}
        <div className="lg:hidden mb-7 sm:mb-9">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="h-[1.5px] w-6 sm:w-8 bg-[#B88E44] rounded-full" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
              OUR LEGACY
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-[25px] min-[380px]:text-[27px] sm:text-3xl lg:text-[40px] xl:text-[44px] text-[#1A1817] leading-[1.14] tracking-tight">
            <span className="block">Formidable Trial Advocacy.</span>
            <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
              Constitutional Rigor.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column: Atmospheric Chamber Desk Image Card */}
          <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full pt-3 sm:pt-4 lg:pt-0">
            {/* Offset Card Matting Backdrop */}
            <div className="absolute top-0.5 -left-2.5 sm:-top-3.5 sm:-left-3.5 w-4/5 h-4/5 bg-[#EFE9DE] rounded-sm -z-0" />

            {/* Main Framed Image Container */}
            <div className="relative z-10 p-1.5 sm:p-2 bg-[#FAF8F5] border border-[#2B2724] shadow-xl rounded-sm overflow-hidden">
              <div className="relative aspect-[4/4] w-full bg-[#1F1413] overflow-hidden">
                <Image
                  src="/chamber-legacy.jpg"
                  alt="Trinetra Law Chambers Legal Desk & Volumes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

                {/* Overlaid Vertical Taglines (Top Left) */}
                <div className="absolute top-3.5 left-3.5 text-left pointer-events-none">
                  <div className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.26em] text-[#F5EFE6] uppercase leading-relaxed font-dm drop-shadow-md">
                    <div>LAW</div>
                    <div>STRATEGY</div>
                    <div>JUSTICE</div>
                    <div>IMPACT</div>
                  </div>
                  <div className="h-[1.5px] w-5 bg-[#B88E44] mt-1.5 rounded-full" />
                </div>

                {/* Overlaid Bottom Plaque / Motto (Bottom Left) */}
                <div className="absolute bottom-3.5 left-3.5 border-l-2 border-[#B88E44] pl-2.5 pointer-events-none">
                  <p className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.2em] text-[#FAF8F5] uppercase leading-tight font-dm drop-shadow-md">
                    BUILT ON PRINCIPLES.
                  </p>
                  <p className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.2em] text-[#C49A45] uppercase leading-tight font-dm drop-shadow-md mt-0.5">
                    DRIVEN BY PURPOSE.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Accreditations, Stats & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* DESKTOP ONLY: Eyebrow & Heading */}
            <div className="hidden lg:block">
              {/* Eyebrow: OUR LEGACY */}
              <div className="flex items-center gap-3 mb-2.5">
                <span className="h-[1.5px] w-7 bg-[#B88E44] rounded-full" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                  OUR LEGACY
                </span>
              </div>

              {/* Main Headline (Poppins) - Matched to Bar Admissions Section */}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] text-[#1A1817] leading-[1.14] tracking-tight">
                Formidable Trial Advocacy.
                <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                  Constitutional Rigor.
                </span>
              </h2>
            </div>

            {/* Narrative Description (DM Sans) */}
            <p className="mt-3.5 sm:mt-4 text-[#554E46] text-xs sm:text-sm lg:text-base leading-relaxed font-dm max-w-2xl">
              With eighteen years of benchmark practice across the Supreme Court of India, Delhi
              High Court, and appellate benches nationwide, our chambers combine deep statutory
              mastery with fearless courtroom presentation.
            </p>

            {/* Bar Accreditations Strip (Clean stacked bullets on mobile, horizontal row on desktop) */}
            <div className="mt-5 pt-3.5 border-t border-[#E8E1D5] flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-x-3.5 sm:gap-y-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] text-[#554E46] uppercase font-dm">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88E44] shrink-0" />
                <span>SCBA SENIOR ROLL</span>
              </span>
              <span className="text-[#C4B7A5] hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88E44] shrink-0" />
                <span>BAR COUNCIL OF DELHI &amp; INDIA</span>
              </span>
              <span className="text-[#C4B7A5] hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88E44] shrink-0" />
                <span>BOMBAY HIGH COURT ADMITTED</span>
              </span>
            </div>

            {/* 4-Column Statistics (Card boxes on mobile, streamlined row on desktop) */}
            <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-5 py-2 sm:py-5 border-y-0 sm:border-y sm:border-[#E8E1D5]">
              {/* Stat 1 */}
              <div className="bg-white sm:bg-transparent border border-[#E6DDD0] sm:border-0 rounded-xl sm:rounded-none p-3 sm:p-0 shadow-2xs sm:shadow-none flex flex-col justify-between">
                <div>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A1817] leading-none">
                    18+
                  </span>
                  <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.14em] sm:tracking-[0.16em] text-[#2B2724] uppercase mt-1.5 leading-tight">
                    YEARS OF PRACTICE
                  </span>
                </div>
                <span className="block text-[10px] sm:text-[10.5px] text-[#78716A] font-dm mt-1 leading-snug">
                  Apex Court Litigation
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-white sm:bg-transparent border border-[#E6DDD0] sm:border-0 rounded-xl sm:rounded-none p-3 sm:p-0 shadow-2xs sm:shadow-none flex flex-col justify-between">
                <div>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A1817] leading-none">
                    500+
                  </span>
                  <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.14em] sm:tracking-[0.16em] text-[#2B2724] uppercase mt-1.5 leading-tight">
                    CASES DECREED
                  </span>
                </div>
                <span className="block text-[10px] sm:text-[10.5px] text-[#78716A] font-dm mt-1 leading-snug">
                  Benchmark Judgments
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-white sm:bg-transparent border border-[#E6DDD0] sm:border-0 rounded-xl sm:rounded-none p-3 sm:p-0 shadow-2xs sm:shadow-none flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A1817] leading-none">
                      4
                    </span>
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#A67C38]">
                      APEX
                    </span>
                  </div>
                  <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.14em] sm:tracking-[0.16em] text-[#2B2724] uppercase mt-1.5 leading-tight">
                    BAR REGISTRATIONS
                  </span>
                </div>
                <span className="block text-[10px] sm:text-[10.5px] text-[#78716A] font-dm mt-1 leading-snug">
                  Multi-Jurisdiction Roll
                </span>
              </div>

              {/* Stat 4 */}
              <div className="bg-white sm:bg-transparent border border-[#E6DDD0] sm:border-0 rounded-xl sm:rounded-none p-3 sm:p-0 shadow-2xs sm:shadow-none flex flex-col justify-between">
                <div>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#1A1817] leading-none">
                    1200+
                  </span>
                  <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.14em] sm:tracking-[0.16em] text-[#2B2724] uppercase mt-1.5 leading-tight">
                    CLIENTS REPRESENTED
                  </span>
                </div>
                <span className="block text-[10px] sm:text-[10.5px] text-[#78716A] font-dm mt-1 leading-snug">
                  Pan-India Footprint
                </span>
              </div>
            </div>

            {/* Bottom Row: CTA Button & Distinction Tag */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href="#practice-areas"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98] w-full sm:w-auto"
              >
                <span>OUR PRACTICE AREAS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Distinction Signature Motto */}
              <div className="flex items-center gap-2.5 text-right">
                <span className="h-[1.5px] w-6 bg-[#B88E44] rounded-full hidden sm:block" />
                <div className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.2em] text-[#78716A] uppercase font-dm">
                  <div>DISTINCTION IN LAW</div>
                  <div className="text-[#A67C38]">INTEGRITY IN COURT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
