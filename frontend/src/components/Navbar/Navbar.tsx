import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="small-nav">
        <a href="http://akishtp.github.io/akishtp" className="left-side">
          akishtp
        </a>
        <div className="right-side">twitiggitsite</div>
      </div>
      <nav className="navbar">
        <Link to="/" className="left-side">
          Blogs.<span>(Journal)</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
