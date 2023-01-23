import react, { createContext, useContext } from "react";

const GlobalState = createContext();

const UseGlobalContext = () => {
  return useContext(GlobalState);
};

export { GlobalState, UseGlobalContext };
