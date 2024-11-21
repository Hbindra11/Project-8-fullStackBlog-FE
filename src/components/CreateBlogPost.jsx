import { useNavigate } from "react-router-dom";

const CreateBlogPost = () => {
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    return navigate("/");
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
            />
            <div className="label"></div>
          </label>

          <br></br>
          <button type="submit" className="btn btn-accent">
            Save
          </button>
        </form>  <figure className="max-w-lg  p-10">
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
