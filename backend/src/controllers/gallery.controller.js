import { Gallery } from '../models/gallery.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { uploadOnCloudinary, deleteFromCloudinary } from '../utils/cloudinary.util.js';

/**
 * @desc    Upload media/image to Cloudinary and store in Gallery
 * @route   POST /api/v1/gallery
 * @access  Public / Admin
 */
export const uploadMedia = asyncHandler(async (req, res) => {
  const { title, description, category, tags, isFeatured } = req.body;

  if (!title) {
    throw new ApiError(400, 'Image title is required');
  }

  if (!req.file) {
    throw new ApiError(400, 'Image file is required');
  }

  // Upload to Cloudinary under folder 'trinetra/gallery'
  const uploadResult = await uploadOnCloudinary(req.file.buffer, 'trinetra/gallery');

  const parsedTags = typeof tags === 'string' ? tags.split(',').map((t) => t.trim()) : tags || [];

  const media = await Gallery.create({
    title,
    description: description || '',
    category: category || 'General',
    tags: parsedTags,
    isFeatured: isFeatured === 'true' || isFeatured === true,
    image: {
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      width: uploadResult.width,
      height: uploadResult.height,
      format: uploadResult.format,
    },
  });

  return res.status(201).json(new ApiResponse(201, media, 'Image uploaded to gallery successfully'));
});

/**
 * @desc    Get all gallery media with pagination and category filtering
 * @route   GET /api/v1/gallery
 * @access  Public
 */
export const getAllMedia = asyncHandler(async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const limit = Math.min(60, Math.max(1, parseInt(req.query.limit, 10) || 12));
  const skip = (page - 1) * limit;

  const { category, tag, isFeatured } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (tag) filter.tags = tag;
  if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';

  const [mediaList, total] = await Promise.all([
    Gallery.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Gallery.countDocuments(filter),
  ]);

  const pagination = {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1,
  };

  return res.status(200).json(new ApiResponse(200, { media: mediaList, pagination }, 'Gallery media fetched successfully'));
});

/**
 * @desc    Get single media details by ID
 * @route   GET /api/v1/gallery/:id
 * @access  Public
 */
export const getMediaById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const media = await Gallery.findById(id);
  if (!media) {
    throw new ApiError(404, 'Gallery item not found');
  }

  return res.status(200).json(new ApiResponse(200, media, 'Gallery item fetched successfully'));
});

/**
 * @desc    Delete media item and destroy asset on Cloudinary
 * @route   DELETE /api/v1/gallery/:id
 * @access  Public / Admin
 */
export const deleteMedia = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const media = await Gallery.findById(id);
  if (!media) {
    throw new ApiError(404, 'Gallery item not found');
  }

  // Delete asset from Cloudinary
  if (media.image?.publicId) {
    await deleteFromCloudinary(media.image.publicId);
  }

  await media.deleteOne();

  return res.status(200).json(new ApiResponse(200, null, 'Gallery item deleted successfully'));
});
