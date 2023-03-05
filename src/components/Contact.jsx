import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import ContactI from "./../assets/ContactImage.png";

const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
  return (
    <div id="Contact" className="grid min-h-[657px] place-items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="container grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5"
      >
        <div className="col-auto md:col-span-2 text-center text-2xl md:text-3xl lg:text-5xl text-[#EA4D24]">
          Have Some Questions?
        </div>
        <div className="hidden md:grid place-items-center">
          <img src={ContactI} alt="" />
        </div>
        <div className="grid place-items-start px-3 py-2">
          <div className="grid w-full gap-3 text-[#EA4D24]">
            <input
              placeholder="First Name"
              className="w-full placeholder:text-[#EA4D24] outline-none rounded-md focus:ring-4 ring-[#EA4D24]/60 bg-[#EA4D24]/30 h-fit px-3 py-2"
              type="text"
              name=""
              id=""
            />
            <input
              placeholder="Last Name"
              className="w-full placeholder:text-[#EA4D24] outline-none rounded-md focus:ring-4 ring-[#EA4D24]/60 bg-[#EA4D24]/30 h-fit px-3 py-2"
              type="text"
              name=""
              id=""
            />
            <input
              placeholder="What's your email?"
              className="w-full placeholder:text-[#EA4D24] outline-none rounded-md focus:ring-4 ring-[#EA4D24]/60 bg-[#EA4D24]/30 h-fit px-3 py-2"
              type="text"
              name=""
              id=""
            />
            <textarea
              placeholder="Your question..."
              className="w-full placeholder:text-[#EA4D24] outline-none rounded-md focus:ring-4 ring-[#EA4D24]/60 px-3 py-2 bg-[#EA4D24]/30 resize-none"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="w-full bg-[#EA4D24] py-2 rounded-md text-white font-medium hover:shadow-md"
            >
              Send Message
            </motion.button>
          </div>
        </div>
        <div className="col-auto text-center md:col-span-2 text-3xl md:text-4xl space-x-3 flex justify-center items-center">
          {" "}
          <div className="w-[3rem]  h-[3rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full text-white hover:text-yellow-400 hover:bg-white cursor-pointer transition-all grid place-items-center">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="w-[3rem] h-[3rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full text-white hover:text-yellow-400 hover:bg-white cursor-pointer transition-all grid place-items-center">
            <i class="fa-brands fa-github"></i>
          </div>
          <div className="w-[3rem] h-[3rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full text-white hover:text-yellow-400 hover:bg-white cursor-pointer transition-all grid place-items-center">
          <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
