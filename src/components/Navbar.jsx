import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className=" bg-accent text-black p-4">
        <div className=" flex justify-between container mx-auto">
          <Link to="/" className="text-blue-900 text-pretty text-lg font-bold">
            TravelBlogPosts
          </Link>

          <div className="flex space-x-4">
            <Link to={"/"} className="font-bold text-blue-950">
              Home
            </Link>

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
