'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Scale,
  Award,
  BookOpen,
  ShieldCheck,
  Building2,
  Phone,
  MessageSquare,
  ArrowRight,
  Landmark,
  Trophy,
  GraduationCap,
} from 'lucide-react';
import { useEnquiryModal } from '@/context/EnquiryModalContext';

export default function AboutClient() {
  const { openEnquiry } = useEnquiryModal();

  return (
    <div className="w-full bg-[#FAF8F5] text-[#2D2926]">
      
      {/* ========================================================= */}
      {/* 1. SIMPLE & PRESTIGIOUS HERO SECTION                      */}
      {/* ========================================================= */}
      <section className="pt-8 sm:pt-12 pb-8 sm:pb-10 border-b border-[#E8E1D5] bg-gradient-to-b from-[#FAF8F5] via-[#F7F2EB] to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E0D5C1] shadow-2xs mb-3.5">
            <Scale className="w-3.5 h-3.5 text-[#9E6728]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#78716A] uppercase font-dm">
              TRINETRA LAW CHAMBERS
            </span>
            <span className="w-1 h-1 rounded-full bg-[#9E6728]" />
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-[#9E6728] uppercase font-dm">
              EST. NEW DELHI
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#1A1817] tracking-tight leading-[1.15] mb-3.5">
            Advocacy Rooted in Principle.
            <span className="block mt-0.5 sm:mt-1 text-[#9E6728]">
              Counsel Driven by Diligence.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-[14px] text-[#554E46] font-dm max-w-2xl mx-auto leading-relaxed mb-6">
            Established under the stewardship of <strong className="font-semibold text-[#1A1817]">Dr. Monika Anand</strong>, Trinetra Law Chambers delivers strategic courtroom advocacy, constitutional litigation, and decisive counsel across Delhi NCR, High Courts, and the Supreme Court of India.
          </p>

          {/* Interactive Quick CTAs */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-7">
            <button
              onClick={() => openEnquiry({ practiceArea: 'About Page Case Consultation' })}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1817] hover:bg-[#2D2926] text-white text-xs sm:text-[13px] font-semibold transition-all shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C59A5F]" />
              <span>Consult Dr. Monika Anand</span>
            </button>
            <a
              href="tel:+919999953430"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-[#F5EFEB] text-[#1A1817] border border-[#E8E1D5] text-xs sm:text-[13px] font-semibold transition-all shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#9E6728]" />
              <span>+91 99999 53430</span>
            </a>
          </div>

          {/* Compact Luxury Executive Metrics Strip */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-[#E8E1D5] shadow-2xs divide-y sm:divide-y-0 sm:divide-x divide-[#E8E1D5] grid grid-cols-2 sm:grid-cols-4 overflow-hidden">
            
            {/* Metric 1 */}
            <div className="py-2.5 sm:py-3 px-3 text-center hover:bg-[#FAF8F5] transition-colors">
              <span className="font-heading text-lg sm:text-xl font-bold text-[#9E6728] block leading-tight">
                9+ Years
              </span>
              <span className="text-[11px] font-medium text-[#554E46] font-dm block mt-0.5">
                Active Litigation
              </span>
            </div>

            {/* Metric 2 */}
            <div className="py-2.5 sm:py-3 px-3 text-center hover:bg-[#FAF8F5] transition-colors">
              <span className="font-heading text-lg sm:text-xl font-bold text-[#1A1817] block leading-tight">
                Apex Court
              </span>
              <span className="text-[11px] font-medium text-[#554E46] font-dm block mt-0.5">
                Supreme & High Courts
              </span>
            </div>

            {/* Metric 3 */}
            <div className="py-2.5 sm:py-3 px-3 text-center hover:bg-[#FAF8F5] transition-colors">
              <span className="font-heading text-lg sm:text-xl font-bold text-[#9E6728] block leading-tight">
                Ph.D. in Law
              </span>
              <span className="text-[11px] font-medium text-[#554E46] font-dm block mt-0.5">
                Doctoral Credential
              </span>
            </div>

            {/* Metric 4 */}
            <div className="py-2.5 sm:py-3 px-3 text-center hover:bg-[#FAF8F5] transition-colors">
              <span className="font-heading text-lg sm:text-xl font-bold text-[#1A1817] block leading-tight">
                2 Hubs
              </span>
              <span className="text-[11px] font-medium text-[#554E46] font-dm block mt-0.5">
                Noida & New Delhi
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. PRINCIPAL COUNSEL SPOTLIGHT: DR. MONIKA ANAND           */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Real Portrait & Signature */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              
              {/* Framed Image */}
              <div className="relative p-2 bg-[#FAF8F5] border border-[#2B2724] shadow-xl rounded-2xl w-full max-w-[380px] overflow-hidden">
                <div className="relative aspect-[4/4.5] w-full rounded-xl overflow-hidden bg-[#1F1413]">
                  <Image
                    src="/counsel-portrait.jpg"
                    alt="Dr. Monika Anand — Lead Litigation Counsel at Trinetra Law Chambers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  
                  {/* Supreme Court Bar Label on Image */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/75 backdrop-blur-xs rounded-lg border border-white/15 text-white">
                    <p className="text-xs font-heading font-bold">Dr. Monika Anand</p>
                    <p className="text-[10px] text-[#E0B376] font-dm">LL.B. &bull; LL.M. &bull; Ph.D. in Law</p>
                  </div>
                </div>
              </div>

              {/* Real Signature Graphic */}
              <div className="mt-4 flex items-center justify-between w-full max-w-[380px] px-2">
                <div className="relative h-12 w-36">
                  <Image
                    src="/monika-anand-signature.png"
                    alt="Dr. Monika Anand Signature"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-[#78716A] uppercase font-dm">
                  PRINCIPAL COUNSEL
                </span>
              </div>

            </div>

            {/* Right Column: Bio & Qualifications */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E6728] font-dm block mb-1">
                  LEAD ADVOCATE & FOUNDER
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1817] leading-tight mb-2">
                  Dr. Monika Anand
                </h2>
                <p className="text-xs sm:text-sm text-[#78716A] font-dm">
                  Litigation Counsel &bull; Supreme Court of India, Delhi High Court & NCR Courts
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#554E46] font-dm leading-relaxed">
                Dr. Monika Anand brings over nine years of rigorous courtroom experience, holding a Bachelor of Laws (LL.B.), a Master of Laws (LL.M.), and a Doctorate in Law (Ph.D.). Her practice is defined by unshakeable commitment to individual liberties, forensic scrutiny of evidence, and principled appellate advocacy.
              </p>

              <p className="text-xs sm:text-sm text-[#554E46] font-dm leading-relaxed">
                She regularly leads trials, regular and anticipatory bail proceedings, complex matrimonial and property litigations, and Special Leave Petitions (SLPs) before the Supreme Court of India. Under her leadership, Trinetra Law Chambers operates with absolute transparency, client confidentiality, and proactive legal strategy.
              </p>

              {/* Academic & Professional Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5]">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-[#9E6728]" />
                    <strong className="text-xs font-bold text-[#1A1817] font-heading">Educational Credentials</strong>
                  </div>
                  <p className="text-[11px] text-[#554E46] font-dm leading-snug">
                    LL.B., LL.M. &amp; Doctorate in Law (Ph.D.)
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5]">
                  <div className="flex items-center gap-2 mb-1">
                    <Scale className="w-4 h-4 text-[#9E6728]" />
                    <strong className="text-xs font-bold text-[#1A1817] font-heading">Bar Memberships</strong>
                  </div>
                  <p className="text-[11px] text-[#554E46] font-dm leading-snug">
                    SCBA (Supreme Court) &bull; DHCBA (Delhi High Court) &bull; Bar Council of Delhi
                  </p>
                </div>
              </div>

              {/* Quote Banner */}
              <div className="p-4 rounded-xl bg-[#F5EFEB] border-l-4 border-[#9E6728]">
                <p className="text-xs sm:text-[13px] text-[#2D2926] font-dm italic leading-relaxed">
                  &ldquo;A just society is not preserved by silent compliance, but by the fearless and disciplined defense of constitutional rights in the courtroom.&rdquo;
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CHAMBERS' CORE VALUES & ADVOCACY PILLARS               */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase font-dm text-[#9E6728] block mb-1">
              OUR LITIGATION PHILOSOPHY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1817]">
              The Four Pillars of Our Practice
            </h2>
            <p className="text-xs sm:text-sm text-[#554E46] font-dm mt-2">
              Every client and case entrusted to our chambers is handled with four uncompromising principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: BookOpen,
                num: '01',
                title: 'Forensic Evidence Audit',
                desc: 'Meticulous scrutiny of FIR paperwork, charge sheets, Call Detail Records (CDR), and title documentation to uncover every procedural loophole.',
              },
              {
                icon: Landmark,
                num: '02',
                title: 'Doctrinal Precedents',
                desc: 'Grounding every petition in authoritative Constitutional and Supreme Court precedents, drafting petitions that withstand rigorous judicial examination.',
              },
              {
                icon: Scale,
                num: '03',
                title: 'Fearless Court Advocacy',
                desc: 'Persuasive, decisive oral advocacy before Magistrates, Sessions Judges, High Court Benches, and the Supreme Court.',
              },
              {
                icon: ShieldCheck,
                num: '04',
                title: 'Complete Confidentiality',
                desc: 'Strict adherence to client-attorney privilege, transparent assessment of legal risks, and honest guidance without false promises.',
              },
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E8E1D5] hover:border-[#9E6728] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5] flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-[#9E6728]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#9E9589]">
                        {pillar.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-bold text-[#1A1817] mb-2 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-[#554E46] font-dm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ACHIEVEMENTS & AWARDS                                  */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase font-dm text-[#9E6728] block mb-1">
              ACCREDITATIONS & RECOGNITION
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1817]">
              Achievements & Professional Honors
            </h2>
            <p className="text-xs sm:text-sm text-[#554E46] font-dm mt-2">
              A distinguished record of courtroom advocacy, academic distinction, and dedicated legal service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                image: '/timeline-growth-practice.jpg',
                alt: 'Doctorate in Law and Legal Research Volumes',
                icon: GraduationCap,
                tag: 'ACADEMIC MASTERY',
                title: 'Doctorate in Law (Ph.D.)',
                desc: 'Conferred Ph.D. in Law for advanced jurisprudential research, giving our chambers rare doctrinal depth across trial and appellate courts.',
              },
              {
                image: '/chambers-constitution-depth.jpg',
                alt: 'Constitution of India Architectural Pillar',
                icon: Landmark,
                tag: 'BAR MEMBERSHIPS',
                title: 'Supreme Court & High Court Bar',
                desc: 'Active standing member of the Supreme Court Bar Association (SCBA), Delhi High Court Bar Association (DHCBA), and Bar Council of Delhi.',
              },
              {
                image: '/chamber-legacy.jpg',
                alt: 'Trinetra Law Chambers Litigation Team with Dr. Monika Anand',
                icon: Trophy,
                tag: 'CASE RECORD',
                title: '1,200+ Matters Argued',
                desc: 'Over nine years of successful courtroom outcomes across landmark bails, Section 482 quashing, and complex property settlements.',
              },
              {
                image: '/chambers-strategic-advocacy.jpg',
                alt: 'Legal Strategy and Jurisprudence Books',
                icon: Award,
                tag: 'LEGAL DISTINCTION',
                title: 'Strategic Court Advocacy',
                desc: 'Recognized across Delhi NCR legal forums for fearless criminal defense, meticulous forensic evidence audit, and client integrity.',
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] rounded-2xl border border-[#E8E1D5] overflow-hidden group hover:border-[#9E6728] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Card Real Image Banner */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#1A1817]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2.5 left-2.5 text-[9.5px] font-bold tracking-wider text-[#E0B376] bg-black/75 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10 uppercase font-dm">
                        {item.tag}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E1D5] flex items-center justify-center shadow-2xs shrink-0">
                          <IconComp className="w-4 h-4 text-[#9E6728]" />
                        </div>
                        <h3 className="font-heading text-base font-bold text-[#1A1817] leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs text-[#554E46] font-dm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ethical Trust Accolade Strip */}
          <div className="mt-8 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E1D5] flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#9E6728]" />
              </div>
              <p className="text-xs text-[#554E46] font-dm leading-snug">
                <strong className="text-[#1A1817] font-semibold">Strict Ethical Standards:</strong> Every matter is argued strictly on statutory merits and judicial precedents, upholding the highest standards of the Indian Bar.
              </p>
            </div>
            <button
              onClick={() => openEnquiry({ practiceArea: 'About Page Achievement Case Review' })}
              className="shrink-0 text-xs font-semibold text-[#9E6728] hover:text-[#85531B] font-dm inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Schedule Case Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. COURTS & JURISDICTIONS (WITH REAL IMAGES)               */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#E8E1D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase font-dm text-[#9E6728] block mb-1">
              COURTS WE PRACTICE IN
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1817]">
              Where We Stand & Represent You
            </h2>
            <p className="text-xs sm:text-sm text-[#554E46] font-dm mt-2">
              From original trial courts in Delhi NCR to the highest appellate forum of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Supreme Court */}
            <div className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden group hover:border-[#9E6728] hover:shadow-lg transition-all flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1A1817]">
                <Image
                  src="/court-supreme-facade.jpg"
                  alt="Supreme Court of India"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-semibold text-white bg-[#9E6728] px-2 py-0.5 rounded font-dm">
                  APEX COURT
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-[#1A1817] mb-1.5">
                    Supreme Court of India
                  </h3>
                  <p className="text-xs text-[#554E46] font-dm leading-relaxed mb-3">
                    Special Leave Petitions (SLP under Art. 136), Fundamental Rights Writs (Art. 32), and Transfer Petitions.
                  </p>
                </div>
                <div className="text-[11px] text-[#78716A] font-dm pt-2 border-t border-[#E8E1D5]">
                  Tilak Marg, New Delhi
                </div>
              </div>
            </div>

            {/* Card 2: Delhi High Court */}
            <div className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden group hover:border-[#9E6728] hover:shadow-lg transition-all flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1A1817]">
                <Image
                  src="/court-delhi-high.jpg"
                  alt="Delhi High Court"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-semibold text-white bg-[#9E6728] px-2 py-0.5 rounded font-dm">
                  APPELLATE & WRIT
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-[#1A1817] mb-1.5">
                    High Court of Delhi
                  </h3>
                  <p className="text-xs text-[#554E46] font-dm leading-relaxed mb-3">
                    High Court Writs (Art. 226), Criminal Appeals, Bail, Section 482 Quashing, Commercial Suits, and Revisions.
                  </p>
                </div>
                <div className="text-[11px] text-[#78716A] font-dm pt-2 border-t border-[#E8E1D5]">
                  Shershah Road, New Delhi
                </div>
              </div>
            </div>

            {/* Card 3: District Courts & Special Tribunals */}
            <div className="bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden group hover:border-[#9E6728] hover:shadow-lg transition-all flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1A1817]">
                <Image
                  src="/about-law-books.jpg"
                  alt="District Courts and Special Tribunals"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-semibold text-white bg-[#9E6728] px-2 py-0.5 rounded font-dm">
                  TRIAL & TRIBUNALS
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-[#1A1817] mb-1.5">
                    District Courts & CAT / NCLT
                  </h3>
                  <p className="text-xs text-[#554E46] font-dm leading-relaxed mb-3">
                    Surajpur District Court Noida, Tis Hazari, Patiala House, Saket, Central Administrative Tribunal (CAT), and NCLT.
                  </p>
                </div>
                <div className="text-[11px] text-[#78716A] font-dm pt-2 border-t border-[#E8E1D5]">
                  Noida & New Delhi NCR
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CHAMBERS LOCATIONS (DUAL HUBS)                         */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-[#F5EFEB] border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase font-dm text-[#9E6728] block mb-1">
              CHAMBERS OFFICES
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1A1817]">
              Accessible Across Delhi NCR
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Noida Hub */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D5] flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#9E6728]" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9E6728] font-dm block">
                  CORPORATE CHAMBERS
                </span>
                <h3 className="font-heading text-base font-bold text-[#1A1817] mb-1">
                  Noida Corporate Chambers
                </h3>
                <p className="text-xs text-[#554E46] font-dm leading-relaxed">
                  8th Floor, The ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-[#9E6728] font-dm">
                  <Phone className="w-3.5 h-3.5" />
                  <a href="tel:+919999953430">+91 99999 53430</a>
                </div>
              </div>
            </div>

            {/* Delhi Hub */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D5] flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5] flex items-center justify-center shrink-0">
                <Landmark className="w-5 h-5 text-[#9E6728]" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9E6728] font-dm block">
                  SUPREME & HIGH COURT HUB
                </span>
                <h3 className="font-heading text-base font-bold text-[#1A1817] mb-1">
                  New Delhi Chambers
                </h3>
                <p className="text-xs text-[#554E46] font-dm leading-relaxed">
                  H-8, Lajpat Nagar III, New Delhi 110024 (Within 15 minutes of Delhi High Court and Supreme Court)
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-[#9E6728] font-dm">
                  <Phone className="w-3.5 h-3.5" />
                  <a href="tel:+919999953430">+91 99999 53430</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CLEAN DIRECT CONSULTATION CTA                          */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-[#1A1817] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase font-dm text-[#C59A5F] block mb-2">
            EXPERIENCED ADVOCACY
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
            Discuss Your Case With Dr. Monika Anand
          </h2>

          <p className="text-xs sm:text-sm text-[#D1C8BC] font-dm max-w-xl mx-auto mb-6 leading-relaxed">
            Whether you are confronting urgent criminal proceedings, complex property disputes, or high-stakes appellate matters, our chambers provides honest, strategic, and confidential counsel.
          </p>

          <div className="flex items-center justify-center gap-3.5 flex-wrap">
            <a
              href="tel:+919999953430"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#9E6728] hover:bg-[#85531B] text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 99999 53430</span>
            </a>

            <button
              onClick={() => openEnquiry({ practiceArea: 'About Page Case Consultation' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#C59A5F]" />
              <span>Book Confidential Consultation</span>
            </button>

            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#D1C8BC] hover:text-white transition-colors"
            >
              <span>Explore Practice Areas</span>
              <ArrowRight className="w-4 h-4 text-[#9E6728]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
