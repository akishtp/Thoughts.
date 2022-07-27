import "./BlogDetails.css";
import { HiTrash } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BlogDetails = ({ blog }) => {
  if (blog.title.length >= 56) {
    blog.title = blog.title.substring(0, 56) + "...";
  }
  if (blog.body.length >= 339) {
    blog.body = blog.body.substring(0, 339) + "...";
  }

  const handleDelete = async () => {
    await fetch(`/api/blogs/${blog._id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="blog-details">
      <div className="first-line">
        <h4 className="blog-title">{blog.title}</h4>
        <button className="delete-button">
          <HiTrash size={18} onClick={handleDelete} />
        </button>
      </div>
      <p className="blog-body">
        <ReactMarkdown remarkPlugins={[gfm]}>{blog.body}</ReactMarkdown>
      </p>
      {blog.tag && <div className="tag">{blog.tag}</div>}
      <span className="time">
        {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
      </span>
    </div>
  );
};

export default BlogDetails;
