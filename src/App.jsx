import { useReducer, useRef, useState } from "react";
import reducer from "./Reducer";
import "./App.css";


function App() {
  const [result, dispatch] = useReducer(reducer, 0);

  const firstinputRef = useRef();
  const secondInputRef = useRef();

  function handleOperation(operation) {
    if (operation === "Clear") {
      firstinputRef.current.value = "";
      secondInputRef.current.value = "";
    }
    dispatch({
      type: operation,
      payload: [firstinputRef.current.value, secondInputRef.current.value],
    });
  }

  return (
    <div>
      <div>
        <h1>Siimple Calculator</h1>
        <h2>{result}</h2>
        <input type="number" ref={firstinputRef} />
        <input type="number" ref={secondInputRef} />
      </div>
      <div>
        <button type="button" onClick={() => handleOperation("Add")}>
          Add (+)
        </button>
        <button type="button" onClick={() => handleOperation("Subtract")}>
          Subtract (-)
        </button>
        <button type="button" onClick={() => handleOperation("Multiply")}>
          Multiply (*)
        </button>
        <button type="button" onClick={() => handleOperation("Divide")}>
          Divide (/)
        </button>
        <button type="button" onClick={() => handleOperation("Clear")}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;

// 1. UI Components:
//  Two input fields to take number inputs.
// Buttons for basic arithmetic operations: Add (+), Subtract (-), Multiply (*), and Divide (/).
// A Clear button to reset the calculator.
// 2 .State Management with useReducer:
// Use the useReducer hook to manage the calculator’s state.
// The state should track the current result of the calculation.
// Create actions for each operation: ADD, SUBTRACT, MULTIPLY, DIVIDE, and CLEAR.
// 3. Reducer Function:
// Implement a reducer function that takes the current state and an action.
// Based on the action type, perform the appropriate arithmetic operation and update the state.
// 4. Functionality:
// Users enter numbers into the two input fields.
// Clicking an operation button applies the operation to the input values and displays the result.
// The Clear button resets the calculator to its initial state.
