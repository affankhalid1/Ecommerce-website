"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import NavLink from './Navlink'
import Image from 'next/image'

const Navbarbottom = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

    
  return (
      <>
      <div className='flex justify-between w-[70vw] mx-auto sm:py-1 py-5 '>
        

        <div className='nav hidden sm:block'>
        <div className='flex sm:gap-1 md:gap-2 lg:gap-4'>
        <NavLink href="/" className={(isActive) =>isActive ? 'text-[#007580] pl-0 px-2.5 py-5 md:p-5 font-[500]' : ' text-[#636270] pl-0 px-2.5 py-5 md:p-5 font-[500]'}>Home</NavLink>
        <NavLink href="/products/category/sofas---couches" className={(isActive) =>isActive ? 'text-[#007580] px-2.5 py-5 md:p-5 font-[500]' : ' text-[#636270] px-2.5 py-5 md:p-5 font-[500]'}>Sofa</NavLink>
        <NavLink href="/products/category/beds" className={(isActive) =>isActive ? 'text-[#007580] px-2.5 py-5 md:p-5 font-[500]' : ' text-[#636270] px-2.5 py-5 md:p-5 font-[500]'}>Beds</NavLink>
        
        <NavLink href="/products/category/office-chair" className={(isActive) =>isActive ? 'text-[#007580] px-2.5 py-5 md:p-5 font-[500]' : ' text-[#636270] px-2.5 py-5 md:p-5 font-[500]'}>Office </NavLink>
       
        <NavLink href="/about" className={(isActive) =>isActive ? 'text-[#007580] px-2.5 py-5 md:p-5 font-[500]' : ' text-[#636270] px-2.5 py-5 md:p-5 font-[500]'}>About</NavLink>
        <NavLink href="/contact" className={`block md:hidden ${(isActive: any) =>isActive ? 'text-[#007580] px-2.5 py-5 md:p-5 font-[500]' : ' text-[#636270] px-2.5 py-5 md:p-5 font-[500]'}`}>Contact</NavLink>
        <NavLink href="/faqs" className={`block md:hidden ${(isActive: any) =>isActive ? 'text-[#007580] px-2.5 py-5 md:p-5 font-[500]' : ' text-[#636270] px-2.5 py-5 md:p-5 font-[500]'}`}>Help</NavLink>

        </div>
        </div>
        <div className='flex items-center '>
            <span className='text-[#636270]  hidden lg:block'>Contact:</span><span className='text-[#272343] hidden lg:block'>&nbsp;  (808)  555-0111</span>
        </div>
      </div>
        <div className='bg-[#e4e4e4] h-[1.2px] hidden sm:block'></div>
      </>
  )
}

export default Navbarbottom
