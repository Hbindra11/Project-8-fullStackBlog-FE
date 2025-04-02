import { Link } from "react-router-dom";

// Navbar component
const Navbar = () => {
  return (
    <>
      {/* Navigation bar with background color and padding */}
      <nav className=" bg-accent text-black p-4">
        <div className=" flex justify-between container mx-auto">
          {/* Logo or title linking to the home page */}
          <Link to="/" className="text-blue-900 text-pretty text-lg font-bold">
            TravelBlogPosts
          </Link>

          {/* Navigation links */}
          <div className="flex space-x-4">
            {/* Link to the home page */}
            <Link to={"/"} className="font-bold text-blue-950">
              Home
            </Link>

            {/* Link to the create post page */}
            <Link to={"/createPost"} className="font-bold text-blue-950">
              +BlogPost
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
