import { configureStore } from "@reduxjs/toolkit";


import counterReducer from "../app/featuers/counter/counterSlice";
import numberReducer from '../app/featuers/number/numberSlice';
import usersReducer from "./featuers/users/usersSlice";


const store = configureStore({
    reducer:{
        counter : counterReducer,
        number : numberReducer ,
        users : usersReducer,
    }
});
export default store;