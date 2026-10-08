import { Cinzel, Poppins, DM_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnquiryProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";
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
  metadataBase: new URL('https://monikaanand.com'),
  title: {
    default: 'Trinetra Law Chambers | Adv. Monika Anand | Best Advocate in Delhi & Noida | Supreme Court & High Courts',
    template: '%s | Trinetra Law Chambers — Adv. Monika Anand',
  },
  description:
    'Trinetra Law Chambers is a premier litigation law firm led by Adv. Monika Anand, with 9+ years of experience across Criminal, Civil, Matrimonial, Service, Tax, and Constitutional matters before the Supreme Court of India, Delhi High Court, and Noida District Courts.',
  keywords: [
    // Brand & Lead Advocate
    'Advocate Monika Anand',
    'Monika Anand Advocate',
    'Adv Monika Anand Supreme Court',
    'Trinetra Law Chambers',
    'Trinetra Law',
    'Monika Anand Lawyer Delhi',
    
    // High-Intent Noida Search Queries (HOT KEYWORDS)
    'advocate in noida',
    'advocate in nodia',
    'Advocate in Noida',
    'Best Advocate in Noida',
    'Top Advocate in Noida',
    'lawyer in noida',
    'lawyer in nodia',
    'Best Lawyer in Noida',
    'best lawyer in nodia',
    'advocates in noida',
    'lawyers in noida',
    'advocate near me noida',
    'advocate in greater noida',
    'advocate in noida extension',
    'Top Lawyer in Noida',
    'Best Criminal Lawyer in Noida',
    'Top Criminal Advocate Noida',
    'Bail Advocate in Noida',
    'Anticipatory Bail Lawyer Noida',
    'Best Divorce Lawyer in Noida',
    'Top Matrimonial Lawyer in Noida',
    'Family Court Advocate Noida',
    'Property Dispute Lawyer in Noida',
    'Civil Advocate in Noida',
    'Cheque Bounce 138 Advocate Noida',
    'Advocate in Noida Sector 62',
    'Advocate Office ITHUM Tower Sector 62 Noida',
    'District Court Noida Lawyer',
    'Surajpur Court Advocate Noida',
    'Gautam Buddha Nagar District Court Lawyer',
    'Best Law Firm in Noida Sector 62',
    'Top Lady Lawyer in Noida',
    'Best Female Advocate in Noida',
    'Advocate Monika Anand Noida',

    // Core Courts & Geography
    'Supreme Court Advocates New Delhi',
    'Supreme Court Lawyer India',
    'Delhi High Court Advocates',
    'Best Advocate in Delhi',
    'Top Lawyers in Delhi NCR',
    'Advocate near Supreme Court',
    'High Court Litigation Advocates',
    
    // Criminal Defense, NDPS & POCSO
    'Criminal Lawyer in Delhi',
    'Top Criminal Advocate Delhi High Court',
    'Bail and Anticipatory Bail Advocate Delhi',
    'NDPS Act Lawyer Delhi',
    'NDPS Bail Advocate Supreme Court',
    'NDPS Search and Seizure Lawyer',
    'POCSO Lawyer Delhi High Court',
    'POCSO Bail Advocate Delhi',
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
    'Monika Anand Ph.D. in Law',
    'Monika Anand LL.M. Advocate',
    'Legal Consultation New Delhi',
    'Legal Consultation Noida',
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
    canonical: 'https://monikaanand.com',
  },
  openGraph: {
    title: 'Trinetra Law Chambers | Adv. Monika Anand | Supreme Court & High Court Advocates',
    description:
      'Litigation-focused legal practice led by Adv. Monika Anand with 9+ years of experience across Criminal, Civil, Matrimonial, Service, Tax, and Constitutional law before the Supreme Court of India and High Courts.',
    url: 'https://monikaanand.com',
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
      '@id': 'https://monikaanand.com/#organization',
      name: 'Trinetra Law Chambers',
      alternateName: 'Adv. Monika Anand Law Chambers',
      url: 'https://monikaanand.com',
      logo: 'https://monikaanand.com/Trinetra-Law-Chamber-logo.jpg',
      image: 'https://monikaanand.com/counsel-portrait.jpg',
      description:
        'Premier litigation law chambers in New Delhi led by Adv. Monika Anand (9+ years experience) specializing in Criminal Defense, Civil Litigation, Matrimonial Disputes, Service Matters, Tax, and Supreme Court SLP / High Court Writ Petitions.',
      priceRange: '₹₹₹',
      telephone: '+919999953430',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'H-8, Lajpat Nagar III',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110024',
        addressCountry: 'IN',
      },
      department: [
        {
          '@type': 'LegalService',
          name: 'Trinetra Law Chambers - Noida Corporate Chambers',
          description: 'Best Advocate in Noida Sector 62 for Supreme Court, High Court & Surajpur District Court matters.',
          telephone: '+919999953430',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62',
            addressLocality: 'Noida',
            addressRegion: 'Uttar Pradesh',
            postalCode: '201309',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '28.6276',
            longitude: '77.3732',
          },
        },
      ],
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
        { '@type': 'AdministrativeArea', name: 'Noida & Gautam Buddha Nagar' },
        { '@type': 'AdministrativeArea', name: 'Noida Sector 62' },
        { '@type': 'AdministrativeArea', name: 'Surajpur District Court' },
        { '@type': 'AdministrativeArea', name: 'Central Administrative Tribunal CAT' },
        { '@type': 'Country', name: 'India' },
      ],
      founder: {
        '@type': 'Person',
        name: 'Monika Anand',
        honorificPrefix: 'Adv.',
        honorificSuffix: 'LL.B., LL.M., Ph.D. in Law',
        jobTitle: 'Litigation Counsel & Advocate',
        image: 'https://monikaanand.com/counsel-portrait.jpg',
        description:
          'Advocate Monika Anand holds an LL.B., LL.M. and Ph.D. in Law with 9+ years of litigation experience before the Supreme Court of India, High Courts, and Appellate Tribunals.',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Legal Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Criminal Law & Bail Proceedings',
              description:
                'Representation across criminal proceedings, including anticipatory bail, regular bail, arrest safeguards, investigation, trial, and higher-court appeals.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'NDPS Act Matters',
              description:
                'Offences under the NDPS Act, including questions of search, seizure, recovery, statutory safeguards, bail, and trial defense.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'POCSO Act Matters',
              description:
                'Proceedings under the POCSO Act, covering investigation procedure, evidence scrutiny, statutory bail, and trial representation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Matrimonial & Family Law',
              description:
                'Divorce proceedings, maintenance, child custody, domestic disputes, 498A defense, and family-law litigation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Service & Employment Law',
              description:
                'Disciplinary proceedings, seniority disputes, CAT matters, termination, promotions, and employment safeguards for public and private employees.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Civil, Property, Tax & Appellate Litigation',
              description:
                'Property disputes, contracts, injunctions, direct/indirect tax litigation, writ petitions, and Supreme Court Special Leave Petitions (SLP).',
            },
          },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://monikaanand.com/#attorney',
      name: 'Monika Anand',
      honorificPrefix: 'Adv.',
      honorificSuffix: 'LL.B., LL.M., Ph.D. in Law',
      jobTitle: 'Advocate & Litigation Counsel',
      worksFor: {
        '@id': 'https://monikaanand.com/#organization',
      },
      image: 'https://monikaanand.com/counsel-portrait.jpg',
      description:
        'Advocate Monika Anand is a Law Graduate, LL.M. and Ph.D. in Law with 9+ years of litigation experience before the Supreme Court of India, Delhi High Court and District Courts.',
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Laws (LL.B.)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Master of Laws (LL.M.)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Doctorate in Law (Ph.D.)' },
      ],
      knowsAbout: [
        'Criminal Law & Bail',
        'NDPS Act Defense',
        'POCSO Act Proceedings',
        'Matrimonial & Family Law',
        'Service & Employment Law (CAT)',
        'Civil & Property Disputes',
        'Taxation & Regulatory Law',
        'Supreme Court SLP Article 136',
        'High Court Writ Petitions Article 226',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://monikaanand.com/#website',
      url: 'https://monikaanand.com',
      name: 'Trinetra Law Chambers',
      publisher: {
        '@id': 'https://monikaanand.com/#organization',
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
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.5684;77.2415" />
        <meta name="ICBM" content="28.5684, 77.2415" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLegalService) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#2D2926]">
        <EnquiryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
