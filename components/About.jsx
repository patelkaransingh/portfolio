import Image from "next/image";
import React from "react";
import Photo from "@/assets/photo.jpg";
import { HiCodeBracket } from "react-icons/hi2";
import { PiGraduationCapLight } from "react-icons/pi";
import { PiSquaresFourLight } from "react-icons/pi";

function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-3xl md:text-5xl font-ovo">About me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-6 mt-6 md:mt-15">
        <div className="flex w-full flex-col md:flex-row items-center justify-center">
          <Image className="w-50 md:w-80 rounded-3xl" src={Photo} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-5">
            I'm an experienced Backend Developer with professional experties in
            the field. Throughout my career, I have had the privilage of
            collaborating with prestigious organizations, contributing to their
            success and growth.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <a
              className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-3 md:p-6 hover:bg-(--lightHover) hover:-translate-y-1 duration-500 hover:shadow-black"
              href="#skills"
            >
              <li>
                <HiCodeBracket className="text-2xl md:text-3xl" />
                <h3 className="my-2 md:my-4 font-semibold text-gray-700">
                  Core Skills
                </h3>
                <p className="text-gray-600 text-sm">
                  Java · Springboot · Microservices · JWT · JPA/Hibernate · SQL
                </p>
              </li>
            </a>

            <a
              className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-3 md:p-6 hover:bg-(--lightHover) hover:-translate-y-1 duration-500 hover:shadow-black"
              href="#edication"
            >
              <li>
                <PiGraduationCapLight className="text-2xl md:text-3xl" />
                <h3 className="my-2 md:my-4 font-semibold text-gray-700">
                  Education
                </h3>
                <p className="text-gray-600 text-sm">
                  B.Tech in Computer Science
                </p>
              </li>
            </a>

            <a
              className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-3 md:p-6 hover:bg-(--lightHover) hover:-translate-y-1 duration-500 hover:shadow-black"
              href="#projects"
            >
              <li>
                <PiSquaresFourLight className="text-2xl md:text-3xl" />
                <h3 className="my-2 md:my-4 font-semibold text-gray-700">
                  Projects
                </h3>
                <p className="text-gray-600 text-sm">
                  Worked on 3 large-scale projects: Financial, BOM, and Retail.
                </p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
