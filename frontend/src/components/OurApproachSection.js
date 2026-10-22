'use client';

import Image from 'next/image';
import { ArrowRight, ShieldCheck, UserCheck, Scale } from 'lucide-react';

const approachSteps = [
  {
    step: '01',
    title: 'FACTS & EVIDENCE',
    image: '/approach-step1-facts.jpg',
    alt: 'Understand the facts and evidence - Case briefs with FACTS stamp and fountain pen',
    description: 'Comprehensive examination of FIRs, contracts, trial records, and evidentiary trail.',
  },
  {
    step: '02',
    title: 'STATUTORY ANALYSIS',
    image: '/approach-step2-law.jpg',
    alt: 'Analyse legal position - Magnifying glass over THE LAW document',
    description: 'Examining statutory provisions, High Court and Supreme Court binding precedents.',
  },
  {
    step: '03',
    title: 'STRATEGY & DRAFTING',
    image: '/approach-step3-strategy.jpg',
    alt: 'Prepare legal strategy - Leather law books STRATEGY, RESEARCH, PRECEDENTS, ARGUMENTS',
    description: 'Crafting precision pleadings, interim relief prayers, and clear procedural roadmaps.',
  },
  {
    step: '04',
    title: 'COURT ADVOCACY',
    image: '/approach-step4-advocate.jpg',
    alt: 'Advocate in court - Bronze Lady Justice holding scales',
    description: 'Vigorous oral arguments and pursuit of effective remedies before judicial benches.',
  },
];

export default function OurApproachSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] overflow-hidden border-b border-[#E8E1D5] py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-between">
        
        {/* ================= TOP GRID: MAIN CONTENT + RIGHT ASSURANCE COLUMN ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* ================= LEFT 8 COLS: NARRATIVE HEADER + 4 STEP CARDS ================= */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between">
            
            {/* Header: Narrative */}
            <div className="pb-8 sm:pb-10 border-b border-[#E8E1D5]/80">
              <div className="max-w-2xl">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-3 sm:mb-3.5">
                  <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
                  <span className="text-[10px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                    OUR LITIGATION METHODOLOGY
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="font-heading text-[28px] sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold tracking-tight text-[#1A1817] leading-[1.12]">
                  <span>A Structured Approach to</span>
                  <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                    Complex Legal Matters.
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="mt-3.5 sm:mt-4 text-[#554E46] text-xs sm:text-sm lg:text-[14.5px] font-dm leading-relaxed max-w-xl">
                  Every legal dispute is handled through meticulous evidentiary analysis, thorough statutory research, and strategic courtroom advocacy designed to protect your interests.
                </p>
              </div>
            </div>

            {/* 4 Step Cards Row */}
            <div className="mt-6 sm:mt-10 lg:mt-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-3 xl:gap-4 relative items-stretch">
                
                {approachSteps.map((item, idx) => (
                  <div key={item.step} className="relative flex items-center">
                    
                    {/* Arched Step Card */}
                    <div className="group relative w-full bg-white border border-[#E8E1D5] rounded-t-[48px] sm:rounded-t-[60px] rounded-b-xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-300 hover:border-[#B88E44]/60 hover:shadow-md hover:-translate-y-1">
                      
                      {/* Step Number */}
                      <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#4A1118] font-bold pt-2 sm:pt-3 select-none">
                        {item.step}
                      </span>

                      {/* Step Title */}
                      <span className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.16em] text-[#1A1817] uppercase font-dm mt-1 mb-2.5 sm:mb-3">
                        {item.title}
                      </span>

                      {/* Circular Thumbnail Frame */}
                      <div className="relative w-16 h-16 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden border border-[#D9CEBF] bg-[#EAE4D9] shadow-sm my-1 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 640px) 70px, 100px"
                          className="object-cover object-center"
                        />
                      </div>

                      {/* Ochre Divider */}
                      <span className="w-5 h-[1.5px] bg-[#B88E44] my-2.5 sm:my-3" />

                      {/* Step Description */}
                      <p className="text-[10.5px] sm:text-xs text-[#5C544D] font-dm leading-relaxed pb-2 sm:pb-3">
                        {item.description}
                      </p>

                    </div>

                    {/* Connector Arrow on Desktop */}
                    {idx < approachSteps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-2.5 xl:-right-3 z-10 text-[#B88E44] pointer-events-none">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}

                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* ================= RIGHT 4 COLS: CLIENT SAFEGUARDS & PROTOCOL ================= */}
          <div className="lg:col-span-4 xl:col-span-4 relative rounded-xl overflow-hidden border border-[#E8E1D5] bg-[#1F1413] text-white p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            
            {/* Subtle background courthouse image */}
            <Image
              src="/pratice-area-4.png"
              alt="Courthouse Sandstone Classical Columns"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center opacity-15 select-none pointer-events-none"
            />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B88E44]/20 border border-[#B88E44]/40 text-[#D8B478] text-[9.5px] sm:text-[10px] font-bold tracking-[0.18em] uppercase font-dm mb-5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B88E44]" />
                <span>CHAMBERS COMMITMENT</span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FAF8F5] leading-snug">
                Transparent Advisory &amp; Ethical Advocacy.
              </h3>

              <p className="text-xs text-[#C5BCB3] font-dm leading-relaxed mt-2.5 mb-6">
                Litigation requires objective evaluation of facts and law, without unrealistic promises or ambiguity.
              </p>

              {/* 3 Core Authentic Principles */}
              <div className="space-y-4 pt-4 border-t border-[#3D2C2B]">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-[#4A1118] border border-[#8C6D37]/40 text-[#D8B478] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-dm">Statutory Confidentiality</h4>
                    <p className="text-[11px] text-[#A89E95] font-dm leading-relaxed mt-0.5">
                      Strict attorney-client privilege under Section 126 of the Indian Evidence Act.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-[#4A1118] border border-[#8C6D37]/40 text-[#D8B478] shrink-0 mt-0.5">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-dm">Direct Lead Counsel Access</h4>
                    <p className="text-[11px] text-[#A89E95] font-dm leading-relaxed mt-0.5">
                      Substantive case strategy and drafting personally supervised by Dr. Monika Anand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-[#4A1118] border border-[#8C6D37]/40 text-[#D8B478] shrink-0 mt-0.5">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-dm">Objective Legal Merits</h4>
                    <p className="text-[11px] text-[#A89E95] font-dm leading-relaxed mt-0.5">
                      Clear assessment of legal risk, procedural timelines, and potential remedies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="relative z-10 pt-6 mt-6 border-t border-[#3D2C2B]">
              <button
                type="button"
                data-open-enquiry="true"
                data-note="Initiated from Our Approach Section"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-[#B88E44] hover:bg-[#8C6D37] text-white font-dm font-bold text-xs tracking-wider uppercase rounded transition-colors shadow-sm cursor-pointer"
              >
                <span>CONSULT CHAMBERS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
