import React, { useReducer } from "react";
import './Counter.css'
interface State {
  count: number;
}

interface Action {
  type: "INCREMENT" | "DECREMENT" | "RESET";
}

const initialState: State = { count: 0 };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Counter=() => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="counter-container">
      <h2>Counter: {state.count}</h2>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

