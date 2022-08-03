import { useEffect, useState } from "react";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
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
      <div className="container">
        {blogs ? (
          blogs.map((blog) => <HomeBlog blog={blog} key={blog._id} />)
        ) : (
          <h1>There are no blogs, Try creating one</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
