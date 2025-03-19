
import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../features/counterSlice";
import numberReducer from "../features/numberSlice";


const store=configureStore({
    reducer:{
        counter:counterReducer,
        number:numberReducer
     }
});

export default store;