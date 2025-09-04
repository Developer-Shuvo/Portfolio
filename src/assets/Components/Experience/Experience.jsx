"use client";
import { EXPERIENCES } from "../../../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  const bgColors = [
    "bg-gradient-to-br from-lime-400 to-pink-600",
    "bg-gradient-to-br from-blue-500 to-green-400",
    "bg-gradient-to-br from-green-400 to-emerald-500",
    "bg-gradient-to-br from-purple-500 to-indigo-500",
    "bg-gradient-to-br from-yellow-400 to-amber-500",
  ];

  return (
    <div id="experience" className="py-14 lg:py-20 ">
      {/* Section Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center text-3xl md:text-4xl lg:text-5xl 
        font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-700 
        text-transparent bg-clip-text"
      >
        Experience
      </motion.h1>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 place-items-center 
      ">
        {EXPERIENCES.map((experience, index) => {
          const bgColor = bgColors[index % bgColors.length];

          return (
            <motion.div
              key={index}
              className="relative w-[90%] sm:w-[80%] lg:w-[85%] h-auto flex justify-center items-center"
              initial={{ scale: 0.7, opacity: 0, y: 100 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 18,
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Background Gradient Box */}
              <div
                className={`absolute inset-0 ${bgColor} blur-2xl opacity-20 rounded-3xl`}
              ></div>

              {/* Foreground Card */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                whileHover={{ scale: 1.04, y: 10 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 10,
                }}
                className="relative border border-white/20 backdrop-blur-lg 
                w-full p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg hover:shadow-purple-900  z-10 
                bg-yellow/10 text-white "
              >
                {/* Year */}
                <p className="text-sm md:text-base font-semibold text-gray-300">
                  {experience.year}
                </p>

                {/* Role & Company */}
                <h2 className="text-xl md:text-2xl font-bold mt-2">
                  {experience.role}{" "}
                  <span className="text-gray-400 font-medium">
                    @ {experience.company}
                  </span>
                </h2>

                {/* Description */}
                <p className="text-gray-200 mt-4 mb-6 leading-relaxed text-sm md:text-base">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className=" text-gray-100 text-xs md:text-sm font-medium px-3 py-1.5 
                      rounded-full border border-white/30 hover:bg-white/30 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
