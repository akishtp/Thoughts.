import { useEffect, useState } from "react";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    const fetchblogs = async () => {
      const response = await fetch("/api/blogs");
      const json = await response.json();

      if (response.ok) {
        setBlogs(json);
      }
    };
    fetchblogs();
  }, []);

  return (
    <div className="home">
      Home
      {blogs && blogs.map((blog) => <BlogDetails blog={blog} key={blog._id} />)}
    </div>
  );
};

export default Home;
