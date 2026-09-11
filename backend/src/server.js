import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';
import { seedInitialBlogs } from './config/seed.js';

const PORT = process.env.PORT || 5000;

// Connect to MongoDB & seed initial articles if empty
await connectDB();
await seedInitialBlogs();

const server = app.listen(PORT, () => {
  console.log(`🚀 [Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  console.log(`📡 [Healthcheck]: /api/v1/health (Port: ${PORT})`);
  console.log(`📝 [Blogs API]: /api/v1/blogs (Port: ${PORT})`);
  console.log(`🖼️ [Gallery API]: /api/v1/gallery (Port: ${PORT})`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`❌ [Unhandled Rejection]: ${err.message}`);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error(`❌ [Uncaught Exception]: ${err.message}`);
  process.exit(1);
});

// Graceful shutdown on termination signals
const handleShutdown = (signal) => {
  console.log(`\n🛑 [${signal} Received]: Shutting down gracefully...`);
  server.close(() => {
    console.log('💤 [Process Terminated]: Closed remaining connections.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
