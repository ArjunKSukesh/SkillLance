import express from 'express';
import { gigFn } from '../controller/gig.controller.js';

const router = express.Router();

router.get('/gig', gigFn )

export default router;