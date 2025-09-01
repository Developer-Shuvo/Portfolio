import React from "react";
import { PROJECTS } from "../../../../constants";
// Removed 'Technologies' as it was incorrectly imported and used
// You should be using 'tech' from the map function

const Projects = () => {
  return (
    <div className="p-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>

      <div className="">
        {PROJECTS.map(
          (
            project,
            index // Renamed 'Projects' to 'project' for clarity
          ) => (
            <div
              key={index}
              className="mb-8 border border-[#2f176f] border-0.5 p-4 flex flex-wrap lg:justify-center"
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image} // Changed from Projects.image
                  width={250}
                  height={250}
                  alt={project.title} // Corrected alt text to be dynamic
                  className="mb-6 rounded lg:mr-4" // Added margin-right for spacing
                />
              </div>

              {/* Project Details (Title, Description, and Technologies) */}
              <div className="w-full max-w-xl lg:w-3/4">
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
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
