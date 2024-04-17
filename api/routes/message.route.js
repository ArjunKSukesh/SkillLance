import express from 'express';
import { messageFn } from '../controller/message.controller.js';

const router = express.Router();

router.get('/message', messageFn )

export default router;