import React from "react";
import profilePic from "./shuvo.jpg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
  FaLinkedin,
} from "react-icons/fa"; // Added FaChevronDown, FaLinkedin

const Hero = () => {
  return (
    <div className="pb-4 lg:-mb-36 relative">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/*_______ Profile Image_______ */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
          <div className="flex justify-center items-center">
            <img
              className="border border-stone-900 rounded-3xl object-contain 
                  w-36 h-36 
                  sm:w-[200px] sm:h-[220px] 
                  md:w-[280px] md:h-[320px] 
                  lg:w-[300px] lg:h-[320px] 
                  xl:w-[450px] xl:h-[550px]"
              src={profilePic}
              alt="Profile Pic Shuvo"
            />
          </div>
        </div>

        {/*_______ Social Icons & Scroll Indicator _______ */}
        <div className="hidden lg:flex flex-col items-center gap-4 text-3xl absolute right-0 top-1/2 -translate-y-1/2 mr-8">
          {/* Github */}
          <a
            href="https://github.com/Developer-Shuvo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
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
          {/* Twitter */}
          <a
            href="https://x.com/SHUVO_1010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
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

          {/* Vertical Line */}
          <div className="h-28 w-0.5 bg-stone-400 my-2"></div>

          {/* Scroll Down Icon */}
          <a
            href="#about"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white"
          >
            <FaChevronDown className="text-xl" />
          </a>
        </div>

        {/*_______ Name, Title_______  */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            {/* Name */}
            <h1 className="pb-2 text-4xl tracking-tighter lg:text-6xl font-semibold">
              SHUVO
            </h1>

            {/* Title */}
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent ">
              Front-End Developer
            </span>
            {/* Description */}
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter]">
              It's me Shuvo, a passionate frontend developer dedicated to
              building modern, responsive, and user-friendly websites. I love
              turning ideas into interactive digital experiences using React,
              Tailwind CSS, and other cutting-edge web technologies.
            </p>

            {/* Button */}
            <div className="flex flex-col md:flex-row items-center gap-0 sm:gap-0 md:gap-4 lg:gap-8">
              {/* CV */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="border border-stone-300 flex items-center text-center p-4 text-sm md:text-base lg:text-lg text-stone-300 mb-10"
              >
                GET MY CV
              </a>
              {/* Get In Touch */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="border border-stone-300 flex items-center text-center p-4 text-sm md:text-base lg:text-lg text-stone-300 mb-10"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
