'use client';

import Image from 'next/image';
import { BookOpen, Scale, Landmark } from 'lucide-react';

export default function ChambersPerspectiveSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5]">
      <div className="w-full flex flex-col lg:flex-row min-h-[480px] lg:min-h-[540px] xl:min-h-[580px]">

        {/* ─── Left Column (Editorial Perspective) ─────────────────── */}
        <div className="w-full lg:w-[57%] xl:w-[58%] flex flex-col justify-between px-4 xs:px-6 sm:px-10 md:px-14 lg:pl-12 lg:pr-8 xl:pl-20 xl:pr-14 py-8 lg:py-10 relative z-10">

          {/* Top Eyebrow */}
          <div className="flex items-center gap-3 mb-4 lg:mb-5">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
              THE CHAMBERS&apos; PERSPECTIVE
            </span>
          </div>

          {/* Core Body */}
          <div className="my-auto py-1">
            {/* Left micro-stack */}
            <div className="hidden sm:flex flex-col gap-[3px] text-[8.5px] sm:text-[9px] font-semibold tracking-[0.22em] text-[#8C827A] uppercase font-dm leading-tight mb-3.5 select-none">
              <span>DIFFERENT</span>
              <span>MATTERS.</span>
              <span>A DEEPER</span>
              <span>APPROACH.</span>
            </div>

            {/* Large Poppins Headline */}
            <h2 className="font-heading text-[30px] sm:text-[34px] lg:text-[38px] xl:text-[42px] font-bold leading-[1.18] text-[#1A1817] tracking-tight mb-5">
              <span className="block">Not every matter requires</span>
              <span className="block">the same strategy.</span>
              <span className="gold-gradient-shine block mt-1">
                <span className="block">Every matter deserves</span>
                <span className="block">the right one.</span>
              </span>
            </h2>

            {/* Sub-bar / Chambers creed */}
            <div className="mb-5 sm:mb-6">
              <div className="w-7 h-[1.5px] bg-[#9E6728] mb-2" />
              <h3 className="font-serif text-[12px] sm:text-[13px] font-bold tracking-[0.26em] text-[#1A1817] uppercase">
                TRINETRA LAW CHAMBERS
              </h3>
              <p className="text-[11.5px] sm:text-[12px] text-[#78716A] font-dm mt-1">
                Precision in preparation. Clarity in advocacy.
              </p>
            </div>

            {/* 3 Pillar Value Badges with vertical dividers */}
            <div className="grid grid-cols-3 max-w-md sm:max-w-lg border-t border-b border-[#E8E1D5]/80 py-3 my-1.5 divide-x divide-[#E8E1D5]">
              {/* Pillar 1 */}
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3 group">
                <BookOpen className="w-5 h-5 text-[#9E6728] stroke-[1.3] mb-1.5 group-hover:scale-105 transition-transform duration-200" />
                <span className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.2em] text-[#2D2926] uppercase font-dm leading-snug">
                  DEEPER<br />UNDERSTANDING
                </span>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3 group">
                <Scale className="w-5 h-5 text-[#9E6728] stroke-[1.3] mb-1.5 group-hover:scale-105 transition-transform duration-200" />
                <span className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.2em] text-[#2D2926] uppercase font-dm leading-snug">
                  STRONGER<br />STRATEGY
                </span>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3 group">
                <Landmark className="w-5 h-5 text-[#9E6728] stroke-[1.3] mb-1.5 group-hover:scale-105 transition-transform duration-200" />
                <span className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.2em] text-[#2D2926] uppercase font-dm leading-snug">
                  A FAIRER<br />TOMORROW
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Left Branding */}
          <div className="pt-4 border-t border-[#E8E1D5]/60 mt-auto">
            <span className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.24em] text-[#8C827A] uppercase font-dm select-none">
              TRINETRA LAW CHAMBERS
            </span>
          </div>
        </div>

        {/* ─── Right Column (Court & Advocate Photograph) ─────────── */}
        <div className="w-full lg:w-[43%] xl:w-[42%] relative min-h-[380px] sm:min-h-[440px] lg:min-h-[auto] overflow-hidden">
          <Image
            src="/pratice-court.png"
            alt="Advocate walking toward Supreme Court of India - Trinetra Law Chambers"
            fill
            quality={100}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_62%]"
            priority
          />

          {/* Subtle gradient to naturally blend edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/15 via-transparent to-black/25 pointer-events-none" />

          {/* Overlay: Pillar Wall typography (Middle-Left) */}
          <div className="absolute top-[43%] left-[7%] sm:left-[9%] flex flex-col gap-1 text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.22em] text-[#E8DFC8]/50 uppercase font-dm leading-tight select-none pointer-events-none">
            <span>ARGUE</span>
            <span>PERSUADE</span>
            <span>PROTECT</span>
            <span>UPHOLD</span>
          </div>

          {/* Overlay: Top-Right Stack */}
          <div className="absolute top-8 sm:top-10 right-6 sm:right-8 flex flex-col items-end gap-1.5 select-none pointer-events-none">
            <div className="w-[1px] h-6 bg-[#9E6728]/70" />
            <div className="flex flex-col gap-[3px] text-[8px] sm:text-[9px] font-semibold tracking-[0.22em] text-[#FAF8F5]/75 uppercase font-dm leading-none text-right">
              <span>PEOPLE</span>
              <span>LAW</span>
              <span>JUSTICE</span>
              <span>A FAIRER</span>
              <span>TOMORROW</span>
            </div>
          </div>

          {/* Overlay: Middle-Right Principles */}
          <div className="absolute top-[46%] sm:top-[48%] right-6 sm:right-8 flex flex-col items-end gap-2 select-none pointer-events-none">
            <div className="flex flex-col gap-[3px] text-[8px] sm:text-[9px] font-semibold tracking-[0.22em] text-[#FAF8F5]/75 uppercase font-dm leading-none text-right">
              <span>SAME</span>
              <span>PRINCIPLES.</span>
              <span>A STRONGER</span>
              <span>TOMORROW.</span>
            </div>
            <div className="w-6 h-[1.5px] bg-[#9E6728]/70" />
          </div>

          {/* Overlay: Bottom-Right Justice Creed */}
          <div className="absolute bottom-16 sm:bottom-18 right-6 sm:right-8 flex flex-col gap-[3px] text-[7.5px] sm:text-[8.5px] font-semibold tracking-[0.24em] text-[#FAF8F5]/55 uppercase font-dm leading-none text-right select-none pointer-events-none">
            <span>JUSTICE</span>
            <span>LIVES IN</span>
            <span>PEOPLE LIKE YOU.</span>
          </div>

          {/* Bottom Bar: Right Motto */}
          <div className="absolute bottom-0 inset-x-0 h-10 border-t border-white/10 flex items-center justify-end px-6 sm:px-8 bg-black/25 backdrop-blur-[1px]">
            <div className="flex items-center gap-2 text-[8px] sm:text-[9px] font-semibold tracking-[0.22em] text-[#FAF8F5]/85 uppercase font-dm">
              <span className="w-6 h-[1.5px] bg-[#9E6728]" />
              <span>BEYOND DISPUTES. TOWARDS A FAIRER TOMORROW.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
