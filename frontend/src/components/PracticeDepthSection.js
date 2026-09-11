'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────── */
const leftAreas = [
  {
    id: '01',
    title: 'CONSTITUTIONAL',
    items: ['Writ Petitions', 'Fundamental Rights', 'Constitutional Challenges', 'PIL'],
    href: '#constitutional',
  },
  {
    id: '03',
    title: 'CRIMINAL',
    items: ['Criminal Defence', 'Bail & Appeals', 'Complex Criminal Proceedings', 'White Collar Matters'],
    href: '#criminal',
  },
];

const rightAreas = [
  {
    id: '02',
    title: 'COMMERCIAL',
    items: ['Contractual Disputes', 'Corporate Litigation', 'Shareholder Matters', 'Commercial Claims'],
    href: '#commercial',
  },
  {
    id: '04',
    title: 'CIVIL',
    items: ['Property Disputes', 'Injunctions', 'Title Matters', 'Civil Appeals'],
    href: '#civil',
  },
];

/* ─── Practice Card ─────────────────────────────────────────────── */
function PracticeCard({ area }) {
  return (
    <div className="flex flex-col items-start text-left group">
      <span className="font-heading text-[44px] sm:text-[52px] font-extrabold text-[#E5DCD0]/70 group-hover:text-[#9E6728]/35 leading-none select-none -mb-1 transition-colors duration-300">
        {area.id}
      </span>
      <h3 className="font-heading text-[13px] sm:text-[14px] font-bold text-[#1A1817] tracking-[0.12em] uppercase mb-1.5 mt-0.5">
        {area.title}
      </h3>
      <div className="w-7 h-[2px] bg-[#9E6728] mb-3 group-hover:w-11 transition-all duration-300 rounded-full" />
      <ul className="space-y-1.5 mb-3.5 flex flex-col items-start">
        {area.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-[#554E46] font-dm leading-snug group/item hover:text-[#1A1817] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E6728] flex-shrink-0 mt-[5px]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={area.href}
        className="inline-flex items-center gap-1.5 text-[9.5px] font-bold tracking-[0.22em] text-[#1A1817] uppercase font-dm hover:text-[#9E6728] transition-colors group/link mt-0.5"
      >
        <span>EXPLORE</span>
        <ArrowRight className="w-3 h-3 text-[#9E6728] group-hover/link:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
}

/* ─── Center Graphic ────────────────────────────────────────────── */
function CenterGraphic() {
  return (
    <div className="relative mx-auto flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[480px] xl:w-[550px] aspect-[1.5/1]">
      <Image
        src="/Untitled design (21).png"
        alt="Law in Purpose – Trinetra Law Chambers"
        fill
        quality={100}
        unoptimized
        sizes="(max-width: 640px) 300px, (max-width: 1024px) 480px, 550px"
        className="object-contain"
        priority
      />
    </div>
  );
}

/* ─── Main Export ───────────────────────────────────────────────── */
export default function PracticeDepthSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#2D2926] py-10 sm:py-12 lg:py-14 border-b border-[#E8E1D5] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                SELECTED AREAS OF COUNSEL
              </span>
            </div>
            <h2 className="font-heading text-[30px] sm:text-[38px] lg:text-[46px] xl:text-[52px] font-bold text-[#1A1817] leading-tight tracking-tight mb-3">
              Depth where it <span className="gold-gradient-shine">matters.</span>
            </h2>
            <p className="text-[12px] sm:text-[13px] text-[#6B635B] font-dm leading-relaxed max-w-md">
              Focused counsel across key practice areas, with experience in complex and sensitive matters.
            </p>
          </div>

          {/* Right motto (Desktop & Tablet only) */}
          <div className="hidden sm:flex items-start gap-3 flex-shrink-0 pt-1">
            <div className="w-[1px] h-12 bg-[#D1C8BC] rounded-full" />
            <div className="flex flex-col gap-[3px] text-[8.5px] sm:text-[9px] font-semibold tracking-[0.2em] text-[#78716A] uppercase font-dm leading-none">
              <span>PEOPLE</span>
              <span>LAW</span>
              <span>A FAIRER</span>
              <span>TOMORROW</span>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col gap-6">
          <CenterGraphic />
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[leftAreas[0], rightAreas[0], leftAreas[1], rightAreas[1]].map((area) => (
              <PracticeCard key={area.id} area={area} />
            ))}
          </div>
        </div>

        {/* Desktop 3-column flex layout: tight middle gap with negative space */}
        <div className="hidden lg:flex items-center justify-center -space-x-4 lg:-space-x-8 xl:-space-x-12 max-w-[1100px] mx-auto">
          {/* Left Column (01, 03) */}
          <div className="flex flex-col gap-10 xl:gap-14 w-fit flex-shrink-0 z-10">
            {leftAreas.map(area => <PracticeCard key={area.id} area={area} />)}
          </div>

          {/* Center Graphic */}
          <CenterGraphic />

          {/* Right Column (02, 04) */}
          <div className="flex flex-col gap-10 xl:gap-14 w-fit flex-shrink-0 z-10">
            {rightAreas.map(area => <PracticeCard key={area.id} area={area} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
