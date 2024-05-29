import mongoose from 'mongoose';
const {Schema} = mongoose;


const userSchema = new Schema({
    username :{
        type : String,
        required : true,
        unique : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true,
    },
    img :{
        type : String,
        required : false,
    },
    phone :{
        type : String,
        required : false,
    },
    desc :{
        type : String,
        required : false,
    },
    isSeller :{
        type : Boolean,
        default : false,
    },
    address: {
        line1: { type: String, required: true },
        line2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
      },
},{timestamps : true});


export default mongoose.model("User", userSchema)