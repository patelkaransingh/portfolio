import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Logo from "@/assets/logo.svg";
import headerBackground from "@/assets/header-bg-color.png";
import { PiArrowUpRightBold, PiMoonLight } from "react-icons/pi";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={headerBackground} className="w-full" alt="" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image src={Logo} className="w-24 cursor-pointer mr-14" alt="" />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white/10 shadow-sm"
          }`}
        >
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#projects">
              Experience
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#skills">
              Skills
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-5 text-2xl">
          <button>
            <PiMoonLight className="text-xl" />
          </button>

          <a
            href="https://www.linkedin.com/in/ln-karan-patel/"
            className="hidden lg:flex items-center gap-1 px-4 py-1 border border-gray-500 rounded-full text-base"
          >
            <SiLinkedin /> Connect <PiArrowUpRightBold className="h-4 " />
          </a>

          <button className="block text-3xl md:hidden ml-3" onClick={openMenu}>
            <CgMenuRightAlt />
          </button>
        </div>

        {/* ------------------- mobile menu ------------------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <GrClose className="cursor-pointer text-2xl" />
          </div>

          <li>
            <a className="font-ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#projects">
              Experience
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#skills">
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
