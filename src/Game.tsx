import React, { useReducer, useState } from "react";
import './Game.css'
const Game = () => {
  const [reducerFunction, setReducerFunction] = useState();
  const [reducer, setReducer] = useState<((state: boolean, action: { type: string }) => boolean) | null>(null);
  const [error, setError] = useState<string>("");
  const [simpsonsfree, dispatch] = useReducer(reducer ?? (() => false), false);

  const handleSetReducer = () => {
    try {
      const newReducer = new Function("return " + reducerFunction)();
      if (typeof newReducer === "function") {
        setReducer(() => newReducer);
        setError("");
      } else {
        setError("It is not a valid function")
      }
    } catch {
      setError("Function is not correct. Don't worry, let's try again.");
    }
  };


  return (
    <div className="game-container">
      <div className="game-content">
        <div className="game-instructions">
          <h3>Task: Free the Simpsons from Prison.</h3>
          <h4>Instructions:</h4>
          <p>1️⃣ Simpsons can only be freed if the simpsonsfree state is set to true. By default, it is false.</p>
          <p>2️⃣ Write a reducer function that updates the simpsonsfree state to true.</p>
          <p>3️⃣ Dispatch action type should be named "FREE".</p>
          <p>4️⃣ Just complete the function body, no need to give it a name.</p>

          <textarea
            onChange={(e) => setReducerFunction(e.target.value)}
            rows={10}
            cols={50}
          >
            {`(simpsonsfree, action) => {
  switch (action.type) {
  }
}`}</textarea>
          
          <div className="game-controls">
          {error && <p className="error-message">{error}</p>}
            <button onClick={handleSetReducer}>Set Reducer</button>
            {reducer && (<button onClick={() => dispatch({ type: "FREE" })} >
              Test Solution
            </button>)}
          </div>
        </div>

        <div className="game-visual">
          {!simpsonsfree ? (
            <img src="simpsons_prison.gif" className="game-image" alt="Simpsons in prison" />
          ) : (
            <img src="simpsons_free.gif" className="game-image" alt="Free Simpsons" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;




