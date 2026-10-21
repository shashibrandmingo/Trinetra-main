import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Dr. Monika Anand | Principal Counsel | Trinetra Law Chambers',
  description:
    'Learn about Dr. Monika Anand, Principal Counsel at Trinetra Law Chambers. Recognized among the premier litigation advocates in Delhi & Noida with 9+ years of distinguished advocacy across the Supreme Court of India, Delhi High Court, and District Courts.',
  keywords: [
    'Best Advocate in Noida',
    'Best Lady Advocate in Noida',
    'Top Advocate in Noida Sector 62',
    'About Dr Monika Anand',
    'Dr Monika Anand Noida Chamber',
    'Dr Monika Anand Profile',
    'Dr Monika Anand Experience',
    'Supreme Court Advocate Dr Monika Anand',
    'Delhi High Court Bar Association Member',
    'Supreme Court Bar Association Counsel',
    'Best Female Advocate in Delhi',
    'Top Lady Criminal Lawyer Delhi',
    'Trinetra Law Chambers Founder Profile',
    'Principal Counsel Monika Anand',
    'Chambers of Dr Monika Anand New Delhi',
    'Advocate Office Lajpat Nagar III Delhi',
    'Advocate Office Sector 62 Noida',
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
    title: 'About Dr. Monika Anand & Trinetra Law Chambers — New Delhi',
    description:
      'Premier litigation practice led by Dr. Monika Anand representing complex matters before the Supreme Court of India, Delhi High Court, and Tribunals.',
    url: 'https://monikaanand.com/about',
    siteName: 'Trinetra Law Chambers',
    locale: 'en_IN',
    type: 'profile',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Dr. Monika Anand — Principal Counsel Trinetra Law Chambers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Monika Anand | Trinetra Law Chambers',
    description:
      '9+ Years of Litigation Advocacy before the Supreme Court of India and High Courts.',
    images: ['/counsel-portrait.jpg'],
  },
};

const aboutCounselSchema = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Dr. Monika Anand',
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

      {/* Fresh, Clean, Premium About Client Component */}
      <AboutClient />
    </div>
  );
}
