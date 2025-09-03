import { PROJECTS } from "../../../../constants";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="p-4 py-20 lg:py-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" lg:my-20 my-8 text-center text-3xl lg:text-5xl font-bold"
      >
        Projects
      </motion.h1>

      <div className="">
        {PROJECTS.map(
          (
            project,
            index // Renamed 'Projects' to 'project' for clarity
          ) => (
            <div
              key={index}
              className="mb-8 
               p-4 flex flex-wrap lg:justify-center border border-gray-800
               rounded-3xl shadow-lg shadow-gray-700  bg-transparent"
            >
              {/* Project Image */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 justify-center items-center flex"
              >
                <img
                  src={project.image} // Changed from Projects.image
                  width={250}
                  height={250}
                  alt={project.title} // Corrected alt text to be dynamic
                  className="mb-6 rounded lg:mr-4" // Added margin-right for spacing
                />
              </motion.div>

              {/* Project Details (Title, Description, and Technologies) */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 "
              >
                <h3 className="mb-2 font-semibold text-2xl">
                  {project.title} {/* Changed from Projects.title */}
                </h3>

                <p className="mb-4 text-stone-400">
                  {project.description}{" "}
                  {/* Changed from Projects.description */}
                </p>

                <div className="flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      key={techIndex}
                    >
                      {tech} {/* Corrected from {Technologies} to {tech} */}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
