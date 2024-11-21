import { useState } from "react";
import { AppContext } from "./appContext";

function AppContextProvider({ children }) {
  const [blogData, setBlogData] = useState([]);
  const [newBlog, setNewBlog] = useState([]);
  const [aBlog, setaBlog] = useState([]);
  return (
    <AppContext.Provider value={{ blogData, setBlogData, newBlog, setNewBlog ,aBlog, setaBlog}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
