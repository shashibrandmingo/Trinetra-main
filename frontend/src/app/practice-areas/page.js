import PracticeAreasHeroSection from '@/components/PracticeAreasHeroSection';
import PracticeAreasListSection from '@/components/PracticeAreasListSection';
import FeaturedPracticeSection from '@/components/FeaturedPracticeSection';
import PracticeDepthSection from '@/components/PracticeDepthSection';
import OurApproachSection from '@/components/OurApproachSection';
import PracticeJurisdictionsSection from '@/components/PracticeJurisdictionsSection';
import ChambersPerspectiveSection from '@/components/ChambersPerspectiveSection';
import PracticeContactCtaSection from '@/components/PracticeContactCtaSection';

export const metadata = {
  title: 'Legal Practice Areas | Criminal Defense, Bail, Civil, Matrimonial, CAT & Tax | Trinetra Law Chambers',
  description:
    'Comprehensive trial & appellate litigation practice represented by Adv. Monika Anand before the Supreme Court of India & Delhi High Court: Criminal Defense, Anticipatory Bail, NDPS, POCSO, Civil Property Disputes, Matrimonial Divorce, CAT Service Matters, NCLT Corporate Insolvency, and Tax Litigation.',
  keywords: [
    'Criminal Lawyer in Delhi',
    'Criminal Defense Lawyer Supreme Court Delhi',
    'Anticipatory Bail Advocate Delhi High Court',
    'Regular Bail Application Lawyer Delhi',
    'NDPS Act Defense Advocate Delhi',
    'POCSO Act Defense Lawyer Delhi High Court',
    'Section 138 NI Act Cheque Bounce Lawyer Delhi',
    'Civil Dispute Lawyer Delhi High Court',
    'Property Partition Suit Advocate Delhi',
    'Injunction and Property Declaration Suit Lawyer',
    'Matrimonial and Divorce Advocate Delhi',
    'Mutual Consent Divorce Section 13B Lawyer Delhi',
    'Child Custody Maintenance 125 CrPC Advocate',
    'Service Matter Lawyer CAT Delhi',
    'Central Administrative Tribunal Advocate Delhi',
    'PMLA CBI Defense Advocate Delhi',
    'NCLT Insolvency IBC Corporate Lawyer Delhi',
    'Tax Litigation Advocate Delhi',
    'Supreme Court SLP Article 136 Advocate',
    'Writ Petition Article 226 32 Supreme Court',
    'Trinetra Law Chambers Practice Areas',
  ],
  alternates: {
    canonical: 'https://monikaanand.com/practice-areas',
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
    title: 'Litigation Practice Areas | Trinetra Law Chambers — Adv. Monika Anand',
    description:
      'Core litigation domains: Criminal Defense, Anticipatory Bail, NDPS, Civil Litigation, Matrimonial, Service Law (CAT), Corporate Insolvency (NCLT) & Supreme Court SLP Appeals.',
    url: 'https://monikaanand.com/practice-areas',
    siteName: 'Trinetra Law Chambers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Trinetra Law Chambers Legal Practice Areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Practice Areas | Trinetra Law Chambers',
    description:
      'Supreme Court & High Court Advocacy in Criminal, Civil, Matrimonial, CAT & Tax matters.',
    images: ['/counsel-portrait.jpg'],
  },
};

const practiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Trinetra Law Chambers Practice Areas',
  url: 'https://monikaanand.com/practice-areas',
  telephone: '+919999953430',
  provider: {
    '@type': 'Attorney',
    name: 'Advocate Monika Anand',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Litigation Services Catalog',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Criminal Defense & Bail Advocacy',
          description: 'Anticipatory bail, regular bail, NDPS, POCSO, and trial representation before Delhi High Court and Supreme Court.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Constitutional & Writ Jurisdiction',
          description: 'Special Leave Petitions (SLP Article 136) and High Court Writs under Article 226 and Article 32.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Civil & Property Disputes',
          description: 'Property partition suits, injunctions, commercial contracts, and title declarations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Matrimonial & Family Law',
          description: 'Mutual consent divorce, contested divorce, maintenance, and child custody.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Administrative & Service Law (CAT)',
          description: 'Senior civil servants, government employee disputes, pensions, and promotions before CAT.',
        },
      },
    ],
  },
};

export default function PracticeAreasPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Practice Areas Catalog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }}
      />
      {/* Practice Areas Hero Section */}
      <PracticeAreasHeroSection />

      {/* Areas of Practice - Accordion List Section */}
      <PracticeAreasListSection />

      {/* Featured Practice Showcase Section */}
      <FeaturedPracticeSection />

      {/* Practice Across Jurisdictions - Courts Timeline Section */}
      <PracticeJurisdictionsSection />

      {/* Our Approach - 4 Step Process & Courthouse Colonnade Section */}
      <OurApproachSection />

      {/* Depth Where It Matters - Circular Collage + 4 Practice Areas */}
      <PracticeDepthSection />

      {/* The Chambers' Perspective - Editorial Headline & Court Image */}
      <ChambersPerspectiveSection />

      {/* Get In Touch - Final Contact / CTA Section */}
      <PracticeContactCtaSection />
    </div>
  );
}

