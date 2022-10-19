import { useState } from "react";
import BlogList from "./BlogList";

const Main = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My Travel Blog",
      body: "lorem ipsum.....",
      author: "Liz Czarny",
      id: 1,
    },
    {
      title: "Ready, Set, Bake",
      body: "lorem ipsum.....",
      author: "Camila Cabello",
      id: 2,
    },
    { title: "Fit Chick", body: "lorem ipsum.....", author: "Madonna", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="main">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Main;
