import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getBlogs } from "../../features/blog/blogActions";
import "./Home.css";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { blogs } = useAppSelector((state) => state.blogs);

  useEffect(() => {
    console.log("how many times does it run?");

    // dispatch(getBlogs());
  });
  return (
    <div className="home">
      <div className="new-blogs">
        <div className="blog1">Reconstruction going on 👷‍♂️🪚</div>
        <div className="blog-2n3">
          <div className="blog2"></div>
          <div className="blog3"></div>
        </div>
      </div>
      <div className="older-blogs">
        {blogs.length > 0 ? (
          <>
            {blogs.map((blog: any) => (
              <div key={blog._id}>{blog.title}</div>
            ))}
          </>
        ) : (
          <div className="no-records">No Records! Try adding new Records</div>
        )}
      </div>
    </div>
  );
};

export default Home;
