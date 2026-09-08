import mongoose from 'mongoose';

/**
 * Connect to MongoDB database with reconnection handling and event listeners
 */
export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/trinetra_db';

    const conn = await mongoose.connect(mongoURI, {
      autoIndex: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ [MongoDB Connected]: ${conn.connection.host}`);

    mongoose.connection.on('error', (err) => {
      console.error(`❌ [MongoDB Connection Error]: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ [MongoDB Disconnected]: Reconnecting...');
    });
  } catch (error) {
    console.error(`❌ [MongoDB Initial Connection Failed]: ${error.message}`);
    // Keep app running in development if DB is not immediately reachable, but log clear warning
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};
