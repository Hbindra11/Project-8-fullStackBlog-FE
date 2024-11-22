import { useState } from "react";
import { AppContext } from "./appContext";

function AppContextProvider({ children }) {
  const [blogData, setBlogData] = useState([]); //for all blogs
  const [newBlog, setNewBlog] = useState([]); //only new blogs
  const [aBlog, setaBlog] = useState([]); //when fetching one blog
  const [updateBlog, setUpdateBlog] = useState([]); //when fetching one blog
  return (
    <AppContext.Provider
      value={{
        blogData,
        setBlogData,
        newBlog,
        setNewBlog,
        aBlog,
        setaBlog,
        updateBlog,
        setUpdateBlog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
