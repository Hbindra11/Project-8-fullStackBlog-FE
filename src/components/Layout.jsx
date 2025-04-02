import { Outlet } from "react-router-dom"; // Import Outlet component from react-router-dom for rendering child routes
import Navbar from "./Navbar"; // Import the Navbar component

// Layout component serves as a wrapper for the application layout
const Layout = () => {
  return (
    <>
      {/* Render the Navbar at the top */}
      <Navbar />
      {/* Main container for the content, styled with Tailwind CSS */}
      <div className="container mx-auto">
        {/* Render the child routes dynamically */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout; // Export the Layout component as the default export
