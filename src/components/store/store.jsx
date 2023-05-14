import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../slice/slice";



export const store = configureStore ({
    reducer:{
        meal: mealReducer
    }
})