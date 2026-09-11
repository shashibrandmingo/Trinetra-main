'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X, ChevronRight, Phone } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { num: '01', name: 'Home', href: '/', subtitle: 'Chambers Overview' },
    { num: '02', name: 'About', href: '/about', subtitle: 'The Firm & Heritage' },
    { num: '03', name: 'Practice Areas', href: '/practice-areas', subtitle: 'Courts & Jurisdictions' },
    { num: '04', name: 'Insights', href: '/blogs', subtitle: 'Precedents & Commentary' },
    { num: '05', name: 'Contact', href: '/contact', subtitle: 'Reach The Chambers' },
  ];

  // Sync active navigation item with current URL pathname on initial load and route changes
  useEffect(() => {
    if (!pathname) return;

    if (pathname === '/about' || pathname.startsWith('/about')) {
      setActiveItem('About');
    } else if (pathname === '/practice-areas' || pathname.startsWith('/practice-areas')) {
      setActiveItem('Practice Areas');
    } else if (pathname === '/blogs' || pathname.startsWith('/blogs')) {
      setActiveItem('Insights');
    } else if (pathname === '/contact' || pathname.startsWith('/contact')) {
      setActiveItem('Contact');
    } else if (pathname === '/') {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      if (hash === '#practice-areas') {
        setActiveItem('Practice Areas');
      } else if (hash === '#insights') {
        setActiveItem('Insights');
      } else if (hash === '#contact') {
        setActiveItem('Contact');
      } else {
        setActiveItem('Home');
      }
    }
  }, [pathname]);

  // Elevation shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Topmost Burgundy Brand Accent Strip */}
      <div className="w-full h-1 bg-[#4A1118]" />

      {/* Main Navbar Bar */}
      <nav
        className={`w-full bg-[#FAF8F5] transition-all duration-300 border-b border-[#E8E1D5]/90 ${
          isScrolled ? 'shadow-md shadow-[#4A1118]/8' : ''
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Official Brand Logo & Law Chambers Title */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              onClick={() => setActiveItem('Home')}
            >
              {/* Logo Emblem Container */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[#B88E44] ring-offset-2 ring-offset-[#FAF8F5] shadow-md shadow-[#4A1118]/15 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Trinetra-Law-Chamber-logo.jpg"
                  alt="Trinetra Law Chambers Logo"
                  fill
                  sizes="(max-width: 640px) 40px, 48px"
                  className="object-cover object-top scale-105"
                  priority
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-bold tracking-[0.14em] text-[#4A1118] font-serif leading-none">
                  TRINETRA
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#A68444] mt-1 uppercase leading-none">
                  — LAW CHAMBERS
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => {
                const isActive = (pathname === '/about' || pathname?.startsWith('/about'))
                  ? item.name === 'About'
                  : activeItem === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className="relative py-2 text-[15px] font-medium transition-colors duration-200 focus:outline-none"
                  >
                    <span
                      className={`${
                        isActive
                          ? 'text-[#4A1118] font-semibold'
                          : 'text-[#4A443E] hover:text-[#4A1118]'
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Active Underline Accent (exact replica of reference screenshot) */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-[2px] bg-[#4A1118] rounded-full transition-all duration-300" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right: Desktop Consultation Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-wider uppercase rounded transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#4A1118] focus:ring-offset-2 focus:ring-offset-[#FAF8F5]"
              >
                <span>CONSULTATION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-white" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button with Smooth Icon Morphing */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 rounded-xl border border-[#D5CBC0] bg-[#F7F3EC] hover:bg-[#EFE8DC] active:scale-95 flex items-center justify-center text-[#4A1118] transition-all duration-200 focus:outline-none shadow-2xs"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <Menu
                    className={`w-5 h-5 stroke-[2.2] absolute transition-all duration-300 ease-out ${
                      isMobileMenuOpen
                        ? 'opacity-0 rotate-90 scale-50'
                        : 'opacity-100 rotate-0 scale-100'
                    }`}
                  />
                  <X
                    className={`w-5 h-5 stroke-[2.2] absolute transition-all duration-300 ease-out ${
                      isMobileMenuOpen
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-50'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Soft Background Backdrop Overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`lg:hidden fixed inset-0 top-[65px] sm:top-[81px] bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 z-40 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
        />

        {/* Mobile Dropdown Drawer (Silky 60fps Grid-Template-Rows Height Transition) */}
        <div
          className={`lg:hidden relative z-50 grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#FAF8F5] shadow-2xl ${
            isMobileMenuOpen
              ? 'grid-rows-[1fr] opacity-100 border-t border-[#E8E1D5]'
              : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          }`}
        >
          <div className="overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-3.5 pb-5 flex flex-col space-y-1.5">
              {navItems.map((item, idx) => {
                const isActive = (pathname === '/about' || pathname?.startsWith('/about'))
                  ? item.name === 'About'
                  : (pathname === '/practice-areas' || pathname?.startsWith('/practice-areas'))
                  ? item.name === 'Practice Areas'
                  : (pathname === '/blogs' || pathname?.startsWith('/blogs'))
                  ? item.name === 'Insights'
                  : (pathname === '/contact' || pathname?.startsWith('/contact'))
                  ? item.name === 'Contact'
                  : activeItem === item.name;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${idx * 40}ms` : '0ms',
                    }}
                    className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-300 ease-out transform ${
                      isMobileMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-3 opacity-0'
                    } ${
                      isActive
                        ? 'bg-gradient-to-r from-[#F2EAE0] via-[#F6F0E7] to-[#FAF8F5] border-l-[3px] border-[#4A1118] shadow-2xs'
                        : 'hover:bg-white/80 border-l-[3px] border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Index Number */}
                      <span className={`font-serif text-[11px] font-semibold tracking-wider ${
                        isActive ? 'text-[#9E6728]' : 'text-[#A89E92] group-hover:text-[#9E6728]'
                      }`}>
                        {item.num}
                      </span>

                      {/* Title + Subtitle */}
                      <div className="flex flex-col">
                        <span className={`font-heading text-[15px] font-semibold tracking-tight transition-colors ${
                          isActive
                            ? 'text-[#4A1118]'
                            : 'text-[#2D2824] group-hover:text-[#4A1118]'
                        }`}>
                          {item.name}
                        </span>
                        <span className="text-[10.5px] font-dm text-[#8C827A] -mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Right Accent Arrow / Active Indicator */}
                    <div className="flex items-center gap-1.5">
                      {isActive ? (
                        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4A1118] font-dm bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#E8E1D5]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A1118] animate-pulse" />
                          Active
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#C9BEB2] group-hover:text-[#9E6728] group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                  </Link>
                );
              })}

              {/* Divider with subtle stagger */}
              <div 
                style={{ transitionDelay: isMobileMenuOpen ? '220ms' : '0ms' }}
                className={`pt-2 pb-1 transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                <div className="w-full h-[1px] bg-[#E8E1D5]/80" />
              </div>

              {/* Mobile Action Button with subtle stagger */}
              <div
                style={{ transitionDelay: isMobileMenuOpen ? '260ms' : '0ms' }}
                className={`transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full group flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-[#4A1118] to-[#380C12] hover:from-[#380C12] hover:to-[#2A090E] text-white text-xs font-bold tracking-[0.18em] uppercase rounded-xl shadow-md shadow-[#4A1118]/15 border border-[#9E6728]/40 transition-all duration-200 active:scale-[0.99]"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span>SCHEDULE CONSULTATION</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#4A1118] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Chamber Direct Call Quick Link */}
              <div
                style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
                className={`pt-2 flex items-center justify-between px-2 text-[10.5px] font-dm text-[#78716A] transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                <a
                  href="tel:+911141512345"
                  className="flex items-center gap-1.5 hover:text-[#4A1118] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#9E6728]" />
                  <span className="font-medium">+91 11 4151 2345</span>
                </a>
                <span className="text-[10px] tracking-wider uppercase text-[#A89E92] font-semibold">
                  New Delhi Chambers
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
