import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className=" bg-green-900 text-white p-4">
        <div className=" flex justify-between container mx-auto">
        <Link to="/" className="text-white text-lg font-bold">
        TravelBlogPosts
        </Link>
          
          <div className="flex space-x-4">
            <Link to={"/"}>Home</Link>

            <Link to={"/createPost"}>+BlogPost</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
