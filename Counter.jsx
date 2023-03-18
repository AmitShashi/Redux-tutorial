import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Redux-Store/CounterSlice'

export function Counter() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{value}</div>  
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}