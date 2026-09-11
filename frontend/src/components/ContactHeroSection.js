'use client';

import { Shield, Clock, Scale } from 'lucide-react';

export default function ContactHeroSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 border-b border-[#E8E1D5] overflow-hidden">
      
      {/* Background Decorative Crest / Monogram Watermark */}
      <div
        aria-hidden="true"
        className="absolute -right-12 lg:right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[#1A1817] font-editorial font-bold text-[320px] sm:text-[420px] lg:text-[500px] leading-none tracking-tighter"
      >
        TLC
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= TOP EYEBROW ================= */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="w-8 sm:w-11 h-[1.5px] bg-[#9E6728]" />
          <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
            ENGAGE COUNSEL
          </span>
        </div>

        {/* ================= HEADLINE & NARRATIVE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Authoritative Two-Tone Headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-bold tracking-tight text-[#1A1817] leading-[1.18]">
              <span className="block">Initiate Counsel.</span>
              <span className="inline-block gold-gradient-shine mt-1 sm:mt-1.5">
                A Direct Dialogue.
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-[#5C544D] text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-dm">
              The chambers operate with absolute discretion, rigorous strategic preparation, 
              and direct senior counsel oversight. Whether seeking urgent writ intervention before the 
              Supreme Court of India, high-stakes corporate litigation, or protective statutory relief, 
              our team is equipped for immediate engagement.
            </p>
          </div>

          {/* Right Column: Key Operational Badges */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-3.5 sm:gap-4 lg:pl-6">
            
            {/* Badge 1: 24h Response */}
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/80 border border-[#E8E1D5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF4EB] text-[#9E6728] flex items-center justify-center shrink-0 border border-[#E8DFC8]">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9E6728] uppercase font-dm block">
                  URGENCY PROTOCOL
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-[#1A1817] block">
                  24-Hour Emergency Briefing Review
                </span>
              </div>
            </div>

            {/* Badge 2: Privilege */}
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/80 border border-[#E8E1D5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF4EB] text-[#9E6728] flex items-center justify-center shrink-0 border border-[#E8DFC8]">
                <Shield className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9E6728] uppercase font-dm block">
                  STATUTORY PRIVILEGE
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-[#1A1817] block">
                  100% Advocate-Client Confidentiality
                </span>
              </div>
            </div>

            {/* Badge 3: Apex Jurisdiction */}
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/80 border border-[#E8E1D5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF4EB] text-[#9E6728] flex items-center justify-center shrink-0 border border-[#E8DFC8]">
                <Scale className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9E6728] uppercase font-dm block">
                  JURISDICTION
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-[#1A1817] block">
                  Supreme Court, High Courts & Tribunals
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
