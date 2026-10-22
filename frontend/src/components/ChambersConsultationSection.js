'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Calendar, Clock, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ChambersConsultationSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] py-14 sm:py-18 lg:py-24 border-b border-[#E8E1D5] overflow-hidden">
      
      {/* Subtle Background Watermark */}
      <div 
        aria-hidden="true"
        className="absolute right-4 bottom-0 pointer-events-none select-none opacity-[0.03] text-[#1A1817] font-heading font-extrabold text-[200px] sm:text-[300px] lg:text-[400px] leading-none"
      >
        TLC
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= TOP CARD CONTAINER ================= */}
        <div className="bg-white rounded-2xl border border-[#E8E1D5] shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* ================= LEFT 7 COLS: CONSULTATION PROPOSAL ================= */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5">
                  <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                    CONFIDENTIAL CHAMBERS CONSULTATION
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-[#1A1817] leading-[1.15]">
                  Schedule a Direct Discussion
                  <span className="block gold-gradient-shine mt-1">
                    on Your Legal Matter.
                  </span>
                </h2>

                <p className="mt-4 text-[#554E46] text-xs sm:text-sm lg:text-[15px] font-dm leading-relaxed max-w-xl">
                  Whether facing urgent criminal bail proceedings, complex property disputes, matrimonial litigation, or appellate review before the High Court and Supreme Court, our chambers provide rigorous statutory evaluation and strategic advocacy.
                </p>

                {/* Key Features Pill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 sm:my-8 pt-6 border-t border-[#F0EAE1]">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#8C6D37] shrink-0" />
                    <span className="text-xs font-semibold text-[#2D2926] font-dm">Strict Client Privilege</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#8C6D37] shrink-0" />
                    <span className="text-xs font-semibold text-[#2D2926] font-dm">Prior Appointment</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#8C6D37] shrink-0" />
                    <span className="text-xs font-semibold text-[#2D2926] font-dm">Urgent Relief Protocol</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  data-open-enquiry="true"
                  data-note="Initiated from Homepage Chambers Consultation Section"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#4A1118] hover:bg-[#340B10] text-[#FAF8F5] transition-all duration-300 rounded shadow-md group cursor-pointer"
                >
                  <span className="font-dm font-bold text-xs tracking-[0.16em] uppercase">
                    REQUEST CONSULTATION
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#D8B478] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/919999953430?text=Hello%20Trinetra%20Law%20Chambers,%20I%20would%20like%20to%20schedule%20a%20legal%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#F5EFE6] hover:bg-[#EBE2D5] text-[#2D2926] border border-[#D9CEBF] transition-all duration-300 rounded font-dm font-semibold text-xs tracking-wider uppercase"
                >
                  <MessageSquare className="w-4 h-4 text-[#128C7E]" />
                  <span>WHATSAPP CHAMBERS</span>
                </a>
              </div>
            </div>

            {/* ================= RIGHT 5 COLS: CHAMBERS LOCATIONS & DIRECT LINES ================= */}
            <div className="lg:col-span-5 bg-[#1F1413] text-[#FAF8F5] p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#3D2C2B]">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D8B478] uppercase font-dm block mb-4">
                  CHAMBERS DIRECTORY
                </span>

                {/* Office 1: Noida */}
                <div className="pb-5 mb-5 border-b border-[#3D2C2B]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B88E44] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-white font-dm">
                        Noida Chambers
                      </h4>
                      <p className="text-[11.5px] sm:text-xs text-[#B5ABA1] font-dm leading-relaxed mt-1">
                        Office B-806, Tower B, The ITHUM, Sector 62, Noida, Gautam Buddha Nagar, UP 201309
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office 2: New Delhi */}
                <div className="pb-5 mb-5 border-b border-[#3D2C2B]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B88E44] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-white font-dm">
                        New Delhi Chambers
                      </h4>
                      <p className="text-[11.5px] sm:text-xs text-[#B5ABA1] font-dm leading-relaxed mt-1">
                        H-8, Lajpat Nagar III, New Delhi 110024
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="space-y-2.5">
                  <a
                    href="tel:+919999953430"
                    className="flex items-center gap-3 text-xs sm:text-[13px] text-[#FAF8F5] hover:text-[#D8B478] transition-colors font-dm"
                  >
                    <Phone className="w-4 h-4 text-[#B88E44] shrink-0" />
                    <span className="font-semibold">+91 99999 53430</span>
                    <span className="text-[11px] text-[#8C8278]">/ +91 99906 13140</span>
                  </a>

                  <a
                    href="mailto:support@monikaanand.com"
                    className="flex items-center gap-3 text-xs sm:text-[13px] text-[#FAF8F5] hover:text-[#D8B478] transition-colors font-dm"
                  >
                    <Mail className="w-4 h-4 text-[#B88E44] shrink-0" />
                    <span>support@monikaanand.com</span>
                  </a>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="mt-6 pt-5 border-t border-[#3D2C2B] flex items-center justify-between text-[11px] text-[#A89E95] font-dm">
                <span>Chamber Hours:</span>
                <span className="font-semibold text-white">Mon – Sat: 10:00 AM – 7:00 PM</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
