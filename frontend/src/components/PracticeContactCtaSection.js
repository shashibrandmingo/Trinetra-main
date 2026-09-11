'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function PracticeContactCtaSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5] py-10 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* ─── Eyebrow with centered gold dashes ───────────────────── */}
        <div className="flex items-center justify-center gap-3.5 mb-4 sm:mb-6">
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] text-[#78716A] uppercase font-dm">
            GET IN TOUCH
          </span>
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
        </div>

        {/* ─── Headline (30px on mobile, strictly 2 lines) ─────────── */}
        <h2 className="font-heading text-center text-[26px] xs:text-[30px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.18] text-[#1A1817] tracking-tight mb-6 sm:mb-8">
          <span className="hidden sm:inline">Have a matter that requires<br /></span>
          <span className="sm:hidden block">Have a matter that</span>
          <span className="gold-gradient-shine sm:inline">
            <span className="sm:hidden">requires </span>careful counsel?
          </span>
        </h2>

        {/* ─── Center CTA Button ───────────────────────────────────── */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-7 sm:px-10 py-3 sm:py-3.5 bg-[#121110] text-[#FAF8F5] border border-[#9E6728]/35 hover:border-[#9E6728] hover:bg-[#1A1817] transition-all duration-300 shadow-sm group"
          >
            <span className="font-dm text-[10.5px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase">
              DISCUSS YOUR MATTER
            </span>
            <ArrowRight className="w-4 h-4 text-[#FAF8F5] group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={1.8} />
          </Link>
        </div>

        {/* ─── 3 Contact Pillars (Clean Cards on Mobile, 3 Cols on Desktop) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl lg:max-w-5xl mx-auto gap-2.5 xs:gap-3 md:gap-0 md:divide-x divide-[#E8E1D5] mb-8 sm:mb-10">

          {/* 1. Phone */}
          <a
            href="tel:+911141512345"
            className="group flex items-center justify-start md:justify-center gap-3.5 p-3 sm:p-3.5 md:py-2 md:px-4 lg:px-6 bg-white/75 md:bg-transparent border border-[#E8E1D5] md:border-0 rounded-xl md:rounded-none shadow-2xs md:shadow-none hover:border-[#9E6728]/50 transition-all cursor-pointer"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C29354] flex items-center justify-center flex-shrink-0 bg-[#FAF8F5] group-hover:bg-[#9E6728] transition-colors duration-200">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#9E6728] group-hover:text-white transition-colors stroke-[1.6]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold tracking-[0.24em] text-[#8C827A] uppercase font-dm mb-0.5 group-hover:text-[#9E6728] transition-colors">
                PHONE
              </span>
              <span className="font-heading text-[14.5px] sm:text-[15px] md:text-[16px] font-semibold text-[#1A1817] group-hover:text-[#9E6728] transition-colors leading-none tracking-tight">
                +91 11 4151 2345
              </span>
            </div>
          </a>

          {/* 2. Email */}
          <a
            href="mailto:info@trinetralaw.com"
            className="group flex items-center justify-start md:justify-center gap-3.5 p-3 sm:p-3.5 md:py-2 md:px-4 lg:px-6 bg-white/75 md:bg-transparent border border-[#E8E1D5] md:border-0 rounded-xl md:rounded-none shadow-2xs md:shadow-none hover:border-[#9E6728]/50 transition-all cursor-pointer"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C29354] flex items-center justify-center flex-shrink-0 bg-[#FAF8F5] group-hover:bg-[#9E6728] transition-colors duration-200">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#9E6728] group-hover:text-white transition-colors stroke-[1.6]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold tracking-[0.24em] text-[#8C827A] uppercase font-dm mb-0.5 group-hover:text-[#9E6728] transition-colors">
                EMAIL
              </span>
              <span className="font-heading text-[14.5px] sm:text-[15px] md:text-[16px] font-semibold text-[#1A1817] group-hover:text-[#9E6728] transition-colors leading-none tracking-tight">
                info@trinetralaw.com
              </span>
            </div>
          </a>

          {/* 3. New Delhi Chambers (Address) */}
          <a
            href="https://maps.google.com/?q=New+Delhi,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-start md:justify-center gap-3.5 p-3 sm:p-3.5 md:py-2 md:px-4 lg:px-6 bg-white/75 md:bg-transparent border border-[#E8E1D5] md:border-0 rounded-xl md:rounded-none shadow-2xs md:shadow-none hover:border-[#9E6728]/50 transition-all cursor-pointer"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C29354] flex items-center justify-center flex-shrink-0 bg-[#FAF8F5] group-hover:bg-[#9E6728] transition-colors duration-200">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#9E6728] group-hover:text-white transition-colors stroke-[1.6]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold tracking-[0.24em] text-[#8C827A] uppercase font-dm mb-0.5 group-hover:text-[#9E6728] transition-colors">
                NEW DELHI CHAMBERS
              </span>
              <span className="font-dm text-[12.5px] sm:text-[13px] md:text-[14px] text-[#4A433D] group-hover:text-[#1A1817] leading-snug">
                A-9, Green Park, New Delhi – 110016
              </span>
            </div>
          </a>

        </div>

        {/* ─── Bottom Bar ─────────────────────────────────────────── */}
        <div className="pt-6 sm:pt-8 border-t border-[#E8E1D5]/60 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[8.5px] sm:text-[9px] font-semibold tracking-[0.24em] text-[#8C827A] uppercase font-dm select-none pb-4 sm:pb-0">
          <span>TRINETRA LAW CHAMBERS</span>
          <span className="hidden sm:inline tracking-[0.22em]">
            PEOPLE &nbsp;|&nbsp; LAW &nbsp;|&nbsp; A FAIRER TOMORROW
          </span>
        </div>

      </div>
    </section>
  );
}
