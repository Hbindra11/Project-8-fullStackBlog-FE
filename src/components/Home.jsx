import axios from "axios";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
const Home = () => {
  
  const { blogData, setBlogData } = useAppContext();
 

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogposts/")
      .then((response) => {
        console.log(response.data);
        setBlogData(response.data);
      })
      .catch((error) => console.error(error));
  },[]);
 
  //let name = prompt("Please enter your name:");
  //console.log("Hello, " + name + "!");
  

  return (
    <>
      {blogData.map((post) => (
        <div
          className="card card-side bg-base-100 shadow-2xl my-2 "
          key={post.id} //{crypto.randomUUID()}
        >
          <figure className="max-w-96 min-w-96 max-h-44">
            <img src={post.cover} alt="a picture" />
          </figure>{" "}
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className=" truncate text-ellipsis max-w-32">{post.content}</p>
            <div className="card-actions justify-end">
              <Link to={`/blogDetails/${post.id}`} className="underline">Blog details</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
