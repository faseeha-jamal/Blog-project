import React from 'react';
import {Routes,Route} from "react-router-dom";
import  SigninPage  from '../pages/SigninPage';
import  SignupPage  from '../pages/SignupPage';
import  HomePage  from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import  NotFound from "./NotFound";
import BlogViewPage from '../pages/BlogViewPage';
import OtpPage from '../pages/OtpPage';
import ProfilePage from '../pages/ProfilePage';
import { GuestProtect } from './protectRouter/GuestProtect';
import { UserProtect } from './protectRouter/UserProtect';

function Router() {
  return (
    <Routes>
      <Route path='/user' element={<UserProtect/>}>
          <Route path='/user/home' element={<HomePage />}/> 
          <Route path='/user/blogview' element={<BlogViewPage/>}/>
          <Route path='/user/profile' element={<ProfilePage/>}/>
      </Route>

    <Route path='/' element={<GuestProtect/>}>
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/otp' element={<OtpPage/>}/>
        <Route path='/' element={<LandingPage />}/>
    </Route>
    
    <Route path='*' element={<NotFound/>}/>
   </Routes>
  )
}
export default Router
