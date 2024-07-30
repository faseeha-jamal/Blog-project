import mongoose from "mongoose";

const saveBlogSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
        unique:true
    },
    blogIds:{
        type:[String]
    }
    
},{ timestamps:true })

export default mongoose.model("saveblog",saveBlogSchema)