'use client';

import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-84px)] bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5] flex flex-col justify-between">
      
      {/* Top Header Strip (ADVOCACY FOR A STRONGER TOMORROW | LAW STRATEGY JUSTICE) */}
      <div className="w-full border-b border-[#E8E1D5] bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto px-3 xs:px-4 sm:px-8 lg:px-12 xl:px-16 py-2 sm:py-2.5 flex items-center justify-between gap-2 text-[7.5px] xs:text-[8.5px] sm:text-[10.5px] font-semibold tracking-[0.1em] xs:tracking-[0.16em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm">
          <span className="truncate">ADVOCACY FOR A STRONGER TOMORROW</span>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <span>LAW</span>
            <span className="text-[#B88E44]/70">|</span>
            <span>STRATEGY</span>
            <span className="text-[#B88E44]/70">|</span>
            <span>JUSTICE</span>
          </div>
        </div>
      </div>

      {/* Main Container - Perfectly fills first frame / viewport */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-10 flex-grow flex flex-col justify-center">
        
        {/* Main Grid: Left Narrative + Center Motto + Right Architectural & Accent Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
          
          {/* ================= LEFT COLUMN: Headline & Chamber Narrative ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-6 xl:pr-10 z-10">
            <div>
              {/* Eyebrow Header Tag */}
              <div className="flex items-center gap-3 mb-3 sm:mb-5">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
                <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm">
                  About Trinetra Law Chambers
                </span>
              </div>

              {/* Main Headline (Fully responsive on mobile) */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] font-bold tracking-tight text-[#1A1817] leading-[1.1] sm:leading-[1.08]">
                <span className="block break-words sm:whitespace-nowrap">Built on Principle.</span>
                <span className="block gold-gradient-shine break-words sm:whitespace-nowrap mt-1 sm:mt-2">Driven by Purpose.</span>
              </h1>

              {/* Chamber Overview Paragraph (DM Sans Subheading) */}
              <p className="mt-3.5 sm:mt-5 text-[#554E46] text-xs sm:text-[15px] leading-relaxed max-w-[430px] font-dm font-normal">
                Trinetra Law Chambers is a full-service legal practice committed to providing
                thoughtful, strategic and effective legal solutions. We combine deep legal
                knowledge with a client-first approach to navigate complex matters and deliver
                meaningful outcomes.
              </p>
            </div>

            {/* Bottom Tag: EST. 2008 • NEW DELHI */}
            <div className="mt-4 sm:mt-5 lg:mt-7 flex items-center gap-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
              <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm">
                EST. 2008 &nbsp;•&nbsp; NEW DELHI
              </span>
            </div>
          </div>

          {/* ================= CENTER COLUMN: Motto with matched-height vertical line (Desktop only) ================= */}
          <div className="hidden lg:flex lg:col-span-1 relative flex-col items-start justify-start pt-1 xl:pt-2 self-start z-10">
            {/* Flex container matching the vertical line to exact height of text */}
            <div className="flex items-stretch gap-2.5 xl:gap-3 pl-2 xl:pl-3">
              {/* Vertical line - strictly as long as the text */}
              <div className="w-[1.5px] bg-[#D4CCC0] self-stretch rounded-full" />

              {/* Vertical Motto Text */}
              <div className="flex flex-col items-start gap-1 text-[8px] xl:text-[9px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm leading-tight py-0.5">
                <span>JUSTICE</span>
                <span>CONSTITUTION</span>
                <span>DEMOCRACY</span>
                <span>ALWAYS</span>
                <span className="w-4 h-[1.5px] bg-[#B88E44] mt-1" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SECTION: Visual Portico & Right Accent Blocks ================= */}
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            
            {/* Desktop Layout Container */}
            <div className="relative w-full flex flex-col lg:flex-row items-stretch justify-end">
              
              {/* Supreme Court Architectural Colonnade View */}
              <div className="relative w-full lg:w-[70%] xl:w-[72%] h-[240px] xs:h-[280px] sm:h-[340px] lg:h-[390px] border border-[#E8E1D5] overflow-hidden bg-[#EAE6DF] shadow-sm">
                <Image
                  src="/about-supreme-court-arch.jpg"
                  alt="Grand dome of Supreme Court of India viewed through monumental sandstone columns"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                {/* Soft ambient lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Vertical Column: Wine Red Panel + 18+ Years Stat Box (Equal height on mobile) */}
              <div className="w-full lg:w-[30%] xl:w-[28%] flex flex-row lg:flex-col justify-between mt-3 lg:mt-0 lg:border-l lg:border-[#E8E1D5]">
                
                {/* Wine Red / Maroon Panel */}
                <div className="w-1/2 lg:w-full bg-[#4A1118] text-[#FAF8F5] p-3.5 sm:p-4 lg:p-4 flex flex-col justify-between min-h-[145px] sm:min-h-[160px] lg:h-[205px] shadow-sm">
                  <div className="text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.2em] sm:tracking-[0.22em] text-[#E8DDD0] uppercase font-dm leading-relaxed">
                    <div>LAW</div>
                    <div>STRATEGY</div>
                    <div>JUSTICE</div>
                  </div>

                  <div className="my-1 sm:my-2">
                    <span className="block w-[1px] h-4 sm:h-6 bg-[#B88E44]/70" />
                  </div>

                  <p className="font-editorial italic text-[11.5px] sm:text-[12.5px] text-[#F0E6D9] leading-tight">
                    For a<br />
                    Stronger<br />
                    Tomorrow
                  </p>
                </div>

                {/* 18+ Years of Practice Box */}
                <div className="w-1/2 lg:w-full bg-[#FAF8F5] p-3.5 sm:p-4 lg:p-4 flex flex-col justify-end min-h-[145px] sm:min-h-[160px] lg:h-[185px] border-l lg:border-l-0 border-[#E8E1D5]">
                  <div className="font-heading text-3xl sm:text-4xl lg:text-[44px] text-[#6B635B] font-light leading-none">
                    18+
                  </div>
                  <div className="mt-1 text-[8px] sm:text-[9.5px] font-semibold tracking-[0.2em] sm:tracking-[0.22em] text-[#78716A] uppercase font-dm leading-tight">
                    <div>YEARS OF</div>
                    <div>PRACTICE</div>
                  </div>
                  <span className="w-6 h-[1.5px] bg-[#B88E44] mt-2 sm:mt-2.5" />
                </div>
              </div>

              {/* Floating Overlapping Card: Stack of Law Books on Mahogany Desk */}
              <div className="lg:absolute lg:left-[-6%] xl:left-[-8%] lg:bottom-1 z-20 w-full sm:w-[260px] lg:w-[240px] xl:w-[270px] mt-3 lg:mt-0">
                <div className="relative flex items-stretch shadow-xl bg-[#FAF8F5]">
                  {/* Left Gold Accent Tab */}
                  <div className="w-2 sm:w-2.5 bg-[#B88E44] shrink-0" />

                  {/* Law Books Photographic Frame */}
                  <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden border border-[#2B2724]/25 bg-[#241716]">
                    <Image
                      src="/about-law-books.jpg"
                      alt="Constitution of India, Civil Procedure, and Law & Justice leather books with fountain pen on desk"
                      fill
                      sizes="(max-width: 768px) 100vw, 270px"
                      className="object-cover hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile Only: Horizontal Mottos Bar */}
            <div className="lg:hidden mt-4 pt-3 border-t border-[#E8E1D5] flex flex-wrap items-center justify-center sm:justify-between gap-x-3 gap-y-1.5 text-[8px] sm:text-[9.5px] font-semibold tracking-[0.14em] sm:tracking-[0.2em] text-[#78716A] uppercase font-dm">
              <span>JUSTICE</span>
              <span className="text-[#B88E44]">•</span>
              <span>CONSTITUTION</span>
              <span className="text-[#B88E44]">•</span>
              <span>DEMOCRACY</span>
              <span className="text-[#B88E44]">•</span>
              <span>ALWAYS</span>
            </div>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM METADATA BAR ================= */}
      <div className="w-full border-t border-[#E8E1D5] bg-[#FAF8F5]">
        <div className="w-full max-w-[1440px] mx-auto px-3 xs:px-4 sm:px-8 lg:px-12 xl:px-16 py-2 sm:py-2.5 flex items-center justify-between gap-2 text-[7.5px] xs:text-[8.5px] sm:text-[10.5px] font-semibold tracking-[0.1em] xs:tracking-[0.16em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm">
          <div className="flex items-center gap-1 sm:gap-2">
            <span>PEOPLE</span>
            <span className="text-[#B88E44]/70">|</span>
            <span>PERSPECTIVE</span>
            <span className="text-[#B88E44]/70">|</span>
            <span>PROGRESS</span>
          </div>
          <span className="shrink-0 text-[#1A1817] sm:text-[#78716A]">
            TRINETRA LAW CHAMBERS
          </span>
        </div>
      </div>

    </section>
  );
}
