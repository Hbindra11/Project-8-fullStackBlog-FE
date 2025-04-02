import { useState } from "react";
import { AppContext } from "./appContext";

// AppContextProvider component to provide context values to the application
function AppContextProvider({ children }) {
  // State to store all blogs
  const [blogData, setBlogData] = useState([]);
  
  // State to store only new blogs
  const [newBlog, setNewBlog] = useState([]);
  
  // State to store a single blog when fetching one blog
  const [aBlog, setaBlog] = useState([]);
  
  // State to store a blog when updating it
  const [updateBlog, setUpdateBlog] = useState([]);

  return (
    // Providing all state values and their setters to the context
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
