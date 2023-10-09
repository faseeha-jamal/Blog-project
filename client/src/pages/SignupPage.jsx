import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { useFormik } from "formik";
import {validationSchema} from "../utils/validations/signupValidation"
import { useDispatch } from 'react-redux';
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import axiosIntance from "../app/config.js"
import { setVerifyToken } from "../redux/reducers/userSlice";

function SignupPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        try {
          const response = await axiosIntance.post('/signup',{
            username:values.username,
            email:values.email,
            password:values.password
          });

          dispatch(setVerifyToken(response.data.verifyToken))
          
          navigate('/otp')
         
          console.log("this is ",response);
        } catch (error) {
           console.log("this is cath",error);
        }
      console.log("this is values", values);
    },
  });

  return (
    <div className="w-full h-screen text-black flex justify-center items-center ">
        {/* form section  */}
        <div className="py-5 md:flex gap-5 w-[95%] m-auto lg:w-[80%] xl:w-[70%] shadow-2xl shadow-black md:rounded-2xl overflow-hidden md:p-0">
          <div className="my-5 w-[90%] text-center border-[1px] border-zinc-800 m-auto py-10 rounded-xl sm:py-20 md:w-[48%] md:py-0 md:border-none">
            <h1 className="text-3xl font-semibold ">Signup</h1>
            <p className="text-sm font-light my-5">Create You'r Account</p>
            <div className="flex flex-col w-[90%] m-auto text-[10px] my-5">
              <InputField
                type="text"
                name="username"
                placeHolder="Username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-700 text-sm text-left">{formik.errors.username}</p>
              )}
              <InputField
                type="email"
                name="email"
                placeHolder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-700 text-left">{formik.errors.email}</p>
              )}
              <InputField
                type="password"
                name="password"
                placeHolder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-red-700 text-left"> {formik.errors.password} </p>
              )}
              <InputField
                type="password"
                name="confirmPassword"
                placeHolder="Confirm Password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
               {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-sm text-red-700 text-left"> {formik.errors.confirmPassword} </p>
              )}
            </div>
            <Button text="Sign-up" onClick={formik.submitForm} isPrimary={true}/>
            <p className="text-sm mt-10 ">
              By Signing up,you agree to{" "}
              <span className="text-zinc-700">Term of Use</span> and{" "}
              <span className="text-zinc-700">Privacy Policy</span>
            </p>
            <p className="text-sm mt-4">
              Already Signing Up?<span className="text-zinc-700">Signin</span>
            </p>
          </div>
          {/* imag section  */}
          <div className="hidden md:flex w-[45%] bg-[url(./src/assets/blog3.jpg)] bg-cover  lg:w-[48%] relative">
            <p className="w-[70%] text-left font-semibold absolute left-10 top-44 text-white">
              "When you’re trying to become a successful blogger, it always
              helps to look at popular blogs to see what other people are doing
              right! When I talk about popular blogs, I’m looking at blogs in a
              variety of niches that have crazy traffic and make lots of money."
            </p>
          </div>
        </div>
      
    </div>
  );
}

export default SignupPage;
