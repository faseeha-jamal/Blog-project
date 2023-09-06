import React from 'react'
import InputField from '../components/common/InputField'

function SigninPage() {
  return (
<div className="w-full h-screen bg-black text-black flex justify-center items-center ">
       {/* main section  */}
      <div className="w-full bg-white text-center py-12  sm:w-[60%] m-auto md:w-[90%] md:m-auto lg:w-[60%] ">
         {/* form section  */}
        <div className="py-5 md:flex gap-5 w-[95%] m-auto lg:w-[90%] shadow-2xl shadow-black md:rounded-2xl overflow-hidden md:p-0">
            <div className="my-14 w-[90%] border-[1px] border-zinc-800 m-auto py-10 rounded-xl sm:py-20 md:w-[48%] md:py-0 md:border-none">
          
              <h1 className="text-3xl font-semibold ">Welcome to our Blog</h1>
              <p className="text-lg font-light my-5">
                Signin
              </p>
              <div className='flex flex-col w-3/4 m-auto text-[10px] my-5'>
                <InputField type="email" placeHolder='Email'/>
                <InputField type='password' placeHolder="Password"/>
                <p className='text-left text-xs mt-2 ml-2'>Forget Password</p>
              </div>
              <button className="bg-zinc-800 text-white px-16 rounded-3xl py-2 mt-10">
                Signin
              </button>
              <p className="text-md m-10">
                Don't have an Account?<span className='text-zinc-700'>Signup</span>
              </p>
            </div>
            {/* imag section  */}
            <div className="hidden md:flex w-[45%] bg-[url(./src/assets/blog3.jpg)] bg-cover  lg:w-[48%] relative">
               <p className="w-[70%] text-left font-semibold absolute left-4 bottom-16 text-zinc-950">"When you’re trying to become a successful blogger, 
                 it always helps to look at popular blogs to see what other people are doing right!
                When I talk about popular blogs, I’m looking at blogs in a variety of niches that have crazy traffic and make lots of money."                   
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
