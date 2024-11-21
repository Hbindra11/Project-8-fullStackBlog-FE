import { useState } from "react";
import { AppContext } from "./appContext";

function AppContextProvider({ children }) {
  const [blogData, setBlogData] = useState([]);

  return (
    <AppContext.Provider value={{ blogData, setBlogData }}> 
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
