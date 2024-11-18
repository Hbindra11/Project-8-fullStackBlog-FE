const Home = () => {
  const mockPosts = [
    {
      title: "Maltese summer",
      content: "Beautiful day at the beach... ",
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

  return (
    <>
      {mockPosts.map((post) => (
        <div
          className="card card-side bg-base-100 shadow-2xl my-2 "
          key={crypto.randomUUID()}
        >
         
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              alt="picture of New York city"
            />    
          </figure> <div className="card-body">
          <h2 className="card-title">{post.title}</h2><p>{post.content}</p> 
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div></div>
        </div>
      ))}
    </>
  );
};

export default Home;
