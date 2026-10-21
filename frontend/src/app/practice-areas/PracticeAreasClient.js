'use client';

import Link from 'next/link';
import {
  ShieldAlert,
  AlertTriangle,
  Scale,
  HeartHandshake,
  Landmark,
  Building2,
  Briefcase,
  Compass,
  Receipt,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { practiceAreasData } from '@/data/practiceAreasData';
import { useEnquiryModal } from '@/context/EnquiryModalContext';

const iconMap = {
  ShieldAlert,
  AlertTriangle,
  Scale,
  HeartHandshake,
  Landmark,
  Building2,
  Briefcase,
  Compass,
  Receipt,
};

export default function PracticeAreasClient() {
  const { openEnquiry } = useEnquiryModal();

  return (
    <div className="w-full bg-[#FAF8F5] text-[#2D2926] min-h-screen">
      
      {/* ========================================================= */}
      {/* 1. CLEAN, SIMPLE HERO HEADER                              */}
      {/* ========================================================= */}
      <section className="pt-12 sm:pt-16 pb-10 sm:pb-12 border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-[#9E6728] uppercase font-dm mb-3">
            PRACTICE AREAS
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1817] tracking-tight mb-4">
            Our Legal Practice Areas
          </h1>

          <p className="text-sm sm:text-base text-[#554E46] font-dm max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal representation and advisory led by <strong className="font-semibold text-[#1A1817]">Dr. Monika Anand</strong> before District Courts, Delhi High Court, and the Supreme Court of India.
          </p>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. PRACTICE AREAS CARDS GRID                              */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {practiceAreasData.map((item) => {
              const IconComponent = iconMap[item.iconName] || Scale;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#E8E1D5] hover:border-[#9E6728] hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    
                    {/* Top: Icon + Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5] group-hover:border-[#9E6728] group-hover:bg-[#F5EFEB] flex items-center justify-center transition-colors">
                        <IconComponent className="w-5 h-5 text-[#9E6728]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#9E9589] group-hover:text-[#9E6728] transition-colors">
                        #{item.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1A1817] group-hover:text-[#9E6728] transition-colors mb-2.5 leading-snug">
                      <Link href={`/practice-areas/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-[13px] text-[#554E46] font-dm leading-relaxed mb-5 line-clamp-3">
                      {item.tagline}
                    </p>

                    {/* Key Offerings Bullets */}
                    <div className="mt-auto space-y-2 mb-4 pt-3 border-t border-[#F0EAE1]">
                      {item.keyOfferings.slice(0, 3).map((offering, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#362E27]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6728] shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium">{offering.title}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Action Bar */}
                  <div className="px-6 py-3.5 bg-[#FAF8F5] border-t border-[#E8E1D5] flex items-center justify-between">
                    <Link
                      href={`/practice-areas/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9E6728] hover:text-[#85531B] transition-colors"
                    >
                      <span>View Details & FAQs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => openEnquiry({ practiceArea: item.title })}
                      className="text-[11px] font-semibold text-[#78716A] hover:text-[#1A1817] font-dm transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SIMPLE CLEAN BOTTOM HELP BANNER                        */}
      {/* ========================================================= */}
      <section className="py-12 bg-white border-t border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1A1817] mb-2">
            Have a Question About Your Case?
          </h2>
          <p className="text-xs sm:text-sm text-[#554E46] font-dm max-w-xl mx-auto mb-6 leading-relaxed">
            Speak directly with Dr. Monika Anand&apos;s litigation team for confidential legal advice and urgent court representation.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="tel:+919999953430"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#9E6728] hover:bg-[#85531B] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 99999 53430</span>
            </a>

            <button
              onClick={() => openEnquiry({ practiceArea: 'General Legal Consultation' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#F5EFEB] text-[#1A1817] border border-[#D9CFBF] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#9E6728]" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
