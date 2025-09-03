import React, { useState } from "react";
import logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { ul } from "framer-motion/client";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    // Corrected line: Add parentheses around `href`
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;

      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Mobile MenuBar
    setMobileMenuOpen(false);
  };

  return (
    <div className="">
      <nav className="fixed left-0 right-0  top-4 z-50">
        {/* Navbar */}
        <div
          className="mx-auto hidden max-w-3xl items-center justify-center rounded-lg
           bg-black/20 py-3  backdrop-blur-lg lg:flex"
        >
          <div className="flex justify-between items-center gap-6">
            {/* logo */}
            <div>
              <a href="#">
                <img className="h-8 w-full" src={logo} width={90} alt="logo " />
              </a>
            </div>

            {/* links */}
            <div>
              <ul className="flex items-center gap-6">
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#"
                    onClick={"#"}
                  >
                    Intro
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#"
                    onClick={"#"}
                  >
                    My Work
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#"
                    onClick={"#"}
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#"
                    onClick={"#"}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#"
                    onClick={"#"}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#"
                    onClick={"#"}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img
                  className="h-8 w-full m-2"
                  src={logo}
                  alt="logo"
                  width={90}
                />
              </a>
            </div>

            <div className="flex items-center">
              <button
                className="focus: items-center lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md"></ul>
          )}
          {/* _________________ */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
