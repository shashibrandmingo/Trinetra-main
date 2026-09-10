'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const practiceList = [
  {
    id: '01',
    title: 'Constitutional & Writ Law',
    description: 'Constitutional challenges, writ petitions, fundamental rights and public law matters.',
    tags: ['WRIT PETITIONS', 'FUNDAMENTAL RIGHTS', 'PUBLIC LAW', 'CONSTITUTIONAL CHALLENGES'],
  },
  {
    id: '02',
    title: 'Corporate & Commercial Litigation',
    description: 'High-value commercial disputes, shareholder deadlocks, breach of contracts, insolvency and corporate arbitration.',
    tags: ['COMMERCIAL DISPUTES', 'ARBITRATION', 'SHAREHOLDER MATTERS', 'IBC LITIGATION'],
  },
  {
    id: '03',
    title: 'Criminal Defence',
    description: 'White-collar crime, statutory prosecutions, PMLA proceedings, CBI defense, bail and appellate trial representation.',
    tags: ['WHITE COLLAR CRIME', 'PMLA & CBI', 'ANTICIPATORY BAIL', 'APPELLATE DEFENCE'],
  },
  {
    id: '04',
    title: 'Civil & Property Disputes',
    description: 'Title adjudication, succession and estate claims, injunction suits, property partitions and specific performance.',
    tags: ['TITLE DISPUTES', 'SUCCESSION & WILLS', 'INJUNCTION SUITS', 'REAL ESTATE LITIGATION'],
  },
  {
    id: '05',
    title: 'Administrative & Service Law',
    description: 'Service grievances, disciplinary inquiries, pensions, seniority disputes, and matters before CAT and High Courts.',
    tags: ['CAT TRIBUNAL', 'SENIORITY DISPUTES', 'DISCIPLINARY PROCEEDINGS', 'PENSION REMEDIES'],
  },
  {
    id: '06',
    title: 'Appellate & Tribunal Practice',
    description: 'Special Leave Petitions (SLP), statutory appeals, revision petitions before the Supreme Court and statutory tribunals.',
    tags: ['ARTICLE 136 SLP', 'SUPREME COURT APPEALS', 'NCLAT & TDSAT', 'STATUTORY REVISION'],
  },
];

export default function PracticeAreasListSection() {
  const [activeId, setActiveId] = useState('01');

  const toggleItem = (id) => {
    setActiveId(prev => prev === id ? null : id);
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#2D2926] py-8 sm:py-10 lg:py-12 border-b border-[#E8E1D5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-7 sm:pb-8 border-b border-[#E8E1D5]">
          
          {/* Left: Eyebrow + Headline */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
              <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                OUR PRACTICE AREAS
              </span>
            </div>

            {/* Main Headline - Increased size & authoritative typography */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[45px] xl:text-[50px] font-bold text-[#1A1817] leading-[1.08] tracking-tight">
              <span className="block">Areas of Practice.</span>
              <span className="block mt-0.5 sm:mt-1">
                A Deeper <span className="gold-gradient-shine">Perspective.</span>
              </span>
            </h2>
          </div>

          {/* Right: Vertical Line + Motto Stack */}
          <div className="flex items-center gap-3.5 lg:pb-1">
            <div className="w-[1.5px] h-11 bg-[#D1C8BC] rounded-full" />
            <div className="flex flex-col gap-1 text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm leading-snug">
              <span>DIFFERENT MATTERS.</span>
              <span>A UNIFIED APPROACH.</span>
              <span>ROOTED IN PRINCIPLE.</span>
            </div>
          </div>

        </div>

        {/* ================= ACCORDION / PRACTICE LIST ================= */}
        <div className="mt-6 sm:mt-8 flex flex-col">
          {practiceList.map((item) => {
            const isExpanded = activeId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`group cursor-pointer transition-all duration-200 relative ${
                  isExpanded
                    ? 'bg-[#F4EEE3] border border-[#E3D7C5] shadow-sm my-2 rounded-sm'
                    : 'border-b border-[#EAE2D5] hover:bg-[#F7F2EA]'
                }`}
              >
                {/* Left Amber/Bronze accent indicator strip for expanded state */}
                {isExpanded && (
                  <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#9E6728]" />
                )}

                <div className={`px-4 sm:px-6 lg:px-7 ${isExpanded ? 'py-4 sm:py-4.5' : 'py-3 sm:py-3.5'}`}>
                  
                  {/* Top Row: Number, Divider, Title, Arrow Button */}
                  <div className="flex items-center justify-between gap-4">
                    
                    {/* Left: Number + Vertical Line + Title */}
                    <div className="flex items-center gap-4 sm:gap-6 lg:gap-7 flex-grow">
                      {/* Serif Number */}
                      <span
                        className={`font-serif text-2xl sm:text-3xl lg:text-[36px] select-none transition-colors duration-200 min-w-[40px] ${
                          isExpanded
                            ? 'text-[#9E6728] font-normal'
                            : 'text-[#A89D8F] group-hover:text-[#9E6728]'
                        }`}
                      >
                        {item.id}
                      </span>

                      {/* Thin Vertical Divider */}
                      <span
                        className={`w-[1px] h-6 sm:h-7 self-center transition-colors duration-200 ${
                          isExpanded ? 'bg-[#D6C7B2]' : 'bg-[#E3D9CC]'
                        }`}
                      />

                      {/* Title - Fixed spacing & clean font styling */}
                      <div className="flex flex-col">
                        <h3
                          className={`font-heading text-lg sm:text-xl lg:text-[21px] font-bold tracking-[0.01em] transition-colors duration-200 ${
                            isExpanded
                              ? 'text-[#1A1817]'
                              : 'text-[#2D2926] group-hover:text-[#1A1817]'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Circular Arrow Action Button */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 lg:w-9 lg:h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isExpanded
                            ? 'bg-[#8C5E28] text-white shadow-sm'
                            : 'border border-[#D5CAB9] text-[#7A6F62] group-hover:border-[#8C5E28] group-hover:text-[#8C5E28] group-hover:bg-[#FAF8F5]'
                        }`}
                      >
                        <ArrowUpRight
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                            isExpanded ? 'scale-105' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                          }`}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Expanded Body: Description + Horizontal Divider + Keywords Tags */}
                  {isExpanded && (
                    <div className="mt-2 sm:mt-2.5 pl-0 sm:pl-[58px] lg:pl-[68px] pr-0 sm:pr-10 animate-stagger-1">
                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-[#5C544D] font-dm leading-relaxed max-w-3xl">
                        {item.description}
                      </p>

                      {/* Subtle Horizontal Divider */}
                      <div className="w-full h-[1px] bg-[#E0D3C0] my-2 sm:my-2.5" />

                      {/* Keywords / Sub-practice tags */}
                      <div className="flex flex-wrap items-center gap-y-1 text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.2em] text-[#78716A] uppercase font-dm">
                        {item.tags.map((tag, tIdx) => (
                          <div key={tIdx} className="inline-flex items-center">
                            <span className="hover:text-[#9E6728] transition-colors">
                              {tag}
                            </span>
                            {tIdx < item.tags.length - 1 && (
                              <span className="mx-2.5 sm:mx-3 text-[#C8BCAF] font-light select-none">
                                |
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
