import React from 'react'
import HeroSection from './HeroSection'
import HeroSection2 from './HeroSection2'
import HeroSection3 from './HeroSection3'
import HeroSection4 from './HeroSection4'

const Hero = () => {
  return (
    <div className='space-y-6'>
        <HeroSection/>
        <HeroSection2/>
        <HeroSection3/>
        <HeroSection4/>
    </div>
  )
}

export default Hero