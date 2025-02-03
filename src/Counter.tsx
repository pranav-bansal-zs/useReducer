import { useReducer } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { RiResetLeftFill } from "react-icons/ri";

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
        <button onClick={() => dispatch({ type: "INCREMENT" })}><IoMdAdd style={{fontSize:"1.5rem"}} /></button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}><RiSubtractFill style={{fontSize:"1.5rem"}} /></button>
        <button onClick={() => dispatch({ type: "RESET" })}><RiResetLeftFill style={{fontSize:"1.5rem"}} /></button>
      </div>
    </div>
  );
};

export default Counter;

