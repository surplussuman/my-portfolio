import React, { useState, useEffect } from 'react';
import { useBlogs, useAuth } from '../hooks/useApi';

const BlogSection = () => {
  const { blogs, loading, error } = useBlogs();

  if (loading) return <div className="text-center py-8">Loading blogs...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blogs</h2>
          <p className="text-xl text-gray-600">Insights, tutorials, and thoughts on technology</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {blog.coverImage?.url && (
        <img
          src={blog.coverImage.url}
          alt={blog.coverImage.alt || blog.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{blog.category}</span>
          <span className="text-sm text-gray-500">{formatDate(blog.createdAt)}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt || stripHtml(blog.content || '').substring(0, 150) + '...'}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {blog.tags?.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <span>{blog.readingTime || '5 min'} read</span>
          </div>
        </div>

        <a
          href={`/blog/${blog.slug || blog._id}`}
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          Read more →
        </a>
      </div>
    </article>
  );
};

// Helper function to strip HTML tags
const stripHtml = (html) => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

export default BlogSection;