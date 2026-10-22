'use client';

import { Phone } from 'lucide-react';

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.89 9.886m8.813-18.698A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function FloatingContactBar() {
  const whatsappUrl =
    'https://wa.me/919999953430?text=Hello%20Trinetra%20Law%20Chambers,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter.';

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE FIXED DOCK BAR (Bottom of screen: Call on Left, WhatsApp on Right) */}
      {/* ========================================================================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A1211]/95 backdrop-blur-md border-t border-[#8C6D37]/40 px-3 py-2 pb-[max(8px,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.3)]">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          
          {/* Left: Call Button */}
          <a
            href="tel:+919999953430"
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#4A1118] active:bg-[#340B10] text-[#D8B478] border border-[#B88E44]/50 rounded-lg shadow-sm font-dm font-bold text-xs tracking-wider transition-all active:scale-[0.98]"
            aria-label="Direct Call: +91 99999 53430"
          >
            <Phone className="w-3.5 h-3.5 text-[#D8B478] shrink-0" />
            <span className="truncate">Call: +91 99999 53430</span>
          </a>

          {/* Right: WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#128C7E] active:bg-[#075E54] text-white border border-[#25D366]/40 rounded-lg shadow-sm font-dm font-bold text-xs tracking-wider transition-all active:scale-[0.98]"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
            <span>WhatsApp</span>
          </a>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP FLOATING PILLS (Bottom-Left: Call, Bottom-Right: WhatsApp)       */}
      {/* ========================================================================= */}
      
      {/* Bottom-Left Floating Call Pill */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-40">
        <a
          href="tel:+919999953430"
          className="group flex items-center gap-3 px-4 py-3 bg-[#4A1118] hover:bg-[#380C12] text-[#D8B478] hover:text-[#FAF8F5] border border-[#B88E44]/50 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_28px_rgba(74,17,24,0.45)] hover:scale-105 transition-all duration-300 font-dm cursor-pointer"
          aria-label="Call Trinetra Law Chambers"
          title="Direct Chambers Line: +91 99999 53430"
        >
          <div className="w-9 h-9 rounded-full bg-[#B88E44]/20 border border-[#B88E44]/40 flex items-center justify-center text-[#D8B478] group-hover:bg-[#B88E44] group-hover:text-[#4A1118] transition-colors shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left pr-2">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5B4A0] font-semibold leading-none">
              DIRECT CALL
            </span>
            <span className="text-[13px] text-[#D8B478] font-extrabold mt-1 leading-none tracking-wide">
              +91 99999 53430
            </span>
          </div>
        </a>
      </div>

      {/* Bottom-Right Floating WhatsApp Pill */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 bg-[#075E54] hover:bg-[#128C7E] text-white border border-[#25D366]/40 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_28px_rgba(18,140,126,0.45)] hover:scale-105 transition-all duration-300 font-dm cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="Chat with Chambers on WhatsApp"
        >
          <div className="flex flex-col text-right pl-2">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5E8D8] font-semibold leading-none">
              QUICK ADVISORY
            </span>
            <span className="text-[13px] text-white font-extrabold mt-1 leading-none tracking-wide">
              WhatsApp Chambers
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-[#25D366] transition-colors shrink-0">
            <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
          </div>
        </a>
      </div>
    </>
  );
}
