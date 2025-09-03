import { motion } from "framer-motion";

import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiFigma, SiGithub, SiMongodb } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0], // Smoothly goes up and comes down
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const Technologies = () => {
  return (
    // Technology Text
    <div id="technologies" className="pb-24 py-20 lg:py-0 mt-40 lg:mt-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 lg:pt-40 text-center text-3xl lg:text-5xl font-bold"
      >
        Technologies
      </motion.h1>

      {/* Icons */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Html */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiHtml5Fill className="text-7xl text-orange-500" />
        </motion.div>
        {/* CSS */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p4"
        >
          <RiCss3Fill className="text-7xl text-sky-600" />
        </motion.div>
        {/* JavaScript */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p4"
        >
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>
        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* Next js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <RiNextjsLine className="text-7xl text-stone-00" />
        </motion.div>
        {/* Mongo DB */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        {/* Node js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <RiNodejsLine className="text-7xl text-green-600" />
        </motion.div>

        {/* Github */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <SiGithub className="text-7xl text-white" />
        </motion.div>
        {/* Figma */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <SiFigma className="text-7xl text-pink-500" />
        </motion.div>

        {/* Mongo DB */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
