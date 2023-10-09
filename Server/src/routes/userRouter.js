import express from 'express';
import { blogUploadController, getForgetPasswordControll, postForgetPasswordControll, signinController, userSignupController, verifyOtpController } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post("/signup", userSignupController);

userRouter.post("/verify-otp", verifyOtpController);

userRouter.post("/signin", signinController);

userRouter.post("/blog", blogUploadController)

// userRouter.get("/forget-password/:email", getForgetPasswordControll);

// userRouter.post("/forget-password/:email", postForgetPasswordControll);

export { userRouter };