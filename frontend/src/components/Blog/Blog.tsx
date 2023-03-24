import React from "react";
import "./Blog.css";

interface BlogProps {
  blog: { title: string; id: string; date: Date; body: string };
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
  return (
    <div className="blog">
      <div className="date">{blog.date.toString()}</div>
      <div className="title">{blog.title}</div>
      <div className="body">{blog.body}</div>
    </div>
  );
};

export default Blog;
