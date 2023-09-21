import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    otp:{
        type:Number,
        required:true
    }
},{timestamps:true})

export default mongoose.model("auth",authSchema)