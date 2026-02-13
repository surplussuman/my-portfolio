import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Save, Eye, Image, Video, Music, Link as LinkIcon, Code, Quote,
  Type, Heading, Plus, Trash2, GripVertical, Loader2, Upload, ChevronUp, ChevronDown, X, Bot
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { adminBlogAPI } from '../services/api';

// Function to parse and render GPT content
const renderGPTContent = (content) => {
  if (!content) return null;

  // Split content into lines
  const lines = content.split('\n');
  const elements = [];
  let currentList = null;
  let currentListType = null;
  let inCodeBlock = false;
  let codeBlockContent = '';
  let codeBlockLanguage = '';

  const flushList = () => {
    if (currentList) {
      elements.push(currentList);
      currentList = null;
      currentListType = null;
    }
  };

  const processText = (text) => {
    // Handle inline formatting
    let processed = text;

    // Images ![alt](url)
    processed = processed.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full rounded-lg shadow-md my-4" />');

    // Bold text **text**
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic text *text*
    processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Inline code `code`
    processed = processed.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>');

    // Links [text](url)
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">$1</a>');

    return processed;
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Handle code blocks
    if (trimmedLine.startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        elements.push(
          <pre key={`code-${index}`} className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm my-4">
            <code className="font-mono">{codeBlockContent.trim()}</code>
          </pre>
        );
        inCodeBlock = false;
        codeBlockContent = '';
        codeBlockLanguage = '';
      } else {
        // Start of code block
        inCodeBlock = true;
        codeBlockLanguage = trimmedLine.slice(3);
        flushList();
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent += line + '\n';
      return;
    }

    // Handle headings
    const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const processedText = processText(text);

      const headingClasses = {
        1: 'text-4xl font-bold text-gray-900 mb-4 mt-8',
        2: 'text-3xl font-bold text-gray-900 mb-4 mt-8',
        3: 'text-2xl font-bold text-gray-900 mb-3 mt-6',
        4: 'text-xl font-bold text-gray-900 mb-3 mt-6',
        5: 'text-lg font-bold text-gray-900 mb-2 mt-4',
        6: 'text-base font-bold text-gray-900 mb-2 mt-4'
      };

      elements.push(
        React.createElement(`h${level}`, {
          key: index,
          className: headingClasses[level],
          dangerouslySetInnerHTML: { __html: processedText }
        })
      );
      return;
    }

    // Handle unordered lists
    const unorderedListMatch = trimmedLine.match(/^[-*+]\s+(.+)$/);
    if (unorderedListMatch) {
      if (currentListType !== 'ul') {
        flushList();
        currentList = <ul key={`ul-${index}`} className="list-disc list-inside mb-4 space-y-1 text-gray-700 ml-4">{[]}</ul>;
        currentListType = 'ul';
      }
      const processedText = processText(unorderedListMatch[1]);
      currentList.props.children.push(
        <li key={`li-${index}`} dangerouslySetInnerHTML={{ __html: processedText }} />
      );
      return;
    }

    // Handle ordered lists
    const orderedListMatch = trimmedLine.match(/^\d+\.\s+(.+)$/);
    if (orderedListMatch) {
      if (currentListType !== 'ol') {
        flushList();
        currentList = <ol key={`ol-${index}`} className="list-decimal list-inside mb-4 space-y-1 text-gray-700 ml-4">{[]}</ol>;
        currentListType = 'ol';
      }
      const processedText = processText(orderedListMatch[1]);
      currentList.props.children.push(
        <li key={`li-${index}`} dangerouslySetInnerHTML={{ __html: processedText }} />
      );
      return;
    }

    // Handle tables (improved support)
    if (trimmedLine.includes('|')) {
      const tableRows = [];
      let tableStartIndex = index;

      // Find all consecutive table rows
      for (let i = index; i < lines.length; i++) {
        const currentLine = lines[i].trim();
        if (currentLine.includes('|') && currentLine.split('|').length > 1) {
          tableRows.push(currentLine);
        } else {
          break;
        }
      }

      if (tableRows.length >= 2) {
        // Check if second row is a separator (contains |---| or |:---:| etc.)
        const separatorRow = tableRows[1];
        const isSeparatorRow = /^[\s]*\|[\s]*:?-+:?[\s]*\|[\s]*$|^[\s]*:?-+:?[\s]*\|[\s]*:?-+:?[\s]*\|[\s]*$/.test(separatorRow) ||
                              separatorRow.includes('---') || separatorRow.includes(':---');

        if (isSeparatorRow && tableRows.length >= 3) {
          // Valid table with headers and separator
          const headers = tableRows[0].split('|').map(h => h.trim()).filter(h => h);
          const alignments = tableRows[1].split('|').map(s => {
            const trimmed = s.trim();
            if (trimmed.startsWith(':') && trimmed.endsWith(':')) return 'center';
            if (trimmed.endsWith(':')) return 'right';
            return 'left';
          }).filter((_, i) => i > 0 && i < headers.length + 1); // Skip empty first/last elements

          const dataRows = tableRows.slice(2);

          elements.push(
            <div key={`table-${index}`} className="overflow-x-auto my-6">
              <table className="border-collapse border border-gray-300 w-full min-w-full">
                <thead>
                  <tr>
                    {headers.map((header, i) => (
                      <th key={i} className="border border-gray-300 px-4 py-3 bg-gray-100 text-left font-semibold text-gray-900">
                        <div dangerouslySetInnerHTML={{ __html: processText(header) }} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataRows.map((row, rowIndex) => {
                    const cells = row.split('|').map(c => c.trim()).filter((c, i) => i > 0 && i < headers.length + 1);
                    return (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {cells.map((cell, cellIndex) => {
                          const alignment = alignments[cellIndex] || 'left';
                          const alignClass = alignment === 'center' ? 'text-center' :
                                           alignment === 'right' ? 'text-right' : 'text-left';
                          return (
                            <td key={cellIndex} className={`border border-gray-300 px-4 py-3 ${alignClass}`} dangerouslySetInnerHTML={{ __html: processText(cell) }} />
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );

          // Skip the processed table rows
          lines.splice(index, tableRows.length);
          return;
        }
      }
    }

    // Handle empty lines (paragraph breaks)
    if (!trimmedLine) {
      flushList();
      return;
    }

    // Handle regular paragraphs
    flushList();
    const processedText = processText(trimmedLine);
    elements.push(
      <p key={index} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: processedText }} />
    );
  });

  flushList();

  return elements.length > 0 ? elements : <p className="text-gray-500 italic">Paste your GPT content here...</p>;
};

const BLOCK_TYPES = [
  { type: 'text', label: 'Paragraph', icon: Type },
  { type: 'heading', label: 'Heading', icon: Heading },
  { type: 'gpt', label: 'GPT Content', icon: Bot },
  { type: 'image', label: 'Image', icon: Image },
  { type: 'video', label: 'Video', icon: Video },
  { type: 'audio', label: 'Audio', icon: Music },
  { type: 'url', label: 'URL / Embed', icon: LinkIcon },
  { type: 'code', label: 'Code Block', icon: Code },
  { type: 'quote', label: 'Blockquote', icon: Quote },
];

const BlogEditor = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { isSuperAdmin } = useAuth();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('draft');
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState('');
  const [blocks, setBlocks] = useState([{ id: Date.now(), type: 'text', content: '', file: null, preview: '' }]);
  const [saving, setSaving] = useState(false);
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [loading, setLoading] = useState(isEditing);
  const [showPreview, setShowPreview] = useState(false);

  const fileInputRef = useRef(null);
  const blockFileRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSuperAdmin) {
      navigate('/');
      return;
    }
    if (isEditing) {
      loadPost();
    }
  }, [id, isSuperAdmin, navigate]);

  const loadPost = async () => {
    try {
      const { data } = await adminBlogAPI.get(id);
      setTitle(data.title);
      setSlug(data.slug);
      setExcerpt(data.excerpt || '');
      setTags(data.tags || '');
      setStatus(data.status);
      setCoverPreview(data.cover_image_url || '');
      if (data.blocks && data.blocks.length > 0) {
        setBlocks(data.blocks.map((b) => ({
          id: b.id,
          type: b.block_type,
          content: b.content || '',
          file: null,
          preview: b.media_url || '',
        })));
      }
    } catch {
      alert('Failed to load post.');
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (val) => {
    setTitle(val);
    if (!isEditing) setSlug(generateSlug(val));
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const addBlock = (type) => {
    setBlocks([...blocks, { id: Date.now(), type, content: '', file: null, preview: '' }]);
    setShowBlockMenu(false);
  };

  const updateBlock = (idx, field, value) => {
    const updated = [...blocks];
    updated[idx] = { ...updated[idx], [field]: value };
    setBlocks(updated);
  };

  const removeBlock = (idx) => {
    if (blocks.length <= 1) return;
    setBlocks(blocks.filter((_, i) => i !== idx));
  };

  const moveBlock = (idx, direction) => {
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= blocks.length) return;
    const updated = [...blocks];
    [updated[idx], updated[newIdx]] = [updated[newIdx], updated[idx]];
    setBlocks(updated);
  };

  const handleBlockFileChange = (idx, e) => {
    const file = e.target.files[0];
    if (file) {
      updateBlock(idx, 'file', file);
      updateBlock(idx, 'preview', URL.createObjectURL(file));
    }
  };

  const handleGPTImageUpload = async (idx, e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Upload the image
        const fd = new FormData();
        fd.append('file', file);
        const { data: uploadData } = await adminBlogAPI.uploadMedia(fd);

        // Insert the image markdown at cursor position or end of content
        const currentContent = blocks[idx].content || '';
        const imageMarkdown = `![${file.name}](${uploadData.url})\n\n`;
        const newContent = currentContent + imageMarkdown;

        updateBlock(idx, 'content', newContent);
      } catch (error) {
        console.error('Failed to upload image:', error);
        alert('Failed to upload image. Please try again.');
      }
    }
  };

  const handleSave = async () => {
    if (!title.trim() || !slug.trim()) {
      alert('Title and slug are required.');
      return;
    }
    setSaving(true);
    try {
      // 1. Create/update post
      const postData = new FormData();
      postData.append('title', title);
      postData.append('slug', slug);
      postData.append('excerpt', excerpt);
      postData.append('tags', tags);
      postData.append('status', status);
      if (coverImage) postData.append('cover_image', coverImage);

      let postId = id;
      if (isEditing) {
        await adminBlogAPI.update(id, postData);
      } else {
        const { data } = await adminBlogAPI.create(postData);
        postId = data.id;
      }

      // 2. Upload media files for blocks that have them
      const processedBlocks = [];
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        let content = block.content;

        if (block.file) {
          const fd = new FormData();
          fd.append('file', block.file);
          const { data: uploadData } = await adminBlogAPI.uploadMedia(fd);
          content = block.content || '';
          processedBlocks.push({
            block_type: block.type,
            content,
            media_file: uploadData.url,
            order: i,
          });
        } else {
          processedBlocks.push({
            block_type: block.type,
            content,
            order: i,
          });
        }
      }

      // 3. Update blocks
      await adminBlogAPI.updateBlocks(postId, processedBlocks);

      navigate('/admin');
    } catch (err) {
      alert('Failed to save post. Check all fields and try again.');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

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
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/admin" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
            <ArrowLeft size={20} />
            Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <button
              onClick={() => setShowPreview(true)}
              className="flex items-center gap-2 px-4 py-2.5 border border-purple-200 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all"
            >
              <Eye size={16} />
              Preview
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-60"
            >
              {saving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Post Title..."
          className="w-full text-4xl font-bold text-gray-800 placeholder-gray-300 border-none outline-none bg-transparent mb-2"
        />
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-gray-400">Slug:</span>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="text-sm text-purple-600 bg-transparent border-b border-dashed border-gray-300 focus:border-purple-500 outline-none flex-1"
          />
        </div>

        {/* Excerpt */}
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Write a short excerpt..."
          rows={2}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none mb-4 text-gray-700 bg-white"
        />

        {/* Tags */}
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma-separated): AI, Machine Learning, Python"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none mb-4 text-gray-700 bg-white text-sm"
        />

        {/* Cover Image */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
          {coverPreview ? (
            <div className="relative">
              <img src={coverPreview} alt="Cover" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
              <button
                onClick={() => { setCoverImage(null); setCoverPreview(''); }}
                className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl hover:border-purple-400 transition-colors flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-purple-500"
            >
              <Upload size={24} />
              <span className="text-sm font-medium">Upload cover image</span>
            </button>
          )}
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleCoverChange} className="hidden" />
        </div>

        {/* Content Blocks */}
        <div className="space-y-4">
          {blocks.map((block, idx) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group"
            >
              {/* Block header */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <GripVertical size={14} className="text-gray-300" />
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {BLOCK_TYPES.find((b) => b.type === block.type)?.label || block.type}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => moveBlock(idx, -1)} className="p-1 text-gray-400 hover:text-gray-600" disabled={idx === 0}>
                    <ChevronUp size={14} />
                  </button>
                  <button onClick={() => moveBlock(idx, 1)} className="p-1 text-gray-400 hover:text-gray-600" disabled={idx === blocks.length - 1}>
                    <ChevronDown size={14} />
                  </button>
                  <button onClick={() => removeBlock(idx)} className="p-1 text-red-400 hover:text-red-600 ml-1">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              {/* Block content */}
              <div className="p-4">
                {(block.type === 'text' || block.type === 'quote') && (
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlock(idx, 'content', e.target.value)}
                    placeholder={block.type === 'text' ? 'Write your paragraph here...' : 'Write a quote...'}
                    rows={4}
                    className="w-full border-none outline-none resize-none text-gray-700 placeholder-gray-300 leading-relaxed"
                  />
                )}

                {block.type === 'heading' && (
                  <input
                    type="text"
                    value={block.content}
                    onChange={(e) => updateBlock(idx, 'content', e.target.value)}
                    placeholder="Section heading..."
                    className="w-full text-2xl font-bold border-none outline-none text-gray-800 placeholder-gray-300"
                  />
                )}

                {block.type === 'gpt' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">GPT Content</label>
                      <button
                        onClick={() => blockFileRefs.current[`gpt-${idx}`]?.click()}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                      >
                        <Image size={14} />
                        Add Image
                      </button>
                    </div>
                    <textarea
                      value={block.content}
                      onChange={(e) => updateBlock(idx, 'content', e.target.value)}
                      placeholder="Paste your GPT content here... Supports headings (# ## ###), **bold**, *italic*, `code`, lists, tables, links, images ![alt](url), etc."
                      rows={8}
                      className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500 resize-none font-mono text-sm"
                    />
                    <input
                      ref={(el) => (blockFileRefs.current[`gpt-${idx}`] = el)}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleGPTImageUpload(idx, e)}
                      className="hidden"
                    />
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Preview:</h4>
                      <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                        <div className="prose prose-sm max-w-none">
                          {renderGPTContent(block.content)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {block.type === 'code' && (
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlock(idx, 'content', e.target.value)}
                    placeholder="// Paste your code here..."
                    rows={6}
                    className="w-full font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-xl border-none outline-none resize-none"
                  />
                )}

                {(block.type === 'image' || block.type === 'video' || block.type === 'audio') && (
                  <div className="space-y-3">
                    {block.preview ? (
                      <div className="relative">
                        {block.type === 'image' && (
                          <img src={block.preview} alt="" className="max-w-full rounded-xl" />
                        )}
                        {block.type === 'video' && (
                          <video src={block.preview} controls className="max-w-full rounded-xl" />
                        )}
                        {block.type === 'audio' && (
                          <audio src={block.preview} controls className="w-full" />
                        )}
                        <button
                          onClick={() => { updateBlock(idx, 'file', null); updateBlock(idx, 'preview', ''); }}
                          className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => blockFileRefs.current[idx]?.click()}
                        className="w-full py-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-purple-400 transition-colors flex flex-col items-center gap-2 text-gray-400 hover:text-purple-500"
                      >
                        <Upload size={24} />
                        <span className="text-sm">Upload {block.type}</span>
                      </button>
                    )}
                    <input
                      ref={(el) => (blockFileRefs.current[idx] = el)}
                      type="file"
                      accept={block.type === 'image' ? 'image/*' : block.type === 'video' ? 'video/*' : 'audio/*'}
                      onChange={(e) => handleBlockFileChange(idx, e)}
                      className="hidden"
                    />
                    <input
                      type="text"
                      value={block.content}
                      onChange={(e) => updateBlock(idx, 'content', e.target.value)}
                      placeholder="Caption (optional)"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                )}

                {block.type === 'url' && (
                  <input
                    type="url"
                    value={block.content}
                    onChange={(e) => updateBlock(idx, 'content', e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-purple-600 outline-none focus:ring-2 focus:ring-purple-500"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Block */}
        <div className="relative mt-6">
          <button
            onClick={() => setShowBlockMenu(!showBlockMenu)}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-purple-400 transition-colors flex items-center justify-center gap-2 text-gray-400 hover:text-purple-600 font-medium"
          >
            <Plus size={20} />
            Add Content Block
          </button>

          {showBlockMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-purple-100 p-4 z-10"
            >
              <div className="grid grid-cols-4 gap-2">
                {BLOCK_TYPES.map(({ type, label, icon: Icon }) => (
                  <button
                    key={type}
                    onClick={() => addBlock(type)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-purple-50 transition-colors text-gray-600 hover:text-purple-600"
                  >
                    <Icon size={20} />
                    <span className="text-xs font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Preview Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Blog Preview</h2>
                <p className="text-sm text-gray-500 mt-1">How your blog post will appear to readers</p>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Preview Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-6">
                {/* Cover Image */}
                {coverPreview && (
                  <div className="mb-8">
                    <img
                      src={coverPreview}
                      alt="Cover"
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                )}

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {title || 'Your Blog Title'}
                </h1>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-4 border-b border-gray-200">
                  <span>By {useAuth().user?.first_name} {useAuth().user?.last_name}</span>
                  <span>•</span>
                  <span>{new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  {tags && (
                    <>
                      <span>•</span>
                      <div className="flex gap-2">
                        {tags.split(',').map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Excerpt */}
                {excerpt && (
                  <div className="text-xl text-gray-600 italic mb-8 leading-relaxed">
                    {excerpt}
                  </div>
                )}

                {/* Content Blocks */}
                <div className="prose prose-lg max-w-none">
                  {blocks.map((block, idx) => (
                    <div key={block.id} className="mb-8">
                      {block.type === 'text' && (
                        <p className="text-gray-700 leading-relaxed">
                          {block.content || 'Your paragraph content will appear here...'}
                        </p>
                      )}

                      {block.type === 'heading' && (
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
                          {block.content || 'Your heading will appear here...'}
                        </h2>
                      )}

                      {block.type === 'gpt' && (
                        <div className="my-6">
                          {block.content ? (
                            <div className="prose prose-lg max-w-none">
                              {renderGPTContent(block.content)}
                            </div>
                          ) : (
                            <div className="bg-gray-100 rounded-xl p-8 text-center text-gray-500">
                              GPT content will appear here
                            </div>
                          )}
                        </div>
                      )}

                      {block.type === 'quote' && (
                        <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-700 text-lg">
                          {block.content || 'Your quote will appear here...'}
                        </blockquote>
                      )}

                      {block.type === 'code' && (
                        <pre className="bg-gray-900 text-green-400 p-6 rounded-xl overflow-x-auto text-sm">
                          <code>{block.content || '// Your code will appear here...'}</code>
                        </pre>
                      )}

                      {block.type === 'image' && (
                        <div className="my-6">
                          {block.preview ? (
                            <img
                              src={block.preview}
                              alt={block.content || ''}
                              className="max-w-full rounded-xl shadow-lg"
                            />
                          ) : (
                            <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-500">
                              Image will appear here
                            </div>
                          )}
                          {block.content && (
                            <p className="text-sm text-gray-600 mt-2 italic text-center">
                              {block.content}
                            </p>
                          )}
                        </div>
                      )}

                      {block.type === 'video' && (
                        <div className="my-6">
                          {block.preview ? (
                            <video
                              src={block.preview}
                              controls
                              className="max-w-full rounded-xl shadow-lg"
                            />
                          ) : (
                            <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-500">
                              Video will appear here
                            </div>
                          )}
                          {block.content && (
                            <p className="text-sm text-gray-600 mt-2 italic text-center">
                              {block.content}
                            </p>
                          )}
                        </div>
                      )}

                      {block.type === 'audio' && (
                        <div className="my-6">
                          {block.preview ? (
                            <audio
                              src={block.preview}
                              controls
                              className="w-full"
                            />
                          ) : (
                            <div className="bg-gray-200 rounded-xl h-16 flex items-center justify-center text-gray-500">
                              Audio player will appear here
                            </div>
                          )}
                          {block.content && (
                            <p className="text-sm text-gray-600 mt-2 italic text-center">
                              {block.content}
                            </p>
                          )}
                        </div>
                      )}

                      {block.type === 'url' && (
                        <div className="my-6">
                          {block.content ? (
                            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                              <p className="text-purple-700 font-medium mb-2">Embedded Content</p>
                              <a
                                href={block.content}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 underline break-all"
                              >
                                {block.content}
                              </a>
                            </div>
                          ) : (
                            <div className="bg-gray-100 rounded-xl p-8 text-center text-gray-500">
                              URL embed will appear here
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BlogEditor;
