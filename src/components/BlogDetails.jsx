import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { aBlog, setaBlog } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/blogPosts/${blogId}`)
      .then((res) => {
        console.log(res.data);
        setaBlog(res.data);
      })
      .catch((err) => console.error("error message: " + err));
  }, []);
  const handelClick = () => {
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
  return (
    <>
      <div className="flex justify-center p-10">
        <div className="card bg-base-100 image-full w-auto shadow-xl">
          <figure>
            <img src={aBlog.cover} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{aBlog.title}</h2>
            <p>{aBlog.content}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Update</button>
              <button onClick={handelDelete} className="btn btn-warning">
                Delete
              </button>
              <button onClick={handelClick} className="btn btn-secondary">
                back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
