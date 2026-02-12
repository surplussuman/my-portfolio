import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// API Configuration
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create API instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth Context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and get user data
      api.get('/auth/profile')
        .then(response => setUser(response.data.user))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    const { token, user: userData } = response.data;
    localStorage.setItem('token', token);
    setUser(userData);
    return userData;
  };

  const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    const { token, user: newUser } = response.data;
    localStorage.setItem('token', token);
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Blog API hooks
export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async (params = {}) => {
    try {
      setLoading(true);
      const response = await api.get('/blog/posts', { params });
      setBlogs(response.data.posts || response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createBlog = async (blogData) => {
    const response = await api.post('/blog/posts', blogData);
    setBlogs(prev => [response.data.post, ...prev]);
    return response.data.post;
  };

  const updateBlog = async (id, blogData) => {
    const response = await api.put(`/blog/posts/${id}`, blogData);
    setBlogs(prev => prev.map(blog =>
      blog._id === id ? response.data.post : blog
    ));
    return response.data.post;
  };

  const deleteBlog = async (id) => {
    await api.delete(`/blog/posts/${id}`);
    setBlogs(prev => prev.filter(blog => blog._id !== id));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    blogs,
    loading,
    error,
    fetchBlogs,
    createBlog,
    updateBlog,
    deleteBlog
  };
};

// Newsletter hook
export const useNewsletter = () => {
  const subscribe = async (email) => {
    const response = await api.post('/newsletter/subscribe', { email });
    return response.data;
  };

  const unsubscribe = async (email) => {
    const response = await api.post('/newsletter/unsubscribe', { email });
    return response.data;
  };

  return { subscribe, unsubscribe };
};

// File upload hook
export const useFileUpload = () => {
  const uploadFile = async (file, type = 'blog') => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const response = await api.post('/blog/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  return { uploadFile };
};

export default api;