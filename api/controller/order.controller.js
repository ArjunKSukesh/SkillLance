import createError from "../utils/createError.js";
import Gig from '../models/gig.model.js';
import Order from '../models/order.model.js';
import User from '../models/user.model.js';
import {razorpay} from '../server.js'
import crypto from 'crypto';







export const orderPayment = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);
    const options = {
        amount  : gig.price * 100,
        currency : "INR",
        receipt : `receipt_order_${gig._id}`
    };

    const order = await razorpay.orders.create(options);
    
       
    res.status(200).json({success : true ,order});
  } catch (err) {
    next(err)
  }
}

export const paymentVerification = async (req, res, next) => {
    
    try {
        const gig = await Gig.findById(req.params.gigId);
        const {razorpay_payment_id, razorpay_order_id, razorpay_signature}  = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
        .createHmac("sha256",process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");
        

       

        const isAuthenticate = expectedSignature === razorpay_signature;

        if(isAuthenticate){
            const newOrder = new Order({
                gigId : gig._id,
                img: gig.cover,
                title: gig.title,
                buyerId : req.userId,
                sellerId: gig.userId,
                price: gig.price,
                payment_intent : razorpay_payment_id
                });
        
            await newOrder.save();
            res.status(200).send({success : true});

        }else{
            res.status(400).json({ success: false, message: "Invalid signature" });
        }


    } catch (error) {
     next(error)   
    }


  
}



export const getOrder = async (req, res,next) => {
    try {
        const orders = await Order.find({
            ...(req.isSeller ? {sellerId : req.userId} : {buyerId : req.userId}),
            // isCompleted : true
        });

        res.status(200).send(orders)
    } catch (err) {
        next(err);
    }
}



// export const createOrder =async (req, res,next) => {

//     try {
            
//         const gig = await Gig.findById(req.params.gigId);

//         const newOrder = new Order({
//             gigId : gig._id,
//             img: gig.cover,
//             title: gig.title,
//             buyerId : req.userId,
//             sellerId: gig.userId,
//             price: gig.price,
//             payment_intent : "temperory"
//         });
//         await newOrder.save();
//         res.status(200).send("Success")

//     } catch (err) {
//         next(err);
//     }
// }


