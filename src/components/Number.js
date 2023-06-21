import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {decrease, increase, selectNumber } from '../app/featuers/number/numberSlice';

function Number(){

const number = useSelector(selectNumber);
const dispatch=useDispatch();

  return (
    <div>
      <h1>Number is : {number}</h1>
      <button onClick={()=>dispatch(increase())}>Increase</button>
      <button onClick={()=>dispatch(decrease())}>Decrease</button>
      {/* <input type="number" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={()=>dispatch(increaseByAmount(5))}>Increase By Amount</button> */}
    </div>
  )
}

export default Number;
