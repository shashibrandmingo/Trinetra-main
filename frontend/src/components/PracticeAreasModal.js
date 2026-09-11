'use client';

import { useEffect } from 'react';
import {
  X,
  Landmark,
  Building2,
  Scale,
  Home,
  FileText,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const modalPractices = [
  {
    id: '01',
    title: 'Constitutional & Writ Law',
    description: 'Constitutional challenges, writ petitions, fundamental rights and public law matters.',
    icon: Landmark,
  },
  {
    id: '02',
    title: 'Corporate & Commercial Litigation',
    description: 'Contractual disputes, corporate litigation, shareholder matters and commercial claims.',
    icon: Building2,
  },
  {
    id: '03',
    title: 'Criminal Defence',
    description: 'Bail, appeals, complex criminal proceedings and white collar matters.',
    icon: Scale,
  },
  {
    id: '04',
    title: 'Civil & Property Disputes',
    description: 'Property disputes, injunctions, title matters and civil appeals.',
    icon: Home,
  },
  {
    id: '05',
    title: 'Administrative & Service Law',
    description: 'Matters relating to government, public authorities and service disputes.',
    icon: FileText,
  },
  {
    id: '06',
    title: 'Appellate & Tribunal Practice',
    description: 'Representation before appellate and specialised tribunals across forums.',
    icon: Users,
  },
];

export default function PracticeAreasModal({ isOpen, onClose, onSelectPractice }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-3 sm:p-5 md:p-6 bg-black/65 backdrop-blur-sm animate-fadeIn">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card: Compact single-screen view with mobile responsiveness */}
      <div className="relative z-10 w-full max-w-[960px] max-h-[92vh] sm:max-h-[90vh] bg-[#FAF8F5] text-[#2D2926] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E8E1D5] flex flex-col overflow-hidden my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-[#5C554E] hover:text-[#1A1817] p-2 bg-[#FAF8F5]/90 sm:bg-transparent hover:bg-[#EAE3D6]/90 rounded-full transition-colors cursor-pointer z-30 border border-[#E8E1D5] sm:border-0 shadow-xs sm:shadow-none"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= FIXED MODAL HEADER ================= */}
        <div className="flex flex-row items-end justify-between gap-4 px-4 xs:px-6 sm:px-9 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b border-[#E8E1D5] shrink-0 pr-12 sm:pr-14">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#9E6728]" />
              <span className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                OUR PRACTICE AREAS
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-heading text-base xs:text-lg sm:text-2xl lg:text-[28px] font-bold text-[#1A1817] leading-tight tracking-tight">
              <span>Six Practice Areas. </span>
              <span className="text-[#9E6728] font-serif font-normal italic block sm:inline">
                One Unified Perspective.
              </span>
            </h2>
          </div>

          {/* Right Header Motto Stack */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 pb-0.5">
            <div className="w-[1.5px] h-8 bg-[#D1C8BC]" />
            <div className="flex flex-col text-[8px] sm:text-[8.5px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm leading-tight">
              <span>PEOPLE</span>
              <span>LAW</span>
              <span>A FAIRER</span>
              <span>TOMORROW</span>
            </div>
          </div>
        </div>

        {/* ================= SCROLLABLE BODY ================= */}
        <div className="flex-1 overflow-y-auto px-4 xs:px-6 sm:px-9 py-3 sm:py-4.5 overscroll-contain">
          {/* 6 PRACTICE AREAS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-x-8 sm:gap-y-3.5 pb-3 sm:py-4.5 border-b border-[#E8E1D5]">
            {modalPractices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (onSelectPractice) {
                      onSelectPractice(idx);
                    }
                    onClose();
                  }}
                  className="group flex items-center justify-between gap-3 p-2.5 sm:p-2 rounded-xl sm:rounded-lg bg-white/60 sm:bg-transparent border border-[#E8E1D5]/60 sm:border-0 hover:bg-[#F3EDE2]/80 transition-all duration-150 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    {/* Item Number */}
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#9E6728] tracking-wider shrink-0">
                      {item.id}
                    </span>

                    {/* Icon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 text-[#9E6728] shrink-0 flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 stroke-[1.4]" />
                    </div>

                    {/* Text Content */}
                    <div className="min-w-0">
                      <h3 className="font-heading font-semibold text-xs sm:text-[13.5px] text-[#1A1817] group-hover:text-[#9E6728] transition-colors truncate">
                        {item.title}
                      </h3>
                      <p className="text-[10.5px] sm:text-[11.5px] text-[#6E665D] leading-snug font-sans truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#D5CDC0] text-[#9E6728] flex items-center justify-center shrink-0 group-hover:border-[#9E6728] group-hover:bg-[#9E6728] group-hover:text-white transition-all duration-150">
                    <ArrowRight className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= MIDDLE BANNER / QUOTE + CTA ================= */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 border-b border-[#E8E1D5]">
            <div>
              <p className="text-sm sm:text-lg font-serif italic text-[#8C6219] leading-tight">
                “Different matters. A deeper approach.”
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-5 h-[1.5px] bg-[#9E6728]" />
                <span className="text-[8.5px] sm:text-[9px] font-semibold tracking-[0.2em] text-[#8C827A] uppercase font-dm">
                  TRINETRA LAW CHAMBERS
                </span>
              </div>
            </div>

            <a
              href="/contact"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#141211] hover:bg-[#9E6728] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm group shrink-0 rounded-xs"
            >
              <span>DISCUSS YOUR MATTER</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* ================= BOTTOM CONTACT ROW ================= */}
          <div className="pt-3 sm:pt-3.5 pb-1 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6">
            
            {/* Phone */}
            <div className="flex items-center gap-2.5 p-1.5 sm:p-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5CDC0] bg-[#FAF8F5] text-[#9E6728] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[8px] sm:text-[8.5px] font-semibold tracking-[0.2em] text-[#8C827A] uppercase block font-dm leading-none">
                  PHONE
                </span>
                <a
                  href="tel:+911141512345"
                  className="text-[11px] sm:text-xs font-semibold text-[#1A1817] hover:text-[#9E6728] transition-colors mt-0.5 block"
                >
                  +91 11 4151 2345
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5 p-1.5 sm:p-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5CDC0] bg-[#FAF8F5] text-[#9E6728] flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[8px] sm:text-[8.5px] font-semibold tracking-[0.2em] text-[#8C827A] uppercase block font-dm leading-none">
                  EMAIL
                </span>
                <a
                  href="mailto:info@trinetralaw.com"
                  className="text-[11px] sm:text-xs font-semibold text-[#1A1817] hover:text-[#9E6728] transition-colors mt-0.5 block"
                >
                  info@trinetralaw.com
                </a>
              </div>
            </div>

            {/* Chambers Address */}
            <div className="flex items-center gap-2.5 p-1.5 sm:p-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5CDC0] bg-[#FAF8F5] text-[#9E6728] flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[8px] sm:text-[8.5px] font-semibold tracking-[0.22em] text-[#8C827A] uppercase block font-dm leading-none">
                  NEW DELHI CHAMBERS
                </span>
                <p className="text-[10.5px] sm:text-[11.5px] text-[#1A1817] font-medium leading-tight mt-0.5">
                  A-9, Green Park, New Delhi - 110016
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
