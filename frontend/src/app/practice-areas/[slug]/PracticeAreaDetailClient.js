'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageSquare,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
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

export default function PracticeAreaDetailClient({ practice, otherPractices }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const { openEnquiry } = useEnquiryModal();

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const IconComponent = iconMap[practice.iconName] || Scale;

  return (
    <div className="w-full bg-[#FAF8F5] text-[#2D2926] min-h-screen">
      
      {/* ========================================================= */}
      {/* 1. CLEAN BREADCRUMB STRIP                                 */}
      {/* ========================================================= */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E1D5] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs font-dm">
          <div className="flex items-center gap-2 text-[#78716A]">
            <Link href="/" className="hover:text-[#1A1817] transition-colors">
              Home
            </Link>
            <span className="text-[#D0C7B8]">/</span>
            <Link href="/practice-areas" className="hover:text-[#1A1817] transition-colors">
              Practice Areas
            </Link>
            <span className="text-[#D0C7B8]">/</span>
            <span className="text-[#9E6728] font-semibold truncate max-w-[200px] sm:max-w-none">
              {practice.title}
            </span>
          </div>

          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-1.5 text-[#554E46] hover:text-[#9E6728] font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Practice Areas</span>
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. SIMPLE, CLEAN DETAIL HERO BANNER                       */}
      {/* ========================================================= */}
      <section className="bg-white border-b border-[#E8E1D5] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            <div className="max-w-3xl">
              {/* Category pill */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#9E6728] border border-[#E8E1D5] font-dm">
                  <IconComponent className="w-3.5 h-3.5" />
                  {practice.category}
                </span>
                <span className="text-xs font-mono font-medium text-[#78716A]">
                  #{practice.id}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1817] leading-tight mb-3">
                {practice.title}
              </h1>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-[#554E46] font-dm leading-relaxed mb-6">
                {practice.tagline}
              </p>

              {/* Venues Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-semibold text-[#78716A] uppercase font-dm mr-1">
                  Primary Forums:
                </span>
                {practice.courtVenues.map((venue, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-[#FAF8F5] text-[#1A1817] px-2.5 py-1 rounded-lg border border-[#E8E1D5]"
                  >
                    {venue}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openEnquiry({ practiceArea: practice.title })}
                  className="px-5 py-2.5 rounded-xl bg-[#9E6728] hover:bg-[#85531B] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href="tel:+919999953430"
                  className="px-5 py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#F5EFEB] text-[#1A1817] border border-[#D9CFBF] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#9E6728]" />
                  <span>Call: +91 99999 53430</span>
                </a>
              </div>
            </div>

            {/* Counsel Mini Card */}
            <div className="w-full lg:w-72 bg-[#FAF8F5] rounded-2xl border border-[#E8E1D5] p-5 shrink-0">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#E8E1D5]">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#9E6728] relative shrink-0">
                  <Image
                    src="/counsel-portrait.jpg"
                    alt="Dr. Monika Anand"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#1A1817]">
                    Dr. Monika Anand
                  </h4>
                  <p className="text-[11px] text-[#78716A] font-dm">
                    Lead Litigation Counsel
                  </p>
                  <p className="text-[10px] text-[#9E6728] font-semibold">
                    Supreme Court & High Court
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-dm">
                <div className="flex items-center justify-between">
                  <span className="text-[#78716A]">Experience:</span>
                  <span className="font-bold text-[#1A1817]">9+ Years Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#78716A]">Chambers:</span>
                  <span className="font-bold text-[#1A1817]">Noida & New Delhi</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MAIN CONTENT: 2-COLUMN (Details + Contact Sidebar)     */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT / MAIN COLUMN (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Practice Overview */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E1D5]">
                <h2 className="font-heading text-xl font-bold text-[#1A1817] mb-3">
                  About This Practice Area
                </h2>
                <p className="text-xs sm:text-sm text-[#554E46] font-dm leading-relaxed">
                  {practice.overview}
                </p>
              </div>

              {/* Specific Offerings Grid */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#1A1817] mb-4">
                  What We Handle
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practice.keyOfferings.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-2xl border border-[#E8E1D5] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-[#9E6728] shrink-0" />
                          <h3 className="font-heading text-sm font-bold text-[#1A1817]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs text-[#554E46] font-dm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Representation Roadmap */}
              <div className="bg-[#F5EFEB] p-6 sm:p-7 rounded-2xl border border-[#E8E1D5]">
                <h2 className="font-heading text-xl font-bold text-[#1A1817] mb-4">
                  How We Handle Your Case
                </h2>
                <div className="space-y-3">
                  {practice.proceduralRoadmap.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl border border-[#E8E1D5] flex items-start gap-3"
                    >
                      <span className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E0D5C1] font-heading text-xs font-bold text-[#9E6728] flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-[#1A1817] mb-0.5">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#554E46] font-dm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Our Chambers */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E1D5]">
                <h2 className="font-heading text-xl font-bold text-[#1A1817] mb-4">
                  Why Choose Trinetra Law Chambers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {practice.whyChooseUs.map((reason, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5]"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#9E6728] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#362E27] font-dm leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ========================================================= */}
              {/* FAQS ACCORDION SECTION                                    */}
              {/* ========================================================= */}
              <div id="faqs" className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E1D5]">
                <div className="flex items-center gap-2 mb-1">
                  <HelpCircle className="w-4 h-4 text-[#9E6728]" />
                  <span className="text-[11px] font-semibold text-[#9E6728] uppercase font-dm">
                    Common Questions
                  </span>
                </div>
                <h2 className="font-heading text-xl font-bold text-[#1A1817] mb-4">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-2.5">
                  {practice.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`rounded-xl border transition-all duration-150 overflow-hidden ${
                          isOpen
                            ? 'border-[#9E6728] bg-[#FAF8F5]'
                            : 'border-[#E8E1D5] bg-white hover:border-[#D9CFBF]'
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                        >
                          <span className="font-heading text-xs sm:text-sm font-bold text-[#1A1817]">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#9E6728] shrink-0 transition-transform duration-150 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 text-xs text-[#554E46] font-dm leading-relaxed border-t border-[#E8E1D5] pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              
              {/* Quick Help Card */}
              <div className="bg-[#1A1817] text-white p-6 rounded-2xl border border-[#3A322B] sticky top-20">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C59A5F] block mb-2 font-dm">
                  Need Legal Assistance?
                </span>
                <h3 className="font-heading text-lg font-bold mb-2">
                  Speak with Dr. Monika Anand
                </h3>
                <p className="text-xs text-[#D1C8BC] font-dm leading-relaxed mb-5">
                  Get a confidential evaluation of your case from our litigation team.
                </p>

                <div className="space-y-2.5 mb-5">
                  <a
                    href="tel:+919999953430"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#9E6728] hover:bg-[#85531B] text-white text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 99999 53430</span>
                  </a>

                  <button
                    onClick={() => openEnquiry({ practiceArea: practice.title })}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#C59A5F]" />
                    <span>Request Callback</span>
                  </button>
                </div>

                {/* Office locations */}
                <div className="pt-4 border-t border-white/15 space-y-2.5 text-xs font-dm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C59A5F] shrink-0 mt-0.5" />
                    <span className="text-[#A89F95] text-[11px]">
                      Sector 62, Noida (ITHUM Tower)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C59A5F] shrink-0 mt-0.5" />
                    <span className="text-[#A89F95] text-[11px]">
                      Lajpat Nagar III, New Delhi
                    </span>
                  </div>
                </div>
              </div>

              {/* Other Practice Areas */}
              <div className="bg-white p-5 rounded-2xl border border-[#E8E1D5]">
                <h4 className="font-heading text-sm font-bold text-[#1A1817] mb-3 pb-2 border-b border-[#E8E1D5]">
                  Other Services
                </h4>
                <div className="space-y-1.5">
                  {otherPractices.slice(0, 5).map((other) => (
                    <Link
                      key={other.id}
                      href={`/practice-areas/${other.slug}`}
                      className="group flex items-center justify-between p-2 rounded-lg hover:bg-[#FAF8F5] text-xs font-dm text-[#362E27] hover:text-[#9E6728] transition-colors"
                    >
                      <span className="font-medium line-clamp-1">{other.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D1C8BC] group-hover:text-[#9E6728] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
