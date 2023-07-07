import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:null,
    isAuthenticated:false,
    error:null
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        googleLogin:(state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.error = null
        },
        googleLogout:(state,action)=>{
            state.user = action.payload
            state.isAuthenticated = false
            state.error = null
        },
    }
})

export const {googleLogin,googleLogout} = userSlice.actions;

export default userSlice.reducer;

export const googleLoginAsync = (data) =>async (dispatch)=>{
    try{
        dispatch(googleLogin(data))
    }
    catch(err){
        console.log(err.response)
    }
}

export const googleLogOutAsync = (data) =>async (dispatch)=>{
    try{
        dispatch(googleLogout(data))
    }
    catch(err){
        console.log(err.response)
    }
}