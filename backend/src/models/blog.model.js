import mongoose from 'mongoose';
import slugify from 'slugify';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
      maxlength: [200, 'Blog title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    excerpt: {
      type: String,
      trim: true,
      maxlength: [500, 'Excerpt cannot exceed 500 characters'],
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    banner: {
      url: {
        type: String,
        required: [true, 'Banner image URL is required'],
      },
      publicId: {
        type: String,
        required: [true, 'Banner image Cloudinary public ID is required'],
      },
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      default: 'General',
      index: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    author: {
      type: String,
      default: 'Admin',
      trim: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'published',
      index: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to generate unique slug from title
blogSchema.pre('save', function (next) {
  if (this.isModified('title') || !this.slug) {
    const baseSlug = slugify(this.title, { lower: true, strict: true });
    // Append short timestamp suffix if needed to guarantee uniqueness
    this.slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
  }
  next();
});

export const Blog = mongoose.model('Blog', blogSchema);
