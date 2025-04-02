import { createContext, useContext } from "react";

// Create a context object for the application
const AppContext = createContext(); 

// Custom hook to use the AppContext
const useAppContext = () => {
  // Access the context value
  const context = useContext(AppContext); 
  
  // Throw an error if the hook is used outside of the AppContextProvider
  if (!context)
    throw new Error("useAppContext must be used within AppContextProvider");
  
  // Return the context value
  return context;
};

// Export the context and the custom hook
export { AppContext, useAppContext };
