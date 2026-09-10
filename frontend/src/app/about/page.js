'use client';

import AboutHeroSection from '@/components/AboutHeroSection';
import AboutStorySection from '@/components/AboutStorySection';
import AboutChambersValuesSection from '@/components/AboutChambersValuesSection';
import AboutPrincipalCounselSection from '@/components/AboutPrincipalCounselSection';
import AboutPhilosophySection from '@/components/AboutPhilosophySection';
import AboutPracticeCourtsSection from '@/components/AboutPracticeCourtsSection';
import AboutContactCtaSection from '@/components/AboutContactCtaSection';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Official About Hero Section */}
      <AboutHeroSection />

      {/* Parallax Overlap Card Pair: Scoped strictly to its container so it never leaks downpage */}
      <div className="relative w-full">
        <AboutStorySection />
        <AboutChambersValuesSection />
      </div>

      {/* Official Principal Counsel Advocate Section */}
      <AboutPrincipalCounselSection />

      {/* Official Our Philosophy: How We Approach the Law Section */}
      <AboutPhilosophySection />

      {/* Official Practice Across Courts: Where We Stand Section */}
      <AboutPracticeCourtsSection />

      {/* Official Contact & Consultation: Have a matter that deserves careful counsel? */}
      <AboutContactCtaSection />
    </div>
  );
}
