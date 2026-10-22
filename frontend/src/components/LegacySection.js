'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Landmark, FileText } from 'lucide-react';

export default function LegacySection() {
  return (
    <section className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5]">
      {/* 1. TOP METRICS & STATS BAR (Compact & Sleek) */}
      <div className="w-full border-b border-[#E8E1D5]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3">
          {/* Stat 1: 9+ Years */}
          <div className="py-3 sm:py-3.5 px-4 sm:px-6 xl:px-8 flex items-center gap-2.5 sm:gap-3 border-b sm:border-b-0 sm:border-r border-[#E8E1D5]">
            <span className="font-heading font-extrabold text-xl sm:text-2xl lg:text-[26px] text-[#4A1118] tracking-tight leading-none">
              9+
            </span>
            <span className="font-heading font-bold text-[12px] sm:text-[13px] xl:text-[14px] text-[#1A1817] leading-tight">
              Years Litigation Experience
            </span>
          </div>

          {/* Stat 2: Supreme Court & High Courts */}
          <div className="py-3 sm:py-3.5 px-4 sm:px-6 xl:px-8 flex items-center gap-2.5 sm:gap-3 border-b sm:border-b-0 sm:border-r border-[#E8E1D5]">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#EFE9DF] border border-[#D9CFC1] flex items-center justify-center flex-shrink-0 text-[#8C6D37]">
              <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <h3 className="font-heading font-bold text-[12px] sm:text-[13px] xl:text-[14px] text-[#1A1817] leading-tight">
              Supreme Court &amp; High Courts
            </h3>
          </div>

          {/* Stat 3: Academic Qualifications */}
          <div className="py-3 sm:py-3.5 px-4 sm:px-6 xl:px-8 flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#EFE9DF] border border-[#D9CFC1] flex items-center justify-center flex-shrink-0 text-[#8C6D37]">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <h3 className="font-heading font-bold text-[12px] sm:text-[13px] xl:text-[14px] text-[#1A1817] leading-tight">
              LL.M. &bull; Ph.D. in Law
            </h3>
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
            <span className="block">Experience in Litigation.</span>
            <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
              Commitment to Every Matter.
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
                  src="/chamber-team.jpg"
                  alt="Trinetra Law Chambers — Legal Team led by Dr. Monika Anand"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                />
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
              Monika Anand is a Law Graduate, LL.M. and Ph.D. in Law with 9+ years of experience in litigation, with exposure to criminal, constitutional, civil, matrimonial, service, tax and other legal proceedings.
For the past five years, her practice has included work in and around the Supreme Court of India, with experience in legal research, case preparation, court procedure and higher-court litigation.
            </p>

            {/* Bottom Row: CTA Button & Distinction Tag */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href="#practice-areas"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98] w-full sm:w-auto"
              >
                <span>DISCUSS YOUR MATTER</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
