import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Eye, Tag, Share2, Loader2 } from 'lucide-react';
import { blogAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import PremiumModal from '../components/PremiumModal';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isAuthenticated) {
      setIsPremiumModalOpen(true);
    }
    blogAPI.detail(slug)
      .then(({ data }) => setPost(data))
      .catch(() => setError('Article not found.'))
      .finally(() => setLoading(false));
  }, [slug, isAuthenticated]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const renderBlock = (block) => {
    switch (block.block_type) {
      case 'text':
        return (
          <div
            key={block.id}
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.content.replace(/\n/g, '<br/>') }}
          />
        );
      case 'heading':
        return (
          <h2 key={block.id} className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4">
            {block.content}
          </h2>
        );
      case 'image':
        return (
          <figure key={block.id} className="my-8">
            <img
              src={block.media_url || block.content}
              alt={block.content || 'Blog image'}
              className="w-full rounded-2xl shadow-lg"
            />
            {block.content && block.media_url && (
              <figcaption className="text-center text-sm text-gray-500 mt-3">{block.content}</figcaption>
            )}
          </figure>
        );
      case 'video':
        return (
          <div key={block.id} className="my-8">
            {block.media_url ? (
              <video controls className="w-full rounded-2xl shadow-lg">
                <source src={block.media_url} />
              </video>
            ) : block.content?.includes('youtube') || block.content?.includes('youtu.be') ? (
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={block.content.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                  className="w-full h-full"
                  allowFullScreen
                  title="Video"
                />
              </div>
            ) : (
              <video controls className="w-full rounded-2xl shadow-lg">
                <source src={block.content} />
              </video>
            )}
          </div>
        );
      case 'audio':
        return (
          <div key={block.id} className="my-6 p-4 bg-purple-50 rounded-2xl">
            <audio controls className="w-full">
              <source src={block.media_url || block.content} />
            </audio>
            {block.content && block.media_url && (
              <p className="text-sm text-gray-600 mt-2">{block.content}</p>
            )}
          </div>
        );
      case 'url':
        return (
          <a
            key={block.id}
            href={block.content}
            target="_blank"
            rel="noopener noreferrer"
            className="block my-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all"
          >
            <span className="text-purple-600 font-medium break-all">{block.content}</span>
          </a>
        );
      case 'code':
        return (
          <pre key={block.id} className="my-6 p-6 bg-gray-900 text-green-400 rounded-2xl overflow-x-auto text-sm font-mono">
            <code>{block.content}</code>
          </pre>
        );
      case 'quote':
        return (
          <blockquote key={block.id} className="my-6 pl-6 border-l-4 border-purple-500 italic text-gray-600 text-lg">
            {block.content}
          </blockquote>
        );
      default:
        return <p key={block.id} className="text-gray-700">{block.content}</p>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-600" size={40} />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Article Not Found</h2>
          <Link to="/blog" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 ${!isAuthenticated ? 'blur-sm pointer-events-none' : ''}`}>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
            <ArrowLeft size={20} />
            <span>All Articles</span>
          </Link>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SJ
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.split(',').map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <Tag size={12} />
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-gray-500 mb-8 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(post.created_at)}
            </span>
            <span className="flex items-center gap-2">
              <Eye size={16} />
              {post.views_count} views
            </span>
            <span className="font-medium text-purple-600">By {post.author_name}</span>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="ml-auto flex items-center gap-1 text-gray-400 hover:text-purple-600 transition-colors"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>

          {/* Cover Image */}
          {post.cover_image_url && (
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="w-full rounded-2xl shadow-lg mb-10"
            />
          )}

          {/* Content Blocks */}
          <div className="space-y-6">
            {post.blocks && post.blocks.map(renderBlock)}
          </div>

          {/* Bottom Nav */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <ArrowLeft size={16} />
              Back to All Articles
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
    <PremiumModal
      isOpen={isPremiumModalOpen}
      onClose={() => {
        setIsPremiumModalOpen(false);
        navigate('/');
      }}
    />
    </>
  );
};

export default BlogDetail;
