import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signupValidation } from "../utils/validations/signupValidation.js";
import { generateOtp } from "../utils/servicess.js";
import AuthModel from "../models/authModel.js";
import { verifyOtpValidation } from "../utils/validations/verifyOtpValidation.js";
import { signinValidation } from "../utils/validations/signinValidation.js";
import { blogUploadValidation } from "../utils/validations/blogUploadValidation.js";
import blogModel from "../models/blogModel.js";

export const userSignupController = async (req, res, next) => {
  try {
    const { value, error } = signupValidation.validate(req.body, {
      abortEarly: true,
    });
    if (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: error.message,
      });
    }

    const { username, email, password } = value;

    const emailExists = await UserModel.findOne({ email });

    if (emailExists && emailExists.isVerified === false) {
      const deleted = await UserModel.findByIdAndDelete(emailExists._id)
    } else if (emailExists) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "email already exsting",
      });
    }

    const userExists = await UserModel.findOne({ username });
    if (userExists) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "User name already exsting",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username: username,
      email: email,
      password: hashPassword,
    });

    const savedUser = await newUser.save();

    const verifyToken = await jwt.sign(
      {
        userId: savedUser._id,
        email: savedUser.email,
      },
      "secretkey",
      { expiresIn: 60*10 }
    );

    const otp = generateOtp();

    await AuthModel.findOneAndUpdate(
      { email },
      { otp },
      { upsert: true }
    );
    console.log("this is otp:",otp);

    return res.status(201).json({
      status: 201,
      success: true,
      message: "User account successfully created",
      verifyToken: verifyToken,
    });
  } catch (error) {
    return next(error);
  }
};


export const verifyOtpController = async (req, res, next) => {
  try {
    const { value, error } = verifyOtpValidation.validate(req.body, {
      abortEarly: true,
    });
    if (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: error.message,
      });
    }

    const { otp, verifyToken } = value;

    const payload = await jwt.verify(verifyToken, "secretkey");

    if (!payload.userId || !payload.email) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Invalid verify token",
      });
    }

    const authFound = await AuthModel.findOne({
      email: payload.email,
      otp: otp,
    });

    if (!authFound) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Invalid otp",
      });
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: payload.userId },
      { $set: { isVerified: true } },
      { new: true }
    );

     await AuthModel.deleteOne({
      email: payload.email,
      otp: otp,
    });

    const accessToken = jwt.sign(
      {
        userId: updatedUser._id,
        uerEmail: updatedUser.email,
      },
      "secretkey",
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      status: 201,
      success: true,
      message: "User account successfully created",
      accessToken: accessToken,
      user: {
        _id: updatedUser._id,
        email: updatedUser.email,
        username: updatedUser.username
      }
    });
  } catch (error) {
    return next(error);
  }
};

export const signinController = async (req, res, next) => {
  try {
    const { value, error } = signinValidation.validate(req.body, {
      abortEarly: true,
    });

    if (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: error.message,
      });
    }

    const { email, password } = value;

    const user = await UserModel.findOne({ email: email });

    if (user && user.isVerified === false) {
      await UserModel.deleteOne({ email: email });
    } else if (!user) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Email deosen't exist",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Password not a match",
      });
    }

    const accessToken = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      "secretkey",
      { expiresIn: "7d" }
    );
    console.log(accessToken);

    return res.status(200).json({
      status: 200,
      success: true,
      message: "User account successfully created",
      accessToken: accessToken,
      user: {
        _id: user._id,
        email: user.email,
        username: user.username
      }
    });
  
  } catch (error) {
    console.log(error);
    return next(error);
  }
};


export const blogUploadController = async (req, res, next) => {
  let verifyToken;
    try {
      const token = req.headers.authorization.split(" ")[1];
      console.log("this is bearer token",token);
    if (!token) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: "Unauthorized: Missing token",
      });
    }
     verifyToken = await jwt.verify(token, "secretkey")
     console.log("this is verify token",verifyToken);

    } catch (error) {
      if (!verifyToken || !verifyToken.userId) {
        return res.status(401).json({
          status: 401,
          success: false,
          message: "Unauthorized: Invalid token",
        });
      } 
    }

    try {
      
      const { value, error } = blogUploadValidation.validate(req.body, {abortEarly:true});

      if(error){
        return res.status(400).json({
          status:400,
          success:false,
          message: error.message
        })
      }
       
      const { title, paragraph, image } = value;
      
      console.log("this is decoded token",verifyToken);
      const img ="https://unsplash.com/photos/M1aV9mU3MTI;";
      const authorId = verifyToken.userId

      const newUploadBlog = new blogModel({
        title:title,
        paragraph:paragraph,
        image:img,
        authorId:authorId
      })

      const savedUploadBlog = await newUploadBlog.save()

     res.status(200).json({
      status:200,
      success:true,
      message:"Blog Uploaded successfully",
      data:savedUploadBlog
     })
    } catch (error) {
      console.log("this  is catch error", error);
       next(error)
    }
}


export const getForgetPasswordControll = async (req, res, next) => {
    const { email } = req.params;
    
    const otp = generateOtp()

    const emailOtpData = new AuthModel({
      email:email,
      otp:otp
    });

    const savedEmailOtp = await emailOtpData.save()

    const verifyToken = jwt.sign({
      _id:savedEmailOtp._id,
      email:savedEmailOtp.email
    })
}

export const postForgetPasswordControll = async (req, res, next) => {
     
}