import React, { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(true)
  return (
    <header className='relative flex justify-between items-center px-3 py-1'>
        <div className='text-[#EA4D24] text-2xl font-medium'>Foodies</div>
        <button onClick={()=>{setOpen(!open)}} className='text-xl lg:hidden block'> {open ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>} </button>
        <div className={`lg:block  fixed top-[2.8rem] bg-black/70 lg:bg-transparent text-white lg:text-black ${open ? 'h-[0]' : 'h-[100vh]'} overflow-hidden lg:overflow-auto transition-all lg:transition-none duration-700 lg:h-auto left-0 w-full lg:static`}>
            <ol className='flex lg:flex-row flex-col w-full lg:w-auto items-start h-full lg:h-auto justify-evenly pl-4 lg:pl-0  lg:justify-end lg:items-center lg:space-x-8'>
            {
                ['Home', 'Menu', 'About', 'Contact','Reservation'].map(item => {
                    return <li className='cursor-pointer lg:bg-gradient-to-r lg:from-[#EA4D24] lg:to-[#EA4D24] lg:bg-right-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:70%_3px] lg:transition-all'>{item}</li>
                })
            }
            </ol>
        </div>
    </header>
  )
}

export default Header