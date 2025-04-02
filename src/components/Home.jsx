import axios from "axios"; // Importing axios for making HTTP requests
import { useEffect } from "react"; // Importing useEffect hook from React
import { useAppContext } from "../context/appContext"; // Importing custom context for state management
import { Link } from "react-router-dom"; // Importing Link component for navigation

const Home = () => {
  // Destructuring blogData, setBlogData, and newBlog from the custom context
  const { blogData, setBlogData, newBlog } = useAppContext();

  // useEffect hook to fetch blog posts when the component mounts or when newBlog changes
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URI_API}/blogposts`) // Fetching blog posts from the API
      .then((response) => {
        console.log(response.data); // Logging the response data for debugging
        setBlogData(response.data); // Updating the blogData state with the fetched data
      })
      .catch((error) => console.error(error)); // Logging any errors that occur during the request
  }, [newBlog]); // Dependency array ensures the effect runs when newBlog changes

  return (
    <>
      {/* Mapping over blogData to render each blog post */}
      {blogData.map((post) => (
        <div
          className="card card-side bg-base-100 shadow-2xl my-2" // Styling for the card
          key={post.id} // Using post.id as the unique key for each card
        >
          <figure className="max-w-96 min-w-96 max-h-44">
            {/* Displaying the cover image of the blog post */}
            <img src={post.cover} alt="a picture" />
          </figure>
          <div className="card-body">
            {/* Displaying the title of the blog post */}
            <h2 className="card-title">{post.title}</h2>
            {/* Displaying a truncated version of the blog content */}
            <p className="truncate text-ellipsis max-w-32">{post.content}</p>
            <div className="card-actions justify-end">
              {/* Link to navigate to the blog details page */}
              <Link to={`/blogDetails/${post.id}`} className="underline link link-secondary">
                Blog details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home; // Exporting the Home component as the default export
