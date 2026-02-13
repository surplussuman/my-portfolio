import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, Eye, BarChart3, TrendingUp, FileText, Plus, Edit, Trash2,
  LogOut, ArrowLeft, Loader2, Mail, Calendar, Activity, CheckCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { adminAPI, adminBlogAPI } from '../services/api';

const AdminDashboard = () => {
  const { user, logout, isSuperAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [insights, setInsights] = useState(null);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSuperAdmin) {
      navigate('/');
      return;
    }
    loadData();
  }, [isSuperAdmin, navigate]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [insightsRes, postsRes, usersRes] = await Promise.all([
        adminAPI.insights(),
        adminBlogAPI.list(),
        adminAPI.users(),
      ]);
      setInsights(insightsRes.data);
      setPosts(postsRes.data.results || postsRes.data);
      setUsers(usersRes.data.results || usersRes.data);
    } catch {
      // Will fail if not super admin
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    try {
      await adminBlogAPI.delete(id);
      setPosts(posts.filter((p) => p.id !== id));
    } catch {
      alert('Failed to delete post.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  };

  const statCards = insights ? [
    { label: 'Total Users', value: insights.total_users, icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Active (7d)', value: insights.active_last_7d, icon: Activity, color: 'from-green-500 to-emerald-500' },
    { label: 'Subscribed', value: insights.subscribed_users, icon: CheckCircle, color: 'from-purple-500 to-pink-500' },
    { label: 'Page Views (30d)', value: insights.total_views_30d, icon: Eye, color: 'from-orange-500 to-red-500' },
  ] : [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-600" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SJ
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-700 font-semibold">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden md:block">Welcome, {user?.first_name || user?.email}</span>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-medium text-sm">
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1 shadow-sm border border-purple-100 w-fit">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'posts', label: 'Blog Posts', icon: FileText },
            { id: 'users', label: 'Users', icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                    <stat.icon className="text-purple-600 mb-3" size={28} />
                    <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Top Pages & Recent Users */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-purple-600" />
                  Top Pages (30 days)
                </h3>
                <div className="space-y-3">
                  {insights?.top_pages?.map((page, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-700 text-sm font-medium truncate max-w-[200px]">{page.page}</span>
                      <span className="text-purple-600 font-bold text-sm">{page.count} views</span>
                    </div>
                  ))}
                  {(!insights?.top_pages || insights.top_pages.length === 0) && (
                    <p className="text-gray-400 text-sm">No page view data yet.</p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users size={20} className="text-purple-600" />
                  Recent Users
                </h3>
                <div className="space-y-3">
                  {users.slice(0, 8).map((u, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div>
                        <span className="text-gray-700 text-sm font-medium">{u.first_name} {u.last_name}</span>
                        <span className="text-gray-400 text-xs ml-2">{u.email}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{formatDate(u.date_joined)}</span>
                    </div>
                  ))}
                  {users.length === 0 && (
                    <p className="text-gray-400 text-sm">No users yet.</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Tab */}
        {activeTab === 'posts' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Blog Posts</h2>
              <Link
                to="/admin/blog/new"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <Plus size={18} />
                New Post
              </Link>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-purple-100">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No posts yet</h3>
                <p className="text-gray-500 mb-6">Create your first blog post to get started.</p>
                <Link
                  to="/admin/blog/new"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <Plus size={18} />
                  Create Post
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-purple-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-purple-50 border-b border-purple-100">
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Title</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Status</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Views</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Date</th>
                        <th className="text-right px-6 py-3 text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post.id} className="border-b border-gray-50 hover:bg-purple-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <span className="font-medium text-gray-800">{post.title}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              post.status === 'published'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {post.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{post.views_count}</td>
                          <td className="px-6 py-4 text-gray-500 text-sm">{formatDate(post.created_at)}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Link
                                to={`/admin/blog/edit/${post.id}`}
                                className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors"
                              >
                                <Edit size={16} />
                              </Link>
                              <button
                                onClick={() => handleDeletePost(post.id)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All Users</h2>

            {users.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-purple-100">
                <Users size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-700">No users yet</h3>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-purple-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-purple-50 border-b border-purple-100">
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">User</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Email</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Subscribed</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Last Active</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u.id} className="border-b border-gray-50 hover:bg-purple-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <span className="font-medium text-gray-800">
                              {u.first_name} {u.last_name || u.username}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="flex items-center gap-2 text-gray-600 text-sm">
                              <Mail size={14} />
                              {u.email}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              u.subscribed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                            }`}>
                              {u.subscribed ? 'Yes' : 'No'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-500 text-sm">
                            {u.last_active ? formatDate(u.last_active) : '—'}
                          </td>
                          <td className="px-6 py-4 text-gray-500 text-sm">{formatDate(u.date_joined)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
