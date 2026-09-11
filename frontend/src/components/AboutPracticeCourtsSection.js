'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const courtsData = [
  {
    step: '01',
    titleLine1: 'SUPREME COURT',
    titleLine2: 'OF INDIA',
    image: '/court-supreme-steps.jpg',
    alt: 'Classical courthouse circular marble steps curving towards monumental columns',
    description: 'Matters of national importance and constitutional significance.',
  },
  {
    step: '02',
    titleLine1: 'DELHI',
    titleLine2: 'HIGH COURT',
    image: '/court-delhi-high.jpg',
    alt: 'Delhi High Court minimalist limestone architectural facade',
    description: 'A wide range of civil, criminal, and commercial litigation.',
  },
  {
    step: '03',
    titleLine1: 'BOMBAY',
    titleLine2: 'HIGH COURT',
    image: '/court-bombay-high.jpg',
    alt: 'Bombay High Court classical stone archway entrance',
    description: 'Significant matters across varied jurisdictions.',
  },
  {
    step: '04',
    titleLine1: 'APPELLATE &',
    titleLine2: 'TRIBUNAL FORUMS',
    image: '/court-tribunals.jpg',
    alt: 'Modern appellate court tribunal architectural chamber',
    description: 'Representation before various appellate authorities and specialised tribunals.',
  },
];

export default function AboutPracticeCourtsSection() {
  return (
    <section className="relative z-20 w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5]">
      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-10 xs:pt-12 sm:pt-14 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
        
        {/* ================= TOP EYEBROW ROW ================= */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-8 lg:mb-10">
          <span className="w-7 sm:w-10 h-[1.5px] bg-[#B88E44]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
            Practice Across Courts
          </span>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-10 items-stretch">
          
          {/* ================= LEFT COLUMN: "Where We Stand." Narrative ================= */}
          <div className="lg:col-span-3.5 xl:col-span-3 flex flex-col justify-between pr-0 lg:pr-4">
            <div>
              {/* Main Headline (Single line on mobile with exactly 30px size) */}
              <h2 className="font-heading text-[30px] sm:text-4xl lg:text-[46px] xl:text-[54px] font-bold tracking-tight text-[#1A1817] leading-tight whitespace-nowrap">
                <span>Where </span>
                <span className="gold-gradient-shine">We Stand.</span>
              </h2>

              {/* Narrative Paragraph */}
              <p className="mt-3 sm:mt-5 text-[#554E46] text-xs sm:text-[13.5px] leading-relaxed max-w-[340px] font-dm font-normal">
                Our practice spans the highest courts in the country, with a strong presence across constitutional, civil, criminal and commercial matters.
              </p>
            </div>

            {/* Bottom Tagline */}
            <div className="mt-5 sm:mt-8 lg:mt-12">
              <span className="block w-6 h-[1.5px] bg-[#B88E44] mb-2" />
              <div className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-semibold tracking-[0.2em] sm:tracking-[0.22em] text-[#78716A] uppercase font-dm leading-relaxed">
                <span className="block sm:inline">DIFFERENT FORUMS, </span>
                <span className="block sm:inline">A UNIFIED COMMITMENT.</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 4 Arched Court Cards (2x2 on Mobile, 4 Cols on Desktop) ================= */}
          <div className="lg:col-span-8.5 xl:col-span-9 flex flex-col justify-between mt-2 lg:mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-3.5 sm:gap-4.5 xl:gap-5">
              {courtsData.map((court, index) => (
                <div
                  key={index}
                  className="group relative bg-[#FAF8F5] border border-[#E8E1D5] rounded-tl-xl rounded-tr-[32px] sm:rounded-tr-[44px] rounded-bl-[36px] sm:rounded-bl-[48px] rounded-br-none p-2.5 xs:p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#B88E44]/60 hover:-translate-y-1"
                >
                  {/* Top Architectural Photo Frame (Fills full width, with arched top-right and number overlay) */}
                  <div className="relative w-full aspect-[16/11.5] rounded-tl-lg rounded-tr-[28px] sm:rounded-tr-[38px] overflow-hidden border border-[#2B2724]/10 bg-[#E8E3DA]">
                    <Image
                      src={court.image}
                      alt={court.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 260px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Soft gradient in top-left behind number for optimal legibility */}
                    <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#FAF8F5]/90 via-[#FAF8F5]/65 to-transparent pointer-events-none" />

                    {/* Step Number & Diagonal Slash Overlayed Directly On Top-Left of Image */}
                    <div className="absolute top-1.5 sm:top-2 left-2 sm:left-2.5 z-10 select-none">
                      <span className="font-heading text-lg sm:text-[25px] font-bold text-[#1A1817] leading-none drop-shadow-xs">
                        {court.step}
                      </span>
                      <span className="block font-semibold text-[10px] sm:text-xs text-[#B88E44] mt-0.5 ml-0.5 sm:ml-1">
                        /
                      </span>
                    </div>
                  </div>

                  {/* Card Body: Court Name & Narrative */}
                  <div className="mt-3 sm:mt-5">
                    <h3 className="font-dm font-bold text-[10px] xs:text-[10.5px] sm:text-[11.5px] tracking-[0.14em] sm:tracking-[0.16em] text-[#1A1817] uppercase leading-tight">
                      <div>{court.titleLine1}</div>
                      {court.titleLine2 && <div>{court.titleLine2}</div>}
                    </h3>

                    {/* Small Gold Divider Dash */}
                    <span className="block w-4 sm:w-5 h-[1.5px] bg-[#B88E44] my-1.5 sm:my-2.5" />

                    {/* Description */}
                    <p className="font-dm text-[10.5px] sm:text-xs text-[#554E46] leading-relaxed">
                      {court.description}
                    </p>
                  </div>

                  {/* Card Footer: Circular Arrow Button */}
                  <div className="mt-3 sm:mt-5 flex justify-end">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#B88E44]/70 flex items-center justify-center text-[#B88E44] group-hover:bg-[#B88E44] group-hover:text-white group-hover:border-[#B88E44] transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Connecting Timeline Bar (Desktop & Tablet) */}
            <div className="hidden sm:block relative w-full mt-7 pt-4">
              {/* Continuous Hairline Track Line */}
              <div className="w-full h-[1px] bg-[#B88E44]/50" />

              {/* 4 Centered Timeline Nodes aligned under each card */}
              <div className="grid grid-cols-2 lg:grid-cols-4 w-full -mt-[7px]">
                {courtsData.map((_, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="w-3.5 h-3.5 rounded-full border border-[#B88E44] bg-[#FAF8F5] flex items-center justify-center shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88E44]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
