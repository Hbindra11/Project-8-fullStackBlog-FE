import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

// BlogDetails component displays details of a specific blog post and allows updating or deleting it
const BlogDetails = () => {
  const { blogId } = useParams(); // Extract blogId from the URL parameters
  const { aBlog, setaBlog } = useAppContext(); // Access the current blog and its setter from context
  const navigate = useNavigate(); // Hook to navigate between routes
  const { updateBlog, setUpdateBlog } = useAppContext(); // Access the blog data to be updated and its setter from context

  // Fetch the blog details when the component is mounted
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URI_API}/blogPosts/${blogId}`) // Fetch blog details from the API
      .then((res) => {
        console.log(res.data);
        setaBlog(res.data); // Set the fetched blog data in context
        setUpdateBlog(res.data); // Initialize the updateBlog state with the fetched data
      })
      .catch((err) => console.error("error message: " + err)); // Log any errors
  }, []);

  // Handle input changes for updating the blog
  const handelChange = (e) => {
    e.preventDefault();
    setUpdateBlog((prev) => ({ ...prev, [e.target.name]: e.target.value })); // Update the specific field in updateBlog
    console.log("" + JSON.stringify(updateBlog)); // Log the updated blog data
  };

  // Navigate back to the home page
  const handelBack = () => {
    navigate("/");
  };

  // Handle blog deletion
  const handelDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_URI_API}/blogPosts/${blogId}`) // Send DELETE request to the API
      .then((res) => {
        console.log("here is the response status: " + res.status); // Log the response status
        alert(`Deleted post with ID ${blogId}`); // Notify the user of successful deletion
        navigate("/"); // Navigate back to the home page
      })
      .catch((err) =>
        console.log("oops! an error occured and so could not delete: " + err) // Log any errors
      );
  };

  // Handle blog update
  const handelUpdate = () => {
    console.log("new blog data to send: " + JSON.stringify(updateBlog)); // Log the updated blog data to be sent

    axios
      .put(`${import.meta.env.VITE_URI_API}/blogPosts/${blogId}`, updateBlog) // Send PUT request to update the blog
      .then((res) => {
        console.log("here is the response: " + res.data); // Log the response data
        alert("data was successfully saved!"); // Notify the user of successful update
        setUpdateBlog([]); // Reset the updateBlog state
        navigate("/"); // Navigate back to the home page
      })
      .catch((err) => {
        console.error("error message: " + err); // Log any errors
        alert("oops! something went wrong!"); // Notify the user of an error
      });
  };

  return (
    <>
      {/* Blog details card */}
      <div className="flex justify-center p-10">
        <div className="card bg-base-100 image-full w-auto shadow-xl">
          <figure>
            <img src={aBlog.cover} alt="default pic" /> {/* Blog cover image */}
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{aBlog.title}</h2> {/* Blog title */}
            <p>{aBlog.content}</p> {/* Blog content */}
            <div className="card-actions justify-end">
              {/* Button to open the update modal */}
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Update Blog
              </button>

              {/* Button to delete the blog */}
              <button onClick={handelDelete} className="btn btn-warning">
                Delete
              </button>

              {/* Button to navigate back */}
              <button onClick={handelBack} className="btn btn-secondary">
                back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for updating the blog */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action flex justify-center">
            <form method="dialog">
              {/* Input field to update the blog title */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-lg">
                    Change the title of your blog?
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handelChange}
                  name="title"
                  value={updateBlog.title}
                  required
                />
                <div className="label"></div>
              </label>

              {/* Textarea to update the blog content */}
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-lg">
                    Update your blog post ?{" "}
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  name="content"
                  onChange={handelChange}
                  required
                  value={updateBlog.content}
                ></textarea>
                <div className="label"></div>
              </label>

              {/* Button to save the changes */}
              <button onClick={handelUpdate} className="btn">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

// Exporting the BlogDetails component as the default export of this file
export default BlogDetails;
