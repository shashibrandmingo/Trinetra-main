import AboutHeroSection from '@/components/AboutHeroSection';
import AboutStorySection from '@/components/AboutStorySection';
import AboutChambersValuesSection from '@/components/AboutChambersValuesSection';
import AboutPrincipalCounselSection from '@/components/AboutPrincipalCounselSection';
import AboutPhilosophySection from '@/components/AboutPhilosophySection';
import AboutPracticeCourtsSection from '@/components/AboutPracticeCourtsSection';
import AboutContactCtaSection from '@/components/AboutContactCtaSection';

export const metadata = {
  title: 'About Adv. Monika Anand | Supreme Court & Delhi High Court Advocate | Trinetra Law Chambers',
  description:
    'Learn about Adv. Monika Anand, Principal Counsel at Trinetra Law Chambers. Over 9+ years of distinguished litigation advocacy in the Supreme Court of India, Delhi High Court, and Appellate Tribunals across Criminal Defense, Civil, Matrimonial & Constitutional Law.',
  keywords: [
    'About Adv Monika Anand',
    'Advocate Monika Anand Profile',
    'Advocate Monika Anand Experience',
    'Supreme Court Advocate Monika Anand',
    'Delhi High Court Bar Association Member',
    'Supreme Court Bar Association Counsel',
    'Best Female Advocate in Delhi',
    'Top Lady Criminal Lawyer Delhi',
    'Trinetra Law Chambers Founder Profile',
    'Principal Counsel Monika Anand',
    'Chambers of Monika Anand New Delhi',
    'Advocate Office Lajpat Nagar III Delhi',
    'Supreme Court Litigation Attorney Delhi',
    'Senior Legal Advisory Chambers Delhi NCR',
  ],
  alternates: {
    canonical: 'https://monikaanand.com/about',
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
    title: 'About Adv. Monika Anand & Trinetra Law Chambers — New Delhi',
    description:
      'Premier litigation practice led by Adv. Monika Anand representing complex matters before the Supreme Court of India, Delhi High Court, and Tribunals.',
    url: 'https://monikaanand.com/about',
    siteName: 'Trinetra Law Chambers',
    locale: 'en_IN',
    type: 'profile',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Advocate Monika Anand — Principal Counsel Trinetra Law Chambers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Adv. Monika Anand | Trinetra Law Chambers',
    description:
      '9+ Years of Litigation Advocacy before the Supreme Court of India and High Courts.',
    images: ['/counsel-portrait.jpg'],
  },
};

const aboutCounselSchema = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Advocate Monika Anand',
  jobTitle: 'Principal Counsel & Managing Advocate',
  worksFor: {
    '@type': 'LegalService',
    name: 'Trinetra Law Chambers',
    url: 'https://monikaanand.com',
  },
  url: 'https://monikaanand.com/about',
  image: 'https://monikaanand.com/counsel-portrait.jpg',
  telephone: '+919999953430',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'H-8, Lajpat Nagar III',
    addressLocality: 'New Delhi',
    postalCode: '110024',
    addressCountry: 'IN',
  },
  memberOf: [
    {
      '@type': 'Organization',
      name: 'Supreme Court Bar Association (SCBA)',
    },
    {
      '@type': 'Organization',
      name: 'Delhi High Court Bar Association (DHCBA)',
    },
    {
      '@type': 'Organization',
      name: 'Bar Council of Delhi',
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Structured Attorney Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutCounselSchema) }}
      />

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
