import { Cinzel, Poppins, DM_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://trinetralawchambers.com'),
  title: {
    default: 'Trinetra Law Chambers | Adv. Monika Anand | Supreme Court & High Court Advocates New Delhi',
    template: '%s | Trinetra Law Chambers — Adv. Monika Anand',
  },
  description:
    'Trinetra Law Chambers is a premier litigation law firm led by Adv. Monika Anand, with 9+ years of experience across Criminal, Civil, Matrimonial, Service, Tax, and Constitutional matters before the Supreme Court of India and High Courts.',
  keywords: [
    // Brand & Lead Advocate
    'Advocate Monika Anand',
    'Monika Anand Advocate',
    'Adv Monika Anand Supreme Court',
    'Trinetra Law Chambers',
    'Trinetra Law',
    'Monika Anand Lawyer Delhi',
    
    // Core Courts & Geography
    'Supreme Court Advocates New Delhi',
    'Supreme Court Lawyer India',
    'Delhi High Court Advocates',
    'Best Advocate in Delhi',
    'Top Lawyers in Delhi NCR',
    'Advocate near Supreme Court',
    'High Court Litigation Advocates',
    
    // Criminal Defense
    'Criminal Lawyer in Delhi',
    'Top Criminal Advocate Delhi High Court',
    'Bail and Anticipatory Bail Advocate Delhi',
    'PMLA ED CBI Defense Lawyer Delhi',
    'White Collar Crime Advocate Supreme Court',
    'Section 482 CrPC Quashing Advocate',
    'NDPS and Economic Offenses Lawyer Delhi',
    
    // Civil & Commercial
    'Civil Advocate Delhi High Court',
    'Commercial Litigation Advocates Delhi',
    'Property Dispute Lawyer Delhi',
    'Recovery and Injunction Advocate',
    'Arbitration and Dispute Resolution Delhi',
    
    // Matrimonial & Family
    'Matrimonial Lawyer Delhi',
    'Divorce Advocate Delhi High Court',
    'Child Custody and Maintenance Advocate',
    'Domestic Violence and 498A Lawyer Delhi',
    
    // Service & Administrative
    'Service Matter Lawyer CAT Delhi',
    'Central Administrative Tribunal Advocate',
    'Armed Forces Tribunal AFT Lawyer Delhi',
    'Government Employee Pension and Promotion Dispute Lawyer',
    
    // Tax & Corporate
    'Tax Advocate Delhi High Court',
    'Income Tax and GST Litigation Lawyer',
    'Corporate Advisory Law Firm New Delhi',
    
    // Appellate & Writ
    'Special Leave Petition SLP Article 136 Supreme Court',
    'Writ Petition Article 226 High Court',
    'Writ Petition Article 32 Supreme Court',
    'Female Advocate Supreme Court of India',
    'Best Lady Lawyer Delhi',
    'Legal Consultation New Delhi',
  ],
  authors: [{ name: 'Adv. Monika Anand' }, { name: 'Trinetra Law Chambers' }],
  creator: 'Adv. Monika Anand',
  publisher: 'Trinetra Law Chambers',
  category: 'Legal Services & Litigation',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://trinetralawchambers.com',
  },
  openGraph: {
    title: 'Trinetra Law Chambers | Adv. Monika Anand | Supreme Court & High Court Advocates',
    description:
      'Litigation-focused legal practice led by Adv. Monika Anand with 9+ years of experience across Criminal, Civil, Matrimonial, Service, Tax, and Constitutional law before the Supreme Court of India and High Courts.',
    url: 'https://trinetralawchambers.com',
    siteName: 'Trinetra Law Chambers',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Advocate Monika Anand — Lead Counsel at Trinetra Law Chambers Supreme Court of India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trinetra Law Chambers | Adv. Monika Anand',
    description:
      'Premier litigation practice before the Supreme Court of India & High Courts across Criminal, Civil, Matrimonial, Service & Tax law.',
    images: ['/counsel-portrait.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const jsonLdLegalService = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LegalService', 'Attorney'],
      '@id': 'https://trinetralawchambers.com/#organization',
      name: 'Trinetra Law Chambers',
      alternateName: 'Adv. Monika Anand Law Chambers',
      url: 'https://trinetralawchambers.com',
      logo: 'https://trinetralawchambers.com/Trinetra-Law-Chamber-logo.jpg',
      image: 'https://trinetralawchambers.com/counsel-portrait.jpg',
      description:
        'Premier litigation law chambers in New Delhi led by Adv. Monika Anand (9+ years experience) specializing in Criminal Defense, Civil Litigation, Matrimonial Disputes, Service Matters, Tax, and Supreme Court SLP / High Court Writ Petitions.',
      priceRange: '₹₹₹',
      telephone: '+91-9810000000',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.6143',
        longitude: '77.2407',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Supreme Court of India' },
        { '@type': 'AdministrativeArea', name: 'Delhi High Court' },
        { '@type': 'AdministrativeArea', name: 'New Delhi' },
        { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        { '@type': 'AdministrativeArea', name: 'Central Administrative Tribunal CAT' },
        { '@type': 'Country', name: 'India' },
      ],
      founder: {
        '@type': 'Person',
        name: 'Monika Anand',
        jobTitle: 'Advocate & Lead Counsel',
        image: 'https://trinetralawchambers.com/counsel-portrait.jpg',
        description:
          'Advocate with 9+ years of extensive courtroom experience before the Supreme Court of India, High Courts, and Appellate Tribunals.',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Legal Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Criminal Law & Defense Litigation',
              description:
                'Anticipatory bail, regular bail, PMLA investigations, CBI/ED trials, Section 482 CrPC petitions.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Civil & Commercial Litigation',
              description:
                'Property disputes, contract enforcement, injunctions, commercial arbitration, and recovery suits.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Matrimonial & Family Law',
              description:
                'Divorce proceedings, child custody, maintenance petitions, mutual consent divorce, 498A defense.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Service & Administrative Law',
              description:
                'CAT disputes, disciplinary proceedings, pensions, promotions, armed forces tribunal matters.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Taxation & Regulatory Advisory',
              description:
                'Direct tax, GST disputes, appellate tribunal hearings, and statutory compliance.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Constitutional & Supreme Court Appellate Practice',
              description:
                'Special Leave Petitions (SLP under Art 136), Writ Petitions (Art 32 & 226), review petitions.',
            },
          },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://trinetralawchambers.com/#attorney',
      name: 'Monika Anand',
      jobTitle: 'Advocate / Senior Counsel',
      worksFor: {
        '@id': 'https://trinetralawchambers.com/#organization',
      },
      image: 'https://trinetralawchambers.com/counsel-portrait.jpg',
      description:
        'Advocate Monika Anand is a seasoned litigator with 9+ years of practice before the Supreme Court of India and High Courts.',
      knowsAbout: [
        'Criminal Law',
        'Civil Litigation',
        'Matrimonial Law',
        'Service Law',
        'Taxation Law',
        'Constitutional Law',
        'Supreme Court SLP Practice',
        'High Court Writ Petitions',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://trinetralawchambers.com/#website',
      url: 'https://trinetralawchambers.com',
      name: 'Trinetra Law Chambers',
      publisher: {
        '@id': 'https://trinetralawchambers.com/#organization',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${poppins.variable} ${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLegalService) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#2D2926]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
