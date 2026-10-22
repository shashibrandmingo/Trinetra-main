'use client';

import Image from 'next/image';

const courts = [
  {
    step: '01',
    titleLine1: 'SUPREME COURT',
    titleLine2: 'OF INDIA',
    image: '/1.png',
    alt: 'Supreme Court of India iconic central dome and sandstone facade in New Delhi',
    tagLine: 'APEX APPELLATE JURISDICTION',
    description: 'Special Leave Petitions (Art. 136), Writ Petitions (Art. 32), and Inter-State Transfer Petitions.',
  },
  {
    step: '02',
    titleLine1: 'DELHI HIGH COURT',
    titleLine2: '& APPELLATE BENCHES',
    image: '/2.png',
    alt: 'Delhi High Court building facade with sign board',
    tagLine: 'CONSTITUTIONAL & COMMERCIAL',
    description: 'Extraordinary Writ Petitions (Art. 226), Section 482 CrPC Quashing, Bails & Commercial Appeals.',
  },
  {
    step: '03',
    titleLine1: 'NCR & DISTRICT',
    titleLine2: 'COURTS',
    image: '/3.png',
    alt: 'District and Sessions Courts in Noida and Delhi',
    tagLine: 'SURAJPUR NOIDA & DELHI',
    description: 'Surajpur District Court (Gautam Buddha Nagar, Noida), Patiala House, Saket & Tis Hazari Courts.',
  },
  {
    step: '04',
    titleLine1: 'SPECIALISED',
    titleLine2: 'TRIBUNALS',
    image: '/4.png',
    alt: 'Modern Appellate and Tribunal Courts with classical colonnade',
    tagLine: 'NATIONAL REGULATORY FORUMS',
    description: 'Representation before NCLAT, NCLT, Central Administrative Tribunal (CAT), and DRT.',
  },
];

export default function PracticeJurisdictionsSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] py-12 sm:py-16 lg:py-20 border-b border-[#E8E1D5] overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= HEADER ROW ================= */}
        <div className="pb-6 sm:pb-8 border-b border-[#E8E1D5]/80">
          {/* Eyebrow + Headline */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#B88E44]" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#8C6D37] uppercase font-dm">
                COURTS OF PRACTICE &amp; FORUMS
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-extrabold tracking-tight text-[#1A1817] leading-[1.14]">
              Advocacy Across Courts
              <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                &amp; Judicial Benches.
              </span>
            </h2>
          </div>
        </div>

        {/* ================= 4 COURTS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 xl:gap-6 mt-8 sm:mt-10">
          {courts.map((court) => (
            <div
              key={court.step}
              className="bg-white rounded-xl border border-[#E8E1D5] p-4 sm:p-5 flex flex-col justify-between shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#B88E44]/50 transition-all duration-300 group"
            >
              <div>
                {/* Step Number & Category Tag */}
                <div className="flex items-center justify-between pb-2.5 border-b border-[#F0EAE1]">
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-[#4A1118]">
                    {court.step}
                  </span>
                  <span className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.16em] text-[#8C6D37] uppercase font-dm">
                    {court.tagLine}
                  </span>
                </div>

                {/* Court Title */}
                <h3 className="font-heading font-bold text-sm sm:text-[14.5px] text-[#1A1817] leading-tight mt-3 mb-2 group-hover:text-[#4A1118] transition-colors">
                  <span>{court.titleLine1}</span>
                  {court.titleLine2 && <span className="block">{court.titleLine2}</span>}
                </h3>

                {/* Architectural Building Photo */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-[#1F1413] my-2">
                  <Image
                    src={court.image}
                    alt={court.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Subtext Description */}
                <p className="text-[11px] sm:text-xs text-[#6B635B] font-dm leading-relaxed mt-2.5">
                  {court.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
