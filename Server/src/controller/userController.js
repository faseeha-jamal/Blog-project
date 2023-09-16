import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const userSignupController = async (req, res, next) =>{
    const {username,email,password} = req.body;
    try {
        const userExists = await UserModel.findOne({username});
            if(userExists){
                res.status(400).json({
                    status:400,
                    success:false,
                    message:"User name already exsting"
                })
            }
         const emailExists = await UserModel.findOne({email});
            if(emailExists){
                res.status(400).json({
                    status:400,
                    success:false,
                    message:"email already exsting"
                })
            }
          
        const hashPassword = await bcrypt.hash(password,10)

        const newUser = new UserModel({
            userName:username,
            email:email,
            password:hashPassword
        })

        const savedUser = await newUser.save()

        const accessToken = await jwt.sign({
            userId:savedUser._id,
            email:savedUser.email
        },"secretkey",{ expiresIn: "1h" }
        );
        
        res.status(201).json({
            status:201,
            success:true,
            message:"User account successfully created",
            token:accessToken,
            user:savedUser
            
        }) 
    } catch (error) {
       return next(error) 
    }
}
