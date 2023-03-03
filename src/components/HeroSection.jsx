import React from 'react'
import HeroImage from './../assets/HeroImage.png'

const HeroSection = () => {
    const divStyle = {
        background: 'linear-gradient(110deg, #FFBC02 50%, #382D35 50%)'
        };
  return (
    <div className='min-h-[605px] grid place-items-center'>
        <div className='container grid lg:grid-cols-2 place-content-center lg:gap-0 gap-3'>
            <div className='flex flex-col justify-center order-2 lg:order-none items-start gap-6'>
                <div className='grid gap-3 '>
                    <div className='flex flex-col px-4 border-l-4 border-[#EA4D24]'>
                    <span className='text-xl md:text-2xl font-medium'>Craving For</span>
                    <span className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Healthy Food?</span>
                    </div>
                    <p className='text-gray-400 text-sm md:text-base w-[70%] border-l-4 border-[#EA4D24] px-4'>Here is what you always need. View our food collection and order yummy and healthy food within minutes.</p>
                </div>
                <div className='space-x-6 px-4'> <button className='bg-[#EA4D24] border-2 border-[#EA4D24] text-white w-[8rem] md:w-[12rem] rounded-md text-base md:text-xl py-1 md:py-2'>View Menu</button><button className='border-[#EA4D24] text-[#EA4D24] border-2 w-[8rem] md:w-[12rem] rounded-md text-base md:text-xl py-1 md:py-2'>Book a Table</button> </div>
            </div>
            <div style={divStyle} className='grid place-items-center'>
                <img className='max-w-[80%] max-h-[70%]' src={HeroImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection