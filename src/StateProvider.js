import React, { createContext, useContext, useReducer } from "react";

// Prépare la datalayer
export const StateContext = createContext();

//Enveloppe notre application et fourni la datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//exporte des informations du datalayer
export const useStateValue = () => useContext(StateContext);
