import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { BiCoffeeTogo } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <div className="w-full px-[12%] py-10 text-gray-700">
      <div
        className={`flex flex-col sm:flex-row items-center justify-between
                    py-2 border-t
                    ${isDark ? "border-white/80" : "border-gray-400"}
        `}
      >
        <p className={`${isDark ? "text-white/95" : "text-gray-800"}`}>
          Portfolio © {new Date().getFullYear()}
        </p>

        <ul
          className={`flex flex-wrap items-center gap-3 text-lg
          ${isDark ? "text-white/90" : "text-gray-800"}`}
        >
          <li>
            <BiCoffeeTogo />
          </li>
          <li>+</li>
          <li>
            <TbBrandNextjs />
          </li>
          <li>
            <RiJavascriptFill />
          </li>
          <li>
            <SiTailwindcss />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
