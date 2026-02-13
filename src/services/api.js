import axios from 'axios';

const API_URL = 'http://18.205.239.99:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const tokens = JSON.parse(localStorage.getItem('tokens') || 'null');
  if (tokens?.access) {
    config.headers.Authorization = `Bearer ${tokens.access}`;
  }
  return config;
});

// Auto-refresh token on 401
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      const tokens = JSON.parse(localStorage.getItem('tokens') || 'null');
      if (tokens?.refresh) {
        try {
          const { data } = await axios.post(`${API_URL}/auth/token/refresh/`, {
            refresh: tokens.refresh,
          });
          localStorage.setItem('tokens', JSON.stringify({
            access: data.access,
            refresh: tokens.refresh,
          }));
          original.headers.Authorization = `Bearer ${data.access}`;
          return api(original);
        } catch {
          localStorage.removeItem('tokens');
          localStorage.removeItem('user');
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

// ── Auth ──
export const authAPI = {
  register: (data) => api.post('/auth/register/', data),
  login: (data) => api.post('/auth/login/', data),
  googleAuth: (credential) => api.post('/auth/google/', { credential }),
  me: () => api.get('/auth/me/'),
  updateMe: (data) => api.patch('/auth/me/', data),
};

// ── Blog (Public) ──
export const blogAPI = {
  list: (page = 1) => api.get(`/blog/posts/?page=${page}`),
  detail: (slug) => api.get(`/blog/posts/${slug}/`),
};

// ── Admin Blog ──
export const adminBlogAPI = {
  list: () => api.get('/blog/admin/posts/'),
  create: (data) => {
    const config = data instanceof FormData ? {
      headers: { 'Content-Type': 'multipart/form-data' }
    } : {};
    return api.post('/blog/admin/posts/create/', data, config);
  },
  get: (id) => api.get(`/blog/admin/posts/${id}/`),
  update: (id, data) => {
    const config = data instanceof FormData ? {
      headers: { 'Content-Type': 'multipart/form-data' }
    } : {};
    return api.patch(`/blog/admin/posts/${id}/`, data, config);
  },
  delete: (id) => api.delete(`/blog/admin/posts/${id}/`),
  updateBlocks: (id, blocks) => api.put(`/blog/admin/posts/${id}/blocks/`, { blocks }),
  deleteBlock: (postId, blockId) => api.delete(`/blog/admin/posts/${postId}/blocks/${blockId}/`),
  uploadMedia: (formData) =>
    api.post('/blog/admin/upload/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

// ── Admin Insights ──
export const adminAPI = {
  insights: () => api.get('/auth/admin/insights/'),
  users: (page = 1) => api.get(`/auth/admin/users/?page=${page}`),
};

// ── Page Tracking ──
export const trackPage = (page) => api.post('/auth/track/', { page });

export default api;
