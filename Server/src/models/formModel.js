import mongoose from "mongoose";



const formSchema = schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    conformPassword:{
        type:String,
        require:true
    }
})

const formModel= mongoose.model("post",formSchema) 
export { formModel }

