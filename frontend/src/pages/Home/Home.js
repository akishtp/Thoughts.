import { useEffect, useState } from "react";
import BlogDetails from "../../components/BlogDetails/BlogDetails";
import "./Home.css";

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
      {blogs ? (
        blogs.map((blog) => <BlogDetails blog={blog} key={blog._id} />)
      ) : (
        <h1>There are no blogs currently, Try creating one</h1>
      )}
    </div>
  );
};

export default Home;
