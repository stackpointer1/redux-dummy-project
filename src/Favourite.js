import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Favourite() {
  //here counter is manage  by the redux
  //when we use Selector.react-redux will automatically  set the subscription to the redux store for this component
  //so your component will be update and will recieve the latest state automatically whenevver the sore date changes.
  //so its an automatically reactiveand changes to teh redux store will cause this componen function to be executed.

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  //adding extra payload to the action
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const toggleCounterHandle = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div className="Producr">
      <h1>Redux -Counter</h1>
      {show && <div className>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandle}>Toggle Counter</button>
    </div>
  );
}
