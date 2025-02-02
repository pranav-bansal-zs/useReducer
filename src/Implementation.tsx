import React, { useReducer, useState } from "react";
import { userReducer } from "./userReducer";
import "./implementation.css";

interface UserState {
  name: string;
  age: number;
  email: string;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: UserState = {
  name: "Pranav Bansal",
  age: 22,
  email: "pranav.bansal@zopsmart.com",
};

const Implementation = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [history, setHistory] = useState<{ state: UserState; action: Action; timestamp: string }[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showCode, setShowCode] = useState(false);

  const handleInputChange = (type: string, value: string | number) => {
    const action: Action = { type, payload: value };
    dispatch(action);

    const newHistory = [...history.slice(0, historyIndex + 1), { state: { ...state }, action, timestamp: new Date().toLocaleTimeString() }];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex >= 0) {
      dispatch({ type: "UNDO", payload: history[historyIndex].state });
      setHistoryIndex(historyIndex - 1);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      dispatch({ type: "REDO", payload: history[historyIndex + 1].state });
      setHistoryIndex(historyIndex + 1);
    }
  };

  return (
    <div className="App">
      <h1>User Reducer Demo</h1>
      <div className="state-container">
        <h3>Demo Details</h3>
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Age:</strong> {state.age}</p>
        <p><strong>Email:</strong> {state.email}</p>
      </div>

      <div className="controls">
        <input type="text" placeholder="Update Name" onChange={(e) => handleInputChange("UPDATE_NAME", e.target.value)} />
        <input type="number" placeholder="Update Age" onChange={(e) => handleInputChange("UPDATE_AGE", Number(e.target.value))} />
        <input type="email" placeholder="Update Email" onChange={(e) => handleInputChange("UPDATE_EMAIL", e.target.value)} />
        <button onClick={handleUndo} disabled={historyIndex < 0}>Undo</button>
        <button onClick={handleRedo} disabled={historyIndex >= history.length - 1}>Redo</button>
      </div>

      <div className="history-log">
        <h2>State Change History</h2>
        {history.map((entry, index) => (
          <div key={index} className="history-entry">
            <p><strong>Action:</strong> {entry.action.type} ({entry.action.payload})</p>
            <p><strong>Time:</strong> {entry.timestamp}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setShowCode(!showCode)} className="show-code-btn">
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {showCode && (
        <pre className="code-block">
{`
const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_AGE":
      return { ...state, age: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UNDO":
    case "REDO":
      return action.payload;
    default:
      return state;
  }
};
`}
        </pre>
      )}
    </div>
  );
};

export default Implementation;
