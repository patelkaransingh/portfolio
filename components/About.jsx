import React, { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import Photo from "@/assets/photo.jpg";
import { info } from "@/assets/data";
import { motion } from "motion/react";

function About() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      id="aboutme"
      className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
    >
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-3xl md:text-5xl font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-6 mt-6 md:mt-15">
        <motion.div
          className="flex w-full flex-col md:flex-row items-center justify-center"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image className="w-50 md:w-80 rounded-3xl" src={Photo} alt="" />
        </motion.div>
        <div className="flex flex-col items-center">
          <motion.p
            className="mb-5"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm an experienced Backend Developer with professional experties in
            the field. Throughout my career, I have had the privilage of
            collaborating with prestigious organizations, contributing to their
            success and growth.
          </motion.p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {info.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                // Animation for whole card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12, // stagger effect
                }}
                className={`border-[0.5px] rounded-xl cursor-pointer p-3 md:p-6
                  hover:-translate-y-1 duration-500
                  ${
                    isDark
                      ? "border-white/50 hover:bg-(--darkHover) hover:shadow-white"
                      : "border-gray-400 hover:bg-(--lightHover) hover:shadow-black"
                  }
                `}
              >
                <li>
                  {/* Icon animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className="text-2xl md:text-3xl"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Title animation */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.18,
                    }}
                    className={`my-2 md:my-4 font-semibold
          ${isDark ? "text-white/90" : "text-gray-700"}
        `}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description animation */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.22,
                    }}
                    className={`text-sm ${
                      isDark ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    {item.description}
                  </motion.p>
                </li>
              </motion.a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
