import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { BiCoffeeTogo } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className="w-full px-[12%] py-10 text-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex flex-col sm:flex-row items-center justify-between
                    py-2 border-t
                    ${isDark ? "border-white/80" : "border-gray-400"}
          `}
      >
        {/* Left text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${isDark ? "text-white/95" : "text-gray-800"}`}
        >
          Portfolio © {new Date().getFullYear()}
        </motion.p>

        {/* Right icons */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className={`flex flex-wrap items-center gap-3 text-lg
            ${isDark ? "text-white/90" : "text-gray-800"}`}
        >
          {[
            <BiCoffeeTogo />,
            "+",
            <TbBrandNextjs />,
            <RiJavascriptFill />,
            <SiTailwindcss />,
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default Footer;
