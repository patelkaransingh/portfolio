import React, { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import ProfilePhoto from "@/assets/profile-photo.webp";
import { FiDownload } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { motion } from "motion/react";

const Header = () => {
  const { isDark } = useContext(ThemeContext);

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
    <div
      id="home"
      className="max-w-3xl text-center mx-auto h-screen flex flex-col md:flex-row items-center gap-4 md:gap-20 justify-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          className="rounded-full sm:w-40 md:w-110"
          src={ProfilePhoto}
          alt=""
          width={170}
        />
      </motion.div>
      <div>
        <motion.h3
          className="text-xl md:text-2xl mb-3 font-ovo"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi! I'm Karan Patel 👋🏻
        </motion.h3>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-4xl lg:text-[44px] font-ovo"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Backend Developer
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto font-ovo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          I'm a Java backend developer with {getExperience()} years of
          experience in building microservices,and scalable solutions.
        </motion.p>
        <div className="flex justify-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            href="/resume.pdf"
            download
            className={`flex items-center gap-2 px-4 py-1 
              border rounded-full
                ${isDark ? "border-white/50" : "border-gray-500"}
              `}
          >
            Download CV <FiDownload className="h-4 " />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
