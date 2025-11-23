import React from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { TbBrandNextjs, TbBrandReact } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 text-gray-700">
      <div
        className={`flex flex-col sm:flex-row items-center justify-between
                        border-t border-gray-400 py-2`}
      >
        <p>Portfolio © {new Date().getFullYear()}</p>

        <ul className="flex items-center gap-3 flex-wrap text-lg">
          <li>
            <BiCoffeeTogo />
          </li>
          <li>+</li>
          <li>
            <TbBrandNextjs />
          </li>
          <li>
            <TbBrandReact />
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
