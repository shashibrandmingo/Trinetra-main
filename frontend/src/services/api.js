const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

/**
 * Common request wrapper for API calls
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
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

// Blog Service API
export const blogService = {
  getAll: (params = {}) => {
    const searchParams = new URLSearchParams(params).toString();
    return request(`/blogs${searchParams ? `?${searchParams}` : ''}`);
  },
  getBySlugOrId: (idOrSlug) => request(`/blogs/${idOrSlug}`),
  create: (formData) =>
    request('/blogs', {
      method: 'POST',
      body: formData, // FormData instance with banner image file
    }),
  update: (id, formData) =>
    request(`/blogs/${id}`, {
      method: 'PUT',
      body: formData,
    }),
  delete: (id) =>
    request(`/blogs/${id}`, {
      method: 'DELETE',
    }),
};

// Gallery Service API
export const galleryService = {
  getAll: (params = {}) => {
    const searchParams = new URLSearchParams(params).toString();
    return request(`/gallery${searchParams ? `?${searchParams}` : ''}`);
  },
  getById: (id) => request(`/gallery/${id}`),
  upload: (formData) =>
    request('/gallery', {
      method: 'POST',
      body: formData, // FormData instance with image file
    }),
  delete: (id) =>
    request(`/gallery/${id}`, {
      method: 'DELETE',
    }),
};

// Health Service API
export const healthService = {
  check: () => request('/health'),
};
