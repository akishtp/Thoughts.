import { useState, useEffect } from "react";
import "./HomeBlog.css";

const HomeBlog = ({ blog }) => {
  const [bodyShort, setBodyShort] = useState(blog.body);
  useEffect(() => {
    if (blog.body.length >= 369) {
      setBodyShort(blog.body.substring(0, 369) + "...");
    }
  }, [blog]);

  return (
    <div className="blocard">
      <div className="blocard-wrapper">
        <div className="blog-date">{blog.createdAt}</div>
        <div className="blog-title">{blog.title}</div>
        <div className="blog-body">{bodyShort}</div>
        <hr />
      </div>
    </div>
  );
};

export default HomeBlog;
