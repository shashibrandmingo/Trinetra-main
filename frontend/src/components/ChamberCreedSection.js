'use client';

import Image from 'next/image';

export default function ChamberCreedSection() {
  return (
    <section className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5] overflow-hidden pt-8 sm:pt-10 lg:pt-0">
      <div className="w-full max-w-[1536px] mx-auto flex flex-col lg:flex-row items-stretch justify-between min-h-[240px] sm:min-h-[260px] lg:h-[280px]">
        {/* Left Wing: Slender chember-left.png with Overlaid LAW PEOPLE PURPOSE Motto */}
        <div className="relative hidden lg:block w-44 lg:w-48 xl:w-56 h-full flex-shrink-0 overflow-hidden border-r border-[#E8E1D5]/60 select-none">
          <Image
            src="/chember-left.png"
            alt="Classical Courtroom Marble Pillar Column"
            fill
            sizes="(max-width: 1280px) 200px, 240px"
            className="object-cover object-right"
            priority
          />
          {/* Soft vignette fade */}
          <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-r from-transparent to-[#FAF8F5]/40 pointer-events-none" />

          {/* Overlaid Motto on the cream wall area */}
          <div className="absolute inset-y-0 left-4 xl:left-6 flex items-center z-10 pointer-events-none">
            <div className="flex items-center gap-2.5">
              <span className="h-11 w-[1.5px] bg-[#B88E44]" />
              <div className="flex flex-col text-[9px] xl:text-[9.5px] font-bold tracking-[0.24em] uppercase font-dm leading-tight drop-shadow-sm">
                <span className="text-[#8C6D37]">LAW</span>
                <span className="text-[#9E9080] mt-0.5">PEOPLE</span>
                <span className="text-[#B5A898] mt-0.5">PURPOSE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Wing: Chamber Jurisprudence & Creed Main Quote Block */}
        <div className="flex-1 min-w-0 flex flex-col justify-center px-4 sm:px-8 lg:px-10 xl:px-14 py-5 sm:py-7 lg:py-5 z-10">
          {/* Top Eyebrow Row: Chamber Jurisprudence & Creed | Est. 2008 */}
          <div className="flex items-center justify-between pb-2 sm:pb-2.5 border-b border-[#E8E1D5]">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="h-[1.5px] w-5 sm:w-6 bg-[#B88E44] rounded-full" />
              <span className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                CHAMBER JURISPRUDENCE &amp; CREED
              </span>
            </div>
            <span className="text-[9.5px] sm:text-[10.5px] font-mono font-bold tracking-[0.16em] text-[#8C847B] uppercase">
              EST. 2008
            </span>
          </div>

          {/* Central Quote Block with Dedicated Opening Quotation Mark */}
          <div className="pt-4 sm:pt-6 pb-3.5 sm:pb-5">
            <div className="flex items-start gap-2.5 sm:gap-3">
              {/* Distinct Quotation Mark on Left */}
              <span
                className="text-4xl sm:text-5xl lg:text-[52px] font-serif text-[#B88E44]/40 leading-none select-none flex-shrink-0 -mt-0.5 sm:-mt-1"
                aria-hidden="true"
              >
                “
              </span>

              {/* Thinner, refined, elegant quote typography with fluid natural wrap */}
              <blockquote className="font-heading font-light text-[15px] min-[380px]:text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[18.5px] text-[#1A1817] leading-[1.55] sm:leading-[1.48] tracking-tight">
                In the courtroom,{' '}
                <span className="font-normal text-[#9E7333]">victories are never accidental.</span>{' '}
                They are engineered through constitutional depth, relentless preparation, and fearlessness before the bench.”
              </blockquote>
            </div>
          </div>

          {/* Attributor & Chamber Credentials */}
          <div className="pt-1 flex items-center gap-2.5 sm:gap-3">
            <span className="h-7 w-[2px] bg-[#B88E44] rounded-full flex-shrink-0" />
            <div className="font-dm">
              <h4 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#2B2724] uppercase">
                SENIOR ADVOCATE &amp; LEAD COUNSEL
              </h4>
              <p className="text-[11px] sm:text-[11.5px] text-[#78716A] mt-0.5 font-medium">
                Supreme Court of India &amp; High Courts of Delhi / Bombay
              </p>
            </div>
          </div>

          {/* Mobile & Tablet Responsive Image Showcase */}
          <div className="lg:hidden mt-5 pt-3.5 border-t border-[#E8E1D5] flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              {/* Left Mobile Image Snippet: Marble Column */}
              <div className="relative h-24 min-[400px]:h-28 rounded-xl overflow-hidden border border-[#E2D8C8] shadow-2xs">
                <Image
                  src="/pillar-creed.jpg"
                  alt="Classical Courtroom Marble Pillar Column"
                  fill
                  sizes="200px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-2 sm:p-2.5">
                  <span className="text-[8px] min-[380px]:text-[8.5px] font-bold tracking-[0.16em] text-[#FAF8F5] uppercase drop-shadow font-dm">
                    LAW • PEOPLE • PURPOSE
                  </span>
                </div>
              </div>

              {/* Right Mobile Image Snippet: Montblanc Pen & Judgment */}
              <div className="relative h-24 min-[400px]:h-28 rounded-xl overflow-hidden border border-[#E2D8C8] shadow-2xs">
                <Image
                  src="/fountain-pen-creed.jpg"
                  alt="Luxury Fountain Pen on Supreme Court Legal Parchment"
                  fill
                  sizes="200px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-2 sm:p-2.5">
                  <span className="text-[8px] min-[380px]:text-[8.5px] font-bold tracking-[0.16em] text-[#FAF8F5] uppercase drop-shadow font-dm">
                    JUSTICE BUILDS TOMORROW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Wing: Slender chember-right.png with Overlaid JUSTICE BUILDS A STRONGER TOMORROW Motto */}
        <div className="relative hidden lg:block w-44 lg:w-48 xl:w-56 h-full flex-shrink-0 overflow-hidden border-l border-[#E8E1D5]/60 select-none">
          <Image
            src="/chember-right.png"
            alt="Luxury Fountain Pen on Supreme Court Legal Parchment"
            fill
            sizes="(max-width: 1280px) 200px, 240px"
            className="object-cover object-bottom"
            priority
          />
          {/* Soft vignette fade */}
          <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-l from-transparent to-[#FAF8F5]/40 pointer-events-none" />

          {/* Overlaid Motto on the parchment paper area */}
          <div className="absolute inset-y-0 left-4 xl:left-6 flex items-center z-10 pointer-events-none">
            <div className="flex items-center gap-2.5">
              <span className="h-11 w-[1.5px] bg-[#B88E44]" />
              <div className="flex flex-col text-[9px] xl:text-[9.5px] font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm leading-snug drop-shadow-sm">
                <span>JUSTICE</span>
                <span className="text-[#9E9080]">BUILDS</span>
                <span className="text-[#B5A898]">A STRONGER</span>
                <span className="text-[#C4B7A7]">TOMORROW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
