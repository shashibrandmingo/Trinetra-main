import PracticeAreasHeroSection from '@/components/PracticeAreasHeroSection';
import PracticeAreasListSection from '@/components/PracticeAreasListSection';
import FeaturedPracticeSection from '@/components/FeaturedPracticeSection';
import PracticeDepthSection from '@/components/PracticeDepthSection';
import OurApproachSection from '@/components/OurApproachSection';
import PracticeJurisdictionsSection from '@/components/PracticeJurisdictionsSection';
import ChambersPerspectiveSection from '@/components/ChambersPerspectiveSection';
import PracticeContactCtaSection from '@/components/PracticeContactCtaSection';

export const metadata = {
  title: 'Practice Areas | Criminal, Civil, Matrimonial, Service & Tax Law | Trinetra Law Chambers',
  description:
    'Comprehensive litigation practice areas represented by Adv. Monika Anand before Supreme Court of India & High Courts: Criminal Defense & Bail, Civil Property Disputes, Matrimonial & Divorce, Service Law (CAT), and Tax Litigation.',
  keywords: [
    'Criminal Lawyer in Delhi',
    'Anticipatory Bail Advocate Delhi',
    'PMLA CBI Defense Advocate',
    'Civil Dispute Lawyer Delhi High Court',
    'Matrimonial and Divorce Advocate Delhi',
    'Service Matter Lawyer CAT Delhi',
    'Tax Litigation Advocate Delhi',
    'Supreme Court SLP Article 136',
    'Writ Petition Article 226 32 Advocate',
    'Trinetra Law Chambers Practice Areas',
  ],
  alternates: {
    canonical: 'https://trinetralawchambers.com/practice-areas',
  },
  openGraph: {
    title: 'Legal Practice Areas | Trinetra Law Chambers — Adv. Monika Anand',
    description:
      'Explore core legal domains: Criminal Defense, Civil Litigation, Matrimonial, Service Law, and Supreme Court Appellate Advocacy.',
    url: 'https://trinetralawchambers.com/practice-areas',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Trinetra Law Chambers Practice Areas',
      },
    ],
  },
};

export default function PracticeAreasPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
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

