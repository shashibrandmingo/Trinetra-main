'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A080C] text-[#FAF8F5] select-none border-t border-[#4A1118]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-14 sm:pt-16 pb-8">
        {/* Main Grid: 4-Column on Desktop, 2x2 Grid on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-10 lg:gap-8 items-start">
          {/* Column 1: Brand Logo, Slogan & Socials (Span 2 on mobile, Span 4 on desktop) */}
          <div className="col-span-2 lg:col-span-4 flex flex-col justify-between h-full lg:pr-8">
            <div>
              {/* Brand Logo & Title (using the same official logo as Navbar) */}
              <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#B88E44] ring-offset-2 ring-offset-[#2A080C] shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/Trinetra-Law-Chamber-logo.jpg"
                    alt="Trinetra Law Chambers Logo"
                    fill
                    sizes="56px"
                    className="object-cover object-top scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#E5C158] font-serif leading-none">
                    TRINETRA
                  </span>
                  <span className="text-[10px] tracking-[0.24em] text-[#CBBDB1] uppercase font-dm font-semibold mt-1">
                    LAW CHAMBERS
                  </span>
                </div>
              </Link>

              {/* Slogan Headline */}
              <div className="mt-7">
                <h3 className="font-heading font-bold text-[30px] sm:text-[26px] text-[#FAF8F5] leading-[1.14] sm:leading-snug">
                  <span className="sm:hidden">
                    People. Perspective.<br />
                    <span className="gold-gradient-shine">Progress.</span>
                  </span>
                  <span className="hidden sm:inline">
                    People.<br />
                    Perspective.<br />
                    <span className="gold-gradient-shine">Progress.</span>
                  </span>
                </h3>
                <p className="mt-3 text-xs sm:text-[13px] text-[#CBBDB1] font-dm leading-relaxed max-w-xs">
                  Trusted legal solutions for a fairer, brighter tomorrow.
                </p>
              </div>
            </div>

            {/* Social Media Circular Links with Gold Borders and Gold Icons */}
            <div className="mt-7 flex items-center justify-center sm:justify-start gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#C59633] hover:border-[#F2D079] bg-[#360C11] hover:bg-[#4A1118] text-[#DEAF3D] hover:text-[#FAF8F5] flex items-center justify-center transition-all duration-200 shadow-xs"
              >
                <span className="text-[11px] font-bold font-sans">in</span>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full border border-[#C59633] hover:border-[#F2D079] bg-[#360C11] hover:bg-[#4A1118] text-[#DEAF3D] hover:text-[#FAF8F5] flex items-center justify-center transition-all duration-200 shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#C59633] hover:border-[#F2D079] bg-[#360C11] hover:bg-[#4A1118] text-[#DEAF3D] hover:text-[#FAF8F5] flex items-center justify-center transition-all duration-200 shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#C59633] hover:border-[#F2D079] bg-[#360C11] hover:bg-[#4A1118] text-[#DEAF3D] hover:text-[#FAF8F5] flex items-center justify-center transition-all duration-200 shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: USEFUL LINKS (Cell 1 of 2x2 Grid on mobile, Span 3 on desktop) */}
          <div className="col-span-1 lg:col-span-3 lg:border-l lg:border-[#441117] lg:pl-8">
            <h4 className="text-xs font-bold tracking-[0.22em] text-[#FAF8F5] uppercase font-dm">
              USEFUL LINKS
            </h4>
            <div className="w-6 h-[1.5px] bg-[#B88E44] mt-2 mb-4" />

            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] font-dm text-[#CBBDB1]">
              <li>
                <Link href="/" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#legacy" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#practice-areas" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="#awards" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  Awards &amp; Recognition
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: RESOURCES (Cell 2 of 2x2 Grid on mobile, Span 2 on desktop) */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.22em] text-[#FAF8F5] uppercase font-dm">
              RESOURCES
            </h4>
            <div className="w-6 h-[1.5px] bg-[#B88E44] mt-2 mb-4" />

            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] font-dm text-[#CBBDB1]">
              <li>
                <Link href="#insights" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#insights" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  Legal Insights
                </Link>
              </li>
              <li>
                <Link href="#creed" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  Chamber Creed
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="hover:text-[#FAF8F5] hover:translate-x-1 transition-all duration-200 inline-block">
                  Bar Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH (Cell 3 of 2x2 Grid on mobile, Span 3 on desktop) */}
          <div className="col-span-1 lg:col-span-3 lg:border-l lg:border-[#441117] lg:pl-8">
            <h4 className="text-xs font-bold tracking-[0.22em] text-[#FAF8F5] uppercase font-dm">
              GET IN TOUCH
            </h4>
            <div className="w-6 h-[1.5px] bg-[#B88E44] mt-2 mb-4" />

            <p className="text-xs sm:text-[13px] text-[#CBBDB1] font-dm leading-relaxed max-w-xs">
              Have a question or need legal guidance?<br className="hidden sm:inline" />
              We&apos;re here to help.
            </p>

            {/* Outlined Gold CTA Button */}
            <div className="mt-4 sm:mt-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-between w-full max-w-[210px] px-3.5 sm:px-5 py-2.5 sm:py-3 border border-[#C59633] hover:border-[#DEAF3D] bg-transparent hover:bg-[#3E1016]/80 rounded-sm transition-all duration-200 group shadow-xs"
              >
                <span className="gold-gradient-shine text-[11px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.18em] uppercase">
                  GET IN TOUCH
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DEAF3D] transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Column 5: CHAMBER DESK (Cell 4 of 2x2 Grid on mobile, Hidden on tablet/desktop) */}
          <div className="col-span-1 md:hidden">
            <h4 className="text-xs font-bold tracking-[0.22em] text-[#FAF8F5] uppercase font-dm">
              CHAMBER DESK
            </h4>
            <div className="w-6 h-[1.5px] bg-[#B88E44] mt-2 mb-4" />

            <p className="text-xs text-[#CBBDB1] font-dm leading-relaxed">
              Supreme Court of India<br />
              High Courts • New Delhi
            </p>

            <div className="mt-4 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3D0F15] border border-[#5E1A22] text-[8.5px] font-mono text-[#E5C158]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse" />
                <span>ON OFFICIAL ROLL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Golden Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C59633]/60 to-transparent my-10 sm:my-12" />

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-dm text-[#A38D89]">
          <div>
            &copy; 2024 Trinetra Law Chambers. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[#A38D89]">
            <Link href="#privacy" className="hover:text-[#FAF8F5] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#5A1C23]">|</span>
            <Link href="#terms" className="hover:text-[#FAF8F5] transition-colors">
              Terms of Use
            </Link>
            <span className="text-[#5A1C23]">|</span>
            <Link href="#sitemap" className="hover:text-[#FAF8F5] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
