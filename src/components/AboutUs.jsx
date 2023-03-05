import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import RestaurantImage from './../assets/RestaurantImage.jpg'
import AboutImage from './../assets/AboutImage.jpg'


const AboutUs = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
  return (
    <div className="min-h-[605px] grid place-items-center">
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="container grid place-items-center">
            <div className='grid lg:grid-cols-3 place-items-center gap-3'>
            <div className='relative before:absolute before:content-[""] before:w-[50%] before:h-[50%] before:bg-orange-300 before:top-[-0.8rem] before:left-[-0.8rem] z-0 before:-z-10'>
            <img className='max-w-[22rem] h-full object-cover object-center' src={RestaurantImage} alt="" />
            </div>
            <p className='grid place-items-center place-content-center text-center md:text-lg px-12 py-6 border-2 border-gray-400'> <span className='text-2xl md:text-3xl lg:text-4xl font-semibold'>About Us</span> Here is what you always need. View our food collection and order yummy and healthy food within minutes. Our menu features a diverse range of options, from appetizers and entrees to desserts and drinks. Thank you for choosing Foodies, and we look forward to serving you soon.</p>
            <div className='relative before:absolute before:content-[""] before:w-[50%] before:h-[50%] before:bg-orange-300 before:bottom-[-0.6rem] before:right-[-0.6rem] z-0 before:-z-10'>
            <img className='max-w-[22rem] h-full object-cover object-center' src={AboutImage} alt="" />
            </div>
            </div>
        </motion.div>
    </div>
  )
}

export default AboutUs