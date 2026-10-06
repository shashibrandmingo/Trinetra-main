import AboutHeroSection from '@/components/AboutHeroSection';
import AboutStorySection from '@/components/AboutStorySection';
import AboutChambersValuesSection from '@/components/AboutChambersValuesSection';
import AboutPrincipalCounselSection from '@/components/AboutPrincipalCounselSection';
import AboutPhilosophySection from '@/components/AboutPhilosophySection';
import AboutPracticeCourtsSection from '@/components/AboutPracticeCourtsSection';
import AboutContactCtaSection from '@/components/AboutContactCtaSection';

export const metadata = {
  title: 'About Adv. Monika Anand & Chambers | Trinetra Law Chambers New Delhi',
  description:
    'Learn about Adv. Monika Anand and Trinetra Law Chambers. Over 9+ years of dedicated advocacy in the Supreme Court of India, High Courts, and Appellate Tribunals across Criminal, Civil, and Constitutional law.',
  keywords: [
    'About Adv Monika Anand',
    'Advocate Monika Anand Profile',
    'Trinetra Law Chambers Legacy',
    'Supreme Court Senior Counsel',
    'Lady Advocate Supreme Court Delhi',
    'Delhi High Court Legal Counsel',
  ],
  alternates: {
    canonical: 'https://trinetralawchambers.com/about',
  },
  openGraph: {
    title: 'About Adv. Monika Anand & Trinetra Law Chambers',
    description:
      'Premier litigation practice led by Adv. Monika Anand representing matters before the Supreme Court of India and High Courts.',
    url: 'https://trinetralawchambers.com/about',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Advocate Monika Anand — Trinetra Law Chambers',
      },
    ],
  },
};

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
