import { FaInstagram, FaTwitter, FaGlobe, FaLinkedinIn } from "react-icons/fa";

import React from "react";

const Topnav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-wrapper">
        <div className="left-side">A Blog App from Verlow By Akish</div>
        <div className="right-side">
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaTwitter />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGlobe />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
