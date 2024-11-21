import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CreateBlogPost from "./components/CreateBlogPost";
import BlogDetails from "./components/BlogDetails";
import AppContextProvider from "./context/AppContextProvider";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/createPost" element={<CreateBlogPost />} />
        <Route path="/blogDetails/:blogId" element={<BlogDetails />} />
      </Route>
    )
  );
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;
