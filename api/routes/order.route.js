import express from 'express';
import { getOrder, orderPayment,paymentVerification } from '../controller/order.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.get('/', verifyToken,getOrder);
router.post('/create-payment/:gigId', verifyToken, orderPayment);  // id is gigId
router.post('/payment-verification/:gigId',verifyToken ,paymentVerification);  // id is gigId

export default router;
