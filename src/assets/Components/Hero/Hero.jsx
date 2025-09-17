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
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                href="https://drive.google.com/file/d/18OKI4hFKohKrQsPcdgVrHPctd0Qr4DSL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="
                relative inline-flex items-center justify-center
                px-4 py-3 text-sm md:text-base lg:text-lg 
                text-stone-300 hover:text-yellow-400
                cursor-pointer
                border border-[#4f4e4e] hover:bg-black
                shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)]
                transition-all duration-500 ease-in-out
                active:translate-y-[4px]
                active:shadow-[0_1px_2px_rgba(0,0,0,1),0_5px_10px_rgba(0,0,0,0.4)]
              "
              >
                GET MY CV
              </motion.a>

              {/*----------------- Get in touch Button---------------- */}
              <motion.a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="
                    relative inline-flex items-center justify-center
                    px-4 py-3 text-sm md:text-base lg:text-lg 
                    text-stone-300 hover:text-yellow-400
                    cursor-pointer uppercase
                    border border-[#4f4e4e] hover:bg-black
                    shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)]
                    transition-all duration-500 ease-in-out
                    active:translate-y-[4px]
                    active:shadow-[0_1px_2px_rgba(0,0,0,1),0_5px_10px_rgba(0,0,0,0.4)]"
                >
                  Get in Touch
                  <motion.div
                    variants={{
                      hovered: { rotate: 45 },
                      initial: { rotate: 0 },
                    }}
                    initial="initial"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="
                    relative flex items-center justify-center ml-3
                    w-6 h-6 rounded-full
                    border border-cyan-800
                    hover:border-lime-500
                    shadow-[0_0_1px_rgba(0,0,0,1)]
                    transition-all duration-500 ease-in-out"
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
                      hover:drop-shadow-[0_10px_20px_rgba(50,50,50,1),0_0_20px_rgba(2,2,2,1)] hover:rotate-45"
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
