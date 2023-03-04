import React from 'react'

const Footer = () => {
  return (
    <footer className='grid place-items-center text-sm md:text-base bg-[#0F0F0F] text-gray-300 gap-6 py-6'>
        <div className='text-[#EA4D24] text-3xl md:text-4xl font-semibold'>Foodies</div>
        <div className='space-x-5'> <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-instagram"></i> </div>
        <ol className='flex justify-center items-center gap-6'> {['Home','Menu','About','Contact','Reservation'].map(item => <li>{item}</li>)} </ol>
        <div><i class="fa-solid fa-trademark text-xs translate-y-[-0.4rem]"></i> 2023 Foodies, All rights reserved</div>
    </footer>
  )
}

export default Footer