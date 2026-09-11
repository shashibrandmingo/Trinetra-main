/**
 * Centralized API Configuration for Trinetra Law Chambers
 * 
 * Strictly takes API URL from environment variable (.env.local / .env).
 * No hardcoded fallback host.
 */

const getBaseApiUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL || '';
  const trimmed = envUrl.trim().replace(/\/+$/, '');

  if (!trimmed) {
    if (typeof window !== 'undefined') {
      console.warn('[Trinetra API]: NEXT_PUBLIC_API_URL is not defined in environment variables.');
    }
    return '';
  }

  // Ensure /api/v1 suffix if not already present
  return trimmed.endsWith('/api/v1') ? trimmed : `${trimmed}/api/v1`;
};

export const API_BASE_URL = getBaseApiUrl();

/**
 * Central Endpoints Dictionary
 */
export const API_ENDPOINTS = {
  // Healthcheck
  HEALTH: '/health',

  // Blogs & Legal Insights
  BLOGS: '/blogs',
  BLOG_BY_SLUG_OR_ID: (idOrSlug) => `/blogs/${encodeURIComponent(idOrSlug)}`,

  // Client Briefings / Contact Inquiries
  INQUIRIES: '/inquiries',
  INQUIRY_BY_ID: (id) => `/inquiries/${encodeURIComponent(id)}`,

  // Chambers Administration & Auth
  AUTH_LOGIN: '/auth/login',
  AUTH_VERIFY: '/auth/verify',

  // Chambers Gallery
  GALLERY: '/gallery',
  GALLERY_BY_ID: (id) => `/gallery/${encodeURIComponent(id)}`,
};

/**
 * Utility to construct full URL safely without double slashes
 */
export const buildApiUrl = (endpoint, queryParams = {}) => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE_URL}${cleanEndpoint}`;

  const searchParams = new URLSearchParams();
  Object.entries(queryParams).forEach(([key, val]) => {
    if (val !== undefined && val !== null && val !== '') {
      searchParams.append(key, val);
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `${url}?${queryString}` : url;
};
