import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import Photo from "@/assets/photo.jpg";
import { info } from "@/assets/data";

function About() {
  const { isDark, setIsDark } = useContext(ThemeContext);

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
            {info.map((info, index) => (
              <a
                key={index}
                className={`border-[0.5px] rounded-xl cursor-pointer p-3 md:p-6
                  hover:-translate-y-1 duration-500
                    ${
                      isDark
                        ? "border-white/50 hover:bg-(--darkHover) hover:shadow-white"
                        : "border-gray-400 hover:bg-(--lightHover) hover:shadow-black"
                    }
                  `}
                href={info.link}
              >
                <li>
                  <div className="text-2xl md:text-3xl">{info.icon}</div>
                  <h3
                    className={`my-2 md:my-4 font-semibold
                    ${isDark ? "text-white/90" : "text-gray-700"}
                  `}
                  >
                    {info.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-white/80" : "text-gray-700"
                    }
                  `}
                  >
                    {info.description}
                  </p>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
