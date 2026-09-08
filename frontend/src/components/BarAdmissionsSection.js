'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Landmark, Scale, ArrowRight } from 'lucide-react';

export default function BarAdmissionsSection() {
  const credentials = [
    {
      icon: Landmark,
      badge: 'APEX COURT OF INDIA',
      title: 'Supreme Court Bar Association',
      roll: 'SCBA/REG/2011/9842',
    },
    {
      icon: Scale,
      badge: 'STATUTORY BAR COUNCIL',
      title: 'Bar Council of Delhi & India',
      roll: 'D/1458/2006 (BCI Enrolled)',
    },
    {
      icon: Landmark,
      badge: 'APPELLATE BENCH',
      title: 'Bombay High Court Bar Association',
      roll: 'MAH/5892/2012',
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] border-b border-[#E8E1D5] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-5 sm:pt-8 lg:pt-10 pb-5 sm:pb-8">
        {/* Main Grid: Left Narrative & Credential Cards (8 cols) | Right Prominent Visual (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col justify-center min-w-0 pr-0 lg:pr-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
              <span className="h-[1.5px] w-6 sm:w-8 bg-[#B88E44] rounded-full" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                STATUTORY BAR ADMISSIONS &amp; CREDENTIALS
              </span>
            </div>

            {/* Main Headline (Poppins) - Identical to Legacy Section */}
            <h2 className="font-heading font-extrabold text-[25px] min-[380px]:text-[27px] sm:text-3xl lg:text-[40px] xl:text-[44px] text-[#1A1817] leading-[1.14] tracking-tight">
              <span className="block">Licensed Before</span>
              <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                India’s Apex Benches
              </span>
            </h2>

            {/* 3 Credential Cards (Refined Card Boxes on Mobile, 3-Column on Desktop) */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-2 lg:gap-2.5 xl:gap-4 sm:divide-x sm:divide-[#E8E1D5]">
              {credentials.map((cred, idx) => {
                const IconComponent = cred.icon;
                return (
                  <div
                    key={cred.title}
                    className={`flex items-center gap-3 p-3 sm:p-0 bg-white sm:bg-transparent border border-[#E6DDD0] sm:border-0 rounded-xl sm:rounded-none shadow-2xs sm:shadow-none ${
                      idx > 0 ? 'sm:pl-3 lg:pl-4 xl:pl-5' : ''
                    }`}
                  >
                    {/* Icon Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#EFE9DF] border border-[#D9CFC1] flex items-center justify-center shrink-0 text-[#8C6D37] shadow-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[8px] sm:text-[8.5px] font-bold tracking-[0.16em] text-[#78716A] uppercase font-dm">
                        {cred.badge}
                      </span>
                      <h3 className="font-heading font-bold text-xs sm:text-[11px] lg:text-[11.5px] xl:text-[12px] text-[#1A1817] leading-tight mt-0.5">
                        {cred.title}
                      </h3>
                      <span className="text-[9.5px] sm:text-[10px] text-[#8C6D37] font-medium font-dm mt-0.5">
                        {cred.roll}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Visual */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] xl:max-w-[420px] aspect-[16/10] overflow-hidden rounded-bl-2xl sm:rounded-bl-3xl shadow-xl border border-[#2B2724] bg-[#1A1817]">
              {/* Supreme Court Dome Photo */}
              <Image
                src="/apex-benches.jpg"
                alt="Supreme Court of India Dome & Judicial Pillars"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center grayscale contrast-110"
                priority
              />

              {/* Colonnade Panel Overlay on Far Right with Motto */}
              <div className="absolute top-0 right-0 h-full w-[42%] bg-gradient-to-l from-black/95 via-black/80 to-transparent p-2.5 sm:p-3.5 flex flex-col justify-center">
                <div className="border-l border-[#B88E44]/80 pl-2 sm:pl-2.5">
                  <div className="text-[7.5px] sm:text-[9px] xl:text-[9.5px] font-bold tracking-[0.22em] text-[#F0ECE1] uppercase leading-relaxed font-dm drop-shadow">
                    <div>JUSTICE</div>
                    <div>BUILDS</div>
                    <div>A STRONGER</div>
                    <div>TOMORROW</div>
                  </div>
                  <span className="block h-[1.5px] w-3.5 bg-[#B88E44] mt-1 sm:mt-1.5 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM CREDENTIALS & TRUST BAR (Clean stacked layout on mobile, horizontal on desktop) */}
        <div className="mt-6 sm:mt-8 py-4 sm:py-3.5 border-y border-[#E8E1D5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Bulleted Statutory Points (Clean 1-per-line list on mobile) */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-x-5 sm:gap-y-1.5 text-[10.5px] sm:text-xs text-[#554E46] font-dm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E44] shrink-0" />
              <span>Bar Council Statutory Advocate Roll</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E44] shrink-0" />
              <span>SCBA Senior Roll (New Delhi)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E44] shrink-0" />
              <span>Certified Good Standing 2026</span>
            </div>
          </div>

          {/* Right Action: Royal Burgundy Button */}
          <div className="flex items-center w-full sm:w-auto sm:pl-4 sm:border-l sm:border-[#E8E1D5]">
            <Link
              href="#verify-roll"
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98] w-full sm:w-auto text-center"
            >
              <span>VERIFY OFFICIAL ROLL</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
