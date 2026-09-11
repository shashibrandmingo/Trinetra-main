'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutContactCtaSection() {
  return (
    <section className="relative z-20 w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5]">
      
      {/* Colossal Faint Monogram Watermark on Right ("TC" for Trinetra Chambers) */}
      <div 
        aria-hidden="true" 
        className="absolute -right-6 lg:right-6 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] text-[#1A1817] font-editorial font-bold text-[280px] sm:text-[340px] lg:text-[400px] xl:text-[460px] leading-none tracking-tighter"
      >
        TC
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-10 xs:pt-12 sm:pt-14 lg:pt-16 pb-12 sm:pb-12">
        
        {/* ================= TOP EYEBROW ================= */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-8 lg:mb-10">
          <span className="w-7 sm:w-10 h-[1.5px] bg-[#B88E44]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
            Get In Touch
          </span>
        </div>

        {/* ================= MAIN CONTENT ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-8 sm:mb-14 lg:mb-16">
          
          {/* Left Column: Heading (30px on mobile, strictly 2 lines) + Black CTA Button */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Headline */}
            <h2 className="font-heading text-[26px] xs:text-[30px] sm:text-4xl lg:text-[42px] xl:text-[48px] 2xl:text-[52px] font-bold tracking-tight text-[#1A1817] leading-[1.14]">
              <span className="block">Have a matter that deserves</span>
              <span className="block gold-gradient-shine mt-1">careful counsel?</span>
            </h2>

            {/* Black CTA Button */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1A1817] hover:bg-[#B88E44] text-[#FAF8F5] transition-all duration-300 shadow-md group"
              >
                <span className="font-dm font-semibold text-[11px] sm:text-[11.5px] tracking-[0.2em] sm:tracking-[0.22em] uppercase">
                  DISCUSS YOUR MATTER
                </span>
                <ArrowRight className="w-4 h-4 text-[#B88E44] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          {/* Right Column: Thoughtful Legal Counsel Tagline */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-start lg:pl-8 xl:pl-12 mt-2 lg:mt-0">
            <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
              {/* Vertical Hairline Divider (Desktop & Tablet) */}
              <div className="hidden sm:block w-[1px] h-28 sm:h-32 bg-[#E8E1D5]" />
              
              {/* Gold Accent Dash (Mobile) */}
              <div className="sm:hidden w-6 h-[1.5px] bg-[#B88E44] mt-2 flex-shrink-0" />

              {/* Tagline Text */}
              <div className="flex flex-col justify-center">
                <div className="font-dm font-semibold text-[10px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.24em] text-[#78716A] uppercase leading-relaxed sm:leading-[1.8]">
                  <span className="sm:hidden">Thoughtful legal counsel for a more certain tomorrow.</span>
                  <div className="hidden sm:block">
                    <div>THOUGHTFUL</div>
                    <div>LEGAL COUNSEL</div>
                    <div>FOR A MORE</div>
                    <div>CERTAIN TOMORROW.</div>
                  </div>
                </div>
                {/* Gold Accent Dash (Desktop) */}
                <span className="hidden sm:block w-8 sm:w-10 h-[1.5px] bg-[#B88E44] mt-3" />
              </div>
            </div>
          </div>

        </div>

        {/* ================= HORIZONTAL HAIRLINE DIVIDER ================= */}
        <div className="w-full h-[1px] bg-[#E8E1D5] mb-6 sm:mb-8" />

        {/* ================= BOTTOM CONTACT DETAILS BAR ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-center justify-between gap-3 sm:gap-6 lg:gap-4 py-2">
          
          {/* Item 1: Phone */}
          <a 
            href="tel:+911141582300" 
            className="group flex items-center gap-3.5 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-white/70 sm:bg-transparent border border-[#E8E1D5] sm:border-0 cursor-pointer transition-all hover:border-[#B88E44]/60"
          >
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8E1D5] flex items-center justify-center text-[#B88E44] shadow-2xs flex-shrink-0 group-hover:bg-[#B88E44] group-hover:text-white group-hover:border-[#B88E44] transition-colors duration-200">
              <Phone className="w-4 h-4" strokeWidth={1.7} />
            </div>
            <div>
              <div className="text-[9px] sm:text-[9.5px] font-semibold tracking-[0.22em] text-[#8C847B] uppercase font-dm group-hover:text-[#B88E44] transition-colors">
                PHONE
              </div>
              <span className="text-xs sm:text-[13.5px] font-medium text-[#1A1817] font-dm group-hover:text-[#B88E44] transition-colors">
                +91 11 4158 2300
              </span>
            </div>
          </a>

          {/* Divider between Phone and Email (Desktop) */}
          <div className="hidden lg:block w-[1px] h-8 bg-[#E8E1D5]" />

          {/* Item 2: Email */}
          <a 
            href="mailto:connect@trinetralaw.com" 
            className="group flex items-center gap-3.5 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-white/70 sm:bg-transparent border border-[#E8E1D5] sm:border-0 cursor-pointer transition-all hover:border-[#B88E44]/60"
          >
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8E1D5] flex items-center justify-center text-[#B88E44] shadow-2xs flex-shrink-0 group-hover:bg-[#B88E44] group-hover:text-white group-hover:border-[#B88E44] transition-colors duration-200">
              <Mail className="w-4 h-4" strokeWidth={1.7} />
            </div>
            <div>
              <div className="text-[9px] sm:text-[9.5px] font-semibold tracking-[0.22em] text-[#8C847B] uppercase font-dm group-hover:text-[#B88E44] transition-colors">
                EMAIL
              </div>
              <span className="text-xs sm:text-[13.5px] font-medium text-[#1A1817] font-dm group-hover:text-[#B88E44] transition-colors">
                connect@trinetralaw.com
              </span>
            </div>
          </a>

          {/* Divider between Email and Chambers (Desktop) */}
          <div className="hidden lg:block w-[1px] h-8 bg-[#E8E1D5]" />

          {/* Item 3: Chambers */}
          <a 
            href="https://maps.google.com/?q=New+Delhi,+India" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-white/70 sm:bg-transparent border border-[#E8E1D5] sm:border-0 cursor-pointer transition-all hover:border-[#B88E44]/60"
          >
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8E1D5] flex items-center justify-center text-[#B88E44] shadow-2xs flex-shrink-0 group-hover:bg-[#B88E44] group-hover:text-white group-hover:border-[#B88E44] transition-colors duration-200">
              <MapPin className="w-4 h-4" strokeWidth={1.7} />
            </div>
            <div>
              <div className="text-[9px] sm:text-[9.5px] font-semibold tracking-[0.22em] text-[#8C847B] uppercase font-dm group-hover:text-[#B88E44] transition-colors">
                CHAMBERS
              </div>
              <span className="text-xs sm:text-[13.5px] font-medium text-[#1A1817] font-dm group-hover:text-[#B88E44] transition-colors">
                New Delhi, India
              </span>
            </div>
          </a>

          {/* Item 4: Creed Tag */}
          <div className="flex items-center gap-3 pt-2 lg:pt-0 sm:col-span-2 lg:col-span-1">
            <span className="w-6 sm:w-8 h-[1.5px] bg-[#B88E44]" />
            <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-medium tracking-[0.18em] sm:tracking-[0.22em] text-[#8C847B] uppercase font-dm whitespace-nowrap overflow-hidden text-ellipsis">
              PEOPLE &nbsp;|&nbsp; LAW &nbsp;|&nbsp; A FAIRER TOMORROW
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
