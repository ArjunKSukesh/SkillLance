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

const app = express();
dotenv.config();
 
app.use(express.json());
//5lmVAMAMBKteq5m5
//arjunkcert 
try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to db')
  } catch (error) {
    console.log(error);
  }
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/user',reviewRoute);
app.use('/api/user',orderRoute);
app.use('/api/user',messageRoute);
app.use('/api/user',gigRoute);
app.use('/api/user',conversationRoute);

app.listen(3000, () => {
    console.log('Port 3000 is running')
}) 