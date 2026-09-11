import { notFound } from 'next/navigation';
import { initialBlogs } from '@/data/blogsData';
import { blogService } from '@/services/api';
import BlogDetailClient from './BlogDetailClient';

// Helper function to fetch blog by slug (checking backend API first, fallback to initialBlogs)
async function getBlogData(slug) {
  try {
    const res = await blogService.getBySlugOrId(slug);
    if (res?.data) {
      return res.data;
    }
  } catch (err) {
    // Graceful fallback to static seed blogs
  }

  const localBlog = initialBlogs.find((b) => b.slug === slug);
  return localBlog || null;
}

// Generate dynamic SEO metadata for each article
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const blog = await getBlogData(slug);

  if (!blog) {
    return {
      title: 'Article Not Found | Trinetra Law Chambers',
      description: 'The requested legal analysis could not be located in chambers archives.',
    };
  }

  const siteUrl = 'https://trinetralawchambers.com';
  const articleUrl = `${siteUrl}/blogs/${blog.slug}`;
  const bannerImg = blog.banner?.url?.startsWith('http')
    ? blog.banner.url
    : `${siteUrl}${blog.banner?.url || '/court-building.png'}`;

  return {
    title: `${blog.title} | Trinetra Law Chambers`,
    description: blog.excerpt || blog.title,
    keywords: [
      blog.category,
      ...(blog.tags || []),
      'Supreme Court of India',
      'Trinetra Law Chambers',
      'Legal Precedents',
    ],
    authors: [{ name: blog.author || 'Trinetra Legal Research Cell' }],
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: articleUrl,
      siteName: 'Trinetra Law Chambers',
      type: 'article',
      publishedTime: blog.publishedAt || blog.createdAt,
      authors: [blog.author || 'Trinetra Legal Research Cell'],
      tags: blog.tags || [blog.category],
      images: [
        {
          url: bannerImg,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [bannerImg],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const blog = await getBlogData(slug);

  if (!blog) {
    notFound();
  }

  // Related articles from the same or other categories
  const relatedArticles = initialBlogs
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  // Schema.org Article Structured Data for Google SEO ranking
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://trinetralawchambers.com/blogs/${blog.slug}`,
    },
    headline: blog.title,
    description: blog.excerpt,
    image: [
      blog.banner?.url?.startsWith('http')
        ? blog.banner.url
        : `https://trinetralawchambers.com${blog.banner?.url || '/court-building.png'}`,
    ],
    datePublished: blog.publishedAt || blog.createdAt || new Date().toISOString(),
    dateModified: blog.updatedAt || blog.publishedAt || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: blog.author || 'Advocate Shashi Shekhar',
    },
    publisher: {
      '@type': 'LegalService',
      name: 'Trinetra Law Chambers',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trinetralawchambers.com/logo.png',
      },
    },
    articleSection: blog.category,
    keywords: (blog.tags || []).join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailClient blog={blog} relatedArticles={relatedArticles} />
    </>
  );
}
