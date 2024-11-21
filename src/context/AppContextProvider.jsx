import { useState } from "react";
import { AppContext } from "./appContext";

function AppContextProvider({ children }) {
  const [blogData, setBlogData] = useState([]);
const[newBlog, setNewBlog] = useState([])
  return (
    <AppContext.Provider value={{ blogData, setBlogData,newBlog, setNewBlog }}> 
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
