import HeroSection from '@/components/HeroSection';
import LegacySection from '@/components/LegacySection';
import BarAdmissionsSection from '@/components/BarAdmissionsSection';
import PracticeAreasSection from '@/components/PracticeAreasSection';
import ChamberCreedSection from '@/components/ChamberCreedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AwardsSection from '@/components/AwardsSection';
import InsightsSection from '@/components/InsightsSection';
import ContactCtaSection from '@/components/ContactCtaSection';

export const metadata = {
  title: 'Advocate Monika Anand | Trinetra Law Chambers — Supreme Court & High Court Advocates New Delhi',
  description:
    'Adv. Monika Anand is a leading litigation advocate in New Delhi with 9+ years experience. Representing clients in Supreme Court of India & Delhi High Court in Criminal Defense, Bail, Civil, Matrimonial, Service & Tax matters.',
  keywords: [
    'Advocate Monika Anand',
    'Monika Anand Advocate',
    'Best Advocate in Delhi',
    'Supreme Court Advocate New Delhi',
    'Delhi High Court Lawyer',
    'Criminal Lawyer Delhi',
    'Bail Advocate Delhi High Court',
    'Matrimonial Lawyer Delhi',
    'Divorce Advocate Supreme Court',
    'Civil Court Advocate Delhi',
    'Service Matter Lawyer CAT Delhi',
    'Tax Advocate Delhi',
    'Anticipatory Bail Lawyer Delhi',
    'PMLA ED Defense Advocate',
    'Trinetra Law Chambers',
  ],
  alternates: {
    canonical: 'https://trinetralawchambers.com',
  },
  openGraph: {
    title: 'Advocate Monika Anand | Trinetra Law Chambers — Supreme Court & High Courts',
    description:
      'Premier litigation practice in New Delhi led by Adv. Monika Anand. 9+ years defending complex criminal, civil, matrimonial, service, and tax matters before the Supreme Court of India.',
    url: 'https://trinetralawchambers.com',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Advocate Monika Anand — Lead Counsel Trinetra Law Chambers',
      },
    ],
  },
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the lead advocate at Trinetra Law Chambers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trinetra Law Chambers is led by Adv. Monika Anand, an experienced litigator with 9+ years of practice before the Supreme Court of India and High Courts across criminal, civil, matrimonial, service, and tax law.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which courts does Adv. Monika Anand practice in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adv. Monika Anand regularly represents clients before the Supreme Court of India, the Delhi High Court, Central Administrative Tribunal (CAT), and various district courts and appellate tribunals in New Delhi and across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What legal matters does Trinetra Law Chambers handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The chamber handles Criminal Defense (bails, PMLA, CBI trials, quashing), Civil and Property Litigation, Matrimonial and Family Law, Service Disputes before CAT, Direct & Indirect Tax Litigation, and Supreme Court Special Leave Petitions (SLPs).',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I consult Advocate Monika Anand for legal advice in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can request a confidential legal consultation through the Trinetra Law Chambers official website contact form or by scheduling an in-person conference in New Delhi.',
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Google FAQ Schema for Rich Search Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      {/* Official Hero Section with Supreme Court Background & Advocate Portrait */}
      <HeroSection />

      {/* Official Metrics Bar & Our Legacy Section */}
      <LegacySection />

      {/* Official Statutory Bar Admissions & Credentials Section */}
      <BarAdmissionsSection />

      {/* Official Interactive Stacked Practice Areas Section */}
      <PracticeAreasSection />

      {/* Official Chamber Jurisprudence & Creed Quote Section */}
      <ChamberCreedSection />

      {/* Official Client Testimonials Section */}
      <TestimonialsSection />

      {/* Official Awards & Milestones Recognition Section */}
      <AwardsSection />

      {/* Official Insights & Perspectives Blogs Section */}
      <InsightsSection />

      {/* Official Your Next Chapter Contact & CTA Section */}
      <ContactCtaSection />
    </div>
  );
}
