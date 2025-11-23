import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import { projects } from "@/assets/data";

function Experience() {
  const { isDark, setIsDark } = useContext(ThemeContext);

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
            <div className="w-[60vw] md:w-[50vw] lg:w-[40vw] flex justify-center">
              <Image
                className={`rounded-3xl
                  ${isDark ? "opacity-82" : ""}
                `}
                src={project.image}
                alt={project.name}
                layout="responsive"
              />
            </div>

            {/* Data on the right */}
            <div className="flex flex-col w-full">
              <h3
                className={`text-2xl md:text-xl font-medium
                ${isDark ? "text-white" : "text-gray-800"}  
              `}
              >
                {project.name}
              </h3>
              <p
                className={`text-lg mt-2
                ${isDark ? "text-white/90" : "text-gray-600"}
              `}
              >
                {project.duration}
              </p>
              <p className={`mt-4 ${isDark ? "text-white" : "text-gray-700"}`}>
                {project.description}
              </p>

              <h4
                className={`mt-4 font-semibold text-lg ${
                  isDark ? "text-white/80" : "text-gray-700"
                }`}
              >
                Tech Stack:
              </h4>
              <ul className="flex flex-wrap gap-4 mt-2">
                {project.techStack.map((tech, idx) => (
                  <li
                    key={idx}
                    className={`px-3 py-1 rounded-lg text-sm
                      ${
                        isDark
                          ? "bg-white/15 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
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
