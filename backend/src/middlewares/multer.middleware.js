import multer from 'multer';
import { ApiError } from '../utils/ApiError.js';

// Memory storage keeps file buffers in memory for direct stream upload to Cloudinary
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new ApiError(400, 'Only image files (jpeg, png, webp, gif, svg) are allowed!'), false);
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB maximum file size
  },
  fileFilter,
});
