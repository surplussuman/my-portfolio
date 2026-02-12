const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'subscriber'],
    default: 'subscriber'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  preferences: {
    notifications: {
      type: Boolean,
      default: true
    },
    categories: [{
      type: String,
      enum: ['tech', 'projects', 'thoughts', 'updates']
    }]
  },
  profile: {
    name: String,
    avatar: String,
    bio: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);