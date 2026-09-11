'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5] overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-14 lg:pt-10 pb-8 sm:pb-10">
        {/* Main Grid: Left Column (Heading + Description + CTA) | Middle Metrics Stack | Right Bronze Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
          {/* Left Column (Span 7 on lg): Eyebrow, Heading, Paragraph & CTA Button */}
          <div className="lg:col-span-7 lg:pr-8 xl:pr-12 flex flex-col justify-between">
            {/* Top Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4">
              <span className="h-[1.5px] w-6 sm:w-8 bg-[#B88E44] rounded-full" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                LET&apos;S WORK TOGETHER
              </span>
            </div>

            {/* Split row: Big Headline on Left + Narrative & Button on Right */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 my-auto py-2">
              {/* Main Headline */}
              <h2 className="font-heading font-extrabold text-[30px] sm:text-4xl lg:text-[44px] xl:text-[48px] text-[#1A1817] leading-[1.12] tracking-tight shrink-0">
                <span className="block">Your Next Chapter</span>
                <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                  Starts Here.
                </span>
              </h2>

              {/* Vertical divider + Description & Button */}
              <div className="flex items-start gap-4 sm:gap-5 md:pl-6 md:border-l md:border-[#DCD3C5] max-w-sm">
                <div className="flex flex-col justify-between">
                  <p className="font-dm text-xs sm:text-[13px] text-[#6B635B] leading-relaxed">
                    Let&apos;s discuss how we can support your goals with clarity,
                    expertise, and a commitment to better outcomes.
                  </p>

                  <div className="mt-5 sm:mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-wider uppercase rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98]"
                    >
                      <span>GET IN TOUCH</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Span 5 on lg): 3-tier Metrics Stack + Bronze Showcase Card */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-0 lg:border-l lg:border-[#E8E1D5]">
            {/* Middle Metrics Stack (3-column stats card on mobile, vertical stack on tablet/desktop) */}
            <div className="sm:col-span-6 bg-[#F6F0E6]/50 sm:bg-transparent border border-[#E8DFCFC5] sm:border-0 rounded-2xl sm:rounded-none p-3.5 sm:p-0 sm:py-4 sm:px-6 shadow-2xs sm:shadow-none">
              <div className="grid grid-cols-3 divide-x divide-[#E8DFCFC5] sm:divide-x-0 sm:flex sm:flex-col sm:divide-y sm:divide-[#E8E1D5] sm:justify-between h-full">
                {/* Metric 1 */}
                <div className="px-2 py-1 text-center sm:text-left sm:px-0 sm:py-5 sm:first:pt-0">
                  <div className="font-heading font-extrabold text-xl min-[380px]:text-2xl sm:text-3xl text-[#1A1817]">
                    10+
                  </div>
                  <div className="font-dm text-[9px] min-[380px]:text-[9.5px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#8C847B] uppercase mt-1 leading-tight">
                    <span className="sm:hidden">YEARS EXP.</span>
                    <span className="hidden sm:inline">YEARS OF EXPERIENCE</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="px-2 py-1 text-center sm:text-left sm:px-0 sm:py-5">
                  <div className="font-heading font-extrabold text-xl min-[380px]:text-2xl sm:text-3xl text-[#1A1817]">
                    500+
                  </div>
                  <div className="font-dm text-[9px] min-[380px]:text-[9.5px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#8C847B] uppercase mt-1 leading-tight">
                    CLIENTS ADVISED
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="px-2 py-1 text-center sm:text-left sm:px-0 sm:py-5 sm:last:pb-0">
                  <div className="font-heading font-extrabold text-xl min-[380px]:text-2xl sm:text-3xl text-[#1A1817]">
                    95%
                  </div>
                  <div className="font-dm text-[9px] min-[380px]:text-[9.5px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#8C847B] uppercase mt-1 leading-tight">
                    <span className="sm:hidden">SATISFACTION</span>
                    <span className="hidden sm:inline">CLIENT SATISFACTION</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Far Right Bronze Statement Card (6 cols on sm) */}
            <div className="sm:col-span-6 bg-gradient-to-br from-[#9E7730] via-[#8E6928] to-[#7A5518] p-4 sm:p-7 flex flex-row sm:flex-col items-center sm:items-stretch justify-between text-white rounded-2xl sm:rounded-none sm:min-h-[280px] shadow-sm group">
              {/* Statement Text: Left on mobile, Bottom on desktop */}
              <div className="sm:order-2 sm:mt-8">
                <div className="flex items-center gap-1.5 mb-1 sm:hidden">
                  <span className="w-3 h-[1px] bg-white/70" />
                  <span className="text-[8.5px] font-bold tracking-[0.2em] text-white/80 uppercase font-dm">
                    CHAMBER VISION
                  </span>
                </div>
                <div className="font-heading font-bold text-xs min-[380px]:text-[13px] sm:text-[15px] tracking-[0.12em] sm:tracking-[0.14em] uppercase leading-snug text-white">
                  <span className="sm:hidden">
                    CONVERSATIONS TODAY.<br />
                    STRONGER TOMORROWS.
                  </span>
                  <span className="hidden sm:inline">
                    CONVERSATIONS<br />
                    TODAY.<br />
                    STRONGER<br />
                    TOMORROWS.
                  </span>
                </div>
                <div className="hidden sm:block w-8 h-[1.5px] bg-white/70 mt-3" />
              </div>

              {/* Slender White Arrow: Right on mobile, Top-Right on desktop */}
              <div className="sm:order-1 flex justify-end shrink-0 pl-3 sm:pl-0">
                <div className="w-9 h-9 sm:w-auto sm:h-auto rounded-full bg-white/15 sm:bg-transparent border border-white/20 sm:border-0 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" strokeWidth={1.75} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section Verification Bar (Hidden on Phone Mode) */}
        <div className="hidden sm:flex mt-12 sm:mt-14 pt-4 border-t border-[#E8E1D5] items-center justify-between text-[10px] sm:text-[11px] font-dm tracking-[0.2em] text-[#8C847B] uppercase">
          <span>PEOPLE PERSPECTIVE PROGRESS</span>
          <div className="flex items-center gap-2.5">
            <span className="w-5 sm:w-7 h-[1px] bg-[#B88E44]" />
            <span>LAW FOR A BRIGHTER TOMORROW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
