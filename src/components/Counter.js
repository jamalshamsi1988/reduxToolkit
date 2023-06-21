import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {decrease, increase, increaseByAmount,selectCounter } from '../app/featuers/counter/counterSlice';

function Counter(){
    const [value, setValue]=useState(2);
const counter = useSelector(selectCounter);
const dispatch=useDispatch();

  return (
    <div>
      <h1>counter is : {counter}</h1>
      <button onClick={()=>dispatch(increase())}>Increase</button>
      <button onClick={()=>dispatch(decrease())}>Decrease</button>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={()=>dispatch(increaseByAmount(+value))}>Increase By Amount</button>
    </div>
  )
}

export default Counter
