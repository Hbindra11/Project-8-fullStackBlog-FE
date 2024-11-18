import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CreateBlogPost from "./components/CreateBlogPost";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/createPost" element={<CreateBlogPost />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
