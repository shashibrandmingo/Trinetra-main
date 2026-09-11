import { API_BASE_URL, API_ENDPOINTS, buildApiUrl } from '@/config/api.config';

/**
 * Common request wrapper for API calls
 */
async function request(endpoint, options = {}, queryParams = {}) {
  const url = buildApiUrl(endpoint, queryParams);
  const headers = {
    ...options.headers,
  };

  // If body is not FormData, add default Content-Type
  if (options.body && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(options.body);
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || `HTTP error! Status: ${response.status}`);
  }

  return data;
}

// ================= BLOG SERVICE API =================
export const blogService = {
  getAll: (params = {}) => request(API_ENDPOINTS.BLOGS, {}, params),
  getBySlugOrId: (idOrSlug) => request(API_ENDPOINTS.BLOG_BY_SLUG_OR_ID(idOrSlug)),
  create: (formData) =>
    request(API_ENDPOINTS.BLOGS, {
      method: 'POST',
      body: formData, // FormData instance with banner image file
    }),
  update: (id, formData) =>
    request(API_ENDPOINTS.BLOG_BY_SLUG_OR_ID(id), {
      method: 'PUT',
      body: formData,
    }),
  delete: (id) =>
    request(API_ENDPOINTS.BLOG_BY_SLUG_OR_ID(id), {
      method: 'DELETE',
    }),
};

// ================= GALLERY SERVICE API =================
export const galleryService = {
  getAll: (params = {}) => request(API_ENDPOINTS.GALLERY, {}, params),
  getById: (id) => request(API_ENDPOINTS.GALLERY_BY_ID(id)),
  upload: (formData) =>
    request(API_ENDPOINTS.GALLERY, {
      method: 'POST',
      body: formData, // FormData instance with image file
    }),
  delete: (id) =>
    request(API_ENDPOINTS.GALLERY_BY_ID(id), {
      method: 'DELETE',
    }),
};

// ================= INQUIRY SERVICE API (Contact Submissions) =================
export const inquiryService = {
  create: (data) =>
    request(API_ENDPOINTS.INQUIRIES, {
      method: 'POST',
      body: data,
    }),
  getAll: (params = {}) => request(API_ENDPOINTS.INQUIRIES, {}, params),
  updateStatus: (id, status, notes) =>
    request(API_ENDPOINTS.INQUIRY_BY_ID(id), {
      method: 'PATCH',
      body: { status, notes },
    }),
  delete: (id) =>
    request(API_ENDPOINTS.INQUIRY_BY_ID(id), {
      method: 'DELETE',
    }),
};

// ================= ADMIN AUTH SERVICE =================
export const authService = {
  login: (credentials) =>
    request(API_ENDPOINTS.AUTH_LOGIN, {
      method: 'POST',
      body: credentials,
    }),
  verify: (token) =>
    request(API_ENDPOINTS.AUTH_VERIFY, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

// ================= HEALTH SERVICE API =================
export const healthService = {
  check: () => request(API_ENDPOINTS.HEALTH),
};

export { API_BASE_URL, API_ENDPOINTS };
