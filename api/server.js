import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import reviewRoute from './routes/review.route.js'
import orderRoute from './routes/order.route.js'
import messageRoute from './routes/message.route.js'
import gigRoute from './routes/gig.route.js'
import conversationRoute from './routes/conversation.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();
 
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:'http://localhost:5173',credentials:true}));

try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to db')
  } catch (error) {
    console.log(error);
  }
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/review',reviewRoute);
app.use('/api/order',orderRoute);
app.use('/api/message',messageRoute);
app.use('/api/gigs',gigRoute);
app.use('/api/conversation',conversationRoute);




app.use((err, req, res, next) => {
  const errorStatus = err.status || 500 ;
  const errorMessage = err.message || 'Something went wrong !!!';

  return res.status(errorStatus).send(errorMessage);

})

app.listen(3000, () => {
    console.log('Port 3000 is running')
}) 

