import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { decrement, increment } from './counterSlice';



export function Counter() {
  
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  // incrementCounter() {
  //   this.setState({
  //     currentCount: this.state.currentCount + 1
  //   });
  // }

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">Current count: <strong>{count}</strong></p>

      <button className="btn btn-primary" onClick={() => dispatch(increment())}>Increment</button>

      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
  
}
