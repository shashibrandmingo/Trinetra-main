import { Router } from 'express';
import {
  uploadMedia,
  getAllMedia,
  getMediaById,
  deleteMedia,
} from '../controllers/gallery.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

// Route: /api/v1/gallery
router
  .route('/')
  .get(getAllMedia)
  .post(upload.single('image'), uploadMedia);

// Route: /api/v1/gallery/:id
router
  .route('/:id')
  .get(getMediaById)
  .delete(deleteMedia);

export default router;
