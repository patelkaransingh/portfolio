import React from "react";
import { skills } from "@/assets/data";
import Image from "next/image";
function Skills() {
  return (
    <div
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
    >
      <h2 className="text-center text-3xl md:text-5xl font-ovo">
        Skills & Tools
      </h2>
      <h4 className="text-center my-2">
        Core Skills: Java · Springboot · Microservices · JWT · JPA/Hibernate ·
        SQL
      </h4>

      <div className="mt-6 md:mt-15 grid grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-3 md:py-5 lg:py-8 rounded-md md:rounded-2xl bg-gray-50/90 backdrop-blur-lg shadow-sm"
          >
            <Image src={skill.icon} alt={skill.name} className="w-12 h-12" />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
