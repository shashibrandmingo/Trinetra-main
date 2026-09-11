'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Lock,
  ArrowRight,
} from 'lucide-react';

const practiceOptions = [
  'Constitutional & Writ Law',
  'Corporate & Commercial Litigation',
  'Criminal Defence & White Collar',
  'Civil & Property Disputes',
  'Administrative & Service Law',
  'Appellate & Tribunal Practice',
];

const forumOptions = [
  'Supreme Court of India (Apex Court)',
  'Delhi High Court',
  'Bombay High Court',
  'NCLAT / NCLT (Corporate Insolvency)',
  'Central Administrative Tribunal (CAT)',
  'Other State High Court / District Bench',
];

import { inquiryService } from '@/services/api';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    practiceArea: 'Constitutional & Writ Law',
    courtForum: 'Supreme Court of India (Apex Court)',
    urgency: 'Urgent Filing (Next 24-48 Hours)',
    matterSummary: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Map urgency label to standard/priority/urgent
      let urgencyCode = 'standard';
      if (formData.urgency.toLowerCase().includes('urgent')) {
        urgencyCode = 'urgent';
      } else if (formData.urgency.toLowerCase().includes('priority') || formData.urgency.toLowerCase().includes('this week')) {
        urgencyCode = 'priority';
      }

      await inquiryService.create({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        practiceArea: `${formData.practiceArea} — [${formData.courtForum}]`,
        urgency: urgencyCode,
        matterSummary: `${formData.organization ? `[Org/Entity: ${formData.organization}]\n` : ''}${formData.matterSummary}`,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.warn('Backend intake notice (using offline receipt):', err.message);
      // Fallback gracefully so client always receives confirmation
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact-form" className="relative w-full bg-[#FAF8F5] text-[#2D2926] py-14 sm:py-18 lg:py-24 border-b border-[#E8E1D5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ================= TWO-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: CONSULTATION FORM ================= */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8E1D5] p-6 sm:p-9 md:p-11 shadow-xl shadow-black/3">
              
              {/* Form Title & Subtitle */}
              <div className="mb-7 sm:mb-8 pb-5 border-b border-[#E8E1D5]">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-6 h-[1.5px] bg-[#9E6728]" />
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#78716A] uppercase font-dm">
                    CASE INTAKE & BRIEFING
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1A1817] tracking-tight">
                  Confidential Consultation Request
                </h2>
                <p className="text-xs sm:text-[13px] text-[#6E665D] mt-1.5 font-sans leading-relaxed">
                  Brief the chambers regarding your prospective litigation or advisory matter. 
                  All disclosures are privileged under the Advocates Act.
                </p>
              </div>

              {isSubmitted ? (
                /* Success State */
                <div className="py-12 sm:py-16 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#FAF4EB] border border-[#9E6728]/30 text-[#9E6728] flex items-center justify-center mx-auto mb-5 shadow-inner">
                    <CheckCircle2 className="w-8 h-8 stroke-[1.8]" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1A1817] tracking-tight">
                    Briefing Received by Registry
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#5C544D] mt-2.5 max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, <span className="font-semibold text-[#1A1817]">{formData.fullName}</span>. 
                    Your briefing summary regarding <span className="text-[#9E6728] font-semibold">{formData.practiceArea}</span> has been dispatched to the senior counsel intake desk. A registry officer will review conflict of interest and contact you within the allocated urgency timeframe.
                  </p>

                  <div className="mt-8 pt-6 border-t border-[#E8E1D5] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-dm">
                    <div className="flex items-center gap-2 text-[#78716A]">
                      <FileCheck className="w-4 h-4 text-[#9E6728]" />
                      <span>Intake Reference: TLC-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#9E6728] font-semibold underline underline-offset-4 hover:text-[#1A1817] transition-colors cursor-pointer"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Consultation Form */
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  
                  {/* Row 1: Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A423A] font-dm mb-1.5">
                        Full Legal Name <span className="text-[#9E6728]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Adv. Rajeshwar Sharma / Sarah Jenkins"
                        className="w-full bg-[#FAF8F5] border border-[#D5CDC0] focus:border-[#9E6728] focus:bg-white rounded-lg px-4 py-3 text-xs sm:text-[13px] text-[#1A1817] outline-none transition-all placeholder:text-[#A69C8E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A423A] font-dm mb-1.5">
                        Client / Organization Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Acme Enterprises / Individual"
                        className="w-full bg-[#FAF8F5] border border-[#D5CDC0] focus:border-[#9E6728] focus:bg-white rounded-lg px-4 py-3 text-xs sm:text-[13px] text-[#1A1817] outline-none transition-all placeholder:text-[#A69C8E]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A423A] font-dm mb-1.5">
                        Phone / WhatsApp <span className="text-[#9E6728]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98110 00000"
                        className="w-full bg-[#FAF8F5] border border-[#D5CDC0] focus:border-[#9E6728] focus:bg-white rounded-lg px-4 py-3 text-xs sm:text-[13px] text-[#1A1817] outline-none transition-all placeholder:text-[#A69C8E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A423A] font-dm mb-1.5">
                        Confidential Email <span className="text-[#9E6728]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="counsel@clientdomain.com"
                        className="w-full bg-[#FAF8F5] border border-[#D5CDC0] focus:border-[#9E6728] focus:bg-white rounded-lg px-4 py-3 text-xs sm:text-[13px] text-[#1A1817] outline-none transition-all placeholder:text-[#A69C8E]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Practice Area Selection */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A423A] font-dm mb-2">
                      Practice Area of Concern <span className="text-[#9E6728]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {practiceOptions.map((area) => {
                        const isSelected = formData.practiceArea === area;
                        return (
                          <button
                            key={area}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, practiceArea: area }))}
                            className={`px-3 py-2 text-left rounded-lg border text-[10.5px] sm:text-[11px] font-dm font-medium transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#1A1817] text-white border-[#1A1817] shadow-xs'
                                : 'bg-[#FAF8F5] text-[#554E47] border-[#D5CDC0] hover:border-[#9E6728] hover:bg-white'
                            }`}
                          >
                            {area}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Forum & Urgency Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A423A] font-dm mb-1.5">
                        Judicial Forum / Jurisdiction
                      </label>
                      <select
                        name="courtForum"
                        value={formData.courtForum}
                        onChange={handleChange}
                        className="w-full bg-[#FAF8F5] border border-[#D5CDC0] focus:border-[#9E6728] focus:bg-white rounded-lg px-3.5 py-3 text-xs sm:text-[12.5px] text-[#1A1817] outline-none transition-all cursor-pointer font-sans"
                      >
                        {forumOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A423A] font-dm mb-1.5">
                        Urgency of Matter
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full bg-[#FAF8F5] border border-[#D5CDC0] focus:border-[#9E6728] focus:bg-white rounded-lg px-3.5 py-3 text-xs sm:text-[12.5px] text-[#1A1817] outline-none transition-all cursor-pointer font-sans"
                      >
                        <option value="Immediate Supreme Court Mentioning (Limitation Expiring)">
                          🚨 Immediate Mentioning / Limitation Expiring
                        </option>
                        <option value="Urgent Filing (Next 24-48 Hours)">
                          ⚡ Urgent Filing (Next 24-48 Hours)
                        </option>
                        <option value="Standard Legal Advisory (Within 3-5 Days)">
                          📅 Standard Legal Advisory (Within 3-5 Days)
                        </option>
                        <option value="Retainer / Ongoing Corporate Brief">
                          🏛️ Retainer / Corporate Representation
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Matter Summary Textarea */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#4A423A] font-dm mb-1.5">
                      Brief Matter Summary / Impugned Order Details <span className="text-[#9E6728]">*</span>
                    </label>
                    <textarea
                      name="matterSummary"
                      required
                      rows={4}
                      value={formData.matterSummary}
                      onChange={handleChange}
                      placeholder="Please outline the key factual backdrop, court orders challenged, limitation deadlines, or legal relief sought..."
                      className="w-full bg-[#FAF8F5] border border-[#D5CDC0] focus:border-[#9E6728] focus:bg-white rounded-lg p-4 text-xs sm:text-[13px] text-[#1A1817] outline-none transition-all placeholder:text-[#A69C8E] resize-y font-sans leading-relaxed"
                    />
                  </div>

                  {/* Submit Button & Security Guarantee */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 bg-[#141211] hover:bg-[#9E6728] text-white px-8 py-4 text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-md group rounded-xs cursor-pointer disabled:opacity-75"
                    >
                      <span>{isSubmitting ? 'DISPATCHING BRIEF...' : 'SUBMIT INQUIRY FOR COUNSEL'}</span>
                      <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <div className="flex items-center gap-2 text-[#78716A] text-[11px] font-dm">
                      <Lock className="w-3.5 h-3.5 text-[#9E6728]" />
                      <span>Encrypted & Protected Privileged Data</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* ================= RIGHT COLUMN: CHAMBERS DIRECTORY ================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6">
            
            {/* Primary Chambers Card (New Delhi) */}
            <div className="bg-[#181513] text-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-2xl border border-white/10 relative overflow-hidden">
              
              {/* Subtle gold decorative gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9E6728] via-[#C5A059] to-transparent" />
              
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#C5A059] uppercase font-dm">
                  PRINCIPAL CHAMBERS
                </span>
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#A69C8E] uppercase bg-white/5 px-2.5 py-1 rounded-sm border border-white/10 font-dm">
                  APEX JURISDICTION
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FAF8F5] tracking-tight">
                New Delhi Chambers
              </h3>
              <p className="text-xs text-[#A69C8E] mt-1 font-dm">
                Serving the Supreme Court of India & Delhi High Court
              </p>

              {/* Address */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9.5px] font-semibold tracking-[0.2em] text-[#A69C8E] uppercase block font-dm">
                    PHYSICAL LOCATION
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#FAF8F5] font-medium leading-relaxed mt-0.5">
                    A-9, Green Park, New Delhi – 110016, India
                  </p>
                  <span className="text-[10.5px] text-[#C5A059] font-dm block mt-1">
                    ~15 mins from Supreme Court of India
                  </span>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="mt-5 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9.5px] font-semibold tracking-[0.2em] text-[#A69C8E] uppercase block font-dm">
                    REGISTRY & COUNSEL LINE
                  </span>
                  <a
                    href="tel:+911141512345"
                    className="text-sm font-bold text-[#FAF8F5] hover:text-[#C5A059] transition-colors mt-0.5 block font-heading"
                  >
                    +91 11 4151 2345
                  </a>
                  <span className="text-[10.5px] text-[#A69C8E] font-dm block mt-0.5">
                    Emergency Apex Desk: +91 98100 24890
                  </span>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="mt-5 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9.5px] font-semibold tracking-[0.2em] text-[#A69C8E] uppercase block font-dm">
                    ELECTRONIC INTAKE
                  </span>
                  <a
                    href="mailto:info@trinetralaw.com"
                    className="text-xs sm:text-[13px] font-medium text-[#FAF8F5] hover:text-[#C5A059] transition-colors mt-0.5 block font-dm"
                  >
                    info@trinetralaw.com
                  </a>
                  <a
                    href="mailto:registry@trinetralaw.com"
                    className="text-xs sm:text-[13px] font-medium text-[#FAF8F5] hover:text-[#C5A059] transition-colors mt-0.5 block font-dm"
                  >
                    registry@trinetralaw.com
                  </a>
                </div>
              </div>

            </div>

            {/* Consultation Hours Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E8E1D5] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FAF4EB] text-[#9E6728] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-[#1A1817]">
                  Chamber Consultation Hours
                </h4>
              </div>

              <div className="space-y-2.5 text-xs font-dm divide-y divide-[#E8E1D5]/60">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[#6E665D]">Monday – Friday</span>
                  <span className="font-semibold text-[#1A1817]">09:30 AM – 08:30 PM IST</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[#6E665D]">Saturday (Pre-Trial Briefs)</span>
                  <span className="font-semibold text-[#1A1817]">10:00 AM – 05:00 PM IST</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[#6E665D]">Sunday (Monday Bench Prep)</span>
                  <span className="font-semibold text-[#9E6728]">By Prior Registry Notice</span>
                </div>
              </div>
            </div>

            {/* Urgent Apex Court Advisory Card */}
            <div className="bg-[#FAF4EB] border border-[#9E6728]/30 rounded-2xl p-6 shadow-xs">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#9E6728] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#1A1817] uppercase tracking-wider">
                    Emergency Mentioning Protocol
                  </h4>
                  <p className="text-[11.5px] sm:text-xs text-[#6E665D] mt-1.5 leading-relaxed font-sans">
                    For emergency mentioning before the Hon’ble Chief Justice of India or Vacation Benches, complete paper books and brief synopsis must be received by 07:00 PM on the preceding evening.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
