import PracticeAreasHeroSection from '@/components/PracticeAreasHeroSection';
import PracticeAreasListSection from '@/components/PracticeAreasListSection';
import PracticeDepthSection from '@/components/PracticeDepthSection';
import OurApproachSection from '@/components/OurApproachSection';
import PracticeJurisdictionsSection from '@/components/PracticeJurisdictionsSection';
import ChambersPerspectiveSection from '@/components/ChambersPerspectiveSection';
import PracticeContactCtaSection from '@/components/PracticeContactCtaSection';

export const metadata = {
  title: 'Practice Areas — Trinetra Law Chambers',
  description: 'Explore Trinetra Law Chambers practice areas across constitutional, commercial, criminal, civil, and administrative law.',
};

export default function PracticeAreasPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Practice Areas Hero Section */}
      <PracticeAreasHeroSection />

      {/* Areas of Practice - Accordion List Section */}
      <PracticeAreasListSection />

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

