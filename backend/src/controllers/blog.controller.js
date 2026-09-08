import { Blog } from '../models/blog.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { uploadOnCloudinary, deleteFromCloudinary } from '../utils/cloudinary.util.js';

/**
 * @desc    Create a new blog post with banner image upload
 * @route   POST /api/v1/blogs
 * @access  Public / Admin
 */
export const createBlog = asyncHandler(async (req, res) => {
  const { title, excerpt, content, category, tags, author, status } = req.body;

  if (!title || !content) {
    throw new ApiError(400, 'Title and content are required');
  }

  if (!req.file) {
    throw new ApiError(400, 'Banner image is required for creating a blog');
  }

  // Upload banner buffer to Cloudinary in 'trinetra/blogs' folder
  const uploadResult = await uploadOnCloudinary(req.file.buffer, 'trinetra/blogs');

  const parsedTags = typeof tags === 'string' ? tags.split(',').map((t) => t.trim()) : tags || [];

  const blog = await Blog.create({
    title,
    excerpt: excerpt || title.slice(0, 150),
    content,
    category: category || 'General',
    tags: parsedTags,
    author: author || 'Admin',
    status: status || 'published',
    banner: {
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    },
  });

  return res.status(201).json(new ApiResponse(201, blog, 'Blog created successfully'));
});

/**
 * @desc    Get all blogs with pagination, filtering and search
 * @route   GET /api/v1/blogs
 * @access  Public
 */
export const getAllBlogs = asyncHandler(async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 10));
  const skip = (page - 1) * limit;

  const { category, status, search } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (status) filter.status = status;
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { tags: { $in: [new RegExp(search, 'i')] } },
      { content: { $regex: search, $options: 'i' } },
    ];
  }

  const [blogs, total] = await Promise.all([
    Blog.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Blog.countDocuments(filter),
  ]);

  const pagination = {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1,
  };

  return res.status(200).json(new ApiResponse(200, { blogs, pagination }, 'Blogs fetched successfully'));
});

/**
 * @desc    Get a single blog by ID or Slug
 * @route   GET /api/v1/blogs/:idOrSlug
 * @access  Public
 */
export const getBlogByIdOrSlug = asyncHandler(async (req, res) => {
  const { idOrSlug } = req.params;

  const query = idOrSlug.match(/^[0-9a-fA-F]{24}$/) ? { _id: idOrSlug } : { slug: idOrSlug };

  const blog = await Blog.findOneAndUpdate(query, { $inc: { views: 1 } }, { new: true });

  if (!blog) {
    throw new ApiError(404, 'Blog post not found');
  }

  return res.status(200).json(new ApiResponse(200, blog, 'Blog fetched successfully'));
});

/**
 * @desc    Update a blog post (supports replacing banner image)
 * @route   PUT /api/v1/blogs/:id
 * @access  Public / Admin
 */
export const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, excerpt, content, category, tags, author, status } = req.body;

  const blog = await Blog.findById(id);
  if (!blog) {
    throw new ApiError(404, 'Blog post not found');
  }

  // Update text fields if provided
  if (title) blog.title = title;
  if (excerpt !== undefined) blog.excerpt = excerpt;
  if (content) blog.content = content;
  if (category) blog.category = category;
  if (author) blog.author = author;
  if (status) blog.status = status;

  if (tags !== undefined) {
    blog.tags = typeof tags === 'string' ? tags.split(',').map((t) => t.trim()) : tags;
  }

  // If a new banner is uploaded, upload to Cloudinary and clean up old banner
  if (req.file) {
    const oldPublicId = blog.banner?.publicId;
    const uploadResult = await uploadOnCloudinary(req.file.buffer, 'trinetra/blogs');

    blog.banner = {
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    };

    if (oldPublicId) {
      deleteFromCloudinary(oldPublicId).catch((err) =>
        console.error(`Failed to delete previous blog banner: ${err.message}`)
      );
    }
  }

  await blog.save();

  return res.status(200).json(new ApiResponse(200, blog, 'Blog updated successfully'));
});

/**
 * @desc    Delete a blog post and its Cloudinary banner asset
 * @route   DELETE /api/v1/blogs/:id
 * @access  Public / Admin
 */
export const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);
  if (!blog) {
    throw new ApiError(404, 'Blog post not found');
  }

  // Delete banner asset from Cloudinary
  if (blog.banner?.publicId) {
    await deleteFromCloudinary(blog.banner.publicId);
  }

  await blog.deleteOne();

  return res.status(200).json(new ApiResponse(200, null, 'Blog deleted successfully'));
});
