import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Image title is required'],
      trim: true,
      maxlength: [150, 'Title cannot exceed 150 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    image: {
      url: {
        type: String,
        required: [true, 'Image URL is required'],
      },
      publicId: {
        type: String,
        required: [true, 'Cloudinary public ID is required'],
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      format: {
        type: String,
      },
    },
    category: {
      type: String,
      default: 'General',
      trim: true,
      index: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Gallery = mongoose.model('Gallery', gallerySchema);
