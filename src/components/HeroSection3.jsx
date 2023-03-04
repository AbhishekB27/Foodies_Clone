import { motion } from 'framer-motion'
import React from 'react'
import MenuImage1 from './../assets/MenuImage1.jpg'
import MenuImage2 from './../assets/MenuImage2.jpg'
import MenuImage3 from './../assets/MenuImage3.jpg'
import MenuImage4 from './../assets/MenuImage4.jpg'
import MenuImage5 from './../assets/MenuImage5.jpg'
import MenuImage6 from './../assets/MenuImage6.jpg'
const HeroSection3 = () => {
  return (
    <div className='min-h-[605px] grid place-items-center'>
        <div className='container grid place-items-center gap-5'>
            <div className='px-4 border-l-4 border-l-[#EA4D24]'> Take a Look At <span className='font-semibold'>Menu</span>  </div>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-3 auto-rows-[250px] grid-flow-dense gap-3 w-full md:w-[90%]'>
                <div className='md:col-span-2 lg:col-auto lg:row-span-2'> <img loading='lazy' className='w-full h-full object-cover object-center' src={MenuImage1} alt="" /> </div>
                <div className=''> <img loading='lazy' className='w-full h-full object-cover object-center' src={MenuImage2} alt="" /> </div>
                <div className='lg:row-span-2 lg:col-auto md:col-span-2'> <img loading='lazy' className='w-full h-full object-cover object-center' src={MenuImage3} alt="" /> </div>
                <div className='lg:row-span-2'> <img loading='lazy' className='w-full h-full object-cover object-center' src={MenuImage4} alt="" /> </div>
                <div className='md:row-auto'> <img loading='lazy' className='w-full h-full object-cover object-center' src={MenuImage5} alt="" /> </div>
                <div className='lg:col-auto md:col-span-2'> <img loading='lazy' className='w-full h-full object-cover object-center' src={MenuImage6} alt="" /> </div>
            </div>
            <motion.button whileTap={{scale:0.8}} className='border-2 border-[#EA4D24] px-6 py-1 rounded text-[#EA4D24]'>Browse Menu</motion.button>
        </div>
    </div>
  )
}
{/* <img className='w-full h-full' src={MenuImage1} alt="" />
<img className='w-full h-full' src={MenuImage2} alt="" />
<img className='w-full h-full' src={MenuImage3} alt="" />
<img className='w-full h-full' src={MenuImage4} alt="" />
<img className='w-full h-full' src={MenuImage5} alt="" />
<img className='w-full h-full' src={MenuImage6} alt="" /> */}
export default HeroSection3