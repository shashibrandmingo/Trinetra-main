'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  FileText,
  Scale,
  Landmark,
  Users,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const practiceDetails = {
  constitutional: {
    id: '01',
    title: 'Constitutional & Writ Law',
    description:
      'Constitutional challenges, writ petitions, fundamental rights and matters of public law.',
    image: '/pratice-area-3.png',
    courtName1: 'SUPREME COURT',
    courtName2: 'OF INDIA',
    quote: '“Constitutional principles give purpose to power.”',
    citation: 'TRINETRA LAW CHAMBERS',
    pillars: ['LAW', 'PEOPLE', 'JUSTICE', 'SOCIETY'],
    features: [
      {
        icon: FileText,
        title: 'Writ Petitions',
        desc: 'Representation in constitutional courts.',
      },
      {
        icon: Scale,
        title: 'Fundamental Rights',
        desc: 'Protection against unlawful action.',
      },
      {
        icon: Landmark,
        title: 'Constitutional Challenges',
        desc: 'Matters involving constitutional interpretation.',
      },
      {
        icon: Users,
        title: 'Public Interest Litigation',
        desc: 'Advocacy for wider public causes.',
      },
    ],
  },
  commercial: {
    id: '02',
    title: 'Corporate & Commercial Litigation',
    description:
      'High-value commercial disputes, shareholder deadlocks, breach of contracts, insolvency and corporate arbitration.',
    image: '/pratice-area-3.png',
    courtName1: 'COMMERCIAL COURTS',
    courtName2: '& TRIBUNALS',
    quote: '“Certainty in commercial agreements creates stability.”',
    citation: 'TRINETRA LAW CHAMBERS',
    pillars: ['COMMERCE', 'FIDUCIARY', 'EQUITY', 'STABILITY'],
    features: [
      {
        icon: FileText,
        title: 'Shareholder Disputes',
        desc: 'Resolution of board and management deadlocks.',
      },
      {
        icon: Scale,
        title: 'Commercial Arbitration',
        desc: 'Domestic and international arbitration advocacy.',
      },
      {
        icon: Landmark,
        title: 'Insolvency & Bankruptcy',
        desc: 'Strategic creditor and debtor IBC proceedings.',
      },
      {
        icon: Users,
        title: 'Regulatory Litigation',
        desc: 'Representation before SEBI, CCI and authorities.',
      },
    ],
  },
  criminal: {
    id: '03',
    title: 'Criminal Defence',
    description:
      'White-collar crime, statutory prosecutions, PMLA proceedings, CBI defense, bail and appellate trial representation.',
    image: '/pratice-area-3.png',
    courtName1: 'SPECIAL CBI COURTS',
    courtName2: '& SESSIONS BENCHES',
    quote: '“Liberty is the first and foremost of all constitutional values.”',
    citation: 'TRINETRA LAW CHAMBERS',
    pillars: ['LIBERTY', 'FAIRNESS', 'PROCESS', 'DUE LAW'],
    features: [
      {
        icon: FileText,
        title: 'White-Collar Crime',
        desc: 'Corporate fraud, ED, SFIO and CBI defense.',
      },
      {
        icon: Scale,
        title: 'Anticipatory & Regular Bail',
        desc: 'Swift protection of personal liberty.',
      },
      {
        icon: Landmark,
        title: 'Trial Advocacy',
        desc: 'Rigorous cross-examination and trial defense.',
      },
      {
        icon: Users,
        title: 'Appellate Acquittal',
        desc: 'Reversal of convictions in statutory appeals.',
      },
    ],
  },
  civil: {
    id: '04',
    title: 'Civil & Property Disputes',
    description:
      'Title adjudication, succession and estate claims, injunction suits, property partitions and specific performance.',
    image: '/pratice-area-3.png',
    courtName1: 'HIGH COURTS &',
    courtName2: 'CIVIL BENCHES',
    quote: '“Property rights anchored in law and substantive equity.”',
    citation: 'TRINETRA LAW CHAMBERS',
    pillars: ['TITLE', 'SUCCESSION', 'INTEGRITY', 'ASSETS'],
    features: [
      {
        icon: FileText,
        title: 'Title & Partition Suits',
        desc: 'Decisive claims over valuable estates and title.',
      },
      {
        icon: Scale,
        title: 'Succession & Wills',
        desc: 'Probate, letters of administration and trusts.',
      },
      {
        icon: Landmark,
        title: 'Injunction Proceedings',
        desc: 'Immediate protective and restraining orders.',
      },
      {
        icon: Users,
        title: 'Real Estate Disputes',
        desc: 'Specific performance and commercial property.',
      },
    ],
  },
  administrative: {
    id: '05',
    title: 'Administrative & Service Law',
    description:
      'Service grievances, disciplinary inquiries, pensions, seniority disputes, and matters before CAT and High Courts.',
    image: '/pratice-area-3.png',
    courtName1: 'CENTRAL ADMINISTRATIVE',
    courtName2: 'TRIBUNAL (CAT)',
    quote: '“Rule of law bars arbitrariness across all public bodies.”',
    citation: 'TRINETRA LAW CHAMBERS',
    pillars: ['MERIT', 'EQUITY', 'TENURE', 'JUSTICE'],
    features: [
      {
        icon: FileText,
        title: 'Seniority & Promotion',
        desc: 'Enforcing statutory merit and seniority rules.',
      },
      {
        icon: Scale,
        title: 'Disciplinary Inquiries',
        desc: 'Challenging flawed inquiry reports and penalties.',
      },
      {
        icon: Landmark,
        title: 'CAT Representation',
        desc: 'Appearing before central and state tribunals.',
      },
      {
        icon: Users,
        title: 'Retiral Remedies',
        desc: 'Safeguarding accrued retirement benefits.',
      },
    ],
  },
};

