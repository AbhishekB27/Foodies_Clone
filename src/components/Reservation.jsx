import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import ReservationImage from './../assets/ReservationImage.jpg'

const Reservation = () => {
    const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
    const reservationStyle = {
        background: `url("${ReservationImage}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
  return (
    <div className='min-h-[605px] grid place-items-center'>
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={reservationStyle} className='container relative h-full grid place-content-center'>
        <div className='w-full h-full flex flex-col justify-center gap-3 items-center absolute bg-white bg-opacity-70'>
        <div className='px-4 border-l-4 border-l-[#EA4D24]'> Book a <span className='font-semibold'>Table</span>  </div>
        <div className='grid lg:grid-cols-2 gap-3 w-full md:w-[50%]'>
            <div className='flex flex-col gap-1 '> <label htmlFor="date">Date</label> <input className='focus:outline-none border border-black px-3 py-1 rounded' id='date' type="text" /> </div>
            <div className='flex flex-col gap-1 '> <label htmlFor="time">Time</label> <input className='focus:outline-none border border-black px-3 py-1 rounded' id='time' type="text" /> </div>
            <div className='flex flex-col gap-1 lg:col-span-2 '> <label htmlFor="guests">Guests</label> <input className='focus:outline-none border border-black px-3 py-1 rounded' id='guests' type="text" /> </div>
            <div className='flex flex-col gap-1 '> <label htmlFor="name">Name</label> <input className='focus:outline-none border border-black px-3 py-1 rounded' id='name' type="text" /> </div>
            <div className='flex flex-col gap-1 '> <label htmlFor="phoneNo">Phone No.</label> <input className='focus:outline-none border border-black px-3 py-1 rounded' id='phoneNo' type="text" /> </div>
            <motion.button whileTap={{scale:0.8}} className='bg-[#EA4D24] text-white px-6 py-2 rounded-md lg:col-span-2'>Check Availability</motion.button>
        </div>
        </div>
        </motion.div>
    </div>
  )
}

export default Reservation