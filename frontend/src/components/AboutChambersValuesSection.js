'use client';

import Image from 'next/image';

const chambersPillars = [
  {
    step: '01',
    titleLine1: 'Constitutional',
    titleLine2: 'Depth',
    subtitle: 'Deep understanding of constitutional and statutory law.',
    image: '/chambers-constitution-depth.jpg',
    alt: 'Classical sandstone pillar base engraved with Constitution of India',
    bottomTag: 'ROOTED IN LAW',
  },
  {
    step: '02',
    titleLine1: 'Strategic',
    titleLine2: 'Advocacy',
    subtitle: 'Preparation built around the facts, law and long-term objective.',
    image: '/chambers-strategic-advocacy.jpg',
    alt: 'Stack of Strategy, Analysis, Argument, Outcome law books on mahogany desk with fountain pen',
    bottomTag: 'DRIVEN BY PURPOSE',
  },
  {
    step: '03',
    titleLine1: 'Personal',
    titleLine2: 'Counsel',
    subtitle: 'Direct, considered and confidential legal guidance.',
    image: '/chambers-personal-counsel.jpg',
    alt: 'Chamber consultation desk with brass scales of justice and executive leather armchair',
    bottomTag: 'A MORE CONSIDERED APPROACH',
  },
];

export default function AboutChambersValuesSection() {
  return (
    <section className="relative z-20 w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-t border-[#E8E1D5] shadow-[0_-25px_60px_-15px_rgba(26,24,23,0.20)]">
      {/* Top Parallax Elevation Vignette */}
      <div className="absolute top-0 inset-x-0 h-8 pointer-events-none bg-gradient-to-b from-black/[0.04] to-transparent z-30" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-12 xs:pt-14 sm:pt-16 lg:pt-12 pb-8 sm:pb-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
          
          {/* ================= LEFT COLUMN: "More Than a Practice." ================= */}
          <div className="lg:col-span-4 xl:col-span-3.5 flex flex-col justify-between pr-0 lg:pr-6 xl:pr-8">
            <div>
              {/* Top Eyebrow Tag */}
              <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
                <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                  THE CHAMBERS
                </span>
              </div>

              {/* Main Headline (Strictly 2 lines) */}
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-bold tracking-tight text-[#1A1817] leading-[1.08]">
                <span className="block">More Than a</span>
                <span className="block gold-gradient-shine mt-1 sm:mt-1.5">Practice.</span>
              </h2>

              {/* Gold Accent Dash */}
              <div className="my-3.5 sm:my-4">
                <span className="block w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
              </div>

              {/* Description Paragraph */}
              <p className="text-[#554E46] text-sm sm:text-[14.5px] leading-relaxed max-w-[340px] font-dm font-normal">
                At Trinetra Law Chambers, we go beyond representation. We bring together deep
                legal knowledge, strategic thinking and a personal commitment to every matter
                we undertake.
              </p>
            </div>

            {/* Bottom Left: Four Pillars Text (Desktop only) */}
            <div className="hidden lg:flex mt-6 lg:mt-8 pt-2 flex-col gap-0.5 text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.26em] text-[#78716A] uppercase font-dm leading-tight">
              <span>JUSTICE</span>
              <span>CONSTITUTION</span>
              <span>DEMOCRACY</span>
              <span>ALWAYS</span>
            </div>
          </div>

          {/* ================= RIGHT 3 COLUMNS: Values & Methodology Pillars ================= */}
          <div className="lg:col-span-8 xl:col-span-8.5 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {chambersPillars.map((item, idx) => (
              <div
                key={item.step}
                className={`flex flex-col justify-between pl-0 md:pl-4 lg:pl-5 xl:pl-6 pr-0 md:pr-3 lg:pr-4 xl:pr-5 pt-2 md:pt-0 ${
                  idx !== 0 ? 'md:border-l md:border-[#E8E1D5]' : 'lg:border-l lg:border-[#E8E1D5]'
                }`}
              >
                <div>
                  {/* Step Number & Gold Connector Dash */}
                  <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                    <span className="font-editorial text-4xl sm:text-5xl xl:text-6xl text-[#D8CFC2] leading-none">
                      {item.step}
                    </span>
                    <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
                  </div>

                  {/* Title (Single line: Constitutional Depth / Strategic Advocacy / Personal Counsel) */}
                  <h3 className="font-heading text-xl sm:text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-[#4A1118] tracking-tight leading-tight">
                    <span>{item.titleLine1} {item.titleLine2}</span>
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="mt-2 text-xs sm:text-[13px] text-[#6B635B] leading-relaxed font-dm">
                    {item.subtitle}
                  </p>

                  {/* High-res Image Frame (Full width, tight spacing) */}
                  <div className="mt-3.5 sm:mt-4 relative aspect-[4/3] w-full overflow-hidden border border-[#2B2724]/20 bg-[#241716] shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 28vw, 360px"
                      className="object-cover object-center hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Bottom Tag & Gold Dash */}
                <div className="mt-3.5 sm:mt-4 pt-1 flex items-center gap-2.5">
                  <span className="text-[9px] sm:text-[9.5px] font-semibold tracking-[0.2em] text-[#78716A] uppercase font-dm whitespace-nowrap">
                    {item.bottomTag}
                  </span>
                  <span className="w-6 sm:w-8 h-[1.5px] bg-[#B88E44]" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
