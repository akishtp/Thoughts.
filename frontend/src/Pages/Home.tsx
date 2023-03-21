import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Blog from "../components/Blog";

const Home: React.FC = () => {
  return (
    <div className="home">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          <Blog
            title="oru blog aparatha"
            date="innale"
            body="kore valiya body"
          />
          <Blog
            title="oru blog aparatha 2"
            date="innale"
            body="lore ipsum with a very lareg text is writtern here which may of bediffernet sizes and made to look as if it was a very fine day in the suburbs of us and maerica of the 90th centiury"
          />
          <Blog
            title="oru blog aparatha 3"
            date="innale"
            body="lore ipsum with a very lareg text is writtern is which is larger than the previous two text also making this the alrgets blog that has been written by me in this fake b log website yet here which may of bediffernet sizes and made to look as if it was a very fine day in the suburbs of us and maerica of the 90th centiury"
          />
          <Blog
            title="oru blog aparatha 4"
            date="innale"
            body="biggest blog yet by the akish written as a joke to make a body filled with textlore ipsum with a very lareg text is writtern is which is larger than the previous two text also making this the alrgets blog that has been written by me in this fake b log website yet here which may of bediffernet sizes and made to look as if it was a very fine day in the suburbs of us and maerica of the 90th centiury"
          />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Home;
