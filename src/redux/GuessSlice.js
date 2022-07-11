import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { GuessArray } from "../data/data";
import k1 from '../img/1k.png'

export const GuessSlice = createSlice({
name:"guess",
initialState:{
 guessArr : GuessArray,
 item:{id:"1",photo:k1,rol:false},
 arr:[],
 count : 1,
  correctnum : 0,
  errornum :0,
  click:false,
  showOverLay:false,
  showMasge :false
},
reducers:{
    play:(state,action)=>{
        if(action.payload.type=="next"){
            state.count = state.count + 1
        }else{
            state.count = 1
        }
        state.showMasge = false
        state.showOverLay = false
        state.click = false
        state.showResultOverLay = false
        state.guessArr = GuessArray
        

        let current =action.payload.item.length;
        let random2 =   Math.floor(Math.random() * current)
        state.item = state.guessArr[random2]
        let random;
        let temp
    
        while(current > 0 ){
          random = Math.floor(Math.random() * current)
     
          current--
    
         temp= action.payload.item[current]
    
         action.payload.item[current] = action.payload.item[random]
    
         action.payload.item[random] = temp
        
        }
    
        state.arr = action.payload.item 
       
    },
    addGuess:(state,action)=>{
     let v = state.guessArr.map((i)=>{
            if(i.id== state.item.id){
                  i.rol = true
                   return i
              
            }else{
              
                return i
            }
        })


state.guessArr = v
if(action.payload==state.item.id){
    state.correctnum = state.correctnum + 1
   
    state.showResultOverLay = true
}else{

    state.errornum  = state.errornum + 1
    
    state.showResultOverLay = false
}
   state.click = true
   state.showOverLay = true
   state.showMasge = false
    },

    reset:(state,action)=>{
        if(action.payload =="home"){
            state.count = 0
        }else{
            state.count = 1
        }
        
        state.correctnum = 0
        state.errornum = 0
        state.click = false
        state.showResultOverLay = false
        state.showOverLay = false
        state.showMasge = false
    },
    masage:(state)=>{
  state.showMasge = true

    }
}
})

export const {addGuess,play,reset,masage} = GuessSlice.actions
export default GuessSlice.reducer