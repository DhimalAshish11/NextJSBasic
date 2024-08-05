"use client";

import { count } from "console";
import React, { useReducer } from "react";

const initialState = {
  count: 0,
  showCountFlag: true,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };

    case "subtract":
      return {
        ...state,
        count: state.count - 1,
      };

    case "reset":
      return {
        ...state,
        count: 0,
      };

    case "showcount":
      return {
        ...state,
        showCountFlag: !state.showCountFlag,
      };

    default:
      return state;
  }
};

const LearnUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="flex items-center justify-center m-4">
      <div className="text-center">
        <h1 className="font-bold">Use Reducer Hook</h1> <br />
        {state.showCountFlag ? <h3>Count is {state.count}</h3> : null}
        <br />
        <div className="flex justify-center gap-3">
          <button
            onClick={() => dispatch({ type: "add" })}
            className="font-bold bg-blue-500 text-white py-2 px-4 rounded"
          >
            Increase Count
          </button>
          <button
            onClick={() => dispatch({ type: "subtract" })}
            className="font-bold bg-blue-500 text-white py-2 px-4 rounded"
          >
            Decrease Count
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="font-bold bg-blue-500 text-white py-2 px-4 rounded"
          >
            Reset Count
          </button>
          <button
            onClick={() => dispatch({ type: "showcount" })}
            className="font-bold bg-blue-500 text-white py-2 px-4 rounded"
          >
            Show Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnUseReducer;
