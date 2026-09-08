import { Router } from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogByIdOrSlug,
  updateBlog,
  deleteBlog,
} from '../controllers/blog.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

// Route: /api/v1/blogs
router
  .route('/')
  .get(getAllBlogs)
  .post(upload.single('banner'), createBlog);

// Route: /api/v1/blogs/:idOrSlug
router.route('/:idOrSlug').get(getBlogByIdOrSlug);

// Route: /api/v1/blogs/:id
router
  .route('/:id')
  .put(upload.single('banner'), updateBlog)
  .delete(deleteBlog);

export default router;
