import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const verifuser = createAsyncThunk("Signin/verifuser", async (setsign)=>{
    return axios.post("http://localhost:9000/Signin", setsign)
    .then(res => {return res.data})
    .catch(err => console.log(err))
})
const TaskSlice = createSlice({
    name : "Tasks",
    initialState : {
        tasks :[],
        status : "",
        erreur : ""
    },
    reducers:{
    },
    extraReducers : (builder) =>{
        builder.addCase(verifuser.fulfilled, (state, action)=>{
            state.tasks=action.payload
            state.status="Accepted"
        })
        .addCase(verifuser.rejected, (state, action)=>{
            state.erreur=action.payload
            state.status="Rejected"
        })
        .addCase(verifuser.pending, (state, action)=>{
            state.status="Pending"
        }) 
    }
})
export default TaskSlice.reducer