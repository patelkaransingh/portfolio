import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { skills } from "@/assets/data";
import Image from "next/image";
import { motion } from "motion/react";
function Skills() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
    >
      <motion.h2
        className="text-center text-3xl md:text-5xl font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Skills & Tools
      </motion.h2>
      <motion.h4
        className="text-center my-2"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Core Skills: Java · Springboot · Microservices · JWT · JPA/Hibernate ·
        SQL
      </motion.h4>

      <div className="mt-6 md:mt-15 grid grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            className={`flex flex-col items-center py-3 md:py-5 lg:py-8 
              rounded-md md:rounded-2xl backdrop-blur-lg shadow-sm
              ${isDark ? "bg-(--darkHover)/30" : "bg-gray-50/90"}
          `}
          >
            <Image
              src={isDark ? skill.iconDark : skill.icon}
              alt={skill.name}
              className="w-12 h-12"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }} // slightly slower text
              className="text-sm font-medium"
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
