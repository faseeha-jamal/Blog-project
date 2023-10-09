import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user:{
        _id:null,
        username:null,
        email:null
    },
    tokens:{
        accessToken:null,
        verifyToken:null
    },
    isSigninLoading:false,
    signinError:null,
    isSignupLoading:false,
    signupError:null,
    isVerifyOtpLoading:false,
    verifyOtpError:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: ( state, action ) => {
            state.user = action.payload
        },
        setVerifyToken: ( state, action ) =>{
            console.log("this is action.payload ",action.payload);
            console.log("this is action ",action);
            state.tokens.verifyToken = action.payload
        },
        setAccesToken: ( state, action ) =>{
            state.tokens.accessToken = action.payload
        }   
    }
})


export const { setAccesToken, setUser, setVerifyToken} = userSlice.actions
export default userSlice.reducer



