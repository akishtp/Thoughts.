import React from "react";
import "./Blog.css";

interface BlogProps {
  title: string;
  date: string;
  body: string;
}

const Blog: React.FC<BlogProps> = ({ title, date, body }) => {
  return (
    <div className="blog">
      <div className="title">{title}</div>
      <div className="date">{date}</div>
      <div className="body">{body}</div>
    </div>
  );
};

export default Blog;
