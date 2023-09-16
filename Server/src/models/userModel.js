import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true, 
    },
    profilePicture:{
        type:String,
        required:false, 
    },
    isBlocked:{
        type:Boolean,
        default:false 
    },
    isVerified:{
        type:Boolean,
        default:false
    }

},{timestamps:true})

export default mongoose.model("user",userSchema)