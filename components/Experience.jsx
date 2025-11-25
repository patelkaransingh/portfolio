import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import { projects } from "@/assets/data";
import { motion } from "motion/react";

function Experience() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
    >
      <motion.h2
        className="text-center text-3xl md:text-5xl font-ovo mb-15"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Professional Experience
      </motion.h2>

      <div>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-6 mt-10"
          >
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              className="w-[60vw] md:w-[50vw] lg:w-[40vw] flex justify-center"
            >
              <Image
                className={`rounded-3xl ${isDark ? "opacity-82" : ""}`}
                src={project.image}
                alt={project.name}
                layout="responsive"
              />
            </motion.div>

            {/* Right Text */}
            <div className="flex flex-col w-full">
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                className={`text-2xl md:text-xl font-medium ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {project.name}
              </motion.h3>

              {/* Duration */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`text-lg mt-2 ${
                  isDark ? "text-white/90" : "text-gray-600"
                }`}
              >
                {project.duration}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.35 }}
                className={`mt-4 ${isDark ? "text-white" : "text-gray-700"}`}
              >
                {project.description}
              </motion.p>

              {/* Tech title */}
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
                className={`mt-4 font-semibold text-lg ${
                  isDark ? "text-white/80" : "text-gray-700"
                }`}
              >
                Tech Stack:
              </motion.h4>

              {/* Tech list */}
              <ul className="flex flex-wrap gap-4 mt-2">
                {project.techStack.map((tech, tIndex) => (
                  <motion.li
                    key={tIndex}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.45 + tIndex * 0.05, // tech chips staggered
                    }}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      isDark
                        ? "bg-white/15 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
