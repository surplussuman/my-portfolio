const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Local storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'image/jpeg', 'image/png', 'image/gif', 'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain', 'text/markdown'
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Upload single file
router.post('/single', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const file = req.file;

    // Upload to Cloudinary if configured
    let cloudinaryResult = null;
    if (process.env.CLOUDINARY_CLOUD_NAME) {
      try {
        cloudinaryResult = await cloudinary.uploader.upload(file.path, {
          folder: 'portfolio-uploads',
          resource_type: 'auto'
        });

        // Delete local file after upload
        fs.unlinkSync(file.path);
      } catch (cloudinaryError) {
        console.error('Cloudinary upload error:', cloudinaryError);
        // Continue with local storage if Cloudinary fails
      }
    }

    const fileData = {
      name: file.originalname,
      url: cloudinaryResult ? cloudinaryResult.secure_url : `/uploads/${file.filename}`,
      type: file.mimetype,
      size: file.size,
      uploadedAt: new Date(),
      uploadedBy: req.user.userId
    };

    if (cloudinaryResult) {
      fileData.cloudinaryId = cloudinaryResult.public_id;
    }

    res.json({
      success: true,
      message: 'File uploaded successfully',
      file: fileData
    });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during file upload'
    });
  }
});

// Upload multiple files
router.post('/multiple', auth, upload.array('files', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No files uploaded'
      });
    }

    const uploadedFiles = [];

    for (const file of req.files) {
      let cloudinaryResult = null;

      if (process.env.CLOUDINARY_CLOUD_NAME) {
        try {
          cloudinaryResult = await cloudinary.uploader.upload(file.path, {
            folder: 'portfolio-uploads',
            resource_type: 'auto'
          });

          fs.unlinkSync(file.path);
        } catch (cloudinaryError) {
          console.error('Cloudinary upload error:', cloudinaryError);
        }
      }

      const fileData = {
        name: file.originalname,
        url: cloudinaryResult ? cloudinaryResult.secure_url : `/uploads/${file.filename}`,
        type: file.mimetype,
        size: file.size,
        uploadedAt: new Date(),
        uploadedBy: req.user.userId
      };

      if (cloudinaryResult) {
        fileData.cloudinaryId = cloudinaryResult.public_id;
      }

      uploadedFiles.push(fileData);
    }

    res.json({
      success: true,
      message: `${uploadedFiles.length} files uploaded successfully`,
      files: uploadedFiles
    });
  } catch (error) {
    console.error('Multiple file upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during file upload'
    });
  }
});

// Delete file (admin only)
router.delete('/:filename', auth, adminAuth, async (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);

    // Check if file exists locally
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // If using Cloudinary, delete from there too
    if (req.query.cloudinaryId) {
      try {
        await cloudinary.uploader.destroy(req.query.cloudinaryId);
      } catch (cloudinaryError) {
        console.error('Cloudinary delete error:', cloudinaryError);
      }
    }

    res.json({
      success: true,
      message: 'File deleted successfully'
    });
  } catch (error) {
    console.error('File delete error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during file deletion'
    });
  }
});

// Get uploaded files list (admin only)
router.get('/', auth, adminAuth, async (req, res) => {
  try {
    const uploadDir = path.join(__dirname, '../uploads');

    if (!fs.existsSync(uploadDir)) {
      return res.json({
        success: true,
        files: []
      });
    }

    const files = fs.readdirSync(uploadDir).map(filename => {
      const filePath = path.join(uploadDir, filename);
      const stats = fs.statSync(filePath);

      return {
        name: filename,
        size: stats.size,
        uploadedAt: stats.mtime,
        url: `/uploads/${filename}`
      };
    });

    res.json({
      success: true,
      files
    });
  } catch (error) {
    console.error('Get files error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;