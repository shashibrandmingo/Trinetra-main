'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function PracticeContactCtaSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5] py-14 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* ─── Eyebrow with centered gold dashes ───────────────────── */}
        <div className="flex items-center justify-center gap-3.5 mb-5 sm:mb-6">
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] text-[#78716A] uppercase font-dm">
            GET IN TOUCH
          </span>
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
        </div>

        {/* ─── Headline ────────────────────────────────────────────── */}
        <h2 className="font-heading text-center text-[28px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.15] text-[#1A1817] tracking-tight mb-7 sm:mb-8">
          Have a matter that requires<br />
          <span className="gold-gradient-shine">careful counsel?</span>
        </h2>

        {/* ─── Center CTA Button ───────────────────────────────────── */}
        <div className="flex justify-center mb-12 sm:mb-14 lg:mb-16">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3 sm:py-3.5 bg-[#121110] text-[#FAF8F5] border border-[#9E6728]/35 hover:border-[#9E6728] hover:bg-[#1A1817] transition-all duration-300 shadow-sm group"
          >
            <span className="font-dm text-[10.5px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase">
              DISCUSS YOUR MATTER
            </span>
            <ArrowRight className="w-4 h-4 text-[#FAF8F5] group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={1.8} />
          </Link>
        </div>

        {/* ─── 3 Contact Pillars Row ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl lg:max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-[#E8E1D5] mb-8 sm:mb-10">

          {/* 1. Phone */}
          <div className="flex items-center justify-start md:justify-center gap-4 py-4 md:py-2 px-3 sm:px-6">
            <div className="w-12 h-12 rounded-full border border-[#C29354] flex items-center justify-center flex-shrink-0 bg-[#FAF8F5]">
              <Phone className="w-5 h-5 text-[#9E6728] stroke-[1.6]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold tracking-[0.24em] text-[#8C827A] uppercase font-dm mb-0.5">
                PHONE
              </span>
              <a
                href="tel:+911141512345"
                className="font-heading text-[15px] sm:text-[16px] font-semibold text-[#1A1817] hover:text-[#9E6728] transition-colors leading-none tracking-tight"
              >
                +91 11 4151 2345
              </a>
            </div>
          </div>

          {/* 2. Email */}
          <div className="flex items-center justify-start md:justify-center gap-4 py-4 md:py-2 px-3 sm:px-6">
            <div className="w-12 h-12 rounded-full border border-[#C29354] flex items-center justify-center flex-shrink-0 bg-[#FAF8F5]">
              <Mail className="w-5 h-5 text-[#9E6728] stroke-[1.6]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold tracking-[0.24em] text-[#8C827A] uppercase font-dm mb-0.5">
                EMAIL
              </span>
              <a
                href="mailto:info@trinetralaw.com"
                className="font-heading text-[15px] sm:text-[16px] font-semibold text-[#1A1817] hover:text-[#9E6728] transition-colors leading-none tracking-tight"
              >
                info@trinetralaw.com
              </a>
            </div>
          </div>

          {/* 3. New Delhi Chambers (Address) */}
          <div className="flex items-center justify-start md:justify-center gap-4 py-4 md:py-2 px-3 sm:px-6">
            <div className="w-12 h-12 rounded-full border border-[#C29354] flex items-center justify-center flex-shrink-0 bg-[#FAF8F5]">
              <MapPin className="w-5 h-5 text-[#9E6728] stroke-[1.6]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold tracking-[0.24em] text-[#8C827A] uppercase font-dm mb-0.5">
                NEW DELHI CHAMBERS
              </span>
              <span className="font-dm text-[13px] sm:text-[14px] text-[#4A433D] leading-snug">
                A-9, Green Park,<br />
                New Delhi – 110016
              </span>
            </div>
          </div>

        </div>

        {/* ─── Bottom Bar ─────────────────────────────────────────── */}
        <div className="pt-6 sm:pt-8 border-t border-[#E8E1D5]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[8.5px] sm:text-[9px] font-semibold tracking-[0.24em] text-[#8C827A] uppercase font-dm select-none">
          <span>TRINETRA LAW CHAMBERS</span>
          <span className="tracking-[0.22em]">
            PEOPLE &nbsp;|&nbsp; LAW &nbsp;|&nbsp; A FAIRER TOMORROW
          </span>
        </div>

      </div>
    </section>
  );
}
