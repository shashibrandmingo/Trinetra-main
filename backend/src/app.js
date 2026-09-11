import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRoutes from './routes/index.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { ApiError } from './utils/ApiError.js';

const app = express();

// Security HTTP headers
app.use(helmet());

// CORS configuration supporting production domains, Vercel previews, and environment variables
const defaultAllowed = [
  'https://www.monikaanand.com',
  'https://monikaanand.com',
  'http://localhost:3000',
  'http://localhost:5173',
];

const envAllowed = (process.env.CLIENT_URL || '')
  .split(',')
  .map((url) => url.trim().replace(/\/+$/, ''))
  .filter(Boolean);

const allowedOrigins = Array.from(new Set([...defaultAllowed, ...envAllowed]));

const isOriginAllowed = (origin) => {
  if (!origin) return true;
  const clean = origin.replace(/\/+$/, '').toLowerCase();
  return (
    allowedOrigins.some((allowed) => allowed.toLowerCase() === clean) ||
    clean.endsWith('.vercel.app') ||
    clean.includes('monikaanand.com') ||
    clean.includes('localhost')
  );
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (isOriginAllowed(origin)) {
        callback(null, true);
      } else {
        console.warn(`[CORS Blocked]: Origin '${origin}' is not permitted.`);
        callback(new Error(`Blocked by CORS policy: Origin ${origin} not allowed`));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  })
);

// Request body parsing
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// HTTP request logger
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
}

// API Routes
app.use('/api/v1', apiRoutes);

// Catch-all for undefined routes
app.use('*', (req, res, next) => {
  next(new ApiError(404, `Cannot find route '${req.originalUrl}' on this server`));
});

// Centralized Error Handling Middleware
app.use(errorHandler);

export default app;
