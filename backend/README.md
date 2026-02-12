# Portfolio Blog Backend

A comprehensive backend API for a portfolio website with blogging, newsletter, and content management features.

## Features

- **User Authentication**: JWT-based auth with role-based access (Admin/Subscriber)
- **Blog Management**: Create, edit, publish blog posts with rich content
- **Newsletter System**: Automated email newsletters with subscriber management
- **File Upload**: Support for images, documents, and attachments
- **Content Categories**: Tech, Projects, Thoughts, Updates, Tutorials
- **Social Integration**: Link to LinkedIn/Instagram posts
- **Analytics**: Post views, likes, comments, newsletter stats

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Storage**: Local + Cloudinary (optional)
- **Email**: Nodemailer with Gmail
- **Security**: Helmet, CORS, Rate Limiting

## Quick Start

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start MongoDB**
   Make sure MongoDB is running locally or update MONGODB_URI for cloud database.

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update profile

### Blog Posts
- `GET /api/blog/posts` - Get published posts (public)
- `GET /api/blog/posts/:slug` - Get single post (public)
- `POST /api/blog/posts` - Create post (admin)
- `PUT /api/blog/posts/:id` - Update post (admin)
- `DELETE /api/blog/posts/:id` - Delete post (admin)
- `POST /api/blog/posts/:id/like` - Like/unlike post
- `POST /api/blog/posts/:id/comments` - Add comment

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe
- `POST /api/newsletter/create` - Create newsletter (admin)
- `POST /api/newsletter/:id/send` - Send newsletter (admin)

### File Upload
- `POST /api/upload/single` - Upload single file
- `POST /api/upload/multiple` - Upload multiple files
- `DELETE /api/upload/:filename` - Delete file (admin)

## Database Models

### User
- Email, password, role (admin/subscriber)
- Profile info, preferences, notification settings

### BlogPost
- Title, content, excerpt, category, tags
- Author, status, featured flag
- Cover image, attachments, social links
- SEO metadata, reading time, views, likes, comments

### Newsletter
- Subject, content, HTML content, template
- Recipients list with send status
- Statistics (sent, delivered, opened, clicked, bounced)

## Deployment Options

### Railway (Recommended)
1. Connect GitHub repo
2. Add environment variables
3. Deploy automatically

### Vercel + MongoDB Atlas
1. Deploy backend to Vercel
2. Use MongoDB Atlas for database
3. Configure environment variables

### DigitalOcean App Platform
1. Create app from GitHub
2. Configure environment
3. Set up database

### Heroku
1. Create Heroku app
2. Add MongoDB add-on
3. Configure environment variables

## Security Features

- JWT authentication with expiration
- Password hashing with bcrypt
- Rate limiting on API endpoints
- CORS configuration
- Helmet security headers
- Input validation and sanitization
- File upload restrictions

## File Structure

```
backend/
├── models/           # Database models
├── routes/           # API routes
├── middleware/       # Auth middleware
├── uploads/          # Local file storage
├── server.js         # Main server file
├── package.json      # Dependencies
└── .env.example      # Environment template
```

## Admin Setup

After deployment, create your first admin user:

```javascript
// Run this in MongoDB or create via API
db.users.insertOne({
  email: "admin@yourportfolio.com",
  password: "$2a$10$hashedPasswordHere",
  role: "admin",
  isVerified: true
})
```

## Frontend Integration

The backend is designed to work with the React frontend. Key integration points:

- Authentication state management
- Blog post fetching and display
- Newsletter subscription
- File upload handling
- Admin dashboard for content management

## Monitoring & Analytics

Consider adding:
- Request logging (Morgan)
- Error tracking (Sentry)
- Performance monitoring
- Database query optimization
- API rate limiting analytics