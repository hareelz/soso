import React, { createContext, useReducer } from "react";

export const counterContext = createContext();

const INIT_STATE = {
  counter: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECR":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  console.log(state);

  function increment() {
    dispatch({ type: "INCREMENT" });
  }
  function decr() {
    dispatch({ type: "DECR" });
  }

  const values = {
    increment,
    decr,
    counter: state.counter,
  };
  return (
    <counterContext.Provider value={values}>{children}</counterContext.Provider>
  );
};

export default CounterContextProvider;
