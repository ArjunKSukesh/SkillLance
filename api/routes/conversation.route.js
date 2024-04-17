import express from 'express';
import { conversationFn } from '../controller/conversation.controller.js';

const router = express.Router();

router.get('/conversation', conversationFn )

export default router;