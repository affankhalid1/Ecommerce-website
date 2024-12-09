"use client"
import React from 'react'
import Link from 'next/link'
import NavLink from './Navlink'
import Image from 'next/image'

const Navbarbottom = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

    
  return (
      <>
      <div className='flex justify-between w-[70vw] mx-auto sm:py-1 py-5'>
        <button onClick={handleClick} className='block sm:hidden'><Image className='hamburger ' src = "/Svg/menu-icon.svg" width={20} height={20} alt="" /></button>
        {isActive && (
        <nav className="absolute top-0 left-0 w-3/4 h-screen bg-white shadow-lg z-50">
          <div className="p-4">
            <button
              onClick={() => setIsActive(false)}
              className="text-gray-700 text-2xl focus:outline-none"
            >
              &times;
            </button>
          </div>
          <div className="space-y-4 px-4 py-8">
            <a
              href="#home"
              className="block text-gray-700 hover:text-teal-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-teal-500"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-teal-500"
            >
              Contact
            </a>
            <a
              href="#pages"
              className="block text-gray-700 hover:text-teal-500"
            >
              Pages
            </a>
            <a
              href="#product"
              className="block text-gray-700 hover:text-teal-500"
            >
              Product
            </a>
          </div>
        </nav>
      )}

        <div className='nav hidden sm:block'>
        <div className='flex md:gap-2 lg:gap-4'>
        <NavLink href="/" className={(isActive) =>isActive ? 'text-[#007580] pl-0 p-5 font-[500]' : ' text-[#636270] pl-0 p-5 font-[500]'}>Home</NavLink>
        <NavLink href="/shop" className={(isActive) =>isActive ? 'text-[#007580] p-5 font-[500]' : ' text-[#636270] p-5 font-[500]'}>Shop</NavLink>
        <NavLink href="/product" className={(isActive) =>isActive ?' text-[#007580] p-5 font-[500]' : ' text-[#636270] p-5 font-[500]'}>Product</NavLink>
        <NavLink href="/pages" className={(isActive) =>isActive ? 'text-[#007580] p-5 font-[500]' : ' text-[#636270] p-5 font-[500]'}>Pages</NavLink>
        <NavLink href="/about" className={(isActive) =>isActive ? 'text-[#007580] p-5 font-[500]' : ' text-[#636270] p-5 font-[500]'}>About</NavLink>

        </div>
        </div>
        <div className='flex items-center '>
            <span className='text-[#636270]  hidden lg:block'>Contact:</span><span className='text-[#272343] hidden lg:block'>&nbsp;  (808)  555-0111</span>
        </div>
      </div>
        <div className='bg-[#e4e4e4] h-[1.2px]'></div>
      </>
  )
}

export default Navbarbottom
