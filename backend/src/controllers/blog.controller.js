import { Blog } from '../models/blog.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { uploadOnCloudinary, deleteFromCloudinary } from '../utils/cloudinary.util.js';

/**
 * @desc    Create a new blog post (supports Cloudinary banner upload OR direct banner URL)
 * @route   POST /api/v1/blogs
 * @access  Public / Admin
 */
export const createBlog = asyncHandler(async (req, res) => {
  const { title, slug, excerpt, content, category, tags, author, status, bannerUrl } = req.body;

  if (!title || !content) {
    throw new ApiError(400, 'Title and content are required');
  }

  let banner = {
    url: bannerUrl || '/court-supreme-facade.jpg',
    publicId: 'local-preset',
  };

  // If a file was uploaded via multer, stream upload to Cloudinary with safe fallback
  if (req.file) {
    try {
      const uploadResult = await uploadOnCloudinary(req.file.buffer, 'trinetra/blogs');
      if (uploadResult?.secure_url) {
        banner = {
          url: uploadResult.secure_url,
          publicId: uploadResult.public_id,
        };
      }
    } catch (uploadErr) {
      console.warn('⚠️ [Cloudinary Upload Warning]:', uploadErr.message);
      if (bannerUrl) {
        banner.url = bannerUrl;
      }
    }
  } else if (bannerUrl) {
    banner.url = bannerUrl;
  }

  const parsedTags = typeof tags === 'string' ? tags.split(',').map((t) => t.trim()) : tags || [];

  const blogData = {
    title,
    excerpt: excerpt || title.slice(0, 150),
    content,
    category: category || 'Constitutional Law',
    tags: parsedTags,
    author: author || 'Advocate Shashi Shekhar',
    status: status || 'published',
    banner,
  };

  if (slug) {
    blogData.slug = slug;
  }

  const blog = await Blog.create(blogData);

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
  if (category && category !== 'All Perspectives') filter.category = category;
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
 * @desc    Update a blog post (supports ID or slug, banner image replacement or bannerUrl update, and upsert)
 * @route   PUT /api/v1/blogs/:id
 * @access  Public / Admin
 */
export const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, slug, excerpt, content, category, tags, author, status, bannerUrl } = req.body;

  // Support finding by MongoDB ObjectId OR by slug
  const query = id.match(/^[0-9a-fA-F]{24}$/) ? { _id: id } : { slug: id };
  let blog = await Blog.findOne(query);

  // If not found in DB (e.g. was one of initial client-side blogs), gracefully upsert/create into DB
  if (!blog) {
    if (title && content) {
      const parsedTags = typeof tags === 'string' ? tags.split(',').map((t) => t.trim()) : tags || [];
      let banner = {
        url: bannerUrl || '/court-supreme-facade.jpg',
        publicId: 'local-preset',
      };

      if (req.file) {
        try {
          const uploadResult = await uploadOnCloudinary(req.file.buffer, 'trinetra/blogs');
          if (uploadResult?.secure_url) {
            banner = { url: uploadResult.secure_url, publicId: uploadResult.public_id };
          }
        } catch (uploadErr) {
          console.warn('⚠️ [Cloudinary Upload Warning]:', uploadErr.message);
        }
      }

      blog = await Blog.create({
        title,
        slug: slug || id,
        excerpt: excerpt || title.slice(0, 150),
        content,
        category: category || 'Constitutional Law',
        tags: parsedTags,
        author: author || 'Advocate Shashi Shekhar',
        status: status || 'published',
        banner,
      });

      return res.status(200).json(new ApiResponse(200, blog, 'Blog created and saved successfully'));
    }

    throw new ApiError(404, 'Blog post not found');
  }

  // Update text fields if provided
  if (title) blog.title = title;
  if (slug) blog.slug = slug;
  if (excerpt !== undefined) blog.excerpt = excerpt;
  if (content) blog.content = content;
  if (category) blog.category = category;
  if (author) blog.author = author;
  if (status) blog.status = status;

  if (tags !== undefined) {
    blog.tags = typeof tags === 'string' ? tags.split(',').map((t) => t.trim()) : tags;
  }

  // If direct banner URL string provided without file
  if (bannerUrl && !req.file) {
    blog.banner = {
      url: bannerUrl,
      publicId: blog.banner?.publicId || 'url-preset',
    };
  }

  // If a new banner file is uploaded, stream upload to Cloudinary
  if (req.file) {
    const oldPublicId = blog.banner?.publicId;
    try {
      const uploadResult = await uploadOnCloudinary(req.file.buffer, 'trinetra/blogs');
      if (uploadResult?.secure_url) {
        blog.banner = {
          url: uploadResult.secure_url,
          publicId: uploadResult.public_id,
        };

        if (oldPublicId && !['local-preset', 'preset-banner', 'court-supreme-facade'].includes(oldPublicId)) {
          deleteFromCloudinary(oldPublicId).catch((err) =>
            console.error(`Failed to delete previous blog banner: ${err.message}`)
          );
        }
      }
    } catch (uploadErr) {
      console.warn('⚠️ [Cloudinary Upload Warning on update]:', uploadErr.message);
      if (bannerUrl) {
        blog.banner = {
          url: bannerUrl,
          publicId: blog.banner?.publicId || 'url-preset',
        };
      }
    }
  }

  await blog.save();

  return res.status(200).json(new ApiResponse(200, blog, 'Blog updated successfully'));
});

/**
 * @desc    Delete a blog post (supports ObjectId or slug) and its Cloudinary asset
 * @route   DELETE /api/v1/blogs/:id
 * @access  Public / Admin
 */
export const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const query = id.match(/^[0-9a-fA-F]{24}$/) ? { _id: id } : { slug: id };
  const blog = await Blog.findOne(query);

  if (!blog) {
    return res.status(200).json(new ApiResponse(200, null, 'Blog already deleted or not found'));
  }

  // Delete banner asset from Cloudinary if not a local preset
  if (blog.banner?.publicId && !['local-preset', 'preset-banner', 'court-supreme-facade'].includes(blog.banner.publicId)) {
    await deleteFromCloudinary(blog.banner.publicId).catch(() => {});
  }

  await blog.deleteOne();

  return res.status(200).json(new ApiResponse(200, null, 'Blog deleted successfully'));
});
