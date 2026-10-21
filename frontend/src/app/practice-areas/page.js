import PracticeAreasClient from './PracticeAreasClient';
import { practiceAreasData } from '@/data/practiceAreasData';

export const metadata = {
  title: 'Legal Practice Areas | Best Advocate in Delhi & Noida — Dr. Monika Anand',
  description:
    'Comprehensive litigation practice across Delhi & Noida led by Dr. Monika Anand: Criminal Defense, Anticipatory Bail, NDPS, POCSO, Civil Property Disputes, Matrimonial Divorce, CAT Service Matters, Corporate Insolvency, and Supreme Court SLP.',
  keywords: [
    'advocate in noida',
    'advocate in nodia',
    'Advocate in Noida',
    'Best Advocate in Noida',
    'lawyer in noida',
    'Best Criminal Lawyer in Noida',
    'Bail Advocate in Noida Surajpur Court',
    'Anticipatory Bail Lawyer Noida',
    'Best Divorce Lawyer in Noida',
    'Property Dispute Lawyer in Noida',
    'Civil Advocate in Noida',
    'Service Matter Lawyer CAT Delhi',
    'Criminal Lawyer in Delhi',
    'NDPS Act Defense Advocate Delhi',
    'POCSO Act Defense Lawyer Delhi High Court',
    'Section 138 NI Act Cheque Bounce Lawyer Delhi',
    'Supreme Court SLP Article 136 Advocate',
    'Trinetra Law Chambers Practice Areas',
  ],
  alternates: {
    canonical: 'https://monikaanand.com/practice-areas',
  },
  openGraph: {
    title: 'Litigation Practice Areas | Best Advocate in Delhi & Noida — Dr. Monika Anand',
    description:
      'Core litigation domains across Delhi & Noida: Criminal Defense, Anticipatory Bail, NDPS, Civil Litigation, Matrimonial, Service Law (CAT), Corporate Insolvency (NCLT) & Supreme Court SLP Appeals.',
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
    title: 'Legal Practice Areas | Best Advocate in Delhi & Noida',
    description:
      'Supreme Court & High Court Advocacy in Criminal, Civil, Matrimonial, CAT & Tax matters across Delhi & Noida.',
    images: ['/counsel-portrait.jpg'],
  },
};

const practiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Trinetra Law Chambers Practice Areas',
  url: 'https://monikaanand.com/practice-areas',
  telephone: '+919999953430',
  areaServed: [
    'New Delhi',
    'Delhi NCR',
    'Noida',
    'Noida Sector 62',
    'Gautam Buddha Nagar',
    'Surajpur District Court',
    'Supreme Court of India',
    'Delhi High Court',
  ],
  provider: {
    '@type': 'Attorney',
    name: 'Dr. Monika Anand',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Litigation Services Catalog',
    itemListElement: practiceAreasData.map((item) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: item.title,
        description: item.tagline,
        url: `https://monikaanand.com/practice-areas/${item.slug}`,
      },
    })),
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }}
      />
      <PracticeAreasClient />
    </>
  );
}
