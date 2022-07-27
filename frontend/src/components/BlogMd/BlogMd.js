import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./BlogMd.css";

const BlogMd = ({ title, body }) => {
  console.log(title, body);
  return (
    <div className="blog-md">
      <h4 className="blog-title">{title}</h4>
      <ReactMarkdown remarkPlugins={[gfm]}>{body}</ReactMarkdown>
    </div>
  );
};

export default BlogMd;
