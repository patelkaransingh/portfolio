import Image from "next/image";
import React from "react";
import ProfilePhoto from "@/assets/profile-photo.webp";
import { FiDownload } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";

const Header = () => {
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
          Bakend Developer
        </h1>
        <p className="max-w-2xl mx-auto font-ovo">
          I'm a Java backend developer with {getExperience()} years of
          experience in building microservices,and scalable solutions.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-4 py-1 border border-gray-500 rounded-full bg-black text-white flex items-center gap-2"
          >
            Connect Info
            <IoInformationCircleOutline className="text-xl " />
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-1 border border-gray-500 rounded-full flex items-center gap-2"
          >
            Download CV <FiDownload className="h-4 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
