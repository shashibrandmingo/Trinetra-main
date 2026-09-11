import ContactHeroSection from '@/components/ContactHeroSection';
import ContactFormSection from '@/components/ContactFormSection';
import ContactProximitySection from '@/components/ContactProximitySection';
import ContactProtocolSection from '@/components/ContactProtocolSection';

export const metadata = {
  title: 'Contact Chambers — Trinetra Law Chambers',
  description:
    'Initiate confidential counsel with Trinetra Law Chambers. Direct registry and advocate intake for Supreme Court of India, High Courts, and Appellate Tribunals in New Delhi.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* 1. Hero Section: Direct Chambers Access & Urgency Badges */}
      <ContactHeroSection />

      {/* 2. Main Consultation Form & Chambers Directory */}
      <ContactFormSection />

      {/* 3. Strategic Proximity to India's Highest Benches */}
      <ContactProximitySection />

      {/* 4. 3-Step Engagement Protocol & Frequently Addressed Inquiries */}
      <ContactProtocolSection />
    </div>
  );
}
