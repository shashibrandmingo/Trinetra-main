'use client';

const philosophySteps = [
  {
    step: '01',
    title: 'Listen.',
    description: 'Understand the matter before forming the strategy.',
  },
  {
    step: '02',
    title: 'Study.',
    description: 'Examine the law beyond the obvious.',
  },
  {
    step: '03',
    title: 'Prepare.',
    description: 'Build every argument with precision.',
  },
  {
    step: '04',
    title: 'Advocate.',
    description: 'Present with clarity and conviction.',
  },
];

export default function AboutPhilosophySection() {
  return (
    <section className="relative z-20 w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5]">
      {/* Main Container - Compact and cohesive vertical rhythm matching design mockup */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-7 sm:pt-9 lg:pt-11 pb-8 sm:pb-10 lg:pb-12">
        
        {/* ================= TOP EYEBROW ROW (No extra dividing border, tight gap to title) ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-6 sm:mb-8 lg:mb-9">
          {/* Left Eyebrow Tag */}
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
              Our Philosophy
            </span>
          </div>

          {/* Right Creed Tracker */}
          <div className="text-[9px] sm:text-[10px] font-medium tracking-[0.24em] text-[#8C847B] uppercase font-dm">
            PEOPLE &nbsp;|&nbsp; LAW &nbsp;|&nbsp; JUSTICE &nbsp;|&nbsp; A FAIRER TOMORROW
          </div>
        </div>

        {/* ================= MAIN HEADER SPLIT (Tight, elegant, no extra line dividers) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-9 sm:mb-11 lg:mb-12">
          
          {/* Left Column: Bold Poppins Heading (Strictly 2 lines) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold tracking-tight text-[#1A1817] leading-[1.12]">
              <span className="block whitespace-nowrap">How We Approach</span>
              <span className="block gold-gradient-shine whitespace-nowrap mt-1">the Law.</span>
            </h2>
          </div>

          {/* Center Vertical Hairline Divider (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center self-stretch py-1">
            <div className="w-[1px] bg-[#E8E1D5] h-full" />
          </div>

          {/* Right Column: Narrative Context & Purpose */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* 2-line Subheading */}
            <div className="font-heading text-lg sm:text-xl lg:text-[22px] font-semibold text-[#1A1817] leading-snug">
              <p>A considered process.</p>
              <p>A stronger tomorrow.</p>
            </div>

            {/* Small Gold Divider Dash */}
            <span className="block w-8 sm:w-10 h-[1.5px] bg-[#B88E44] my-3 sm:my-3.5" />

            {/* Sub-paragraph */}
            <p className="font-dm text-xs sm:text-[14px] text-[#605951] leading-relaxed max-w-[460px]">
              Every matter begins with understanding and ends with purpose. Our approach is guided by four simple principles.
            </p>
          </div>

        </div>

        {/* ================= FOUR PRINCIPLES TIMELINE ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {philosophySteps.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-start relative"
            >
              {/* Timeline Track: Step Number + Connecting Line + Double Concentric Circle */}
              <div className="flex items-center justify-between w-full">
                {/* Step Number */}
                <span className="font-dm text-xs sm:text-[12.5px] font-semibold tracking-wider text-[#8C847B]">
                  {item.step}
                </span>

                {/* Connecting Hairline Line */}
                <div className="flex-grow mx-3 sm:mx-3.5 h-[1px] bg-[#E8E1D5] group-hover:bg-[#B88E44]/50 transition-colors duration-300" />

                {/* Double Concentric Gold Node */}
                <div className="relative w-5 h-5 rounded-full border border-[#B88E44]/45 flex items-center justify-center bg-[#FAF8F5] group-hover:border-[#B88E44] transition-colors duration-300 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88E44] group-hover:scale-125 transition-transform duration-300" />
                </div>
              </div>

              {/* Step Title (Poppins font) */}
              <h3 className="font-heading text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#1A1817] leading-tight mt-3.5 sm:mt-4 group-hover:text-[#B88E44] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Subtle Gold Accent Underline (Directly below title) */}
              <span className="block w-6 sm:w-7 h-[1.5px] bg-[#B88E44] mt-2" />

              {/* Step Description (Directly below underline, tight and clean) */}
              <p className="font-dm text-xs sm:text-[13px] text-[#605951] leading-relaxed max-w-[210px] mt-2 sm:mt-2.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
