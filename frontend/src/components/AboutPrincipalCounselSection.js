'use client';

import Image from 'next/image';

function SupremeCourtIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="#B88E44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Finial spire */}
      <line x1="20" y1="3" x2="20" y2="7" />
      <circle cx="20" cy="4" r="1.2" fill="#B88E44" stroke="none" />
      {/* Dome */}
      <path d="M12 15 C12 8.5, 28 8.5, 28 15 Z" />
      {/* Cornice horizontal rings */}
      <line x1="9" y1="15" x2="31" y2="15" />
      <line x1="10" y1="18" x2="30" y2="18" />
      {/* Pillars */}
      <line x1="12" y1="18" x2="12" y2="28" />
      <line x1="16" y1="18" x2="16" y2="28" />
      <line x1="20" y1="18" x2="20" y2="28" />
      <line x1="24" y1="18" x2="24" y2="28" />
      <line x1="28" y1="18" x2="28" y2="28" />
      {/* Plinth Base steps */}
      <line x1="8" y1="28" x2="32" y2="28" />
      <line x1="6" y1="31" x2="34" y2="31" />
    </svg>
  );
}

function HighCourtsIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="#B88E44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Triangular pediment roof */}
      <polygon points="20,5 6,14 34,14" />
      {/* Entablature frieze line */}
      <line x1="5" y1="14" x2="35" y2="14" />
      <line x1="7" y1="17" x2="33" y2="17" />
      {/* Classical Columns */}
      <line x1="10" y1="17" x2="10" y2="28" />
      <line x1="16.5" y1="17" x2="16.5" y2="28" />
      <line x1="23.5" y1="17" x2="23.5" y2="28" />
      <line x1="30" y1="17" x2="30" y2="28" />
      {/* Stylobate base steps */}
      <line x1="6" y1="28" x2="34" y2="28" />
      <line x1="4" y1="31" x2="36" y2="31" />
    </svg>
  );
}

function PracticeYearsIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="#B88E44" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Rosette scalloped outer circle */}
      <circle cx="20" cy="15" r="9.5" />
      <circle cx="20" cy="15" r="7.5" strokeDasharray="1.5 2" strokeWidth="1" />
      {/* Center five-point Star */}
      <polygon points="20,10 21.5,13.5 25,13.8 22.4,16 23.2,19.5 20,17.5 16.8,19.5 17.6,16 15,13.8 18.5,13.5" fill="#B88E44" stroke="none" />
      {/* Hanging ribbon tails with V notches */}
      <path d="M14 23.5 L11 34 L15 31.5 L18 34 L17 24.5" />
      <path d="M26 23.5 L29 34 L25 31.5 L22 34 L23 24.5" />
    </svg>
  );
}

const rightColumnCredentials = [
  {
    Icon: SupremeCourtIcon,
    titleLine1: 'SUPREME COURT',
    titleLine2: 'OF INDIA',
    subtitle: 'Regularly appearing before the highest court in the country.',
  },
  {
    Icon: HighCourtsIcon,
    titleLine1: 'HIGH COURTS',
    titleLine2: null,
    subtitle: 'Extensive practice across multiple High Courts.',
  },
  {
    Icon: PracticeYearsIcon,
    titleLine1: '18+ YEARS',
    titleLine2: 'OF PRACTICE',
    subtitle: 'Trusted for consistent, principled and effective advocacy.',
  },
];

const keyPracticeAreas = [
  'Constitutional Law',
  'Corporate Law',
  'Criminal Law',
  'Civil & Commercial Disputes',
];

