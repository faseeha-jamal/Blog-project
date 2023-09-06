import React from 'react';
import {Routes,Route} from "react-router-dom";
import  SigninPage  from '../pages/SigninPage';
import  SignupPage  from '../pages/SignupPage';
import  HomePage  from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import  VerifyOtpPage  from '../pages/VerifyOtpPage';
import  NotFound from "./NotFound";
import BlogViewPage from '../pages/BlogViewPage';
import OtpPage from '../pages/OtpPage';

function Router() {
  return (
    <Routes>
    <Route path='/signin' element={<SigninPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/home' element={<HomePage />}/>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/verify-otp' element={<VerifyOtpPage/>}/>
    <Route path='/blogview' element={<BlogViewPage/>}/>
    <Route path='/otp' element={<OtpPage/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
  )
}
export default Router
