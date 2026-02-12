const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    maxlength: 300
  },
  category: {
    type: String,
    enum: ['Technology', 'Projects', 'Tutorials', 'Career', 'Personal'],
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  coverImage: {
    url: String,
    alt: String,
    caption: String
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
    size: Number
  }],
  socialLinks: {
    linkedin: String,
    instagram: String,
    twitter: String
  },
  readingTime: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  },
  publishedAt: Date,
  scheduledAt: Date
}, {
  timestamps: true
});

// Create slug from title before saving
blogPostSchema.pre('save', function(next) {
  try {
    if (this.isModified('title') && this.title) {
      this.slug = this.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
    }
    next();
  } catch (error) {
    console.error('Slug generation error:', error);
    next(error);
  }
});

// Calculate reading time
blogPostSchema.pre('save', function(next) {
  try {
    if (this.isModified('content') && this.content) {
      const wordsPerMinute = 200;
      const words = this.content.split(/\s+/).length;
      this.readingTime = Math.ceil(words / wordsPerMinute);
    }
    next();
  } catch (error) {
    console.error('Reading time calculation error:', error);
    next(error);
  }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);