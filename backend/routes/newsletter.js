const express = require('express');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const Newsletter = require('../models/Newsletter');
const User = require('../models/User');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Subscribe to newsletter (public)
router.post('/subscribe', [
  body('email').isEmail().normalizeEmail(),
  body('name').optional().trim()
], async (req, res) => {
  try {
    const { email, name, preferences } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });

    if (user) {
      // Update preferences
      user.preferences = { ...user.preferences, ...preferences, notifications: true };
      await user.save();
    } else {
      // Create new subscriber
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Math.random().toString(36), salt);

      user = new User({
        email,
        password: hashedPassword,
        role: 'subscriber',
        profile: { name },
        preferences: { ...preferences, notifications: true }
      });
      await user.save();
    }

    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during subscription'
    });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', [
  body('email').isEmail().normalizeEmail()
], async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.body.email },
      { 'preferences.notifications': false },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our system'
      });
    }

    res.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during unsubscription'
    });
  }
});

// Create newsletter (admin only)
router.post('/create', auth, adminAuth, [
  body('subject').trim().isLength({ min: 1 }),
  body('content').trim().isLength({ min: 1 }),
  body('template').optional().isIn(['default', 'featured-post', 'weekly-digest', 'announcement'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { subject, content, htmlContent, template, scheduledAt } = req.body;

    // Get all subscribers
    const subscribers = await User.find({
      'preferences.notifications': true,
      role: 'subscriber'
    }).select('email profile.name');

    const recipients = subscribers.map(sub => ({
      email: sub.email,
      userId: sub._id,
      status: 'pending'
    }));

    const newsletter = new Newsletter({
      subject,
      content,
      htmlContent,
      template: template || 'default',
      recipients,
      status: scheduledAt ? 'scheduled' : 'draft',
      scheduledAt,
      stats: {
        totalSent: 0,
        delivered: 0,
        opened: 0,
        clicked: 0,
        bounced: 0,
        unsubscribed: 0
      }
    });

    await newsletter.save();

    res.status(201).json({
      success: true,
      message: 'Newsletter created successfully',
      newsletter: {
        id: newsletter._id,
        subject: newsletter.subject,
        status: newsletter.status,
        recipientCount: recipients.length
      }
    });
  } catch (error) {
    console.error('Create newsletter error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Send newsletter (admin only)
router.post('/:id/send', auth, adminAuth, async (req, res) => {
  try {
    const newsletter = await Newsletter.findById(req.params.id);

    if (!newsletter) {
      return res.status(404).json({
        success: false,
        message: 'Newsletter not found'
      });
    }

    if (newsletter.status === 'sent') {
      return res.status(400).json({
        success: false,
        message: 'Newsletter already sent'
      });
    }

    // Send emails in batches
    const batchSize = 50;
    const recipients = newsletter.recipients.filter(r => r.status === 'pending');

    for (let i = 0; i < recipients.length; i += batchSize) {
      const batch = recipients.slice(i, i + batchSize);

      const emailPromises = batch.map(async (recipient) => {
        try {
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipient.email,
            subject: newsletter.subject,
            text: newsletter.content,
            html: newsletter.htmlContent || newsletter.content.replace(/\n/g, '<br>')
          };

          await transporter.sendMail(mailOptions);

          recipient.status = 'sent';
          recipient.sentAt = new Date();
          newsletter.stats.totalSent += 1;
          newsletter.stats.delivered += 1;

        } catch (error) {
          console.error(`Failed to send to ${recipient.email}:`, error);
          recipient.status = 'failed';
          recipient.error = error.message;
          newsletter.stats.bounced += 1;
        }
      });

      await Promise.all(emailPromises);

      // Small delay between batches
      if (i + batchSize < recipients.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    newsletter.status = 'sent';
    newsletter.sentAt = new Date();
    await newsletter.save();

    res.json({
      success: true,
      message: 'Newsletter sent successfully',
      stats: newsletter.stats
    });
  } catch (error) {
    console.error('Send newsletter error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during sending'
    });
  }
});

// Get newsletters (admin only)
router.get('/', auth, adminAuth, async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;

    const query = {};
    if (status) query.status = status;

    const newsletters = await Newsletter.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-recipients -content -htmlContent'); // Exclude large fields

    const total = await Newsletter.countDocuments(query);

    res.json({
      success: true,
      newsletters,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalNewsletters: total
      }
    });
  } catch (error) {
    console.error('Get newsletters error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get newsletter stats (admin only)
router.get('/:id/stats', auth, adminAuth, async (req, res) => {
  try {
    const newsletter = await Newsletter.findById(req.params.id)
      .select('stats subject sentAt status');

    if (!newsletter) {
      return res.status(404).json({
        success: false,
        message: 'Newsletter not found'
      });
    }

    res.json({
      success: true,
      stats: newsletter.stats,
      subject: newsletter.subject,
      sentAt: newsletter.sentAt,
      status: newsletter.status
    });
  } catch (error) {
    console.error('Get newsletter stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;