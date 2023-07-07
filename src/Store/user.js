import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {auth} from "../firebase"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
 } from "firebase/auth";


export const signUP = createAsyncThunk(
    "signup",
    async(data)=>{
        return await createUserWithEmailAndPassword(auth,data.email,data.password)
    }
)
export const logIN = createAsyncThunk(
    "login",
    async(data)=>{
        return await signInWithEmailAndPassword(auth,data.email,data.password)
    }
)

export const signOUT = createAsyncThunk(
    "signout",
    async()=>{
        return await signOut(auth)
    }
)


const userSlice = createSlice({
    name: "User",
    initialState:{
        user: [],
        isLogged:false,
        isLoading: false,
        isError: false

    },
    extraReducers:(builder)=>{
        builder.addCase(signUP.pending,(state,action)=>{
            state.isLoading = true
        });
        builder.addCase(signUP.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.user = action.payload
            state.isLogged = true
        });
        builder.addCase(signUP.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
        });
        builder.addCase(logIN.pending,(state,action)=>{
            state.isLoading = true
        });
        builder.addCase(logIN.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.user = action.payload
            state.isLogged = true
        });
        builder.addCase(logIN.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
        });
        builder.addCase(signOUT.fulfilled,(state,action)=>{
           
            state.isLogged = false
        });
    }

})

export default userSlice.reducer