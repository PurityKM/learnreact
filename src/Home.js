import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My website', body: 'lorem ipsum.....', author: 'Purity', id: 1},
    {title: 'My website', body: 'lorem ipsum.....', author: 'Purity', id: 2},
    {title: 'My website', body: 'lorem ipsum.....', author: 'Purity', id: 3},
    {title: 'My website', body: 'lorem ipsum.....', author: 'Purity', id: 4},
  ]);

  return (
    <div className="home">
      <BlogList blogs= {blogs} title="All blogs!"/>
    </div>
  );
};

export default Home;
