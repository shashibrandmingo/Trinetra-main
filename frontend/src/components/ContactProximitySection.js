'use client';

import Image from 'next/image';
import {
  Building2,
  Scale,
  Shield,
  FileCheck2,
  MapPin,
  Train,
  Navigation,
  ExternalLink,
  Mail,
  Phone,
} from 'lucide-react';

const practiceWings = [
  {
    wingNumber: 'WING 01',
    title: 'Apex Court & Constitutional Desk',
    focus: 'Supreme Court of India — SLPs under Art. 136, Writ Petitions under Art. 32, Review Petitions & Constitution Benches.',
    lead: 'Senior Counsel & AOR Team',
    contact: 'apex@trinetralaw.com',
    icon: Scale,
    tag: 'APEX LITIGATION',
  },
  {
    wingNumber: 'WING 02',
    title: 'Corporate & Commercial Disputes',
    focus: 'High-stake contract disputes, IBC corporate insolvency, domestic & cross-border commercial arbitration.',
    lead: 'Commercial Dispute Partners',
    contact: 'commercial@trinetralaw.com',
    icon: Building2,
    tag: 'COMMERCIAL DISPUTES',
  },
  {
    wingNumber: 'WING 03',
    title: 'Criminal Defence & Emergency Bail',
    focus: 'PMLA proceedings, CBI & ED defense, statutory trial prosecutions, anticipatory bail and appellate relief.',
    lead: 'Criminal Defence Counsels',
    contact: 'defence@trinetralaw.com',
    icon: Shield,
    tag: 'PERSONAL LIBERTY',
  },
  {
    wingNumber: 'WING 04',
    title: 'Chambers Registry & Client Services',
    focus: 'Paper-book intake, certified order copies, listing dates, and in-person consultation appointments.',
    lead: 'Registry Superintendent',
    contact: 'registry@trinetralaw.com',
    icon: FileCheck2,
    tag: 'REGISTRY & BRIEFINGS',
  },
];

export default function ContactProximitySection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#2D2926] py-14 sm:py-18 lg:py-22 border-b border-[#E8E1D5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[#E8E1D5]">
          <div>
            <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E6728]" />
              <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                DEDICATED PRACTICE DESKS
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[45px] xl:text-[50px] font-bold text-[#1A1817] leading-[1.08] tracking-tight">
              <span className="block">Specialized Wings.</span>
              <span className="block gold-gradient-shine mt-0.5 sm:mt-1">
                Direct Counsel Access.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://maps.google.com/?q=A-9+Green+Park+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white hover:bg-[#FAF4EB] border border-[#D5CDC0] hover:border-[#9E6728] text-[#1A1817] rounded-lg transition-all duration-300 shadow-xs font-dm text-xs font-semibold tracking-wider uppercase"
            >
              <Navigation className="w-3.5 h-3.5 text-[#9E6728]" />
              <span>Chambers Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8C827A]" />
            </a>
          </div>
        </div>

        {/* ================= MAIN TWO-COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mt-10 sm:mt-12">
          
          {/* Left Column: 4 Dedicated Chambers Wings */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {practiceWings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E1D5] hover:border-[#9E6728] hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[9px] font-bold tracking-[0.2em] text-[#9E6728] uppercase font-dm bg-[#FAF4EB] px-2.5 py-1 rounded-sm border border-[#E8DFC8]">
                        {item.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF8F5] text-[#9E6728] flex items-center justify-center group-hover:bg-[#9E6728] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-4 h-4 stroke-[1.6]" />
                      </div>
                    </div>

                    {/* Wing Title */}
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#1A1817] group-hover:text-[#9E6728] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Scope & Focus */}
                    <p className="text-[11.5px] sm:text-xs text-[#5C544D] mt-2 font-sans leading-relaxed">
                      {item.focus}
                    </p>
                  </div>

                  {/* Bottom Direct Desk Details */}
                  <div className="mt-5 pt-3.5 border-t border-[#F0EBE2] flex items-center justify-between text-[11px] font-dm">
                    <span className="text-[#78716A] font-medium">{item.lead}</span>
                    <a
                      href={`mailto:${item.contact}`}
                      className="text-[#9E6728] hover:text-[#1A1817] font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Principal Chambers Location & Visitor Amenities Card */}
          <div className="lg:col-span-5 bg-[#181513] text-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9E6728] via-[#C5A059] to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#C5A059] uppercase font-dm">
                  CENTRAL HEADQUARTERS
                </span>
                <span className="text-[9px] font-semibold tracking-[0.16em] text-[#A69C8E] uppercase bg-white/5 px-2.5 py-0.5 rounded-sm border border-white/10 font-dm">
                  NEW DELHI
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#FAF8F5]">
                Trinetra Law Chambers
              </h3>
              <p className="text-xs text-[#C8BEB2] mt-1.5 font-dm leading-relaxed">
                A-9, Green Park, New Delhi – 110016
              </p>

              {/* Transit & Court Proximity Details */}
              <div className="mt-6 space-y-3.5 pt-5 border-t border-white/10 text-xs font-dm">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#FAF8F5] block">Apex Court Access</span>
                    <span className="text-[#A69C8E] text-[11px]">
                      15 mins driving distance to the Supreme Court of India (Tilak Marg).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#FAF8F5] block">Metro Connectivity</span>
                    <span className="text-[#A69C8E] text-[11px]">
                      200 meters from Green Park Metro Station (Yellow Line).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#FAF8F5] block">Chambers Reception</span>
                    <span className="text-[#A69C8E] text-[11px]">
                      Direct Telephone: +91 11 4151 2345
                    </span>
                  </div>
                </div>

              </div>

              {/* In-Chamber Amenities */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-[9.5px] font-bold tracking-[0.18em] text-[#C5A059] uppercase font-dm block mb-2">
                  CHAMBERS FACILITIES
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#C8BEB2] font-dm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>Private Consultation Benches</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>Legal Research Library</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>Secure Video Conference Suite</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>Client Dedicated Parking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <a
                href="https://maps.google.com/?q=A-9+Green+Park+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#9E6728] hover:bg-[#B88E44] text-white py-3 px-5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 font-dm shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate on Google Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
