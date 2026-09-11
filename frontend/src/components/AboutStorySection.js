'use client';

import Image from 'next/image';

const timelineSteps = [
  {
    step: '01',
    title: '2008',
    eyebrow: 'FOUNDATION',
    image: '/timeline-2008-foundation.jpg',
    alt: 'Trinetra Law Chambers foundation desk in 2008 with leather-bound book and brass lamp',
    description:
      'A focused beginning with a clear purpose — to practice law with integrity, depth and a client-first approach.',
  },
  {
    step: '02',
    title: 'Growth',
    eyebrow: 'WIDER PRACTICE',
    image: '/timeline-growth-practice.jpg',
    alt: 'Expanded law library showing volumes of constitutional, civil, and criminal law',
    description:
      'Expanded practice areas, built lasting client relationships and took on more complex, high-stakes matters.',
  },
  {
    step: '03',
    title: 'Today',
    eyebrow: 'APEX COURT & HIGH COURT PRACTICE',
    image: '/timeline-today-court.jpg',
    alt: 'Supreme Court of India dome representing apex court practice today',
    description:
      'A trusted chamber with a strong presence before the Supreme Court of India, High Courts and other key forums across the country.',
  },
];

export default function AboutStorySection() {
  return (
    <section className="relative lg:sticky lg:top-[84px] z-10 w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5]">
      
      {/* Background Courthouse Pediment Watermark with smooth feathered fade */}
      <div
        className="absolute left-0 bottom-0 w-[420px] sm:w-[600px] lg:w-[760px] h-[180px] sm:h-[240px] lg:h-[280px] pointer-events-none select-none z-0 opacity-75 mix-blend-multiply"
        style={{
          maskImage: 'linear-gradient(to top right, black 25%, rgba(0,0,0,0.6) 55%, transparent 88%)',
          WebkitMaskImage: 'linear-gradient(to top right, black 25%, rgba(0,0,0,0.6) 55%, transparent 88%)',
        }}
      >
        <Image
          src="/about-story-bg-courthouse.png"
          alt="Classical Courthouse Pediment Fiat Justitia Watermark"
          fill
          priority
          sizes="(max-width: 1024px) 600px, 760px"
          className="object-contain object-left-bottom"
        />
        {/* Soft top & right feathered gradient fade into #FAF8F5 */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FAF8F5]/20 to-[#FAF8F5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF8F5]/10 to-[#FAF8F5]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-10 xs:pt-12 sm:pt-14 lg:pt-8 pb-5 sm:pb-6">
        
        {/* Top Header Eyebrow Row */}
        <div className="flex items-center justify-between gap-2 pb-2.5 sm:pb-4 border-b border-[#E8E1D5] text-[8px] xs:text-[9.5px] sm:text-[10.5px]">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="w-6 sm:w-10 h-[1.5px] bg-[#B88E44]" />
            <span className="font-semibold tracking-[0.16em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm">
              OUR STORY
            </span>
          </div>
          <div className="font-medium tracking-[0.12em] xs:tracking-[0.16em] sm:tracking-[0.24em] text-[#8C847B] uppercase font-dm truncate text-right">
            PEOPLE &nbsp;|&nbsp; PERSPECTIVE &nbsp;|&nbsp; PROGRESS
          </div>
        </div>

        {/* Main Content: Left Story Narrative + Right 3-Step Timeline Cards */}
        <div className="mt-5 sm:mt-6 lg:mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: "Where It Began." Narrative ================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between">
            <div>
              {/* Main Headline */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#1A1817] leading-tight">
                <span>Where </span>
                <span className="gold-gradient-shine">It Began.</span>
              </h2>

              {/* Story Paragraphs */}
              <div className="mt-3 sm:mt-4 space-y-2 text-[#554E46] text-xs sm:text-[13px] leading-relaxed font-dm font-normal max-w-[400px]">
                <p>
                  Trinetra Law Chambers was founded on a simple belief — that law can create a
                  fairer, stronger and more just tomorrow.
                </p>
                <p>
                  What began as a focused practice has grown into a trusted chamber, representing
                  clients in complex matters across India&apos;s highest courts.
                </p>
              </div>

              {/* Gold Bar Quote Callout */}
              <div className="mt-4 sm:mt-5 pl-3 sm:pl-3.5 border-l-2 border-[#B88E44]">
                <p className="font-editorial italic text-xs sm:text-[13.5px] text-[#3D352F] leading-snug">
                  &ldquo;A continued commitment to the rule of law, in service of a stronger tomorrow.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3-Stage Milestone Progression ================= */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
              {timelineSteps.map((item) => (
                <div key={item.step} className="flex flex-col group">
                  
                  {/* Step Number & Horizontal Connector Header */}
                  <div className="relative flex items-center justify-between pb-1.5 sm:pb-2">
                    <span className="font-editorial text-3xl sm:text-4xl xl:text-5xl text-[#D8CFC2] font-normal leading-none group-hover:text-[#B88E44] transition-colors duration-300">
                      {item.step}
                    </span>
                    {/* Horizontal Connector Line */}
                    <div className="flex-1 ml-3 h-[1px] bg-[#E8E1D5]" />
                  </div>

                  {/* Title & Eyebrow Tag */}
                  <div className="mt-0.5 mb-2 sm:mb-2.5">
                    <h3 className="font-heading text-xl sm:text-[22px] xl:text-[24px] font-bold text-[#4A1118] tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[8px] sm:text-[8.5px] xl:text-[9px] font-semibold tracking-[0.14em] text-[#78716A] uppercase font-dm whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.eyebrow}
                    </p>
                  </div>

                  {/* Image Card Frame */}
                  <div className="relative aspect-[16/10.5] w-full overflow-hidden border border-[#2B2724]/20 bg-[#241716] shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 28vw, 320px"
                      className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                  </div>

                  {/* Milestone Description */}
                  <p className="mt-2.5 text-[11px] sm:text-xs text-[#554E46] leading-relaxed font-dm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ROW: Four Pillars & 'A STRONGER TOMORROW' ================= */}
        <div className="mt-5 sm:mt-7 pt-2.5 sm:pt-3 border-t border-[#E8E1D5] flex items-center justify-between gap-2 text-[7.5px] xs:text-[8.5px] sm:text-[9.5px]">
          {/* Left Four Pillars (Horizontal line with gold dot separators) */}
          <div className="flex items-center gap-1.5 xs:gap-2.5 sm:gap-4 font-semibold tracking-[0.1em] xs:tracking-[0.16em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm leading-none">
            <span>JUSTICE</span>
            <span className="w-1 h-1 rounded-full bg-[#B88E44]" />
            <span>CONSTITUTION</span>
            <span className="w-1 h-1 rounded-full bg-[#B88E44]" />
            <span>DEMOCRACY</span>
            <span className="w-1 h-1 rounded-full bg-[#B88E44]" />
            <span>ALWAYS</span>
          </div>

          {/* Right Bottom Tag */}
          <div className="font-semibold tracking-[0.12em] xs:tracking-[0.16em] sm:tracking-[0.22em] text-[#78716A] uppercase font-dm shrink-0 text-right">
            A STRONGER TOMORROW
          </div>
        </div>

      </div>
    </section>
  );
}
