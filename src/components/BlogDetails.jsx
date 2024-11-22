import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { aBlog, setaBlog } = useAppContext();
  const navigate = useNavigate();
  //const { newBlog, setNewBlog } = useAppContext();
  const {updateBlog, setUpdateBlog} = useAppContext();
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/blogPosts/${blogId}`)
      .then((res) => {
        console.log(res.data);
        setaBlog(res.data); // aBlog is set with data of current blog
        setUpdateBlog(res.data); //newBlog is also set with current blog
      })
      .catch((err) => console.error("error message: " + err));
  }, []);

  const handelChange = (e) => {
    e.preventDefault();

    setUpdateBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("" + JSON.stringify(updateBlog));
  };
  const handelBack = () => {
    navigate("/");
  };
  const handelDelete = () => {
    axios
      .delete(`http://localhost:3000/blogPosts/${blogId}`)
      .then((res) => {
        console.log("here is the response status: " + res.status);
        alert(`Deleted post with ID ${blogId}`);
        navigate("/");
      })
      .catch((err) =>
        console.log("oops! an error occured and so could not delete: " + err)
      );
  };

  const handelUpdate = () => {
    console.log("new blog data to send: " + JSON.stringify(updateBlog));
    
    axios
      .put(`http://localhost:3000/blogPosts/${blogId}`, updateBlog)
      .then((res) => {
        console.log("here is the response: " + res.data);
        alert("data was successfully saved!");
        setUpdateBlog([]); navigate("/");
      })
      .catch((err) => {
        console.error("error message: " + err);
        alert("oops! something went wrong!");
      });
      
  };

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="card bg-base-100 image-full w-auto shadow-xl">
          <figure>
            <img src={aBlog.cover} alt="default pic" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{aBlog.title}</h2>
            <p>{aBlog.content}</p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Update Blog
              </button>

              <button onClick={handelDelete} className="btn btn-warning">
                Delete
              </button>
              <button onClick={handelBack} className="btn btn-secondary">
                back
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action flex justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-lg">
                    Change the title of your blog?
                  </span>
                </div>
                <input
                  type="text"
                  // placeholder={aBlog.title}
                  className="input input-bordered w-full max-w-xs"
                  onChange={handelChange}
                  name="title"
                  value={updateBlog.title}
                  required
                />
                <div className="label"></div>
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-lg">
                    Update your blog post ?{" "}
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  //placeholder={aBlog.content}
                  name="content"
                  onChange={handelChange}
                  required
                  value={updateBlog.content}
                ></textarea>
                <div className="label"></div>
              </label>
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

export default BlogDetails;
