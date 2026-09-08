'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable Advocate Portrait Card component
 */
function AdvocatePortraitCard() {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[370px] xl:max-w-[400px]">
      {/* Image Frame with Double Border Matting */}
      <div className="relative p-1.5 sm:p-2 bg-[#FAF8F5] border border-[#2B2724] shadow-xl rounded-sm">
        <div className="relative aspect-[4/4.1] w-full overflow-hidden bg-[#241716]">
          <Image
            src="/senior-counsel.jpg"
            alt="Senior Counsel / Advocate - Trinetra Law Chambers"
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            className="object-cover object-[center_12%] hover:scale-[1.02] transition-transform duration-500"
            priority
          />

          {/* Top Right Inset Quote Placard */}
          <div className="absolute top-2.5 right-2.5 max-w-[125px] p-2 bg-[#FAF8F5]/95 backdrop-blur-sm border border-[#C4A053]/50 shadow-md text-right pointer-events-none">
            <p className="text-[8px] sm:text-[8.5px] font-serif tracking-[0.16em] text-[#3D352F] uppercase leading-tight font-bold">
              A JUST SOCIETY BUILDS A STRONGER NATION
            </p>
          </div>
        </div>
      </div>

      {/* Caption Underneath the Frame */}
      <div className="mt-2.5 sm:mt-3 flex items-center justify-between px-1">
        <div>
          <p className="text-xs sm:text-[13.5px] font-semibold text-[#1F1C1A] tracking-tight">
            Senior Counsel / Advocate
          </p>
          <p className="text-[11px] sm:text-xs text-[#78716A]">New Delhi</p>
        </div>
        {/* Gold Accent Line */}
        <span className="h-[2px] w-8 bg-[#B88E44] rounded-full" />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden border-b border-[#E8E1D5]">
      {/* Full-width Background Supreme Court Watermark Image */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/hero-bg-image.png"
          alt="Supreme Court of India Backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right-bottom opacity-85 mix-blend-multiply"
        />
        {/* Soft radial overlay for crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent w-full lg:w-3/5" />
      </div>

      {/* Main Full-Width Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 lg:pt-7 pb-8 sm:pb-10 lg:pb-12">
        {/* Top Taglines Bar (Edge-to-Edge on desktop, clean balanced 2-tier on mobile) */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between justify-center gap-1.5 sm:gap-4 border-b border-[#E8E1D5] pb-2.5 sm:pb-3 mb-5 sm:mb-8 text-center sm:text-left">
          <span className="text-[10px] sm:text-[11.5px] font-medium tracking-[0.16em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm">
            ADVOCACY FOR A STRONGER TOMORROW
          </span>
          <div className="flex items-center gap-2 text-[9.5px] sm:text-[11.5px] font-medium tracking-[0.18em] sm:tracking-[0.24em] text-[#8C847B] sm:text-[#78716A] uppercase font-dm">
            <span>LAW</span>
            <span className="text-[#B88E44]/70 font-normal">|</span>
            <span>STRATEGY</span>
            <span className="text-[#B88E44]/70 font-normal">|</span>
            <span>JUSTICE</span>
          </div>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Headlines, Mobile Portrait & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Label with Gold Accent Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#4A1118] uppercase">
                TRINETRA LAW CHAMBERS
              </span>
              <span className="h-[1.5px] w-12 bg-[#B88E44] rounded-full" />
            </div>

            {/* Main Headline (Poppins font strictly on two natural lines) */}
            <h1 className="font-heading tracking-tight text-[#1A1817] leading-[1.08] text-3xl sm:text-5xl lg:text-[50px] xl:text-[58px] font-extrabold">
              <span className="block">Clarity in Law.</span>
              <span className="block mt-1 sm:whitespace-nowrap">
                <span className="gold-gradient-shine">Confidence in Court.</span>
              </span>
            </h1>

            {/* Description Subtitle (DM Sans font) */}
            <p className="mt-3.5 sm:mt-4 text-[#504A44] text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-dm">
              A litigation-focused law chamber representing clients in complex constitutional,
              corporate and criminal matters before the Supreme Court of India and High Courts.
            </p>

            {/* MOBILE ONLY: Portrait image placed above the action buttons */}
            <div className="lg:hidden my-6 w-full flex justify-center">
              <AdvocatePortraitCard />
            </div>

            {/* CTA Buttons: Side-by-Side on all screens including Mobile */}
            <div className="mt-2 sm:mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-4 w-full sm:w-auto">
              <Link
                href="#practice-areas"
                className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-7 py-3 sm:py-3.5 bg-[#4A1118] hover:bg-[#380C12] text-white text-[11px] sm:text-sm font-semibold tracking-wide rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98] text-center"
              >
                <span>Explore Practice Areas</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#consultation"
                className="inline-flex items-center justify-center px-3 sm:px-7 py-3 sm:py-3.5 bg-transparent hover:bg-[#4A1118]/5 text-[#4A1118] text-[11px] sm:text-sm font-semibold tracking-wide border border-[#4A1118] rounded-sm transition-all duration-200 active:scale-[0.98] text-center"
              >
                <span>Request a Consultation</span>
              </Link>
            </div>

            {/* Lower Credential Strip */}
            <div className="mt-8 sm:mt-10 pt-4 border-t border-[#E8E1D5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center whitespace-nowrap gap-1.5 sm:gap-2 text-[8.5px] min-[360px]:text-[9.5px] min-[400px]:text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.11em] min-[360px]:tracking-[0.14em] sm:tracking-[0.2em] text-[#554E46] uppercase font-dm">
                <span>SUPREME COURT OF INDIA</span>
                <span className="text-[#B88E44]">•</span>
                <span>HIGH COURTS</span>
                <span className="text-[#B88E44]">•</span>
                <span>NEW DELHI</span>
              </div>

              {/* Vertical Motto Pillar */}
              <div className="text-[9.5px] font-medium tracking-[0.24em] text-[#8C847B] uppercase leading-tight font-serif hidden md:block">
                <div>JUSTICE</div>
                <div>CONSTITUTION</div>
                <div>DEMOCRACY</div>
                <div>ALWAYS</div>
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY: Right Column Framed Portrait */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center lg:items-end">
            <AdvocatePortraitCard />
          </div>
        </div>
      </div>
    </section>
  );
}
