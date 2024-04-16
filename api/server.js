import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
 

//5lmVAMAMBKteq5m5
//arjunkcert 
try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to db')
  } catch (error) {
    console.log(error);
  }


app.listen(3000, () => {
    console.log('Port 3000 is running')
}) 