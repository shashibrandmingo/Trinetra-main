'use client';

import HeroSection from '@/components/HeroSection';
import LegacySection from '@/components/LegacySection';
import BarAdmissionsSection from '@/components/BarAdmissionsSection';
import PracticeAreasSection from '@/components/PracticeAreasSection';
import ChamberCreedSection from '@/components/ChamberCreedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AwardsSection from '@/components/AwardsSection';
import InsightsSection from '@/components/InsightsSection';
import ContactCtaSection from '@/components/ContactCtaSection';

export default function Home() {
  return (
    <div className="w-full bg-[#FAF8F5]">
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
