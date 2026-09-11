import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@trinetrachambers.com';
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Trinetra@2026!';

/**
 * @desc    Authenticate admin user for Chambers portal
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required.');
  }

  const normalizedEmail = email.trim().toLowerCase();
  const validEmail = DEFAULT_ADMIN_EMAIL.toLowerCase();

  if (normalizedEmail !== validEmail || password !== DEFAULT_ADMIN_PASSWORD) {
    throw new ApiError(401, 'Invalid Chambers administrative credentials.');
  }

  // Generate simple bearer token for session verification
  const token = Buffer.from(`${normalizedEmail}:${Date.now()}:${process.env.JWT_SECRET || 'trinetra_secret'}`).toString('base64');

  const adminProfile = {
    email: DEFAULT_ADMIN_EMAIL,
    role: 'Managing Partner / Administrator',
    name: 'Chambers Executive Registrar',
    token,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, adminProfile, 'Chambers Administrator authenticated successfully.'));
});

/**
 * @desc    Verify current admin session
 * @route   GET /api/v1/auth/verify
 * @access  Public
 */
export const verifyAdmin = asyncHandler(async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ApiError(401, 'No authorization token provided.');
  }

  return res.status(200).json(
    new ApiResponse(200, {
      authenticated: true,
      email: DEFAULT_ADMIN_EMAIL,
      role: 'Managing Partner / Administrator',
    }, 'Session verified.')
  );
});
