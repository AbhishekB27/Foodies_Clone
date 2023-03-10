import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import HeroImage from './../assets/HeroImage.png'

const HeroSection = () => {
    const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
    const divStyle = {
        background: 'linear-gradient(110deg, #FFBC02 50%, #382D35 50%)'
        };
  return (
    <div className='min-h-[605px] grid place-items-center'>
        <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 50 }}
         animate={controls}
        className='container grid lg:grid-cols-2 place-content-center lg:gap-0 gap-3'>
            <div className='flex flex-col justify-center order-2 lg:order-none items-start gap-6'>
                <div className='grid gap-3 '>
                    <div className='flex flex-col px-4 border-l-4 border-[#EA4D24]'>
                    <span className='text-xl md:text-2xl font-medium'>Craving For</span>
                    <span className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Healthy Food?</span>
                    </div>
                    <p className='text-gray-400 text-sm md:text-base w-[70%] border-l-4 border-[#EA4D24] px-4'>Here is what you always need. View our food collection and order yummy and healthy food within minutes.</p>
                </div>
                <div className='space-x-6 px-4'> <motion.button whileTap={{scale:0.8}} className='bg-[#EA4D24] hover:ring-4 ring-orange-500/30 border-2 border-[#EA4D24] text-white w-[8rem] md:w-[12rem] rounded-md text-base md:text-xl py-1 md:py-2'>View Menu</motion.button><motion.button whileTap={{scale:0.8}} className='border-[#EA4D24] hover:ring-4 ring-orange-500/30 text-[#EA4D24] border-2 w-[8rem] md:w-[12rem] rounded-md text-base md:text-xl py-1 md:py-2'>Book a Table</motion.button> </div>
            </div>
            <div style={divStyle} className='grid place-items-center'>
                <img className='max-w-[80%] max-h-[70%]' src={HeroImage} alt="" />
            </div>
        </motion.div>
    </div>
  )
}

export default HeroSection