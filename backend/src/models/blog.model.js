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
        default: '/court-supreme-facade.jpg',
      },
      publicId: {
        type: String,
        default: 'preset-banner',
      },
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      default: 'Constitutional Law',
      index: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    author: {
      type: String,
      default: 'Advocate Shashi Shekhar',
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

// Pre-save hook to generate unique slug from title if not already provided
blogSchema.pre('save', function (next) {
  if (!this.slug && this.title) {
    const baseSlug = slugify(this.title, { lower: true, strict: true });
    this.slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
  }
  next();
});

export const Blog = mongoose.model('Blog', blogSchema);
