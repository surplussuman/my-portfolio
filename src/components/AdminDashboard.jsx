import React, { useState, useEffect } from 'react';
import { useAuth, useBlogs, useFileUpload } from '../hooks/useApi';

const AdminDashboard = ({ onClose }) => {
  const { user } = useAuth();
  const { blogs, loading, createBlog, updateBlog, deleteBlog, fetchBlogs } = useBlogs();
  const { uploadFile } = useFileUpload();

  const [activeTab, setActiveTab] = useState('create');
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'Technology',
    tags: '',
    coverImage: null,
    coverImagePreview: null,
    status: 'published'
  });

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCoverImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        coverImage: file,
        coverImagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      let coverImageUrl = null;

      // Upload cover image if provided
      if (formData.coverImage) {
        setUploading(true);
        const uploadResult = await uploadFile(formData.coverImage, 'blog-cover');
        coverImageUrl = uploadResult.url;
        setUploading(false);
      }

      const blogData = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt,
        category: formData.category,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        coverImage: coverImageUrl,
        status: formData.status
      };

      if (editingBlog) {
        await updateBlog(editingBlog._id, blogData);
      } else {
        await createBlog(blogData);
      }

      // Reset form
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        category: 'Technology',
        tags: '',
        coverImage: null,
        coverImagePreview: null,
        status: 'published'
      });
      setEditingBlog(null);
      fetchBlogs();
      alert(editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!');
    } catch (error) {
      alert('Error saving blog: ' + error.message);
    } finally {
      setSaving(false);
      setUploading(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || '',
      content: blog.content || '',
      excerpt: blog.excerpt || '',
      category: blog.category || 'Technology',
      tags: blog.tags ? blog.tags.join(', ') : '',
      coverImage: null,
      coverImagePreview: blog.coverImage?.url || null,
      status: blog.status || 'published'
    });
    setActiveTab('create');
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlog(blogId);
        fetchBlogs();
        alert('Blog deleted successfully!');
      } catch (error) {
        alert('Error deleting blog: ' + error.message);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
            <p className="text-gray-600">Welcome back, {user?.profile?.name || user?.name || 'Admin'}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'create'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {editingBlog ? 'Edit Blog' : 'Create Blog'}
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'manage'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Manage Blogs ({blogs.length})
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {activeTab === 'create' && (
            <BlogForm
              formData={formData}
              onInputChange={handleInputChange}
              onCoverImageChange={handleCoverImageChange}
              onSubmit={handleSubmit}
              uploading={uploading}
              saving={saving}
              editing={!!editingBlog}
              onCancel={() => {
                setEditingBlog(null);
                setFormData({
                  title: '',
                  content: '',
                  excerpt: '',
                  category: 'Technology',
                  tags: '',
                  coverImage: null,
                  coverImagePreview: null,
                  status: 'published'
                });
              }}
            />
          )}

          {activeTab === 'manage' && (
            <BlogList
              blogs={blogs}
              loading={loading}
              onEdit={handleEdit}
              onDelete={handleDelete}
              formatDate={formatDate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Blog Creation/Edit Form Component
const BlogForm = ({
  formData,
  onInputChange,
  onCoverImageChange,
  onSubmit,
  uploading,
  saving,
  editing,
  onCancel
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={onInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Technology">Technology</option>
              <option value="Projects">Projects</option>
              <option value="Tutorials">Tutorials</option>
              <option value="Career">Career</option>
              <option value="Personal">Personal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={onInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="javascript, react, tutorial (comma-separated)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={onInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={onCoverImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {uploading && (
              <p className="text-sm text-blue-600 mt-1">Uploading image...</p>
            )}
            {formData.coverImagePreview && (
              <div className="mt-2">
                <img
                  src={formData.coverImagePreview}
                  alt="Cover preview"
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={onInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief summary of the blog post"
            />
          </div>
        </div>
      </div>

      {/* Content Editor */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content *
        </label>
        <ContentEditor
          value={formData.content}
          onChange={(content) => onInputChange({ target: { name: 'content', value: content } })}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-4 border-t">
        {editing && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={saving || uploading}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'Saving...' : editing ? 'Update Blog' : 'Create Blog'}
        </button>
      </div>
    </form>
  );
};

// Rich Content Editor Component
const ContentEditor = ({ value, onChange }) => {
  const [editorContent, setEditorContent] = useState(value || '');
  const { uploadFile } = useFileUpload();

  useEffect(() => {
    setEditorContent(value || '');
  }, [value]);

  const handleContentChange = (newContent) => {
    setEditorContent(newContent);
    onChange(newContent);
  };

  const insertImage = () => {
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      const imageTag = `<img src="${imageUrl}" alt="Blog image" class="max-w-full h-auto rounded-lg my-4" />`;
      handleContentChange(editorContent + imageTag);
    }
  };

  const uploadAndInsertImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const uploadResult = await uploadFile(file, 'blog-content');
        const imageTag = `<img src="${uploadResult.url}" alt="${file.name}" class="max-w-full h-auto rounded-lg my-4" />`;
        handleContentChange(editorContent + imageTag);
      } catch (error) {
        alert('Failed to upload image: ' + error.message);
      }
    }
    // Reset the input
    event.target.value = '';
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    const text = prompt('Enter link text:');
    if (url && text) {
      const linkTag = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${text}</a>`;
      handleContentChange(editorContent + linkTag);
    }
  };

  const insertDocument = () => {
    const docUrl = prompt('Enter document URL:');
    const docName = prompt('Enter document name:');
    if (docUrl && docName) {
      const docTag = `<div class="document-link my-4 p-4 border border-gray-200 rounded-lg">
        <a href="${docUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
          </svg>
          <span>${docName}</span>
        </a>
      </div>`;
      handleContentChange(editorContent + docTag);
    }
  };

  const uploadAndInsertDocument = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const uploadResult = await uploadFile(file, 'blog-content');
        const docTag = `<div class="document-link my-4 p-4 border border-gray-200 rounded-lg">
          <a href="${uploadResult.url}" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
            </svg>
            <span>${file.name}</span>
          </a>
        </div>`;
        handleContentChange(editorContent + docTag);
      } catch (error) {
        alert('Failed to upload document: ' + error.message);
      }
    }
    // Reset the input
    event.target.value = '';
  };

  return (
    <div className="border border-gray-300 rounded-md">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 border-b border-gray-200 bg-gray-50">
        <button
          type="button"
          onClick={() => document.execCommand('bold')}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => document.execCommand('italic')}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => document.execCommand('underline')}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Underline"
        >
          <u>U</u>
        </button>
        <button
          type="button"
          onClick={insertImage}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Insert Image"
        >
          🖼️ Image
        </button>
        <label className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 cursor-pointer" title="Upload Image">
          📤 Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={uploadAndInsertImage}
            className="hidden"
          />
        </label>
        <button
          type="button"
          onClick={insertLink}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Insert Link"
        >
          🔗 Link
        </button>
        <button
          type="button"
          onClick={insertDocument}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
          title="Insert Document"
        >
          📄 Document
        </button>
        <label className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 cursor-pointer" title="Upload Document">
          📎 Upload Document
          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt,.rtf"
            onChange={uploadAndInsertDocument}
            className="hidden"
          />
        </label>
      </div>

      {/* Editor */}
      <div
        contentEditable
        className="min-h-[300px] p-4 focus:outline-none"
        dangerouslySetInnerHTML={{ __html: editorContent }}
        onInput={(e) => handleContentChange(e.target.innerHTML)}
        onBlur={(e) => handleContentChange(e.target.innerHTML)}
      />
    </div>
  );
};

// Blog List Management Component
const BlogList = ({ blogs, loading, onEdit, onDelete, formatDate }) => {
  if (loading) {
    return <div className="text-center py-8">Loading blogs...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">All Blog Posts</h3>
        <span className="text-sm text-gray-500">{blogs.length} posts</span>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No blog posts yet. Create your first post!
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{blog.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <span>{blog.category}</span>
                    <span>{formatDate(blog.createdAt)}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      blog.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {blog.status}
                    </span>
                  </div>
                  {blog.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-2">{blog.excerpt}</p>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(blog)}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(blog._id)}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;