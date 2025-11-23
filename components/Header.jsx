import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import ProfilePhoto from "@/assets/profile-photo.webp";
import { FiDownload } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const getExperience = () => {
    const start = new Date("2020-10-01");
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    // If months > 0, show "+" after years
    const label = months > 0 ? `${years}+` : `${years}`;

    return label;
  };

  return (
    <div className="max-w-3xl text-center mx-auto h-screen flex flex-col md:flex-row items-center gap-4 md:gap-20 justify-center">
      <div>
        <Image
          className="rounded-full sm:w-40 md:w-110"
          src={ProfilePhoto}
          alt=""
          width={170}
        />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl mb-3 font-ovo">
          Hi! I'm Karan Patel 👋🏻
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[44px] font-ovo">
          Backend Developer
        </h1>
        <p className="max-w-2xl mx-auto font-ovo">
          I'm a Java backend developer with {getExperience()} years of
          experience in building microservices,and scalable solutions.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#contact"
            className={`flex items-center gap-2 px-4 py-1
              border rounded-full
                ${
                  isDark
                    ? "bg-white/20 border-white/50"
                    : "bg-black text-white border-gray-500"
                }
              `}
          >
            Connect Info
            <IoInformationCircleOutline className="text-xl " />
          </a>
          <a
            href="/resume.pdf"
            download
            className={`flex items-center gap-2 px-4 py-1 
              border rounded-full
                ${isDark ? "border-white/50" : "border-gray-500"}
              `}
          >
            Download CV <FiDownload className="h-4 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
