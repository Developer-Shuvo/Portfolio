import React, { useState, useCallback } from "react";
import profilePic from "./shuvo.jpg";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
  FaLinkedin,
  FaChevronUp,
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

  // ✅ Define animation delay here
  const h = 3;

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
      {/* ✅ Framer Motion image with working animation */}
      <motion.img
        width={650}
        height={650}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: h - 1.5 }}
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

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div id="intro" className=" pt-20  relative">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/*_______ Profile Image with Tilt Effect _______ */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
          <div className="flex justify-center items-center">
            <ProfileImageTilt />
          </div>
        </div>

        {/*_______ Social Icons & Scroll Indicator _______ */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex flex-col items-center gap-4 text-2xl fixed right-10 top-2/5 -translate-y-1/2 mr-8 z-[999]"
        >
          {/* GitHub */}
          <a
            href="https://github.com/Developer-Shuvo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="relative group flex flex-col items-center text-stone-400 transition"
          >
            {/* Floating background glow */}
            <span className="absolute -inset-2 rounded-full bg-lime-600 scale-0 group-hover:scale-125 group-hover:opacity-80 transition-all duration-700"></span>

            {/* Icon */}
            <FaGithub className="relative z-10 text-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-360 text-stone-300" />

            {/* Tooltip text (left side) */}
            <span className="absolute left-[150px] opacity-0 group-hover:left-[-130px] group-hover:opacity-100 bg-lime-600 text-white text-xs px-3 py-1 rounded-lg shadow-lg transition-all duration-700 ease-in-out">
              GitHub Profile
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="relative group flex flex-col items-center text-stone-400 transition"
          >
            <span className="absolute -inset-2 rounded-full bg-blue-600 scale-0 group-hover:scale-125 group-hover:opacity-80 transition-all duration-700"></span>
            <FaLinkedin className="relative z-10 text-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-360 text-stone-300" />
            {/* Tooltip text (left side) */}
            <span className="absolute left-[150px] opacity-0 group-hover:left-[-130px] group-hover:opacity-100 bg-blue-700 text-white text-xs px-3 py-1 rounded-lg shadow-lg transition-all duration-700 ease-in-out">
              Disable Profile
            </span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/mdnazmul.hasanshuvo.5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="relative group flex flex-col items-center text-stone-400 transition"
          >
            <span className="absolute -inset-2 rounded-full bg-blue-500 scale-0 group-hover:scale-125 group-hover:opacity-80 transition-all duration-700"></span>
            <FaFacebook className="relative z-10 text-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-360 text-stone-300" />
            {/* Tooltip text (left side) */}
            <span className="absolute left-[150px] opacity-0 group-hover:left-[-140px] group-hover:opacity-100 bg-blue-600 text-stone-200 text-xs px-3 py-1 rounded-lg shadow-lg transition-all duration-700 ease-in-out">
              Facebook Profile
            </span>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/SHUVO_1010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="relative group flex flex-col items-center text-stone-400 transition"
          >
            <span className="absolute -inset-2 rounded-full bg-sky-500 scale-0 group-hover:scale-125 group-hover:opacity-80 transition-all duration-700"></span>
            <FaTwitter className="relative z-10 text-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-360 text-stone-300" />
            {/* Tooltip text (left side) */}
            <span className="absolute left-[150px] opacity-0 group-hover:left-[-130px] group-hover:opacity-100 bg-sky-600 text-stone-200 text-xs px-3 py-1 rounded-lg shadow-lg transition-all duration-700 ease-in-out">
              Twitter Profile
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/nazmul_hasan_shuvooo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="relative group flex flex-col items-center text-stone-400 transition"
          >
            <span className="absolute -inset-2 rounded-full bg-pink-500 scale-0 group-hover:scale-125 group-hover:opacity-80 transition-all duration-700"></span>
            <FaInstagram className="relative z-10 text-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-360 text-stone-300" />
            {/* Tooltip text (left side) */}
            <span className="absolute left-[150px] opacity-0 group-hover:left-[-140px] group-hover:opacity-100 bg-pink-600 text-stone-200 text-xs px-3 py-1 rounded-lg shadow-lg transition-all duration-700 ease-in-out">
              Instagram Profile
            </span>
          </a>

          {/* Vertical Line */}
          <div className="h-28 w-[1px] bg-stone-400"></div>

          {/* Scroll Down Icon */}
          <a
            href="#contact"
            className="relative group flex-col flex items-center justify-center w-10 h-10 rounded-full border-2 border-lime-600 hover:border-white ease-in-out duration-500 text-white"
            onClick={(e) => {
              // add animation class
              e.currentTarget.classList.add("animate-shake");
              // remove it after animation ends so it can trigger again
              setTimeout(() => {
                e.currentTarget.classList.remove("animate-shake");
              }, 600);
            }}
          >
            <span className="absolute -inset-0.5 rounded-full bg-orange-400 blur-xl scale-0 group-hover:scale-125 group-hover:opacity-80 transition-all duration-500"></span>
            <FaChevronDown className="text-lg text-lime-400" />
          </a>

          {/* Scroll Up Icon */}
          <a
            href="#intro"
            className="relative group flex-col flex items-center justify-center w-8 h-8 rounded-full border-2 border-sky-400 hover:border-white ease-in-out duration-500  text-white"
          >
            <span className="absolute -inset-0.5 rounded-full bg-sky-600 blur-lg scale-0 group-hover:scale-125 group-hover:opacity-80 transition-all duration-500"></span>
            <FaChevronUp className="text-sm text-sky-400 " />
          </a>
        </motion.div>

        {/*_______ Name, Title_______ */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h1
              variants={childVariants}
              className="name pb-2 text-4xl tracking-tighter lg:text-6xl font-semibold"
            >
              SHUVO
            </motion.h1>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent "
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter]"
            >
              It's me Shuvo, a passionate frontend developer dedicated to
              building modern, responsive, and user-friendly websites. I love
              turning ideas into interactive digital experiences using React,
              Tailwind CSS, and other cutting-edge web technologies.
            </motion.p>
            <div className="flex flex-col md:flex-row items-center gap-0 sm:gap-0 md:gap-4 lg:gap-8">
              {/*---------------- CV Button---------------- */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                variants={childVariants}
                href="https://drive.google.com/file/d/18OKI4hFKohKrQsPcdgVrHPctd0Qr4DSL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="border border-stone-400 flex items-center text-center p-4 
                text-sm md:text-base lg:text-lg text-stone-300 mb-10 mt-10"
              >
                {" "}
                GET MY CV{" "}
              </motion.a>

              {/*----------------- Get in touch Button---------------- */}
              <motion.a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="
                  relative inline-flex items-center justify-center
                  px-4 py-3 text-lg font-bold text-stone-300 hover:text-yellow-400
                  cursor-pointer
                  border border-[#4f4e4e] hover:bg-black
                  shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)]
                  
                  transition-all duration-500 ease-in-out
                  active:translate-y-[4px]
                  active:shadow-[0_1px_2px_rgba(0,0,0,1),0_5px_10px_rgba(0,0,0,0.4)]
    "
                >
                  Get in Touch
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="
                    relative flex items-center justify-center ml-3
                    w-10 h-10 rounded-full
                    
                    border border-cyan-800
                    hover:border-lime-500
                    shadow-[0_0_1px_rgba(0,0,0,1)]
                    transition-all duration-500 ease-in-out
      "
                  >
                    <svg
                      id="Arrow"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      width="30px"
                      className="
          transition-all duration-500 ease-in-out
          drop-shadow-[0_10px_20px_rgba(26,25,25,0.9)]
          hover:drop-shadow-[0_10px_20px_rgba(50,50,50,1),0_0_20px_rgba(2,2,2,1)]
        "
                    >
                      <defs>
                        <linearGradient
                          y2="100%"
                          x2="100%"
                          y1="0%"
                          x1="0%"
                          id="iconGradient"
                        >
                          <stop
                            style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                            offset="0%"
                          />
                          <stop
                            style={{ stopColor: "#AAAAAA", stopOpacity: 1 }}
                            offset="100%"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#iconGradient)"
                        d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
              </motion.a>
            </div>
          </motion.div>

          {/*======================= Social Rounded Modern Button ======================= */}
          {/* From Uiverse.io by Praashoo7 */}
          <div className="main">
            <div className="up">
              <button className="card1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="30px"
                  height="30px"
                  fillRule="nonzero"
                  className="instagram"
                >
                  <g
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(8,8)">
                      <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                    </g>
                  </g>
                </svg>
              </button>
              <button className="card2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="30px"
                  height="30px"
                  className="twitter"
                >
                  <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                </svg>
              </button>
            </div>
            <div className="down">
              <button className="card3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                  className="github"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </button>
              <button className="card4">
                <svg
                  height="30px"
                  width="30px"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="discord"
                >
                  <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
