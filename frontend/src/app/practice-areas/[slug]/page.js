import { notFound } from 'next/navigation';
import { practiceAreasData } from '@/data/practiceAreasData';
import PracticeAreaDetailClient from './PracticeAreaDetailClient';

// Dynamic SEO metadata generator
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const practice = practiceAreasData.find((p) => p.slug === slug);

  if (!practice) {
    return {
      title: 'Practice Area Not Found | Trinetra Law Chambers',
      description: 'The requested legal practice area could not be located in chambers archives.',
    };
  }

  const siteUrl = 'https://monikaanand.com';
  const pageUrl = `${siteUrl}/practice-areas/${practice.slug}`;

  return {
    title: `${practice.title} | Dr. Monika Anand | Trinetra Law Chambers`,
    description: practice.tagline || practice.overview.slice(0, 160),
    keywords: [
      practice.title,
      practice.shortTitle,
      practice.category,
      ...practice.courtVenues,
      'Advocate in Noida',
      'Lawyer in Delhi',
      'Supreme Court Advocate',
      'Dr. Monika Anand',
      'Trinetra Law Chambers',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${practice.title} | Best Advocate in Delhi & Noida`,
      description: practice.tagline,
      url: pageUrl,
      siteName: 'Trinetra Law Chambers',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: '/counsel-portrait.jpg',
          width: 1000,
          height: 1000,
          alt: `${practice.title} — Dr. Monika Anand`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${practice.title} | Dr. Monika Anand`,
      description: practice.tagline,
      images: ['/counsel-portrait.jpg'],
    },
  };
}

// Generate static params for all practice areas for fast pre-rendering
export async function generateStaticParams() {
  return practiceAreasData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PracticeAreaDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const practice = practiceAreasData.find((p) => p.slug === slug);

  if (!practice) {
    notFound();
  }

  const otherPractices = practiceAreasData.filter((p) => p.slug !== slug);

  // Schema.org LegalService + FAQPage Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        name: `Trinetra Law Chambers — ${practice.title}`,
        url: `https://monikaanand.com/practice-areas/${practice.slug}`,
        description: practice.overview,
        provider: {
          '@type': 'Attorney',
          name: 'Dr. Monika Anand',
          jobTitle: 'Litigation Counsel',
          telephone: '+919999953430',
        },
        areaServed: practice.courtVenues,
      },
      {
        '@type': 'FAQPage',
        mainEntity: practice.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PracticeAreaDetailClient
        practice={practice}
        otherPractices={otherPractices}
      />
    </>
  );
}
