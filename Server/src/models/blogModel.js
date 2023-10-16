import mongoose from "mongoose"

const blogUploadSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    paragraph:{
        type:String,
        required:true
    },
    image:{
        url: {
            type: String,
            required: true,
        },
        public_id: {
            type: String,
            required: true,
        },
        signature: {
            type: String,
            required: true,
        }
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
}, {timestamps:true})


export default mongoose.model("bloguplod", blogUploadSchema)