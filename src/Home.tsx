import  { useState } from "react";
import "./Home.css";
import Implementation from "./Implementation.tsx";
import Heading from "./Heading.tsx";
import Game from "./Game.tsx";
import Counter from "./Counter.tsx";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Home = () => {
  const code = `
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
    
  eturn (
    <div className="counter-container">
      <h2>Counter: {state.count}</h2>
        <div className="buttons">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
        <IoMdAdd style={{fontSize:"1.5rem"}} />
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
        <RiSubtractFill style={{fontSize:"1.5rem"}} />
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>
        <RiResetLeftFill style={{fontSize:"1.5rem"}} />
        </button>
      </div>
    </div>
  );
};
    
export default Counter;
    `;
  const [implementation, setImplementation] = useState<boolean>(false);
  const [game, setGame] = useState<boolean>(false);
  const [showcode,setShowcode]=useState<boolean>(false);

  function handleclick() {
    setImplementation((prev) => !prev);
  }

  function handlegame() {
    setGame((prev) => !prev);
  }

  return (
    <div className="container" >
      <h1 className="main-heading">useReducer</h1>
      <Heading
        heading={"Introduction"}
        headingcolor={"#1B3C73"}
        children={
          <>
          <p style={{ color: "#0A97B0", fontWeight: "bold" }}>
            🚀 A React hook for managing complex state logic, particularly when:</p>
            <p><TbCircleNumber1Filled style={{fontSize:'1.3rem'}}/> State transitions depend on previous values</p>
            <p><TbCircleNumber2Filled style={{fontSize:'1.3rem'}}/> Multiple state values are interdependent</p>
            <p><TbCircleNumber3Filled style={{fontSize:'1.3rem'}}/> Logic involves non-trivial updates</p>
          </>
        }
      />

      <Heading
        heading={"Master the useReducer Hook"}
        headingcolor={"#1B3C73"}
        children={
          <>
            <p style={{ color: "#0A97B0", fontWeight: "bold" }}>
              🎭 Think of Your App as a Theater Play 🎭
            </p>
            <p><TbCircleNumber1Filled style={{fontSize:'1.3rem'}}/> Actors (Components) perform actions.</p>
            <p><TbCircleNumber2Filled style={{fontSize:'1.3rem'}}/> A Script (Reducer) decides what happens.</p>
            <p><TbCircleNumber3Filled style={{fontSize:'1.3rem'}}/> The Director (useReducer) manages the play.</p>
            <p style={{ color: "#0A97B0" }}>
              Instead of using <b>useState</b> to manage state directly, <b>useReducer</b> acts as a
              centralized manager that updates the state based on defined rules (reducer function).
            </p>
          </>
        }
      />

      <Heading
        heading={"Syntax"}
        headingcolor={"#1B3C73"}
        children={
          <>
            <img src="syntax.png" alt="syntax" className="syntax-image" />
            <p>
            <TbCircleNumber1Filled style={{fontSize:'1.3rem'}}/> <b>reducer</b>: A function that determines state transitions based on an action.
            </p>
            <p>
            <TbCircleNumber2Filled style={{fontSize:'1.3rem'}}/> <b>initialState</b>: The initial value of the state.
            </p>
            <p>
            <TbCircleNumber3Filled style={{fontSize:'1.3rem'}}/> <b>state</b>: The current state.
            </p>
            <p>
            <TbCircleNumber4Filled style={{fontSize:'1.3rem'}}/> <b>dispatch</b>: A function to send actions to the reducer.
            </p>
          </>
        }
      />

      <Heading
        heading={"useReducer Vs useState 🤔"}
        headingcolor={"#1B3C73"}
        children={
          <>
            <p>🗿 Clearer State Management - All state updates follow a single function.</p>
            <p>🗿 Better for Complex Logic - No need for multiple useState calls.</p>
            <p>🗿 Predictable State Updates - Changes happen in a controlled manner.</p>

            <p>✅ If your component has simple state, useState is fine.</p>
            <p>✅ If your component has multiple related states or complex updates, useReducer is better!</p>
          </>
        }
      />
      <Heading heading={"Example"} headingcolor={"#1B3C73"} children={
        <div className="children1">
        <Counter />
        <button  onClick={() => setShowcode((prev) => !prev)}>
        {showcode ? "Hide Code" : "Show Code"}
      </button>
      <div className="code-container">
      {showcode &&(
            <SyntaxHighlighter language="tsx" style={dark}>
            {code}
          </SyntaxHighlighter>
        )}
      </div>
        </div>
      }/>
      <button onClick={handleclick}>
        Implementation
      </button>
      {implementation && <Implementation />}

      <button onClick={handlegame}>
        Let's check how much you learned
      </button>
      {game && <Game />}
    </div>
  );
};

export default Home;
