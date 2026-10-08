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
    'Adv. Monika Anand is a leading litigation advocate in New Delhi with 9+ years experience. Representing clients in Supreme Court of India & Delhi High Court in Criminal Defense, Anticipatory Bail, NDPS, POCSO, Civil, Matrimonial, Service (CAT) & Tax matters.',
  keywords: [
    'Advocate Monika Anand',
    'Monika Anand Advocate',
    'Best Advocate in Delhi',
    'Supreme Court Advocate New Delhi',
    'Best Supreme Court Lawyer India',
    'Top High Court Advocate Delhi',
    'Criminal Lawyer Delhi',
    'Criminal Defense Lawyer Delhi High Court',
    'Bail Advocate Delhi High Court',
    'Anticipatory Bail Lawyer Delhi',
    'NDPS Act Lawyer Delhi High Court',
    'POCSO Lawyer Delhi High Court',
    'Matrimonial Lawyer Delhi',
    'Divorce Advocate Supreme Court',
    'Civil Property Dispute Lawyer Delhi',
    'Service Matter Lawyer CAT Delhi',
    'Tax Advocate Delhi',
    'PMLA ED Defense Advocate Delhi',
    'Supreme Court SLP Article 136 Advocate',
    'Supreme Court Transfer Petition Article 139A',
    'Writ Petition Article 226 Delhi High Court',
    'Section 138 Cheque Bounce Advocate Delhi',
    'Advocate in Noida Sector 62',
    'Advocate Office in Lajpat Nagar III Delhi',
    'Trinetra Law Chambers',
  ],
  alternates: {
    canonical: 'https://monikaanand.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Advocate Monika Anand | Trinetra Law Chambers — Supreme Court & High Courts',
    description:
      'Premier litigation practice in New Delhi led by Adv. Monika Anand. 9+ years defending complex criminal, NDPS, POCSO, civil, matrimonial, service, and tax matters before the Supreme Court of India.',
    url: 'https://monikaanand.com',
    siteName: 'Trinetra Law Chambers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Advocate Monika Anand — Lead Counsel Trinetra Law Chambers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advocate Monika Anand | Trinetra Law Chambers New Delhi',
    description:
      'Supreme Court of India & Delhi High Court Litigation Counsel — Criminal Defense, Bail, Civil, Matrimonial & Constitutional Law.',
    images: ['/counsel-portrait.jpg'],
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
        text: 'Trinetra Law Chambers is led by Adv. Monika Anand, a qualified Law Graduate with an LL.M. and Ph.D. in Law, bringing 9+ years of extensive litigation experience before the Supreme Court of India, Delhi High Court, and NCR district courts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which courts does Adv. Monika Anand practice in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adv. Monika Anand regularly represents matters before the Supreme Court of India, the Delhi High Court, the Central Administrative Tribunal (CAT), and District Courts across New Delhi and Noida (Gautam Buddha Nagar).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the chambers handle Criminal, NDPS and POCSO cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Adv. Monika Anand provides comprehensive representation in Criminal & Bail matters, including specialized defense in NDPS Act matters (search, seizure, recovery, bail) and POCSO Act proceedings (investigation, evidence, statutory bail, and trial).',
      },
    },
    {
      '@type': 'Question',
      name: 'What other legal domains are handled by the practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The practice covers Matrimonial & Family Law (divorce, custody, maintenance), Service & Employment disputes before CAT, Civil and Property litigation, Direct/Indirect Tax litigation, and Supreme Court Special Leave Petitions (SLP under Article 136).',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I schedule a consultation with Adv. Monika Anand in Delhi / Noida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can request a direct consultation through the official Trinetra Law Chambers website contact form, or schedule an in-person chamber conference in New Delhi.',
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

      {/* Official Client Testimonials Section (Hidden) */}
      {/* <TestimonialsSection /> */}

      {/* Official Awards & Milestones Recognition Section */}
      <AwardsSection />

      {/* Official Insights & Perspectives Blogs Section */}
      <InsightsSection />

      {/* Official Your Next Chapter Contact & CTA Section */}
      <ContactCtaSection />
    </div>
  );
}
