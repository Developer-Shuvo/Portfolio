import React from "react";
import logo from "./logo.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center text-center justify-between py-6">
      {/* Left Logo */}
      <div className="flex flex-shrink-0 items-center">
        {" "}
        <a href="/" aria-label="Home ">
          <img
            src={logo}
            className=""
            width="100px"
            height="80px"
            alt="portfolio logo"
          />
        </a>
      </div>

      <div className="flex items-center justify-center gap-4 text-base text-stone-300 font-light">
        {/* Intro*/}
        <a
          href="https://github.com/Developer-Shuvo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Intro"
        >
          Intro
        </a>
        {/* About*/}
        <a
          href="https://github.com/Developer-Shuvo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="About"
        >
          About
        </a>
        {/* Works*/}
        <a
          href="https://github.com/Developer-Shuvo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Works"
        >
          Intro
        </a>
        {/* Contact*/}
        <a
          href="https://github.com/Developer-Shuvo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
