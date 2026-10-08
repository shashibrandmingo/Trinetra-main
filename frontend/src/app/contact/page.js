import ContactHeroSection from '@/components/ContactHeroSection';
import ContactFormSection from '@/components/ContactFormSection';
import ContactProximitySection from '@/components/ContactProximitySection';
import ContactProtocolSection from '@/components/ContactProtocolSection';

export const metadata = {
  title: 'Contact Adv. Monika Anand | Best Advocate in Noida & Delhi | Trinetra Law Chambers',
  description:
    'Schedule a confidential legal consultation with Adv. Monika Anand. Recognized among the best advocates in Noida & Delhi. Chambers located at Sector 62 Noida (ITHUM Tower) & Lajpat Nagar III New Delhi. Call: +91 99999 53430.',
  keywords: [
    // Hot Noida Contact Keywords
    'Best Advocate in Noida Contact Number',
    'Best Lawyer in Noida Sector 62 Consultation',
    'Top Criminal Advocate Noida Phone',
    'Advocate Office Sector 62 Noida ITHUM Tower',
    'Surajpur Court Lawyer Contact Number Noida',
    'Best Divorce Lawyer in Noida Contact',
    'Lawyer Near Me in Noida Sector 62',
    'Advocate Monika Anand Noida Phone',

    // Delhi & General
    'Consult Advocate Monika Anand',
    'Lawyer Consultation New Delhi',
    'Supreme Court Advocate Appointment',
    'Legal Advice Delhi High Court',
    'Trinetra Law Chambers Contact Number',
    'Phone Number Advocate Monika Anand +91 9999953430',
    'Lawyer Office Lajpat Nagar III Delhi',
    'Urgent Bail Consultation Delhi WhatsApp',
    'Emergency Stay Order Supreme Court Advocate',
    'Chambers Address New Delhi',
  ],
  alternates: {
    canonical: 'https://monikaanand.com/contact',
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
    title: 'Contact Adv. Monika Anand | Best Advocate in Noida & Delhi',
    description:
      'Direct intake and confidential legal consultation for Supreme Court of India, High Court, and Noida District Court matters. Call +91 99999 53430.',
    url: 'https://monikaanand.com/contact',
    siteName: 'Trinetra Law Chambers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/counsel-portrait.jpg',
        width: 1000,
        height: 1000,
        alt: 'Consult Advocate Monika Anand — Trinetra Law Chambers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Trinetra Law Chambers | Adv. Monika Anand',
    description:
      'Book a confidential case consultation for Supreme Court of India & Delhi High Court matters.',
    images: ['/counsel-portrait.jpg'],
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Trinetra Law Chambers Contact Registry',
  url: 'https://monikaanand.com/contact',
  mainEntity: {
    '@type': 'LegalService',
    name: 'Trinetra Law Chambers',
    telephone: ['+919999953430', '+919990613140'],
    email: 'info@trinetralaw.com',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'H-8, Lajpat Nagar III',
        addressLocality: 'New Delhi',
        postalCode: '110024',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201309',
        addressCountry: 'IN',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {/* 1. Hero Section: Direct Chambers Access & Urgency Badges */}
      <ContactHeroSection />

      {/* 2. Main Consultation Form & Chambers Directory */}
      <ContactFormSection />

      {/* 3. Strategic Proximity / Dedicated Practice Desks (Hidden per user request) */}
      {/* <ContactProximitySection /> */}

      {/* 4. 3-Step Engagement Protocol & Frequently Addressed Inquiries */}
      <ContactProtocolSection />
    </div>
  );
}
