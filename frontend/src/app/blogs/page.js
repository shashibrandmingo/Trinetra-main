import BlogListingClient from './BlogListingClient';

export const metadata = {
  title: 'Chambers Perspectives & Legal Insights | Trinetra Law Chambers',
  description:
    'Authoritative legal commentary, constitutional jurisprudence, corporate litigation strategies, and appellate analysis authored by senior advocates at Trinetra Law Chambers, New Delhi.',
  keywords: [
    'Supreme Court of India',
    'Constitutional Law Blog',
    'Article 32 Writ Jurisdiction',
    'Commercial Arbitration India',
    'PMLA Criminal Defense',
    'IBC Insolvency Law',
    'Delhi High Court Advocates',
    'Legal Insights New Delhi',
  ],
  openGraph: {
    title: 'Legal Insights & Judicial Perspectives | Trinetra Law Chambers',
    description:
      'In-depth strategic analyses on landmark Supreme Court rulings, commercial arbitration, and regulatory frameworks.',
    url: 'https://trinetralawchambers.com/blogs',
    siteName: 'Trinetra Law Chambers',
    images: [
      {
        url: '/court-building.png',
        width: 1200,
        height: 630,
        alt: 'Trinetra Law Chambers — Supreme Court Legal Insights',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chambers Perspectives | Trinetra Law Chambers',
    description:
      'Authoritative legal commentary and appellate jurisprudence from Supreme Court counsel.',
    images: ['/court-building.png'],
  },
  alternates: {
    canonical: 'https://trinetralawchambers.com/blogs',
  },
};

export default function BlogsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Trinetra Law Chambers Insights & Legal Perspectives',
    description:
      'Authoritative legal discourse on constitutional law, corporate dispute resolution, and appellate litigation before the Supreme Court of India.',
    url: 'https://trinetralawchambers.com/blogs',
    publisher: {
      '@type': 'LegalService',
      name: 'Trinetra Law Chambers',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trinetralawchambers.com/logo.png',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Green Park Main',
        addressLocality: 'New Delhi',
        postalCode: '110016',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      {/* Schema.org Blog Structured Data for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogListingClient />
    </>
  );
}