export default function PracticeDetailModal({
  isOpen,
  onClose,
  practiceKey = 'constitutional',
}) {
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

  const data = practiceDetails[practiceKey] || practiceDetails.constitutional;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-3 sm:p-5 md:p-6 bg-black/65 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Box */}
      <div className="relative z-10 w-full max-w-[940px] max-h-[92vh] sm:max-h-[90vh] bg-[#FAF8F5] text-[#2D2926] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E8E1D5] flex flex-col overflow-hidden my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-[#5C554E] hover:text-[#1A1817] p-2 bg-[#FAF8F5]/90 sm:bg-transparent hover:bg-[#EAE3D6]/90 rounded-full transition-colors cursor-pointer z-30 border border-[#E8E1D5] sm:border-0 shadow-xs sm:shadow-none"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto px-4 xs:px-5 sm:px-8 py-4 xs:py-5 sm:py-6 overscroll-contain">
          {/* ================= MAIN TWO COLUMN CONTENT ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 items-start">
            
            {/* Left Column: Eyebrow + ID + Title + Features + Quote */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className="w-6 sm:w-7 h-[1.5px] bg-[#9E6728]" />
                  <span className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                    PRACTICE AREA
                  </span>
                </div>

                {/* Number */}
                <span className="font-serif text-xl sm:text-3xl font-bold text-[#9E6728] tracking-wider block leading-none mb-1">
                  {data.id}
                </span>

                {/* Main Title */}
                <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1A1817] leading-[1.12] tracking-tight mb-2.5 sm:mb-3 pr-8 sm:pr-0">
                  {data.title}
                </h2>

                {/* Description */}
                <p className="text-[11.5px] xs:text-xs sm:text-[13px] text-[#5C554E] leading-relaxed mb-3.5 sm:mb-4 font-sans max-w-md">
                  {data.description}
                </p>

                {/* Divider */}
                <div className="border-t border-[#E8E1D5] pt-3 sm:pt-4 mb-3 sm:mb-4" />

                {/* 2x2 Features Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-x-4 sm:gap-y-3.5 mb-3 sm:mb-4">
                  {data.features.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="flex items-start gap-2.5 p-2 xs:p-0 rounded-lg xs:rounded-none bg-white/50 xs:bg-transparent border border-[#E8E1D5]/60 xs:border-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EDE7DD]/80 flex items-center justify-center text-[#9E6728] shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-heading font-semibold text-[11.5px] sm:text-[12.5px] text-[#1A1817] leading-tight">
                            {feat.title}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-[#6E665D] leading-snug mt-0.5 font-sans">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="border-t border-[#E8E1D5] pt-2.5 sm:pt-3 mb-2" />

                {/* Quote */}
                <div>
                  <p className="text-xs sm:text-[13.5px] font-serif italic text-[#8C6219] leading-snug">
                    {data.quote}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-5 h-[1px] bg-[#9E6728]" />
                    <span className="text-[8.5px] font-semibold tracking-[0.2em] text-[#8C827A] uppercase font-dm">
                      {data.citation}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Court Showcase Image Frame with annotations */}
            <div className="md:col-span-5 w-full">
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-[#E8E1D5] bg-[#EDE7DD] aspect-[16/10] sm:aspect-[16/11] md:aspect-auto md:h-[350px]">
                <Image
                  src={data.image}
                  alt={data.courtName1}
                  fill
                  priority
                  className="object-cover object-top"
                />

                {/* Top Annotation */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-right">
                  <div className="text-[8px] sm:text-[8.5px] font-bold tracking-[0.2em] text-[#1A1817] uppercase leading-tight font-dm drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    <div>{data.courtName1}</div>
                    <div>{data.courtName2}</div>
                  </div>
                </div>

                {/* Bottom Annotation */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 text-right">
                  <span className="w-5 h-[1.5px] bg-[#9E6728] block mb-1.5 ml-auto" />
                  <div className="flex flex-col gap-0.5 text-[7.5px] sm:text-[8.5px] font-bold tracking-[0.24em] text-[#FAF8F5] uppercase font-dm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    {data.pillars.map((p, idx) => (
                      <span key={idx}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ================= BOTTOM CONTACT ROW ================= */}
          <div className="mt-4 pt-3.5 border-t border-[#E8E1D5] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6">
            
            {/* Phone */}
            <a
              href="tel:+911141512345"
              className="flex items-center gap-2.5 p-2 sm:p-0 rounded-lg sm:rounded-none bg-white/50 sm:bg-transparent border border-[#E8E1D5]/60 sm:border-0 hover:border-[#9E6728]/50 transition-colors"
            >
              <div className="w-7 h-7 rounded-full border border-[#D5CDC0] bg-[#FAF8F5] text-[#9E6728] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[8px] font-semibold tracking-[0.2em] text-[#8C827A] uppercase block font-dm leading-none">
                  PHONE
                </span>
                <span className="text-[11px] font-semibold text-[#1A1817] hover:text-[#9E6728] transition-colors mt-0.5 block">
                  +91 11 4151 2345
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@trinetralaw.com"
              className="flex items-center gap-2.5 p-2 sm:p-0 rounded-lg sm:rounded-none bg-white/50 sm:bg-transparent border border-[#E8E1D5]/60 sm:border-0 hover:border-[#9E6728]/50 transition-colors"
            >
              <div className="w-7 h-7 rounded-full border border-[#D5CDC0] bg-[#FAF8F5] text-[#9E6728] flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[8px] font-semibold tracking-[0.2em] text-[#8C827A] uppercase block font-dm leading-none">
                  EMAIL
                </span>
                <span className="text-[11px] font-semibold text-[#1A1817] hover:text-[#9E6728] transition-colors mt-0.5 block">
                  info@trinetralaw.com
                </span>
              </div>
            </a>

            {/* Chambers Address */}
            <div className="flex items-center gap-2.5 p-2 sm:p-0 rounded-lg sm:rounded-none bg-white/50 sm:bg-transparent border border-[#E8E1D5]/60 sm:border-0">
              <div className="w-7 h-7 rounded-full border border-[#D5CDC0] bg-[#FAF8F5] text-[#9E6728] flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[8px] font-semibold tracking-[0.22em] text-[#8C827A] uppercase block font-dm leading-none">
                  NEW DELHI CHAMBERS
                </span>
                <p className="text-[10.5px] text-[#1A1817] font-medium leading-tight mt-0.5">
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
