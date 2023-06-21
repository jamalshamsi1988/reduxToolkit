import { createSlice } from '@reduxjs/toolkit';
 import { increase as increaseNumber } from '../counter/counterSlice';

const initialState ={
    numberValue : 5
}

const NumberSlice = createSlice({
    name :"number" ,
    initialState ,
    reducers :{
        increase :(state)=>{
            state.numberValue ++;
        },
        decrease :(state)=>{
            state.numberValue --;
        },
    },
    //this is deprecated 
    // extraReducers :{ 
    //     ["counter/increase"] :(state)=>{
    //         state.numberValue ++;
    //     }
    // } new way
        extraReducers :(builder)=>{
            builder.addCase(increaseNumber ,(state,action)=>{
                state.numberValue++
            })
        }
});
export default NumberSlice.reducer;
export const {increase , decrease}=NumberSlice.actions;
export const selectNumber = (state)=> state.number.numberValue;