export default function AboutPrincipalCounselSection() {
  return (
    <section className="relative z-30 w-full bg-[#FAF8F5] text-[#2D2926] border-t border-[#E8E1D5]">
      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-12 xs:pt-14 sm:pt-16 lg:py-14 pb-8 sm:pb-12">
        
        {/* Main Grid: Left & Center Visual Composition (Col 1-9) + Right Column (Col 10-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* ================= LEFT & CENTER VISUAL CANVAS (Cols 1-9 on Desktop) ================= */}
          <div className="lg:col-span-9 relative">
            
            {/* Mobile / Tablet Narrative Content (Visible only on < lg screens) */}
            <div className="block lg:hidden mb-8">
              {/* Eyebrow Header Tag */}
              <div className="flex items-center gap-3 mb-3.5">
                <span className="w-8 h-[1.5px] bg-[#B88E44]" />
                <span className="text-[11px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                  OUR PRINCIPAL COUNSEL
                </span>
              </div>

              {/* Main Headline (Strictly 2 lines) */}
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1817] leading-[1.1] sm:leading-[1.08]">
                <span className="block">Law in Service</span>
                <span className="block gold-gradient-shine mt-1">of a Larger Purpose.</span>
              </h2>

              {/* Overview Paragraph */}
              <p className="mt-4 text-[#554E46] text-sm sm:text-base leading-relaxed font-dm font-normal">
                For Adv. Anunay Kashyap, the practice of law is not just a profession — it is a{' '}
                <strong className="font-bold text-[#1A1817]">commitment</strong> to people,
                institutions and a fairer tomorrow.
              </p>

              {/* Authentic Signature & Designation */}
              <div className="mt-4 pt-1">
                <div className="mb-2">
                  <img
                    src="/counsel-signature.png"
                    alt="A. Kashyap Signature"
                    className="h-11 sm:h-13 w-auto object-contain select-none"
                  />
                </div>
                <div className="text-[9.5px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm leading-snug">
                  <div className="text-[#1A1817] font-bold">ADV. ANUNAY KASHYAP</div>
                  <div className="text-[#8C847B]">SENIOR ADVOCATE</div>
                </div>
              </div>
            </div>

            {/* Master Artwork Canvas: 100% full image with ZERO cropping */}
            <div className="relative w-full rounded-sm overflow-hidden select-none">
              
              {/* Full Image: Advocate, Supreme Court Dome, Mahogany Desk, Leather Armchair, Books & Red Box */}
              <Image
                src="/about-chamber.png"
                alt="Adv. Anunay Kashyap, Senior Advocate - Principal Counsel at Supreme Court of India"
                width={1240}
                height={1269}
                priority
                className="w-full h-auto block"
              />

              {/* Desktop Narrative Content (Overlaid seamlessly in the top-left area above the red box) */}
              <div 
                className="hidden lg:flex flex-col justify-start absolute z-20 pointer-events-auto"
                style={{
                  top: '2%',
                  left: '2%',
                  width: '43%',
                  maxHeight: '64%',
                }}
              >
                {/* Eyebrow Header Tag */}
                <div className="flex items-center gap-3 mb-2.5 xl:mb-3.5">
                  <span className="w-8 xl:w-10 h-[1.5px] bg-[#B88E44]" />
                  <span className="text-[10px] xl:text-[11.5px] font-semibold tracking-[0.24em] text-[#78716A] uppercase font-dm">
                    OUR PRINCIPAL COUNSEL
                  </span>
                </div>

                {/* Main Headline (Strictly 2 lines) */}
                <h2 className="font-heading text-3xl lg:text-[38px] xl:text-[46px] 2xl:text-[52px] font-bold tracking-tight text-[#1A1817] leading-[1.08]">
                  <span className="block">Law in Service</span>
                  <span className="block gold-gradient-shine mt-0.5 xl:mt-1">of a Larger Purpose.</span>
                </h2>

                {/* Overview Paragraph */}
                <p className="mt-3 xl:mt-4 text-[#554E46] text-xs xl:text-[13.5px] 2xl:text-[14.5px] leading-relaxed font-dm font-normal">
                  For Adv. Anunay Kashyap, the practice of law is not just a profession — it is a{' '}
                  <strong className="font-bold text-[#1A1817]">commitment</strong> to people,
                  institutions and a fairer tomorrow.
                </p>

                {/* Authentic Signature & Designation */}
                <div className="mt-3 xl:mt-4">
                  <div className="mb-1.5 xl:mb-2">
                    <img
                      src="/counsel-signature.png"
                      alt="A. Kashyap Signature"
                      className="h-10 xl:h-12 2xl:h-14 w-auto object-contain select-none"
                    />
                  </div>
                  <div className="text-[8.5px] xl:text-[9.5px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm leading-snug">
                    <div className="text-[#1A1817] font-bold">ADV. ANUNAY KASHYAP</div>
                    <div className="text-[#8C847B]">SENIOR ADVOCATE</div>
                  </div>
                </div>
              </div>

              {/* Exact Quote Text Overlay DIRECTLY on the Image's Red Box */}
              <div
                className="absolute z-20 flex flex-col justify-between p-3 min-[400px]:p-3.5 sm:p-5 md:p-6 lg:p-4 xl:p-6 2xl:p-7 select-none overflow-hidden"
                style={{
                  left: '1.21%',
                  top: '68.95%',
                  width: '45.48%',
                  height: '25.69%',
                }}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <p className="font-serif italic text-[10px] min-[400px]:text-[11px] min-[480px]:text-xs sm:text-[14.5px] md:text-base lg:text-[12.5px] xl:text-[15.5px] 2xl:text-[17.5px] text-[#FAF8F5] leading-snug sm:leading-relaxed">
                    <span className="text-xl min-[400px]:text-2xl sm:text-3xl xl:text-4xl font-serif text-[#C5A059] mr-1 align-baseline select-none">
                      “
                    </span>
                    The law is not merely about knowing what is written. It is about understanding{' '}
                    <span className="text-[#C5A059] not-italic font-normal">what is at stake.</span>{' '}
                    <span className="text-base min-[400px]:text-lg sm:text-2xl xl:text-3xl font-serif text-[#C5A059] ml-1 align-baseline select-none">
                      ”
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-1 sm:pt-2">
                  <span className="w-5 sm:w-7 h-[1.5px] bg-[#C5A059]" />
                  <span className="text-[7.5px] min-[400px]:text-[8.5px] sm:text-[10px] xl:text-[11px] font-semibold tracking-[0.26em] text-[#E8DFD5] uppercase font-dm">
                    A. KASHYAP
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN (Cols 10-12 on Desktop) ================= */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full pl-0 lg:pl-6 xl:pl-8 pt-6 lg:pt-0 lg:border-l lg:border-[#E8E1D5]">
            
            {/* Top: 3 Apex Credentials */}
            <div className="space-y-5 sm:space-y-6 xl:space-y-7">
              {rightColumnCredentials.map((item, idx) => {
                const IconComponent = item.Icon;
                return (
                  <div key={idx}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 pt-0.5">
                        <IconComponent className="w-10 h-10 sm:w-11 sm:h-11 text-[#B88E44]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] sm:text-[11.5px] xl:text-[12px] font-bold tracking-[0.2em] text-[#1A1817] uppercase font-dm leading-snug">
                          <div>{item.titleLine1}</div>
                          {item.titleLine2 && <div>{item.titleLine2}</div>}
                        </h4>
                        <p className="mt-1 text-xs sm:text-[12.5px] text-[#6B635B] leading-relaxed font-dm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    {idx < rightColumnCredentials.length - 1 && (
                      <div className="w-12 h-[1.5px] bg-[#B88E44]/40 my-5 xl:my-6 ml-14" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Middle & Lower: Authentic Handwritten Note Card & 2x2 Key Areas of Work */}
            <div className="my-5 sm:my-8 lg:my-10 pt-5 sm:pt-6 border-t border-[#E8E1D5] lg:border-t-0 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-start justify-between gap-5 sm:gap-6 lg:gap-8">
              {/* Authentic Handwritten Sticky Note Card (Smaller, cute & compact) */}
              <div className="w-full max-w-[175px] xs:max-w-[190px] sm:max-w-[210px] xl:max-w-[240px] flex justify-center sm:justify-start">
                <img
                  src="/counsel-note-card.png"
                  alt="Same law. A fairer tomorrow handwritten note"
                  className="w-full h-auto object-contain drop-shadow-md select-none -rotate-1 hover:rotate-0 transition-transform duration-300"
                />
              </div>

              {/* Key Areas of Work - Strictly 2x2 Grid on Mobile */}
              <div className="w-full flex-1">
                <h5 className="text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-[#78716A] uppercase font-dm mb-2.5 sm:mb-3.5 text-left">
                  KEY AREAS OF WORK
                </h5>
                <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 gap-y-2 sm:gap-3 text-[10.5px] xs:text-[11.5px] sm:text-[12.5px] xl:text-[13px] text-[#4A433D] font-dm font-normal leading-tight">
                  {keyPracticeAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 sm:gap-2 justify-start">
                      <span className="text-[#B88E44] font-bold text-xs sm:text-sm leading-none select-none pt-0.5">|</span>
                      <span className="font-medium">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: Chambers Branding (Desktop only, hidden on mobile) */}
            <div className="hidden lg:block mt-auto pt-5 sm:pt-6 border-t border-[#B88E44]/35">
              <div className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm">
                TRINETRA LAW CHAMBERS
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-medium tracking-[0.2em] text-[#9E958A] uppercase font-dm mt-1">
                NEW DELHI
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
