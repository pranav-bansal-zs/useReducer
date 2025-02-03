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

const Home = () => {
  const [implementation, setImplementation] = useState<boolean>(false);
  const [game, setGame] = useState<boolean>(false);
  const [showimage,setShowimage]=useState<boolean>(false);

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
        headingcolor={"#105652"}
        children={
          <>
            <p style={{ color: "#47A992", fontWeight: "bold" }}>
              🎭 Think of Your App as a Theater Play 🎭
            </p>
            <p><TbCircleNumber1Filled style={{fontSize:'1.3rem'}}/> Actors (Components) perform actions.</p>
            <p><TbCircleNumber2Filled style={{fontSize:'1.3rem'}}/> A Script (Reducer) decides what happens.</p>
            <p><TbCircleNumber3Filled style={{fontSize:'1.3rem'}}/> The Director (useReducer) manages the play.</p>
            <p style={{ color: "#279EFF" }}>
              Instead of using <b>useState</b> to manage state directly, <b>useReducer</b> acts as a
              centralized manager that updates the state based on defined rules (reducer function).
            </p>
          </>
        }
      />

      <Heading
        heading={"Syntax"}
        headingcolor={"#144272"}
        children={
          <>
            <img src="syntax.png" alt="syntax" className="syntax-image" />
            <p style={{ color: "#500073" }}>
            <TbCircleNumber1Filled style={{fontSize:'1.3rem'}}/> <b>reducer</b>: A function that determines state transitions based on an action.
            </p>
            <p style={{ color: "#500073" }}>
            <TbCircleNumber2Filled style={{fontSize:'1.3rem'}}/> <b>initialState</b>: The initial value of the state.
            </p>
            <p style={{ color: "#500073" }}>
            <TbCircleNumber3Filled style={{fontSize:'1.3rem'}}/> <b>state</b>: The current state.
            </p>
            <p style={{ color: "#500073" }}>
            <TbCircleNumber4Filled style={{fontSize:'1.3rem'}}/> <b>dispatch</b>: A function to send actions to the reducer.
            </p>
          </>
        }
      />

      <Heading
        heading={"useReducer Vs useState 🤔"}
        headingcolor={"#2E79BA"}
        children={
          <>
            <p style={{ color: "#37AFE1" }}>🗿 Clearer State Management - All state updates follow a single function.</p>
            <p style={{ color: "#37AFE1" }}>🗿 Better for Complex Logic - No need for multiple useState calls.</p>
            <p style={{ color: "#37AFE1" }}>🗿 Predictable State Updates - Changes happen in a controlled manner.</p>

            <p style={{ color: "#37AFE1" }}>✅ If your component has simple state, useState is fine.</p>
            <p style={{ color: "#37AFE1" }}>✅ If your component has multiple related states or complex updates, useReducer is better!</p>
          </>
        }
      />
      <Heading heading={"Example"} headingcolor={"#500073"} children={
        <>
        <Counter/>
        <button  onClick={() => setShowimage((prev) => !prev)}>
        {showimage ? "Hide Code" : "Show Code"}
      </button>
        {showimage&&(<img src="code.png" className="codeimage"></img>)}
        </>
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
