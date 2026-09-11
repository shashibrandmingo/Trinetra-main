import { Router } from 'express';
import healthRoutes from './health.routes.js';
import blogRoutes from './blog.routes.js';
import galleryRoutes from './gallery.routes.js';
import inquiryRoutes from './inquiry.routes.js';
import authRoutes from './auth.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/blogs', blogRoutes);
router.use('/gallery', galleryRoutes);
router.use('/inquiries', inquiryRoutes);
router.use('/auth', authRoutes);

export default router;
