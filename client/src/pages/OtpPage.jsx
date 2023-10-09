import React, { useEffect } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../utils/validations/otpValidation";
import { useDispatch, useSelector } from 'react-redux';
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import axiosIntance from "../app/config.js";
import { setUser } from "../redux/reducers/userSlice";

function OtpPage() {
  const verifyToken = useSelector((state) => state.userReducer.tokens.verifyToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!verifyToken) {
      navigate("/signup");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      otp: "",
      verifyToken,
    },
    validationSchema:validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axiosIntance.post("/verify-otp", {
          otp: values.otp,
          verifyToken: values.verifyToken,
        });

        dispatch(setUser(response.data.user));

        navigate("/home");
        
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  });

  return (
    <div className="w-full h-screen bg-white text-black flex justify-center items-center ">
       {/* main section  */}
      <div className="w-full bg-white text-center py-12  sm:w-[60%] m-auto md:w-[90%] md:m-auto lg:w-[75%] ">
         {/* form section  */}
        <div className="py-5 md:flex gap-5 w-[95%] m-auto lg:w-[90%] shadow-2xl shadow-black md:rounded-2xl overflow-hidden md:p-0">
            <div className="w-[90%] border-[1px] border-zinc-800 m-auto py-10 rounded-xl sm:py-20 md:w-[35%] md:py-0 md:border-none">
             
              <div className="w-full flex justify-center items-center">
                <p className="bg-zinc-300 w-12 h-12 my-10 rounded-full text-black flex justify-center items-center">
                  <i class="fa-solid fa-key text-xl"></i>
                </p>
              </div>
              <h1 className="text-2xl font-semibold ">Enter Code</h1>
              <p className="text-sm font-light my-10">
                Enter the OTP code that we sent to your email.
              </p>
             
             <InputField 
             type="number" 
             placeHolder="Enter OTP"
             name="otp"
             onChange={formik.handleChange}
             value={formik.values.otp}
              />
              {formik.touched.otp && formik.errors.otp && (
                <p className="text-sm text-left text-red-700"> { formik.errors.otp} </p>
              )}
              <br />
              <Button text="Verify otp" onClick={formik.submitForm} isPrimary={true} />
              <p className="text-sm my-5">
                Already have an Account?<span>Login</span>
              </p>
            </div>
            {/* imag section  */}
            <div className="hidden md:flex w-[45%] bg-[url(./src/assets/street.jpg)] bg-cover  lg:w-[48%] relative">
                <p className="w-[70%] text-left absolute left-5 bottom-24 text-white">"The streets of Madrid are characterized by their unique and vibrant beauty, with green trees, old houses, artistic landmarks, beautiful gardens,
                     unique shops, and exciting cultural events that make visiting them a fun and exciting experience."<br/>
                    Streets <br/>
                    Madrid, Sipw
               </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
