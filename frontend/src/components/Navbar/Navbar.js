import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="left-side">
          <Link to="/">Blog</Link>
        </div>
        <div className="right-side">
          <Link to="/create">
            <button className="new-btn">New Blog</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
