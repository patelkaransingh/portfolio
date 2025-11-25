import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import FooterBacground from "@/assets/footer-bg-color.png";
import { SiLinkedin } from "react-icons/si";
import { ImMail3 } from "react-icons/im";
import { FiCheckCircle } from "react-icons/fi";
import { PiArrowUpRightBold } from "react-icons/pi";
import { motion } from "motion/react";

const Conatact = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const [toast, setToast] = useState(false);

  const copyEmail = () => {
    const email = "karanpatel525864@gmail.com";
    navigator.clipboard.writeText(email);

    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`w-full px-[12%] py-10 scroll-mt-20 
        flex flex-col justify-center 
        min-h-[calc(100vh-230px)] md:min-h-[calc(100vh-230px)]
        bg-no-repeat bg-center bg-[lenght:90%_auto]`}
      style={{
        backgroundImage: isDark ? "none" : `url(${FooterBacground.src})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="flex flex-col items-center justify-center -translate-y-16"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-ovo">Get in touch!</h2>

          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={`text-lg my-2 ${isDark ? "text-white/85" : ""}`}
          >
            I'd love to hear from you! If you have any questions, comments and
            feedback, <br /> please let me know via -
          </motion.h4>
        </div>

        {/* Buttons */}
        <div className="relative flex flex-col md:flex-row justify-center gap-4 mt-4">
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            onClick={copyEmail}
            className={`flex items-center gap-2
            text-lg hover:underline cursor-pointer
            px-4 py-1 border border-gray-500 rounded-full`}
          >
            <ImMail3 className="text-lg" />
            karanpatel525864@gmail.com
          </motion.button>

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            href="https://www.linkedin.com/in/ln-karan-patel/"
            target="_blank"
            className="flex items-center w-fit self-center text-lg gap-2 hover:underline px-4 py-1 border border-gray-500 rounded-full"
          >
            <SiLinkedin className="text-lg" />
            LinkedIn
            <PiArrowUpRightBold className="text-xl" />
          </motion.a>

          {toast && (
            <div
              className={`
                absolute top-full left-1/2 -translate-x-1/2
                flex items-center gap-1 text-sm
                ${isDark ? "text-white/80" : "text-gray-700"}
                mt-2 px-3 py-1
                animate-toast
              `}
            >
              <FiCheckCircle /> <p>Email copied!</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Conatact;
