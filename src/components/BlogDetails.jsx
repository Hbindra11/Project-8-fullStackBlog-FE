import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const BlogDetails = () => {
  const { blogId } = useParams();
  const{aBlog, setaBlog}= useAppContext();


  useEffect(() => {
    axios
      .get(`http://localhost:3000/blogPosts/${blogId}`)
      .then((res) => {console.log(res.data); setaBlog(res.data)})
      .catch((err) => console.error("error message: " + err));
  },[] );
   

  return (
    <>
      <div>Blog Details</div>
      <div>{aBlog.title}</div>
      <div>{aBlog.content}</div>
      <button className="btn btn-warning">delete</button>
    </>
  );
};

export default BlogDetails;
