import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="small-nav">
        <div className="left-side">akishtp</div>
        <div className="right-side">twitiggitsite</div>
      </div>
      <nav className="navbar">
        <div className="left-side">
          Blogs.<span>(Journal)</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
