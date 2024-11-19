//import cors from 'cors';
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const mockPosts = [
    {
      title: "Maltese summer",
      content:
        "Beautiful day at the beach...Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi fuga blanditiis. Dignissimos, nobis alias. Doloribus eveniet id nam accusantium nesciunt inventore deserunt sit, at nemo sapiente recusandae minus maiores numquam. Nihil excepturi illo culpa nulla tempore qui sapiente ullam explicabo modi assumenda dolor aliquid blanditiis impedit perspiciatis quisquam rem error suscipit, eveniet aliquam quibusdam adipisci quas nesciunt deserunt quasi! Quisquam optio rem accusamus nobis laboriosam deserunt repellendus velit iure, beatae atque similique ea sint obcaecati nisi illo? Similique explicabo repellendus minus distinctio quam corrupti doloremque ullam nulla, quisquam atque quibusdam odit, provident natus temporibus dolor vitae sequi ut sit. ",
      cover: "holiday picture url",
      date: "2021-08-15",
    },
    {
      title: "Austrian Alps in summer",
      content: "Beautiful day in the mountains...",
      cover: "Cabel car picture url",
      date: "2022-09-15",
    },
  ];

   useEffect(() => {
     axios
       .get("http://localhost:3000/")
     .then((response) => {console.log(response.data); })
       .catch((error) => console.error(error));
   }, []);

  return (
    <>
      {mockPosts.map((post) => (
        <div
          className="card card-side bg-base-100 shadow-2xl my-2 "
          key={crypto.randomUUID()}
        >
          <figure className="max-w-md max-h-96">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              alt="picture of New York city"
            />
          </figure>{" "}
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className=" truncate text-ellipsis max-w-32">{post.content}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
