'use client';

import Image from 'next/image';

const courts = [
  {
    step: '01',
    titleLine1: 'SUPREME COURT',
    titleLine2: 'OF INDIA',
    image: '/1.png',
    alt: 'Supreme Court of India iconic central dome and sandstone facade in New Delhi',
    tagLine1: 'NATIONAL',
    tagLine2: 'PERSPECTIVE',
  },
  {
    step: '02',
    titleLine1: 'DELHI HIGH COURT',
    titleLine2: '',
    image: '/2.png',
    alt: 'Delhi High Court building facade with sign board',
    tagLine1: 'CONSTITUTIONAL',
    tagLine2: '& REGIONAL MATTERS',
  },
  {
    step: '03',
    titleLine1: 'BOMBAY HIGH COURT',
    titleLine2: '',
    image: '/3.png',
    alt: 'Bombay High Court Victorian Gothic heritage stone facade with palm trees',
    tagLine1: 'WESTERN REGION',
    tagLine2: 'MATTERS',
  },
  {
    step: '04',
    titleLine1: 'APPELLATE & TRIBUNAL',
    titleLine2: 'FORUMS',
    image: '/4.png',
    alt: 'Modern Appellate and Tribunal Courts with classical colonnade',
    tagLine1: 'SPECIALISED',
    tagLine2: '& APPELLATE MATTERS',
  },
];

export default function PracticeJurisdictionsSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] py-14 sm:py-18 lg:py-22 border-b border-[#E8E1D5] overflow-hidden">
      


      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= HEADER ROW ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-5 sm:pb-6">
          
          {/* Left: Eyebrow + Headline */}
          <div className="max-w-md">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3 sm:mb-3.5">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
              <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                PRACTICE ACROSS JURISDICTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-[#1A1817] leading-[1.08]">
              <span className="block">Across Courts</span>
              <span className="block gold-gradient-shine mt-0.5 sm:mt-1">&amp; Forums.</span>
            </h2>
          </div>

          {/* Middle: Narrative Paragraph with Vertical Divider */}
          <div className="flex items-start gap-4 max-w-sm lg:pb-1">
            <div className="w-[1.5px] h-12 bg-[#D1C8BC] rounded-full self-stretch flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#6B635B] font-dm leading-relaxed">
              Matters are handled across apex, constitutional, appellate and specialised forums,
              depending on the nature and stage of the dispute.
            </p>
          </div>

          {/* Right: Motto with Vertical Divider */}
          <div className="flex items-start gap-3.5 lg:pb-1 flex-shrink-0">
            <div className="w-[1.5px] h-12 bg-[#D1C8BC] rounded-full self-stretch" />
            <div className="flex flex-col gap-0.5 text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm leading-tight">
              <span>DIFFERENT</span>
              <span>FORUMS.</span>
              <span>A STRONGER</span>
              <span>PURSUIT OF JUSTICE.</span>
            </div>
          </div>

        </div>

        {/* ================= 4 COURTS TIMELINE / JURISDICTION CARDS ================= */}
        <div className="relative mt-4 sm:mt-5 lg:mt-6">
          


          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-6 xl:gap-8 relative z-10">
            {courts.map((court) => (
              <div
                key={court.step}
                className="group flex flex-col justify-between transition-all duration-300"
              >
                {/* Top: Serif Number + Title */}
                <div>
                  {/* Step Number in Serif */}
                  <span className="block font-serif text-2xl sm:text-3xl text-[#9E6728] font-normal mb-1.5 select-none">
                    {court.step}
                  </span>

                  {/* Court Title */}
                  <h3 className="font-heading font-semibold text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#1A1817] tracking-[0.16em] uppercase leading-snug min-h-[38px] group-hover:text-[#9E6728] transition-colors">
                    <span>{court.titleLine1}</span>
                    {court.titleLine2 && <span className="block">{court.titleLine2}</span>}
                  </h3>
                </div>

                {/* Middle: Architectural Building Photo with Feathered Vignette Mask */}
                <div className="relative w-full aspect-[4/3] overflow-hidden my-3 sm:my-4">
                  <Image
                    src={court.image}
                    alt={court.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    style={{ filter: 'grayscale(100%) sepia(20%) contrast(0.95) brightness(0.97)' }}
                  />
                  
                  {/* Soft left+right edge fade to blend cards */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#FAF8F5] to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#FAF8F5] to-transparent pointer-events-none" />
                  {/* Soft bottom vignette / mist fade out matching #FAF8F5 background */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/70 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Tag */}
                <div className="pt-1">
                  <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#78716A] uppercase font-dm block group-hover:text-[#1A1817] transition-colors">
                    {court.tagLine1}
                    {court.tagLine2 && <span className="block">{court.tagLine2}</span>}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
