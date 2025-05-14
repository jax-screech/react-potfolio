import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "../CounterReducer";
export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const incrementIfOdd = () => {
    if (value % 2 !== 0) {
      dispatch(incremented());
    }
  };
  const incrementAsync = () => {
    setTimeout(() => {
      dispatch(incremented());
    }, 1000);
  };
  return (
    <div className="counter-container">
      <h1 className="title">Redux Counter</h1>
      <h2 className="value">{value}</h2>
      <div className="button-group">
        <button onClick={() => dispatch(incremented())}>Increment</button>
        <button onClick={() => dispatch(decremented())}>Decrement</button>
        <button onClick={incrementIfOdd}>Increment If Odd</button>
        <button onClick={incrementAsync}>Increment Async</button>
      </div>
    </div>
  );
}