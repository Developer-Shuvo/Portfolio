import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll করলে মেনু বন্ধ হয়ে যাবে
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <div className="">
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Navbar */}
        <div
          className="mx-auto hidden max-w-3xl items-center justify-center rounded-lg
           bg-black/20 py-3 backdrop-blur-lg lg:flex"
        >
          <div className="flex justify-between items-center gap-20">
            {/* logo */}
            <div>
              <a href="#intro">
                <img className="h-8 w-full" src={logo} width={90} alt="logo " />
              </a>
            </div>

            {/* links */}
            <div>
              <ul className="flex items-center gap-4">
                <li onClick={toggleMobileMenu}>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#intro"
                  >
                    Intro
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#myWork"
                    onClick={toggleMobileMenu}
                  >
                    My Work
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#technologies"
                    onClick={toggleMobileMenu}
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#projects"
                    onClick={toggleMobileMenu}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#experience"
                    onClick={toggleMobileMenu}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#contact"
                    onClick={toggleMobileMenu}
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
                  className="h-6 w-full m-2 pl-4"
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
                  <FaTimes className="m-4 h-6 w-5" />
                ) : (
                  <FaBars className="m-4 h-6 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* AnimatePresence দিয়ে মোড়ানো */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.ul
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="ml-8 mt-4 pb-4 flex flex-col gap-4 backdrop-blur-md"
              >
                <li className="border-b pb-1 mr-50 border-0.5 border-stone-700">
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300 "
                    href="#intro"
                    onClick={toggleMobileMenu}
                  >
                    Intro
                  </a>
                </li>
                <li
                  id="#myWork"
                  className="border-b pb-1 mr-40 border-0.5 border-stone-700"
                >
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#myWork"
                    onClick={toggleMobileMenu}
                  >
                    My Work
                  </a>
                </li>
                <li className="border-b pb-1 mr-30 border-0.5 border-stone-700">
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#technologies"
                    onClick={toggleMobileMenu}
                  >
                    Technologies
                  </a>
                </li>
                <li className="border-b pb-1 mr-20 border-0.5 border-stone-700">
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#projects"
                    onClick={toggleMobileMenu}
                  >
                    Projects
                  </a>
                </li>
                <li className="border-b pb-1 mr-10 border-0.5 border-stone-700">
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#experience"
                    onClick={toggleMobileMenu}
                  >
                    Experience
                  </a>
                </li>
                <li className="border-b pb-1 mr-2 border-0.5 border-stone-700">
                  <a
                    className="text-md hover:text-yellow-400 ease-in-out duration-300"
                    href="#contact"
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
