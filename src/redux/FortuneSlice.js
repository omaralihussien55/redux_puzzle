import { createSlice } from "@reduxjs/toolkit";

export const FortuneSlice = createSlice({
name:"fortune",
initialState:{
    rotat:1
},

reducers:{
    wheel:(state,actions)=>{
    let random = Math.random()* 10
    state.rotat = random * 360 + state.rotat
    }
}

})

export const {wheel} = FortuneSlice.actions

export default FortuneSlice.reducer