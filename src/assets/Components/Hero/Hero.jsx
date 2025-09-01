import React, { useState, useCallback } from "react";
import profilePic from "./shuvo.jpg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
  FaLinkedin,
} from "react-icons/fa";

// CardTilt logic for profile image
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const ProfileImageTilt = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="transition-[all_2000ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 5000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        display: "inline-block",
      }}
    >
      <img
        className="border border-stone-900 rounded-3xl object-contain 
                  w-36 h-36 
                  sm:w-[200px] sm:h-[220px] 
                  md:w-[280px] md:h-[320px] 
                  lg:w-[300px] lg:h-[400px] 
                  xl:w-[450px] xl:h-[450px]"
        src={profilePic}
        alt="Profile Pic Shuvo"
        draggable={false}
        style={{ userSelect: "none" }}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="pb-4 lg:-mb-36 relative">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/*_______ Profile Image with Tilt Effect _______ */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
          <div className="flex justify-center items-center">
            <ProfileImageTilt />
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
            <h1 className="name pb-2 text-4xl tracking-tighter lg:text-6xl font-semibold">
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
