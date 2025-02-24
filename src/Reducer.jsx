import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return Number(action.payload[0]) + Number(action.payload[1]);
      case "Subtract":
        return Number(action.payload[0]) - Number(action.payload[1]);
      case "Multiply":
        return Number(action.payload[0]) * Number(action.payload[1]);
      case "Divide":
        return Number(action.payload[0]) / Number(action.payload[1]);
      case "Clear":
        return 0;
        default: 
        return state
    }
  };

  export default reducer