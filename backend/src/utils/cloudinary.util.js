import cloudinary from '../config/cloudinary.js';
import { ApiError } from './ApiError.js';
import { Readable } from 'stream';

/**
 * Upload a memory buffer directly to Cloudinary using streams
 * @param {Buffer} fileBuffer - The file buffer from multer (req.file.buffer)
 * @param {string} folder - Target folder inside Cloudinary
 * @param {object} options - Optional Cloudinary upload options
 * @returns {Promise<object>} Cloudinary upload result
 */
export const uploadOnCloudinary = async (fileBuffer, folder = 'trinetra/uploads', options = {}) => {
  return new Promise((resolve, reject) => {
    if (!fileBuffer) {
      return reject(new ApiError(400, 'File buffer is missing for upload'));
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'auto',
        ...options,
      },
      (error, result) => {
        if (error) {
          return reject(new ApiError(500, `Cloudinary upload failed: ${error.message}`));
        }
        resolve(result);
      }
    );

    const stream = Readable.from(fileBuffer);
    stream.pipe(uploadStream);
  });
};

/**
 * Delete an asset from Cloudinary by public ID
 * @param {string} publicId - The Cloudinary public_id
 * @param {string} resourceType - 'image' | 'video' | 'raw'
 * @returns {Promise<object>} Cloudinary destroy result
 */
export const deleteFromCloudinary = async (publicId, resourceType = 'image') => {
  try {
    if (!publicId) return null;
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });
    return result;
  } catch (error) {
    console.error(`Error deleting asset ${publicId} from Cloudinary:`, error);
    throw new ApiError(500, `Cloudinary deletion failed: ${error.message}`);
  }
};
