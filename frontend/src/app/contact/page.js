import ContactHeroSection from '@/components/ContactHeroSection';
import ContactFormSection from '@/components/ContactFormSection';
import ContactProximitySection from '@/components/ContactProximitySection';
import ContactProtocolSection from '@/components/ContactProtocolSection';

export const metadata = {
  title: 'Consult Adv. Monika Anand | Trinetra Law Chambers New Delhi | Contact & Registry',
  description:
    'Schedule a confidential legal consultation with Adv. Monika Anand at Trinetra Law Chambers, New Delhi. Direct intake for matters before Supreme Court of India, Delhi High Court, and Appellate Tribunals.',
  keywords: [
    'Consult Advocate Monika Anand',
    'Lawyer Consultation New Delhi',
    'Supreme Court Advocate Appointment',
    'Legal Advice Delhi High Court',
    'Trinetra Law Chambers Contact Number',
    'Chambers Address New Delhi',
  ],
  alternates: {
    canonical: 'https://trinetralawchambers.com/contact',
  },
  openGraph: {
    title: 'Consult Adv. Monika Anand | Trinetra Law Chambers New Delhi',
    description:
      'Direct intake and confidential legal consultation for Supreme Court of India and High Court matters.',
    url: 'https://trinetralawchambers.com/contact',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Consult Advocate Monika Anand — Trinetra Law Chambers',
      },
    ],
  },
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
