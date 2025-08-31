import React from "react";
import logo from "./raviKumarLogo.webp";
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
            className="mx-2"
            width={50}
            height={33}
            alt="portfolio logo"
          />
        </a>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 text-2xl">
        {/* Github */}
        <a
          href="https://github.com/Developer-Shuvo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        {/* Linked In */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/nazmul_hasan_shuvooo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        {/* Twitter */}
        <a
          href="https://x.com/SHUVO_1010"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/mdnazmul.hasanshuvo.5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
