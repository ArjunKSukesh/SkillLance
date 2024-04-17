import express from 'express';
import { reviewFn } from '../controller/review.controller.js';

const router = express.Router();

router.get('/review', reviewFn )

export default router;