import express from 'express';
import { orderFn } from '../controller/order.controller.js';

const router = express.Router();

router.get('/order', orderFn )

export default router;