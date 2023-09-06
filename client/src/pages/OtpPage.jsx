import React from "react";

function OtpPage() {
  return (
    <div className="w-full h-screen bg-black text-black flex justify-center items-center ">
       {/* main section  */}
      <div className="w-full bg-white text-center py-12  sm:w-[60%] m-auto md:w-[90%] md:m-auto lg:w-[60%] ">
         {/* form section  */}
        <div className="py-5 md:flex gap-5 w-[95%] m-auto lg:w-[90%] shadow-2xl shadow-black md:rounded-2xl overflow-hidden md:p-0">
            <div className="w-[90%] border-[1px] border-zinc-800 m-auto py-10 rounded-xl sm:py-20 md:w-[48%] md:py-0 md:border-none">
             
              <div className="w-full flex justify-center items-center">
                <p className="bg-zinc-300 w-12 h-12 my-10 rounded-full text-black flex justify-center items-center">
                  <i class="fa-solid fa-key text-xl"></i>
                </p>
              </div>
              <h1 className="text-2xl font-semibold ">Enter Code</h1>
              <p className="text-sm font-light my-10">
                Enter the OTP code that we sent to your email.
              </p>
              <input
                type="text"
                placeholder="Enter OTP"
                className="border-[1px] border-zinc-800 text-sm px-5 py-2"
              />
              <br />
              <button className="bg-zinc-800 text-white px-16 rounded-3xl py-2 mt-20">
                Verify Email
              </button>
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
