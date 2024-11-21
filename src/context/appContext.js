import { createContext, useContext } from "react";

const AppContext = createContext(); 

const useAppContext = () => {
  const context = useContext(AppContext); 
  if (!context)
    throw new Error("useAppContext must be used within AppContextProvider");
  return context;
};

export { AppContext, useAppContext };
