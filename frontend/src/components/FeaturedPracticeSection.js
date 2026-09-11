'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PracticeAreasModal from './PracticeAreasModal';

const featuredPractices = [
  {
    id: '01',
    category: 'CONSTITUTIONAL & WRIT LAW',
    line1: 'When the question',
    line2: 'is larger than',
    highlight: 'the dispute.',
    description:
      'Representation in matters involving fundamental rights, constitutional interpretation, writ jurisdiction and challenges affecting individuals, institutions and public bodies.',
    subItems: [
      { code: '01', label: 'ARTICLE 32' },
      { code: '02', label: 'ARTICLE 226' },
      { code: '03', label: 'FUNDAMENTAL RIGHTS' },
      { code: '04', label: 'PUBLIC INTEREST LITIGATION' },
    ],
    image: '/pratice-area-3.png',
    courtName1: 'SUPREME COURT',
    courtName2: 'OF INDIA',
    courtQuote: '“CONSTITUTIONAL PRINCIPLES GIVE PURPOSE TO POWER.”',
    pillars: ['LAW', 'PEOPLE', 'JUSTICE', 'SOCIETY'],
    cardQuoteLine1: 'CONSTITUTIONAL',
    cardQuoteLine2: 'LAW SHAPES',
    cardQuoteLine3: 'A FAIRER TOMORROW.',
    citation: 'TRINETRA LAW CHAMBERS',
  },
  {
    id: '02',
    category: 'CORPORATE & COMMERCIAL LITIGATION',
    line1: 'Protecting enterprise',
    line2: 'value when stakes',
    highlight: 'are highest.',
    description:
      'High-value commercial disputes, shareholder deadlocks, breach of contracts, insolvency, and corporate arbitration before national and international tribunals.',
    subItems: [
      { code: '01', label: 'COMMERCIAL DISPUTES' },
      { code: '02', label: 'ARBITRATION & MEDIATION' },
      { code: '03', label: 'SHAREHOLDER DEADLOCKS' },
      { code: '04', label: 'IBC & INSOLVENCY' },
    ],
    image: '/pratice-area-3.png',
    courtName1: 'COMMERCIAL COURTS',
    courtName2: '& ARBITRATION',
    courtQuote: '“CERTAINTY IN CONTRACTS CREATES COMMERCIAL STABILITY.”',
    pillars: ['COMMERCE', 'FIDUCIARY', 'EQUITY', 'STABILITY'],
    cardQuoteLine1: 'STRATEGIC LITIGATION',
    cardQuoteLine2: 'SECURES CORPORATE',
    cardQuoteLine3: 'RESILIENCE & VALUE.',
    citation: 'TRINETRA LAW CHAMBERS',
  },
  {
    id: '03',
    category: 'CRIMINAL DEFENCE & WHITE COLLAR',
    line1: 'Defending personal',
    line2: 'liberty with unyielding',
    highlight: 'rigorous defence.',
    description:
      'White-collar crime, statutory prosecutions, PMLA proceedings, CBI defense, anticipatory bail, and appellate trial representation across constitutional and trial forums.',
    subItems: [
      { code: '01', label: 'WHITE COLLAR CRIME' },
      { code: '02', label: 'PMLA & CBI ENFORCEMENT' },
      { code: '03', label: 'ANTICIPATORY BAIL' },
      { code: '04', label: 'APPELLATE DEFENCE' },
    ],
    image: '/pratice-area-3.png',
    courtName1: 'SPECIAL CBI COURTS',
    courtName2: '& SESSIONS',
    courtQuote: '“LIBERTY IS THE FOREMOST CONSTITUTIONAL VALUE.”',
    pillars: ['LIBERTY', 'FAIRNESS', 'PROCESS', 'DUE LAW'],
    cardQuoteLine1: 'A ROBUST DEFENCE',
    cardQuoteLine2: 'IS THE BULWARK',
    cardQuoteLine3: 'OF CIVIL LIBERTY.',
    citation: 'TRINETRA LAW CHAMBERS',
  },
  {
    id: '04',
    category: 'CIVIL & PROPERTY DISPUTES',
    line1: 'Securing generational',
    line2: 'rights, title and',
    highlight: 'family estates.',
    description:
      'Title adjudication, succession and estate claims, injunction suits, property partitions, specific performance, and real estate litigation across original benches.',
    subItems: [
      { code: '01', label: 'TITLE & PARTITION' },
      { code: '02', label: 'SUCCESSION & WILLS' },
      { code: '03', label: 'INJUNCTION SUITS' },
      { code: '04', label: 'REAL ESTATE LITIGATION' },
    ],
    image: '/pratice-area-3.png',
    courtName1: 'HIGH COURTS &',
    courtName2: 'CIVIL BENCHES',
    courtQuote: '“PROPERTY RIGHTS ANCHORED IN EQUITABLE LAW.”',
    pillars: ['TITLE', 'SUCCESSION', 'INTEGRITY', 'ASSETS'],
    cardQuoteLine1: 'SAFEGUARDING WHAT',
    cardQuoteLine2: 'GENERATIONS HAVE',
    cardQuoteLine3: 'DILIGENTLY BUILT.',
    citation: 'TRINETRA LAW CHAMBERS',
  },
  {
    id: '05',
    category: 'ADMINISTRATIVE & SERVICE LAW',
    line1: 'Challenging arbitrariness',
    line2: 'in governance and',
    highlight: 'public action.',
    description:
      'Service grievances, disciplinary inquiries, pensions, seniority disputes, and matters before Central Administrative Tribunal (CAT) and High Courts.',
    subItems: [
      { code: '01', label: 'CAT TRIBUNAL' },
      { code: '02', label: 'SENIORITY DISPUTES' },
      { code: '03', label: 'DISCIPLINARY PROCEEDINGS' },
      { code: '04', label: 'PENSION REMEDIES' },
    ],
    image: '/pratice-area-3.png',
    courtName1: 'CENTRAL ADMINISTRATIVE',
    courtName2: 'TRIBUNAL (CAT)',
    courtQuote: '“RULE OF LAW BARS ARBITRARINESS IN PUBLIC POWER.”',
    pillars: ['MERIT', 'EQUITY', 'TENURE', 'JUSTICE'],
    cardQuoteLine1: 'PUBLIC POWER MUST',
    cardQuoteLine2: 'ALWAYS REMAIN',
    cardQuoteLine3: 'ROOTED IN PRINCIPLE.',
    citation: 'TRINETRA LAW CHAMBERS',
  },
  {
    id: '06',
    category: 'APPELLATE & TRIBUNAL PRACTICE',
    line1: 'Pioneering persuasive',
    line2: 'advocacy before the',
    highlight: 'highest apex benches.',
    description:
      'Special Leave Petitions (SLP), statutory appeals, revision petitions before the Supreme Court and specialized statutory tribunals including NCLAT, TDSAT, and CESTAT.',
    subItems: [
      { code: '01', label: 'ARTICLE 136 SLP' },
      { code: '02', label: 'SUPREME COURT APPEALS' },
      { code: '03', label: 'NCLAT & TDSAT' },
      { code: '04', label: 'STATUTORY REVISION' },
    ],
    image: '/pratice-area-3.png',
    courtName1: 'APEX BENCHES &',
    courtName2: 'SUPREME COURT',
    courtQuote: '“PRECISION IN APPELLATE ADVOCACY CREATES LAW.”',
    pillars: ['PRECEDENT', 'APPEALS', 'SPECIALITY', 'STATUTES'],
    cardQuoteLine1: 'FORMULATING LAW',
    cardQuoteLine2: 'BEFORE THE APEX',
    cardQuoteLine3: 'CONSTITUTION BENCH.',
    citation: 'TRINETRA LAW CHAMBERS',
  },
];

