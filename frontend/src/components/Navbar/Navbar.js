import Topnav from "./Topnav";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <Topnav />
      <div className="navbar">
        <div className="navbar-wrapper">
          <div className="left-side">
            <h3>Blog.</h3>
          </div>
          <div className="middle-side">
            <div className="middle-nav">Home Page</div>
            <div className="middle-nav">About us</div>
            <div className="middle-nav">By Akish</div>
          </div>
          <div className="right-side">
            <div className="user">User</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
