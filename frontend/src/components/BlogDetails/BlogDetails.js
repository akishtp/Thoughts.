const BlogDetails = ({ blog }) => {
  return (
    <div className="blog-details">
      <h4>{blog.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {blog.tag}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {blog.body}
      </p>
      <p>{blog.createdAt}</p>
    </div>
  );
};

export default BlogDetails;
