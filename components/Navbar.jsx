import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import Image from "next/image";
import headerBackground from "@/assets/header-bg-color.png";
import { PiArrowUpRightBold, PiMoonLight, PiSunLight } from "react-icons/pi";
import Logo from "@/assets/logo.svg";
import LogoDark from "@/assets/logo-dark.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
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
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
          flex items-center justify-between z-50 
            ${
              isScroll
                ? isDark
                  ? "bg-black/50 backdrop-blur-lg shadow-sm"
                  : "bg-white/50 backdrop-blur-lg shadow-sm"
                : isDark
                ? "bg-(--darkTheme)"
                : ""
            }
          `}
      >
        <motion.a
          href="#home"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={isDark ? LogoDark : Logo}
            className="w-24 cursor-pointer mr-14"
            alt=""
          />
        </motion.a>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.25 },
            },
          }}
          className={`hidden md:flex items-center gap-6 lg:gap-8
                      rounded-full px-12 py-3
                      ${
                        isScroll
                          ? isDark
                            ? "border-none bg-transparent"
                            : ""
                          : isDark
                          ? "border border-white/30 bg-transparent"
                          : "bg-white/10 shadow-sm"
                      }
            `}
        >
          {["Home", "About me", "Experience", "Skills"].map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <a
                className="font-ovo"
                href={`#${item.toLowerCase().replace(" ", "")}`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex items-center gap-5 text-2xl">
          <button
            className={`text-2xl lg:text-xl cursor-pointer`}
            onClick={() => setIsDark(!isDark)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <PiSunLight />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <PiMoonLight />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            href="https://www.linkedin.com/in/ln-karan-patel/"
            target="_blank"
            className={`hidden lg:flex items-center gap-1 px-4 py-1.25
                      border border-gray-500 rounded-full text-base
                      ${isDark ? " border border-white/40" : ""}
              `}
          >
            <SiLinkedin /> Connect <PiArrowUpRightBold className="h-4 " />
          </motion.a>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="block text-3xl md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <CgMenuRightAlt />
          </motion.button>
        </div>

        {/* ------------------- mobile menu ------------------- */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10
            fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen 
            transition duration-500
              ${isDark ? "bg-(--darkHover)" : "bg-rose-50"}
            `}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <GrClose className="cursor-pointer text-2xl" />
          </div>

          <li>
            <a className="font-ovo" onClick={closeMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#aboutme">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#contact">
              Contact info
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