export default function FeaturedPracticeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const current = featuredPractices[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredPractices.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredPractices.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] py-12 sm:py-16 lg:py-20 border-b border-[#E8E1D5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= TOP EYEBROW ================= */}
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
          <span className="text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
            FEATURED PRACTICE
          </span>
        </div>

        {/* ================= MAIN TWO-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            <div>
              {/* Number with line on top */}
              <div className="flex flex-col items-start mb-2">
                <span className="w-6 h-[1.5px] bg-[#9E6728] mb-1.5" />
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#9E6728] tracking-wider leading-none">
                  {current.id}
                </span>
              </div>

              {/* Category Subtitle */}
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] text-[#6E665D] uppercase block mt-2.5 font-dm">
                {current.category}
              </span>

              {/* Main Headline: Matches other site sections exactly */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[45px] xl:text-[50px] font-bold text-[#1A1817] leading-[1.08] tracking-tight mt-3">
                <span className="block">{current.line1}</span>
                <span className="block">{current.line2}</span>
                <span className="block text-[#9E6728]">{current.highlight}</span>
              </h2>

              {/* Description */}
              <p className="text-[#5C554E] text-[13px] sm:text-[14px] leading-relaxed mt-3.5 sm:mt-4 max-w-lg font-sans">
                {current.description}
              </p>
            </div>

            {/* Sub-Items List */}
            <div className="mt-6 sm:mt-8 divide-y divide-[#E8E1D5] border-t border-[#E8E1D5]">
              {current.subItems.map((item) => (
                <div
                  key={item.code}
                  onClick={() => setIsModalOpen(true)}
                  className="group py-2.5 sm:py-3 flex items-center justify-between transition-all duration-200 hover:bg-[#F4EFE6]/50 cursor-pointer px-1 rounded-sm"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Circle Arrow Button */}
                    <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border border-[#C2B5A3] text-[#9E6728] flex items-center justify-center transition-all duration-300 group-hover:border-[#9E6728] group-hover:bg-[#9E6728] group-hover:text-white group-hover:scale-105 shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>

                    {/* Item Label */}
                    <span className="font-dm font-semibold text-[10.5px] sm:text-[11.5px] tracking-[0.2em] text-[#2D2926] uppercase group-hover:text-[#9E6728] transition-colors">
                      {item.label}
                    </span>
                  </div>

                  {/* Item Number */}
                  <span className="font-dm text-[10.5px] sm:text-[11.5px] text-[#A69C8E] font-medium tracking-wider">
                    {item.code}
                  </span>
                </div>
              ))}
              <div className="border-b border-[#E8E1D5]" />
            </div>

            {/* Bottom CTA Button - Opens Modal */}
            <div className="mt-6 sm:mt-8">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3.5 bg-[#141211] hover:bg-[#9E6728] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-[10.5px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-md group rounded-xs cursor-pointer"
              >
                <span>EXPLORE THIS PRACTICE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (VISUAL SHOWCASE) ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between max-w-[540px] lg:ml-auto w-full">
            
            {/* Outer relative container */}
            <div className="relative pb-6 sm:pb-8">
              
              {/* Image Frame: Compact height (reduced size as requested) */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E8E1D5] bg-[#EDE7DD] h-[310px] sm:h-[350px] lg:h-[380px] xl:h-[410px]">
                
                {/* Supreme Court Photo */}
                <Image
                  src={current.image}
                  alt={`${current.courtName1} ${current.courtName2}`}
                  fill
                  priority
                  className="object-cover object-top transition-all duration-700"
                />

                {/* Subtle soft gradient over sky */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/15 pointer-events-none" />

                {/* Top-Left Court Label */}
                <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-10">
                  <span className="w-4 sm:w-5 h-[1.5px] bg-[#9E6728] block mb-1" />
                  <div className="text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.22em] text-[#1A1817] uppercase leading-tight font-dm drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    <div>{current.courtName1}</div>
                    <div>{current.courtName2}</div>
                  </div>
                </div>

                {/* Top-Right Quote */}
                <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-10 text-right max-w-[150px] sm:max-w-[190px]">
                  <p className="text-[8px] sm:text-[9px] font-bold tracking-[0.16em] text-[#1A1817] uppercase leading-snug font-dm drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    {current.courtQuote}
                  </p>
                  <span className="w-4 sm:w-5 h-[1.5px] bg-[#9E6728] block mt-1 ml-auto" />
                </div>

              </div>

              {/* ================= FLOATING BOX 1 (WHITE / CREAM) ================= */}
              <div className="absolute bottom-2 sm:bottom-2.5 left-2 sm:left-4 z-20 bg-[#FAF8F5] rounded-xl sm:rounded-2xl px-2.5 xs:px-3 sm:px-4.5 py-2.5 xs:py-3 sm:py-4 shadow-xl border border-[#E8E1D5] min-w-[85px] xs:min-w-[95px] sm:min-w-[130px]">
                {/* Top gold bar */}
                <div className="w-4 sm:w-6 h-[1.5px] bg-[#9E6728] mb-1.5 sm:mb-2.5" />

                {/* Pillars Stack */}
                <div className="flex flex-col gap-0.5 sm:gap-1.5 text-[7.5px] xs:text-[8px] sm:text-[10px] font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#554E47] uppercase font-dm">
                  {current.pillars.map((pillar, idx) => (
                    <span key={idx}>{pillar}</span>
                  ))}
                </div>

                {/* Bottom gold bar */}
                <div className="w-4 sm:w-6 h-[1.5px] bg-[#9E6728] mt-1.5 sm:mt-2.5" />
              </div>

              {/* ================= FLOATING BOX 2 (DARK RECTANGULAR BOX) ================= */}
              <div className="absolute bottom-2 sm:bottom-0 right-2 sm:right-4 z-20 bg-[#181513] text-white p-3 xs:p-3.5 sm:px-5 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl border border-white/10 w-[165px] xs:w-[180px] sm:w-[220px] md:w-[240px] flex flex-col justify-between min-h-0 sm:min-h-[265px]">
                <div>
                  {/* Top Quote Icon */}
                  <div className="text-[#8C7355] font-serif text-lg sm:text-2xl font-bold leading-none mb-1.5 sm:mb-2.5 select-none opacity-90">
                    “
                  </div>

                  {/* 3-Line Headline Quote */}
                  <div className="text-[9px] xs:text-[9.5px] sm:text-[11.5px] font-semibold tracking-[0.12em] sm:tracking-[0.16em] text-[#FAF6F0] uppercase leading-[1.4] sm:leading-[1.5] font-dm">
                    <span className="block">{current.cardQuoteLine1}</span>
                    <span className="block">{current.cardQuoteLine2}</span>
                    <span className="block">{current.cardQuoteLine3}</span>
                  </div>

                  {/* Horizontal Gold Divider */}
                  <div className="w-5 sm:w-7 h-[1.5px] bg-[#8C7355] mt-2 sm:mt-4 mb-1.5 sm:mb-3 opacity-80" />
                </div>

                {/* Bottom Chambers Sign-off */}
                <div className="text-[7px] xs:text-[7.5px] sm:text-[8.5px] font-medium tracking-[0.2em] sm:tracking-[0.24em] text-[#B8ACA0] uppercase font-dm">
                  {current.citation}
                </div>
              </div>

            </div>

            {/* ================= BOTTOM CONTROLS (PAGINATION & ARROWS) ================= */}
            <div className="mt-3 sm:mt-4 flex items-center justify-between pt-1">
              
              {/* Pagination Numbers */}
              <div className="flex items-center gap-4 sm:gap-6">
                {featuredPractices.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(idx)}
                      className="group flex flex-col items-center cursor-pointer transition-all duration-200 py-1"
                      aria-label={`Go to practice ${item.id}`}
                    >
                      <span
                        className={`text-xs sm:text-[12.5px] font-semibold font-dm tracking-wider transition-colors duration-200 ${
                          isActive
                            ? 'text-[#1A1817] font-bold'
                            : 'text-[#8C827A] group-hover:text-[#1A1817]'
                        }`}
                      >
                        {item.id}
                      </span>
                      <span
                        className={`h-[2px] mt-1 transition-all duration-300 rounded-full ${
                          isActive
                            ? 'w-4 bg-[#9E6728]'
                            : 'w-0 bg-transparent group-hover:w-2 group-hover:bg-[#BFA785]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Arrow Controls */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Practice"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[#D5CDC0] hover:border-[#9E6728] hover:text-[#9E6728] text-[#5C554E] bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Practice"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[#D5CDC0] hover:border-[#9E6728] hover:text-[#9E6728] text-[#5C554E] bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= MODAL POPUP ================= */}
      <PracticeAreasModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectPractice={(idx) => setCurrentIndex(idx)}
      />
    </section>
  );
}
