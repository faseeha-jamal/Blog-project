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
    verifyOtpError:null,
    blogs:[],
    myBlogs:[],
    saveBlogs:[],
    mySaveBlogs:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: ( state, action ) => {
            state.user = action.payload
        },
        setVerifyToken: ( state, action ) =>{
            state.tokens.verifyToken = action.payload
        },
        setAccesToken: ( state, action ) =>{
            state.tokens.accessToken = action.payload
        },
        setLogout: (state) => {
            state.user = {
                _id: null,
                username: null,
                email: null
            };
            state.tokens = {
                accessToken: null,
                verifyToken: null
            };
        } ,
        setBlogs: ( state, action ) => {
            state.blogs = action.payload
        },
        setMyBlogs: ( state, action ) => {
            state.myBlogs = action.payload
        },
        setSaveBlogs: ( state, action ) => {
            console.log("this is save blog action.payload ",action.payload);
            console.log("this is save blog action ",action);
            state.saveBlogs = action.payload
        },
        setMySaveBlogs: ( state, action) => {
            console.log("this is action.payload ",action.payload);
            console.log("this is action ",action);
            state.mySaveBlogs = action.payload
        }
    }
})


export const { setAccesToken, setUser, setVerifyToken,setLogout,setBlogs, setMyBlogs, setSaveBlogs,setMySaveBlogs } = userSlice.actions
export default userSlice.reducer



