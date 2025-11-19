import Image from "next/image";
import React from "react";
import { projects } from "@/assets/data";

function Experience() {
  return (
    <div
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
    >
      <h2 className="text-center text-3xl md:text-5xl font-ovo mb-15">
        Professional Experience
      </h2>

      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-6 mt-10"
          >
            {/* Image on the left */}
            <div className="w-auto h-auto lg:w-1/3 flex justify-center">
              <Image
                className="rounded-3xl"
                src={project.image}
                alt={project.name}
                layout="responsive"
              />
            </div>

            {/* Data on the right */}
            <div className="flex flex-col w-full">
              <h3 className="text-2xl md:text-xl font-medium text-gray-800">
                {project.name}
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                {project.role} {project.duration}
              </p>
              <p className="text-gray-700 mt-4">{project.description}</p>

              <h4 className="mt-4 font-semibold text-lg">Tech Stack:</h4>
              <ul className="flex flex-wrap gap-4 mt-2">
                {project.techStack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-200 px-3 py-1 rounded-lg text-sm text-gray-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
