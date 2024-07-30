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
import {singleFileUpload} from "../middlewares/cloudinary.js"
import saveBlogModel from "../models/saveBlogModel.js";


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
      { expiresIn: 60*60*24*7 }
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
        message: "User not found!",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Wrong password!",
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
    try {
      const uploadedImage = await singleFileUpload(req.file);
 
      if (!uploadedImage.url || !uploadedImage.public_id || !uploadedImage.signature) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "Image upload to Cloudinary failed",
        });
      }
  
      console.log("This is uploaded image URL", uploadedImage.url);
      console.log("This is uploaded image public_id", uploadedImage.public_id);
      console.log("This is uploaded image signature", uploadedImage.signature);

      const { value, error } = blogUploadValidation.validate(
        {
         title:req.body.title, 
         paragraph:req.body.paragraph, 
         image:uploadedImage
       }, 
       {
          abortEarly:true 
       });
      console.log("this values",value);

      if(error){
        return res.status(400).json({
          status:400,
          success:false,
          message:error.message
        })
      }

      const { title, paragraph, image } = value;
      
      let verifyToken = req.verifyToken
      const authorId = verifyToken.userId;
     
      const newUploadBlog = new blogModel({
        title:title,
        paragraph:paragraph,
        image:image,
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


export const blogListController = async ( req, res, next ) => {
    try {
      const blogs = await blogModel.find().populate("authorId","username");
     
      const blogList = blogs.map((blog)=>{
        if(blog._id && blog.authorId && blog.authorId._id){
          return {
            blogId: blog._id,
            title: blog.title,
            image: blog.image,
            paragraph: blog.paragraph,
            authorId: blog.authorId._id,
            authorName: blog.authorId.username
          }
        }else{
          console.log("this blog in else",blog);
        }

      })
      console.log("here is the blog list",blogList);
      return res.status(200).json({
        status:200,
        success:true,
        message:"List of blogs",
        blogs:blogList
      });
      
    } catch (error) {
      console.log("this is error from bloglist",error);
      return next(error)    
    }
}

export const myBlogsController = async ( req, res, next) => {
    try { 
      const userId = req.verifyToken.userId;
      const blogs = await blogModel.find({authorId:userId}).populate("authorId","username");
      console.log("this is my blog blogs",blogs);

      const blogList = blogs.map((blog) => {
        return {
          blogId: blog._id,
          title: blog.title,
          image: blog.image,
          paragraph: blog.paragraph,
          authorId: blog.authorId._id,
          authorName: blog.authorId.username
        }
      })

      return res.status(200).json({
        status:200,
        success:true,
        message:"List of blogs",
        blogs:blogList
      });

    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: "Internal Server Error",
        error: error.message
      });
    }
}


export const saveBlogController = async (req, res, next) => {
    try {
      const { blogId } =req.params;
      console.log("this is blog id",blogId);
      const userId = req.verifyToken.userId;
      console.log("this is user id",userId);

      const existingSavedBlog = await saveBlogModel.findOne({ userId:userId, blogIds: { $in: [blogId]}});
      
      if(existingSavedBlog){
        res.status(400).json({
          status:400,
          success:false,
          message:"This blog is already saved"
        })
      } 

      const savedBlog = await saveBlogModel.findOneAndUpdate({ userId},{$addToSet:{blogIds:blogId}},{upsert:true,new:true})

    
      res.status(200).json({
              status:200,
              success:true,
              message:"Blog saved successfully",
              saveBlog:savedBlog
            })

    } catch (error) {
      return next(error)
    }
}


export const saveBlogListController = async (req, res, next) => {
  try {
    const userId = req.verifyToken.userId;

    // Retrieve the saved blog IDs for the user
    const savedBlogs = await saveBlogModel.findOne({ userId })
    console.log("This is savedBlogs",savedBlogs);

    if (!savedBlogs || !savedBlogs.blogIds || savedBlogs.blogIds.length === 0) {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "No blogs saved by the user",
        savedBlogs: [],
      });
    }

    // Retrieve the details of the saved blogs
    const savedBlogIds = savedBlogs.blogIds;
    console.log("This is savedBlogIds",savedBlogIds);
    const savedBlogDetails = await blogModel.find({ _id: { $in: savedBlogIds } }).populate("authorId", "username");
    console.log("this is save blog details",savedBlogDetails);

    const savedBlogList = savedBlogDetails.map((blog) => ({
      blogId: blog._id,
      title: blog.title,
      image: blog.image,
      paragraph: blog.paragraph,
      authorId: blog.authorId._id,
      authorName: blog.authorId.username,
    }));

    return res.status(200).json({
      status: 200,
      success: true,
      message: "List of saved blogs for the user",
      savedBlogs: savedBlogList,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


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

