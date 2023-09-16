import express from 'express';
import { userSignupController } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post("/signup", userSignupController)

export { userRouter };