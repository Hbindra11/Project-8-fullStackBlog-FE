import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import { useAppContext } from "../context/appContext"; // Importing custom context for state management
import axios from "axios"; // Importing axios for HTTP requests

const CreateBlogPost = () => {
  const navigate = useNavigate(); // Hook for navigating between routes
  const { newBlog, setNewBlog } = useAppContext(); // Destructuring state and setter from context
  
  // Function to handle form submission
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Post newBlog data to the database
    axios
      .post(`${import.meta.env.VITE_URI_API}/blogPosts/`, newBlog) // API endpoint for creating a new blog post
      .then((res) => {
        console.log("here is the response: " + res.data); // Log the response
        alert("data was successfully saved!"); // Notify user of success
        setNewBlog([]); // Reset newBlog state to an empty array
      })
      .catch((err) => {
        console.error("error message: " + err); // Log the error
        alert("oops! something went wrong!"); // Notify user of failure
      });

    // Navigate back to the home page
    return navigate("/");
  };

  // Function to handle input changes
  const handelChange = (e) => {
    // Update newBlog state with the input values
    setNewBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log('this is the input so far: '+JSON.stringify(newBlog)); // Debugging log
  };

  return (
    <>
      <div className="flex justify-center m-10">
        <form onSubmit={handelSubmit}>
          {/* Input for blog title */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg">
                What is the title of your blog?
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={handelChange} // Update state on change
              name="title" // Name attribute for identifying input
              required // Make input required
            />
            <div className="label"></div>
          </label>

          {/* Textarea for blog content */}
          <label className="form-control">
            <div className="label">
              <span className="label-text text-lg">
                Your blog post goes here:{" "}
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
              name="content" // Name attribute for identifying input
              onChange={handelChange} // Update state on change
              required // Make input required
            ></textarea>
            <div className="label"></div>
          </label>

          {/* Input for blog cover URL (currently disabled) */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg">
                Enter the URL of your blog cover here: (optional)
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="cover" // Name attribute for identifying input
              onChange={handelChange} // Update state on change
              disabled // Input is disabled
            />
            <div className="label"></div>
          </label>

          <br></br>
          {/* Submit button */}
          <button type="submit" className="btn btn-accent">
            Save
          </button>
        </form>

        {/* Placeholder image */}
        <figure className="max-w-lg  p-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="default picture " // Alt text for accessibility
          />
        </figure>
      </div>
    </>
  );
};

export default CreateBlogPost; // Exporting the component
