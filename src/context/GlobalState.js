import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Cars", amount: -3000 },
    {
      id: 2,
      text: "Salary",
      amount: 1500,
    },
  ],
};

// Create context

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {{ children }}
    </GlobalContext.Provider>
  );
};
