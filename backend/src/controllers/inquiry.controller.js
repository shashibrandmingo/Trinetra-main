import { Inquiry } from '../models/inquiry.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

/**
 * @desc    Submit a new legal inquiry / case brief from contact form
 * @route   POST /api/v1/inquiries
 * @access  Public
 */
export const createInquiry = asyncHandler(async (req, res) => {
  const { fullName, phone, email, practiceArea, urgency, matterSummary } = req.body;

  if (!fullName || !phone || !email || !matterSummary) {
    throw new ApiError(400, 'Full name, phone, email, and brief matter summary are required.');
  }

  const inquiry = await Inquiry.create({
    fullName,
    phone,
    email,
    practiceArea: practiceArea || 'General Legal Counsel',
    urgency: urgency || 'standard',
    matterSummary,
    status: 'new',
  });

  return res
    .status(201)
    .json(new ApiResponse(201, inquiry, 'Your consultation briefing has been received by Chambers registry.'));
});

/**
 * @desc    Get all inquiries with filtering and pagination
 * @route   GET /api/v1/inquiries
 * @access  Admin
 */
export const getAllInquiries = asyncHandler(async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 20));
  const skip = (page - 1) * limit;

  const { status, urgency, search } = req.query;

  const filter = {};
  if (status && status !== 'all') filter.status = status;
  if (urgency && urgency !== 'all') filter.urgency = urgency;

  if (search) {
    filter.$or = [
      { fullName: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } },
      { phone: { $regex: search, $options: 'i' } },
      { practiceArea: { $regex: search, $options: 'i' } },
      { matterSummary: { $regex: search, $options: 'i' } },
    ];
  }

  const [inquiries, total] = await Promise.all([
    Inquiry.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Inquiry.countDocuments(filter),
  ]);

  const pagination = {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, { inquiries, pagination }, 'Inquiries fetched successfully.'));
});

/**
 * @desc    Update inquiry status or internal chambers note
 * @route   PATCH /api/v1/inquiries/:id
 * @access  Admin
 */
export const updateInquiryStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const inquiry = await Inquiry.findById(id);
  if (!inquiry) {
    throw new ApiError(404, 'Inquiry record not found.');
  }

  if (status) inquiry.status = status;
  if (notes !== undefined) inquiry.notes = notes;

  await inquiry.save();

  return res
    .status(200)
    .json(new ApiResponse(200, inquiry, 'Inquiry status updated successfully.'));
});

/**
 * @desc    Delete an inquiry record
 * @route   DELETE /api/v1/inquiries/:id
 * @access  Admin
 */
export const deleteInquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const inquiry = await Inquiry.findByIdAndDelete(id);
  if (!inquiry) {
    throw new ApiError(404, 'Inquiry record not found.');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, 'Inquiry deleted successfully.'));
});
