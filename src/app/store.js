import { configureStore } from "@reduxjs/toolkit";
import GuessSlice from "../redux/GuessSlice";
import FortuneSlice from "../redux/FortuneSlice";

const store = configureStore({
    reducer:{
        guess:GuessSlice,
        fortun:FortuneSlice
    }
})

export default store