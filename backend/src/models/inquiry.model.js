import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Contact phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
    },
    practiceArea: {
      type: String,
      required: [true, 'Practice area is required'],
      trim: true,
      default: 'General Legal Counsel',
    },
    urgency: {
      type: String,
      enum: ['standard', 'priority', 'urgent'],
      default: 'standard',
    },
    matterSummary: {
      type: String,
      required: [true, 'Brief summary of the matter is required'],
      trim: true,
      maxlength: [3000, 'Summary cannot exceed 3000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in_review', 'closed'],
      default: 'new',
      index: true,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
