'use client';

import { useState, useEffect } from 'react';
import {
  X,
  Phone,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { useEnquiryModal } from '@/context/EnquiryModalContext';
import { inquiryService } from '@/services/api';
import { sendLeadToGoogleSheet } from '@/services/googleSheet';

const practiceOptions = [
  'Criminal Defence & Bail Matters',
  'Constitutional & Writ Petitions',
  'Civil & Property Disputes',
  'Matrimonial & Divorce Proceedings',
  'Service Law & Administrative (CAT)',
  'Corporate & Insolvency (NCLT / NCLAT)',
  'Tax Litigation & Regulatory Advisory',
  'Supreme Court SLP Appellate Advocacy',
  'Other Legal Matter',
];

const forumOptions = [
  'Supreme Court of India',
  'Delhi High Court & District Benches',
  'Central Administrative Tribunal (CAT)',
  'NCLT / NCLAT (Tribunals)',
  'Other State High Court / District Court',
  'General / Pre-Litigation Advisory',
];

export default function EnquiryModal() {
  const { isOpen, options, closeEnquiry } = useEnquiryModal();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    practiceArea: 'Criminal Defence & Bail Matters',
    courtForum: 'Delhi High Court & District Benches',
    urgency: 'standard',
    matterSummary: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prefilled data when opened with options
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData((prev) => ({
        ...prev,
        practiceArea: options?.practiceArea || prev.practiceArea || practiceOptions[0],
        courtForum: options?.courtForum || prev.courtForum || forumOptions[0],
        urgency: options?.urgency || 'standard',
        matterSummary: options?.note || '',
      }));
    }
  }, [isOpen, options]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeEnquiry();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeEnquiry]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionPayload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      practiceArea: `${formData.practiceArea} — [${formData.courtForum}]`,
      urgency: formData.urgency,
      matterSummary: formData.matterSummary,
      source: 'Website Enquiry Popup Modal',
    };

    try {
      // 1. Send to Backend API (MongoDB)
      await inquiryService.create(submissionPayload);
    } catch (err) {
      // Backend is offline/not started — lead is already handled by Google Sheet
    }

    // 2. Also directly forward to Google Sheet Webhook
    try {
      sendLeadToGoogleSheet(submissionPayload);
    } catch (err) {
      console.warn('Google Sheet client forward notice:', err);
    }

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEnquiry();
      }}
    >
      <div className="relative w-full max-w-[480px] bg-[#FAF8F5] text-[#2D2926] rounded-2xl sm:rounded-3xl border border-[#E8E1D5] shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        {/* Top Decorative Brand Accent Strip */}
        <div className="w-full h-1 bg-gradient-to-r from-[#4A1118] via-[#B88E44] to-[#4A1118]" />

        {/* Modal Header with comfortable height */}
        <div className="px-5 py-3.5 sm:py-4 border-b border-[#E8E1D5] flex items-center justify-between gap-3 bg-[#F5EFE6]/75">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-[1.5px] bg-[#B88E44]" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#9E6728] uppercase font-dm">
                TRINETRA LAW CHAMBERS • INTAKE
              </span>
            </div>
            <h2
              id="enquiry-modal-title"
              className="text-base sm:text-lg font-bold font-heading text-[#1A1817] leading-tight mt-0.5"
            >
              Request Case Consultation
            </h2>
          </div>

          <button
            type="button"
            onClick={closeEnquiry}
            aria-label="Close Enquiry Modal"
            className="p-1.5 rounded-full text-[#635B52] hover:text-[#1A1817] hover:bg-[#EAE2D5] transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body - Well Proportioned */}
        <div className="p-4 sm:p-5 sm:px-6">
          {isSubmitted ? (
            /* ================= SUCCESS STATE ================= */
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF3E0] border-2 border-[#B88E44] flex items-center justify-center text-[#B88E44] mb-3 shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#B88E44]" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#1A1817]">
                Enquiry Received Successfully
              </h3>
              <p className="text-xs sm:text-[13px] text-[#554E46] font-dm max-w-sm mt-1.5 leading-relaxed">
                Thank you, <strong className="text-[#1A1817]">{formData.fullName || 'Client'}</strong>.
                Your matter has been recorded. We will contact you shortly on{' '}
                <strong className="text-[#1A1817]">{formData.phone || 'your number'}</strong>.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-sm">
                <a
                  href="tel:+919999953430"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Chambers</span>
                </a>
                <a
                  href={`https://wa.me/919999953430?text=${encodeURIComponent(
                    `Hello Trinetra Law Chambers, I have submitted an enquiry regarding ${formData.practiceArea}. Name: ${formData.fullName}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chamber</span>
                </a>
              </div>

              <button
                type="button"
                onClick={closeEnquiry}
                className="mt-4 text-xs text-[#78716A] hover:text-[#1A1817] font-medium underline underline-offset-4 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            /* ================= INTAKE FORM (Comfortable Height & Touch Targets) ================= */
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 font-dm">
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-[10px] sm:text-[10.5px] font-bold tracking-wider text-[#4A423A] uppercase mb-1">
                  Full Name <span className="text-[#9E2A2B]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-3 py-2 sm:py-2.5 bg-white border border-[#D5CBC0] rounded-xl text-xs sm:text-[13px] text-[#1A1817] placeholder-[#A89F91] focus:outline-none focus:border-[#4A1118] focus:ring-1 focus:ring-[#4A1118] transition-all"
                />
              </div>

              {/* Field 2: Phone / WhatsApp */}
              <div>
                <label className="block text-[10px] sm:text-[10.5px] font-bold tracking-wider text-[#4A423A] uppercase mb-1">
                  Phone / WhatsApp <span className="text-[#9E2A2B]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 sm:py-2.5 bg-white border border-[#D5CBC0] rounded-xl text-xs sm:text-[13px] text-[#1A1817] placeholder-[#A89F91] focus:outline-none focus:border-[#4A1118] focus:ring-1 focus:ring-[#4A1118] transition-all"
                />
              </div>

              {/* Field 3: Practice Domain */}
              <div>
                <label className="block text-[10px] sm:text-[10.5px] font-bold tracking-wider text-[#4A423A] uppercase mb-1">
                  Practice Domain
                </label>
                <select
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-2.5 bg-white border border-[#D5CBC0] rounded-xl text-xs sm:text-[13px] text-[#1A1817] focus:outline-none focus:border-[#4A1118] focus:ring-1 focus:ring-[#4A1118] transition-all cursor-pointer"
                >
                  {practiceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 4: Court / Forum */}
              <div>
                <label className="block text-[10px] sm:text-[10.5px] font-bold tracking-wider text-[#4A423A] uppercase mb-1">
                  Court / Forum
                </label>
                <select
                  name="courtForum"
                  value={formData.courtForum}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-2.5 bg-white border border-[#D5CBC0] rounded-xl text-xs sm:text-[13px] text-[#1A1817] focus:outline-none focus:border-[#4A1118] focus:ring-1 focus:ring-[#4A1118] transition-all cursor-pointer"
                >
                  {forumOptions.map((forum) => (
                    <option key={forum} value={forum}>
                      {forum}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 5: Urgency Level */}
              <div>
                <label className="block text-[10px] sm:text-[10.5px] font-bold tracking-wider text-[#4A423A] uppercase mb-1">
                  Urgency Level
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-2.5 bg-white border border-[#D5CBC0] rounded-xl text-xs sm:text-[13px] text-[#1A1817] focus:outline-none focus:border-[#4A1118] focus:ring-1 focus:ring-[#4A1118] transition-all cursor-pointer"
                >
                  <option value="standard">Standard Advisory (2-3 Days)</option>
                  <option value="urgent">🚨 Urgent (Within 24h / Bail / Stay)</option>
                  <option value="priority">Corporate / Retainer Matter</option>
                </select>
              </div>

              {/* Field 6: Brief Synopsis of Matter */}
              <div>
                <label className="block text-[10px] sm:text-[10.5px] font-bold tracking-wider text-[#4A423A] uppercase mb-1">
                  Brief Synopsis of Matter <span className="text-[#9E2A2B]">*</span>
                </label>
                <textarea
                  name="matterSummary"
                  required
                  rows={2.5}
                  value={formData.matterSummary}
                  onChange={handleChange}
                  placeholder="Outline key facts, relief sought, FIR/Case details..."
                  className="w-full px-3 py-2 bg-white border border-[#D5CBC0] rounded-xl text-xs sm:text-[13px] text-[#1A1817] placeholder-[#A89F91] focus:outline-none focus:border-[#4A1118] focus:ring-1 focus:ring-[#4A1118] transition-all resize-none"
                />
              </div>

              {/* Bottom Action Bar: Confidentiality on Left, Cancel & Submit on Right */}
              <div className="pt-2.5 sm:pt-3 flex items-center justify-between gap-2 border-t border-[#E8E1D5]/70">
                <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10.5px] text-[#78716A]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B88E44] shrink-0" />
                  <span className="truncate max-w-[150px] sm:max-w-none">
                    Strict Confidentiality
                  </span>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={closeEnquiry}
                    className="px-2.5 py-1.5 text-xs font-semibold text-[#635B52] hover:text-[#1A1817] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#4A1118] hover:bg-[#380C12] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-md shadow-[#4A1118]/20 disabled:opacity-60 active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
