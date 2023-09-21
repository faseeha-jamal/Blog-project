import express from 'express';
import { signinController, userSignupController, verifyOtpController } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post("/signup", userSignupController)

userRouter.post("/verify-otp", verifyOtpController)

userRouter.post("/signin", signinController)

export { userRouter };