import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
await connectDB();

const server = app.listen(PORT, () => {
  console.log(`🚀 [Server]: Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  console.log(`📡 [Healthcheck]: http://localhost:${PORT}/api/v1/health`);
  console.log(`📝 [Blogs API]: http://localhost:${PORT}/api/v1/blogs`);
  console.log(`🖼️ [Gallery API]: http://localhost:${PORT}/api/v1/gallery`);
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
