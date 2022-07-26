import "./BlogDetails.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BlogDetails = ({ blog }) => {
  if (blog.title.length >= 56) {
    blog.title = blog.title.substring(0, 56) + "...";
  }
  if (blog.body.length >= 669) {
    blog.body = blog.body.substring(0, 669) + "...";
  }
  return (
    <div className="blog-details">
      <h4 className="blog-title">{blog.title}</h4>
      <p className="blog-body">{blog.body}</p>
      {blog.tag && <div className="tag">{blog.tag}</div>}
      <span className="time">
        {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
      </span>
    </div>
  );
};

export default BlogDetails;
