import  { useState } from "react";
import "./Home.css";
import Implementation from "./Implementation.tsx";
import Heading from "./Heading.tsx";
import Game from "./Game.tsx";
import Counter from "./Counter.tsx";

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
    <div className="container" style={{}}>
      <h1 className="main-heading" style={{ fontFamily:"c",color: "" }}>useReducer</h1>
      <Heading
        heading={"Introduction"}
        headingcolor={"#1B3C73"}
        children={
          <p style={{ color: "#5CD2E6", fontWeight: "bold" }}>
            🚀 A React hook for managing complex state logic, particularly when:
            <br />
               - State transitions depend on previous values
            <br />
            - Multiple state values are interdependent
            <br />
            - Logic involves non-trivial updates
          </p>
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
            <p>1️⃣ Actors (Components) perform actions.</p>
            <p>2️⃣ A Script (Reducer) decides what happens.</p>
            <p>3️⃣ The Director (useReducer) manages the play.</p>
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
              1️⃣ <b>reducer</b>: A function that determines state transitions based on an action.
            </p>
            <p style={{ color: "#500073" }}>
              2️⃣ <b>initialState</b>: The initial value of the state.
            </p>
            <p style={{ color: "#500073" }}>
              3️⃣ <b>state</b>: The current state.
            </p>
            <p style={{ color: "#500073" }}>
              4️⃣ <b>dispatch</b>: A function to send actions to the reducer.
            </p>
          </>
        }
      />

      <Heading
        heading={"useReducer Vs useState"}
        headingcolor={"#2E79BA"}
        children={
          <>
            <p style={{ color: "#80C4E9" }}>🗿 Clearer State Management - All state updates follow a single function.</p>
            <p style={{ color: "#80C4E9" }}>🗿 Better for Complex Logic - No need for multiple useState calls.</p>
            <p style={{ color: "#80C4E9" }}>🗿 Predictable State Updates - Changes happen in a controlled manner.</p>

            <p style={{ color: "#80C4E9" }}>✅ If your component has simple state, useState is fine.</p>
            <p style={{ color: "#80C4E9" }}>✅ If your component has multiple related states or complex updates, useReducer is better!</p>
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
