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
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
        
        {/* ================= TOP EYEBROW ================= */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10">
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
            Get In Touch
          </span>
        </div>

        {/* ================= MAIN CONTENT ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* Left Column: Poppins Headline (Tuned Font Size) + Black CTA Button */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Headline (Poppins font, tuned refined font size, strictly 3 lines) */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] 2xl:text-[52px] font-bold tracking-tight text-[#1A1817] leading-[1.08]">
              <span className="block">Have a matter</span>
              <span className="block">that deserves</span>
              <span className="block gold-gradient-shine mt-0.5 sm:mt-1">careful counsel?</span>
            </h2>

            {/* Black CTA Button */}
            <div className="mt-7 sm:mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-4 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#1A1817] hover:bg-[#B88E44] text-[#FAF8F5] transition-all duration-300 shadow-md group"
              >
                <span className="font-dm font-semibold text-[11px] sm:text-[11.5px] tracking-[0.22em] uppercase">
                  DISCUSS YOUR MATTER
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          {/* Right Column: Thoughtful Legal Counsel Tagline shifted significantly more to the left */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-start lg:pl-8 xl:pl-12">
            <div className="flex items-start gap-5 lg:gap-6">
              {/* Vertical Hairline Divider */}
              <div className="w-[1px] h-28 sm:h-32 bg-[#E8E1D5]" />

              {/* Tagline Text */}
              <div className="flex flex-col justify-center">
                <div className="font-dm font-semibold text-[9.5px] sm:text-[10px] tracking-[0.24em] text-[#78716A] uppercase leading-[1.8]">
                  <div>THOUGHTFUL</div>
                  <div>LEGAL COUNSEL</div>
                  <div>FOR A MORE</div>
                  <div>CERTAIN TOMORROW.</div>
                </div>
                {/* Gold Accent Dash */}
                <span className="block w-8 sm:w-10 h-[1.5px] bg-[#B88E44] mt-3" />
              </div>
            </div>
          </div>

        </div>

        {/* ================= HORIZONTAL HAIRLINE DIVIDER ================= */}
        <div className="w-full h-[1px] bg-[#E8E1D5] mb-6 sm:mb-8" />

        {/* ================= BOTTOM CONTACT DETAILS BAR ================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4 py-2">
          
          {/* Item 1: Phone */}
          <a 
            href="tel:+911141582300" 
            className="group flex items-center gap-3.5 cursor-pointer transition-all"
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

          {/* Divider between Phone and Email */}
          <div className="hidden md:block w-[1px] h-8 bg-[#E8E1D5]" />

          {/* Item 2: Email */}
          <a 
            href="mailto:connect@trinetralaw.com" 
            className="group flex items-center gap-3.5 cursor-pointer transition-all"
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

          {/* Divider between Email and Chambers */}
          <div className="hidden md:block w-[1px] h-8 bg-[#E8E1D5]" />

          {/* Item 3: Chambers */}
          <a 
            href="https://maps.google.com/?q=New+Delhi,+India" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 cursor-pointer transition-all"
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
          <div className="flex items-center gap-3 pt-2 md:pt-0">
            <span className="w-6 sm:w-8 h-[1.5px] bg-[#B88E44]" />
            <span className="text-[9px] sm:text-[9.5px] font-medium tracking-[0.22em] text-[#8C847B] uppercase font-dm">
              PEOPLE &nbsp;|&nbsp; LAW &nbsp;|&nbsp; A FAIRER TOMORROW
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
