'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

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
                const isActive = activeItem === item.name;
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
                href="#consultation"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-wider uppercase rounded transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4A1118]/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#4A1118] focus:ring-offset-2 focus:ring-offset-[#FAF8F5]"
              >
                <span>CONSULTATION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-white" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#4A1118] hover:bg-[#F2ECE1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A1118]/40"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-[#E8E1D5] bg-[#FAF8F5] ${
            isMobileMenuOpen ? 'max-h-[480px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-md text-base transition-colors ${
                    isActive
                      ? 'bg-[#F2EAE0] text-[#4A1118] font-semibold'
                      : 'text-[#4A443E] hover:bg-[#F5EFE7] hover:text-[#4A1118]'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#4A1118]" />
                  )}
                </Link>
              );
            })}

            {/* Mobile Action Button */}
            <div className="pt-3 pb-1">
              <Link
                href="#consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-widest uppercase rounded shadow-sm transition-colors"
              >
                <span>CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
