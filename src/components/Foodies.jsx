import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import HeroSection from './HeroSection'
import HeroSection2 from './HeroSection2'
import HeroSection3 from './HeroSection3'
import HeroSection4 from './HeroSection4'
import Menu from './Menu'

const Foodies = () => {
  return (
    <div className='px-3 py-1 space-y-3'>
        <Header/>
        <Routes>
          <Route index path='/Home' element={<Hero/>}/>
          <Route path='/Menu' element={<Menu/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Foodies