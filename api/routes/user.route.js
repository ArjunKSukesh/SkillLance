import express from 'express';
import { userFn } from '../controller/user.controller.js';

const router = express.Router();

router.get('/user', userFn )

export default router;