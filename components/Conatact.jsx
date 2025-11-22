import React, { useState } from "react";
import FooterBacground from "@/assets/footer-bg-color.png";
import { SiLinkedin } from "react-icons/si";
import { ImMail3 } from "react-icons/im";
import { FiCheckCircle } from "react-icons/fi";

const Conatact = () => {
  const [toast, setToast] = useState(false);

  const copyEmail = () => {
    const email = "karanpatel525864@gmail.com";
    navigator.clipboard.writeText(email);

    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 
      flex flex-col justify-center 
      min-h-[calc(100vh-230px)] md:min-h-[calc(100vh-230px)]
      bg-no-repeat bg-center bg-[lenght:90%_auto]"
      style={{ backgroundImage: `url(${FooterBacground.src})` }}
    >
      <div className="flex flex-col items-center justify-center -translate-y-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-ovo">Get in touch!</h2>
          <h4 className="text-lg my-2">
            I'd love to hear from you! If you have any questions, comments and
            feedback, <br /> please let me know via -
          </h4>
        </div>

        <div className="relative flex flex-col md:flex-row justify-center gap-4 mt-4">
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 text-lg hover:underline cursor-pointer px-4 py-1 border border-gray-500 rounded-full"
          >
            <ImMail3 className="text-lg" />
            karanpatel525864@gmail.com
          </button>

          <a
            href="https://www.linkedin.com/in/ln-karan-patel/"
            target="_blank"
            className="flex items-center w-fit self-center text-lg gap-2 hover:underline px-4 py-1 border border-gray-500 rounded-full"
          >
            <SiLinkedin className="text-lg" />
            LinkedIn
          </a>
          {toast && (
            <div
              className={`
                    absolute top-full left-1/2 -translate-x-1/2
                    flex items-center gap-1 text-sm text-gray-700
                    mt-2 px-3 py-1
                    animate-toast
                `}
            >
              <FiCheckCircle /> <p>Email copied!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Conatact;
