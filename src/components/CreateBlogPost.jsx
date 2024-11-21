import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import axios from "axios";

const CreateBlogPost = () => {
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    //post newBlog to database
    axios
      .post("http://localhost:3000/blogPosts/", newBlog)
      .then((res) => {console.log("here is the response: " + res.data); alert('data was successfully saved!');  setNewBlog([]);})
      .catch ((err) => {console.error("error message: " + err); alert('oops! something went wrong!')})
    //reset newBlog back to empty array
   
      return navigate("/");
  };

  const { newBlog, setNewBlog } = useAppContext();
  const handelChange = (e) => {
    setNewBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log('this is the input so far: '+JSON.stringify(newBlog));
  };

  return (
    <>
      <div className="flex justify-center m-10">
        <form onSubmit={handelSubmit}>
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
              onChange={handelChange}
              name="title"
              required
            />
            <div className="label"></div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-lg">
                Your blog post goes here:{" "}
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
              name="content"
              onChange={handelChange}
              required
            ></textarea>
            <div className="label"></div>
          </label>
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
              name="cover"
              onChange={handelChange}
              disabled
            />
            <div className="label"></div>
          </label>

          <br></br>
          <button type="submit" className="btn btn-accent">
            Save
          </button>
        </form>{" "}
        <figure className="max-w-lg  p-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="default picture "
          />
        </figure>
      </div>
    </>
  );
};

export default CreateBlogPost;
