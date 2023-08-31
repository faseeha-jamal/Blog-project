import React from 'react'
import {Routes,Route} from "react-router-dom"
import { SigninPage } from '../pages/SigninPage'
import { SignupPage } from '../pages/SignupPage'
import { HomePage } from '../pages/HomePage'
import { LandingPage } from '../pages/LandingPage'
import { VerifyOtpPage } from '../pages/VerifyOtpPage'

export const Router = () => {
  return (
   <Routes>
    <Route path='/signin' element={SigninPage}/>
    <Route path='/signup' element={SignupPage}/>
  
    <Route path='/verify-otp' element={VerifyOtpPage}/>

   </Routes>
  )
}
