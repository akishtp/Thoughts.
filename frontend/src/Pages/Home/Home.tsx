import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
// import Blog from "../../components/Blog/Blog";
import { getBlogs } from "../../features/blog/blogActions";
import "./Home.css";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogs());
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
      <div className="older-blogs"></div>
      {/* <Blog
        title="I write blogs now Loll 3"
        date="innale"
        body="lore ipsum with a very lareg text is writtern is which is larger than the previous two text also making this the alrgets blog that has been written by me in this fake b log website yet here which may of bediffernet sizes and made to look as if it was a very fine day in the suburbs of us and maerica of the 90th centiury"
      />
      <Blog
        title="I write blogs now Loll 4"
        date="innale"
        body="biggest blog yet by the akish written as a joke to make a body filled with textlore ipsum with a very lareg text is writtern is which is larger than the previous two text also making this the alrgets blog that has been written by me in this fake b log website yet here which may of bediffernet sizes and made to look as if it was a very fine day in the suburbs of us and maerica of the 90th centiury"
      />
      <Blog title="I Loll 5" date="innale" body="kore valiya body" />
      <Blog title="I Loll 6" date="innale" body="kore valiya body" />
      <Blog
        title="I write blogs now Loll 7"
        date="innale"
        body="biggest blog yet by the akish written as a joke to make a body filled with textlore ipsum with a very lareg text is writtern is which is larger than the previous two text also making this the alrgets blog that has been written by me in this fake b log website yet here which may of bediffernet sizes and made to look as if it was a very fine day in the suburbs of us and maerica of the 90th centiury"
      /> */}
    </div>
  );
};

export default Home;
