import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom"; // Importing necessary components from react-router-dom for routing
import Layout from "./components/Layout"; // Layout component for the main structure of the app
import Home from "./components/Home"; // Home component for the homepage
import CreateBlogPost from "./components/CreateBlogPost"; // Component for creating a new blog post
import BlogDetails from "./components/BlogDetails"; // Component for displaying details of a specific blog post
import AppContextProvider from "./context/AppContextProvider"; // Context provider for managing global state

const App = () => {
  // Define the router with routes and their corresponding components
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}> {/* Main layout for the app */}
        <Route index element={<Home />} /> {/* Default route for the homepage */}
        <Route path="/createPost" element={<CreateBlogPost />} /> {/* Route for creating a blog post */}
        <Route path="/blogDetails/:blogId" element={<BlogDetails />} /> {/* Route for viewing blog details */}
      </Route>
    )
  );

  return (
    <AppContextProvider> {/* Wrapping the app with context provider for global state */}
      <RouterProvider router={router} /> {/* Providing the router to the app */}
    </AppContextProvider>
  );
};

export default App; // Exporting the App component as the default export
