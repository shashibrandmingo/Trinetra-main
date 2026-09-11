import { Router } from 'express';
import { adminLogin, verifyAdmin } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', adminLogin);
router.get('/verify', verifyAdmin);

export default router;
