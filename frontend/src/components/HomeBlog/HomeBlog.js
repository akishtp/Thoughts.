import "./HomeBlog.css";

const HomeBlog = ({ blog }) => {
  return (
      <div className="blocard">
        <div className="blocard-wrapper">
          <div className="blog-date">{blog.createdAt}</div>
          <div className="blog-title">{blog.title}</div>
          <div className="blog-body">{blog.body}</div>
          <hr />
        </div>
    </div>
  );
};

export default HomeBlog;
