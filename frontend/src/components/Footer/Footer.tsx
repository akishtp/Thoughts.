import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    console.log("pressed");

    setPressed(!pressed);
  };
  return (
    <footer className="footer">
      this button is for akishtp only. ➡️
      <Link to="/new">
        <button onClick={handleClick} className={pressed ? "pressed" : ""}>
          Do not Press
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
