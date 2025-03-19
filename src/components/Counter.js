import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { incrementByAmount, selectCounter } from '../features/counterSlice';

import { increment,decrement } from '../features/counterSlice';

const Counter = () => {
    const [value,setValue]=useState(2)
    const counter=useSelector(selectCounter);
    const dispatch=useDispatch();
   
  return (
    <div>
      <h2>The counter is :{counter}</h2>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <input type='number' value={value} onChange={(e)=>setValue(e.target.value)} />
    <button onClick={()=>dispatch(incrementByAmount(+value))}>Increment By Amount</button>


    </div>
  )
}

export default Counter
