import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'conter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        }
    }

})

export default counterSlice.reducer
export const {increment}=counterSlice.actions