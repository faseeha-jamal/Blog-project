import express from 'express';
import {parseImages} from "../middlewares/multer.js";
import { userAuthorization } from "../middlewares/authorization.js"
import { blogListController, blogUploadController, getForgetPasswordControll, myBlogsController, postForgetPasswordControll, saveBlogController, saveBlogListController, signinController, userSignupController, verifyOtpController } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post("/signup", userSignupController);

userRouter.post("/verify-otp", verifyOtpController);

userRouter.post("/signin", signinController);

userRouter.post("/blog", userAuthorization, parseImages, blogUploadController);

userRouter.get("/blogs", blogListController);

userRouter.get("/my-blogs",userAuthorization, myBlogsController)

userRouter.put("/save-blog/:blogId",userAuthorization, saveBlogController)

userRouter.get("/save-blogs",userAuthorization, saveBlogListController )

// userRouter.get("/forget-password/:email", getForgetPasswordControll);

// userRouter.post("/forget-password/:email", postForgetPasswordControll);

export { userRouter };