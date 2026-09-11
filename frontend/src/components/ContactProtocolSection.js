'use client';

import { useState } from 'react';
import { ChevronDown, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Conflict Check & Case Intake',
    desc: 'Prior to accepting any confidential disclosures, our registry conducts a statutory conflict of interest check across all pending and past retainers.',
  },
  {
    step: '02',
    title: 'In-Chamber Conference',
    desc: 'Senior advocates review the paper book, assess jurisdiction, evaluate limitation thresholds, and delineate the core legal questions.',
  },
  {
    step: '03',
    title: 'Precision Drafting & Apex Advocacy',
    desc: 'Special Leave Petitions (SLPs), writ briefs, and commercial rejoinders are drafted with meticulous scrutiny and presented forcefully before the bench.',
  },
];

const faqs = [
  {
    q: 'How are emergency or vacation bench matters handled?',
    a: 'For urgent constitutional protection, habeas corpus, or interim commercial injunctions, our registry maintains a round-the-clock emergency team. Synopsis and urgency applications can be processed and mentioned before the Chief Justice within 24 hours.',
  },
  {
    q: 'Can outstation clients and foreign corporations consult virtually?',
    a: 'Yes. Chambers provides high-definition secure virtual conference infrastructure for briefing counsel, pre-trial case strategy sessions, and hybrid court appearances across India.',
  },
  {
    q: 'What documentation should be provided for an initial assessment?',
    a: 'Please furnish copies of impugned judgments or high court orders, relevant contract clauses or statutory notices, and a chronological date-chart of events with current limitation status.',
  },
  {
    q: 'What is the chamber policy on attorney-client privilege?',
    a: 'Under Sections 126 and 129 of the Indian Evidence Act and the Bar Council of India Rules, all communications and briefs submitted to Trinetra Law Chambers are strictly confidential and privileged.',
  },
];

export default function ContactProtocolSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] py-14 sm:py-18 lg:py-24 border-b border-[#E8E1D5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= 3-STEP ENGAGEMENT PROTOCOL ================= */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
            <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
              THE ENGAGEMENT PROTOCOL
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1A1817] leading-[1.1] tracking-tight">
            How Chambers Accepts & Prepares Briefs.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8E1D5] hover:border-[#9E6728] transition-all duration-300 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#9E6728] block mb-3">
                    {item.step}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#1A1817]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#5C544D] mt-2 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EBE2] flex items-center gap-2 text-[10.5px] font-semibold text-[#9E6728] font-dm uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Statutory Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FAQ ACCORDION ================= */}
        <div className="pt-10 sm:pt-14 border-t border-[#E8E1D5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm block mb-2">
                BRIEFING FAQS
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1A1817] leading-tight tracking-tight">
                Frequently Addressed Inquiries.
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#5C544D] mt-3 leading-relaxed font-sans max-w-md">
                Clear answers regarding retainers, court appearances, urgency filings, and confidential consultation protocols.
              </p>
            </div>

            {/* Right Accordion Items */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl sm:rounded-2xl border border-[#E8E1D5] overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-heading font-semibold text-xs sm:text-[14px] text-[#1A1817]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#9E6728] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-[13px] text-[#5C544D] font-sans leading-relaxed border-t border-[#F0EBE2] pt-3.5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
