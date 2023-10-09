import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../utils/validations/signinValidation.js";
import axiosIntance from "../app/config.js"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import { setAccesToken, setUser } from "../redux/reducers/userSlice";


function SigninPage() {
  const dispatch = useDispatch();
  const navigatae = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:validationSchema,
    onSubmit:async (values) => {
      try {
        const response = await axiosIntance.post('/signin',{
          email:values.email,
          password:values.password
        })

        dispatch(setAccesToken(response.data.accesToken))
        dispatch(setUser(response.data.user))

        navigatae("/home")

      } catch (error) {
        console.log("this catch error",error);
        
      }
      console.log("this is values", values);
    },
  });

  return (
    <div className="w-full h-screen text-black flex justify-center items-center ">
      {/* main section  */}
      
        {/* form section  */}
        <div className="py-5 text-center md:flex gap-5 w-[95%] m-auto lg:w-[70%] shadow-2xl shadow-black md:rounded-2xl overflow-hidden md:p-0">
          <div className="my-14 w-[90%] border-[1px] border-zinc-800 m-auto py-10 rounded-xl sm:py-20 md:w-[48%] md:py-0 md:border-none">
            <h1 className="text-3xl font-semibold ">Welcome to our Blog</h1>
            <p className="text-lg font-light my-5">Signin</p>
            <div className="flex flex-col w-3/4 m-auto text-[10px] my-5">
              <InputField
               type="email"
               name="email"
                placeHolder="Email"
                onChange={formik.handleChange} 
                value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-left text-red-700"> {formik.errors.email} </p>
                )}
              <InputField
               type="password"
                placeHolder="Password"
                name="password"
                onChange={formik.handleChange} 
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-left text-red-700"> {formik.errors.password} </p>
              )}
              <p className="text-left text-xs mt-3 ml-2">Forget Password</p>
            </div>
            <Button text="Sign-in" isPrimary={true} onClick={formik.submitForm} />
            <p className="text-sm m-10">
              Don't have an Account?
              <span className="text-zinc-700">Signup</span>
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

export default SigninPage;
