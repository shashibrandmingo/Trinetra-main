import { Router } from 'express';
import {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from '../controllers/inquiry.controller.js';

const router = Router();

// Route: /api/v1/inquiries
router.route('/').get(getAllInquiries).post(createInquiry);

// Route: /api/v1/inquiries/:id
router.route('/:id').patch(updateInquiryStatus).delete(deleteInquiry);

export default router;
