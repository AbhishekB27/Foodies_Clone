import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import HeroImage1 from './../assets/HeroImage1.png'

const HeroSection2 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
  return (
    <div className='min-h-[605px] grid place-items-center'>
        <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 50 }}
         animate={controls}
        className='container grid place-items-center'>
            <div className='px-4 border-l-4 border-l-[#EA4D24]'> <span className='font-semibold'>Dish</span> of the day </div>
            <div className='flex flex-col'>
                <div className='relative grid place-items-center'>
                    
                <div className='text-[#EA4D24] text-5xl md:text-7xl lg:text-8xl translate-y-[3rem] translate-x-[-7.5rem] font-hollow text-left'>Fresh</div>
                     <div className='bg-[#EA4D24]  absolute bottom-[1.5rem] md:bottom-[5rem] left-[0rem] md:left-[-7rem] rounded-tr rounded-br text-white pl-9 pr-3 py-1 before:content-[""] before:absolute before:bg-white before:w-[2rem] before:h-[2rem] before:rotate-45 before:bottom-0 before:left-[-1rem] z-10 overflow-hidden'>Rice Noodles with Eggs</div> <img className='hover:scale-110 w-[90%] md:w-auto transition-all' src={HeroImage1} alt="" /> </div>
                <span className='text-[#EA4D24] text-5xl md:text-7xl lg:text-8xl font-hollow text-right md:translate-x-14 translate-x-[-1rem] md:translate-y-[-2rem] translate-y-[-2rem]'>Delight</span>
            </div>
        </motion.div>
    </div>
  )
}

export default HeroSection2