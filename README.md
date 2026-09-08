# Trinetra - Full Stack Application Architecture

A modern, production-ready full-stack architecture decoupling the **Next.js** frontend and **Express** backend, equipped with **MongoDB**, **Cloudinary**, and **Tailwind CSS**.

---

## 📁 Repository Structure

```
Trinetra/
├── backend/                  # Node.js & Express API (ES6 Modules)
│   ├── src/
│   │   ├── config/           # Database (Mongoose) & Cloudinary SDK
│   │   ├── controllers/      # Blog, Gallery & Health controllers
│   │   ├── middlewares/      # Multer memory storage & Global Error Handler
│   │   ├── models/           # Blog & Gallery Mongoose Schemas
│   │   ├── routes/           # Versioned routes (/api/v1/...)
│   │   ├── utils/            # ApiError, ApiResponse, asyncHandler, Cloudinary
│   │   ├── app.js            # Express application configuration
│   │   └── server.js         # HTTP Server entry & graceful shutdown
│   ├── .env.example          # Environment variables template
│   └── package.json          # Dependencies & npm scripts
│
├── frontend/                 # Next.js 16+ App Router & Tailwind CSS
│   ├── src/
│   │   ├── app/              # App router pages & layouts
│   │   ├── components/       # Reusable UI components
│   │   └── services/         # Centralized API service for Backend
│   ├── .env.local.example    # Frontend environment variables template
│   ├── next.config.mjs       # Cloudinary remote image domains
│   └── package.json          # Frontend dependencies & npm scripts
│
└── README.md                 # Project documentation
```

---

## 🚀 Quick Start Guide

### 1. Backend Setup

1. Open a terminal in `backend/`:
   ```bash
   cd backend
   ```
2. Copy environment template and configure your MongoDB & Cloudinary credentials:
   ```bash
   cp .env.example .env
   ```
   **Required `.env` Variables**:
   ```ini
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:3000
   MONGODB_URI=mongodb://127.0.0.1:27017/trinetra_db
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
3. Run the development server with live reload:
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:5000`.

---

### 2. Frontend Setup

1. Open a terminal in `frontend/`:
   ```bash
   cd frontend
   ```
2. Copy environment template:
   ```bash
   cp .env.local.example .env.local
   ```
3. Run the Next.js development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Reference (`/api/v1`)

### Health
- `GET /api/v1/health`: Returns API status, uptime, and database connection state.

### 📝 Blog Engine (`/api/v1/blogs`)
- `GET /api/v1/blogs`: List blogs with pagination (`?page=1&limit=10`), search (`?search=`), and category filter (`?category=`).
- `GET /api/v1/blogs/:idOrSlug`: Retrieve single blog by ID or generated slug (increments view counter).
- `POST /api/v1/blogs`: Create blog post (multipart `multipart/form-data` with `banner` image file).
- `PUT /api/v1/blogs/:id`: Update blog post (supports updating banner and deleting previous asset on Cloudinary).
- `DELETE /api/v1/blogs/:id`: Delete blog and destroy banner asset on Cloudinary.

### 🖼️ Media Gallery (`/api/v1/gallery`)
- `GET /api/v1/gallery`: List media with pagination (`?page=1&limit=12`), tag and category filters.
- `GET /api/v1/gallery/:id`: Retrieve single media metadata.
- `POST /api/v1/gallery`: Upload image (multipart `multipart/form-data` with `image` file directly streamed to Cloudinary).
- `DELETE /api/v1/gallery/:id`: Delete media record and remove file from Cloudinary.
