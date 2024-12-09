"use client"
import React from 'react';
import Image from 'next/image';
import NavLink from './Navlink';
import { useState } from 'react';

const Navbarbottom = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className='flex justify-between w-[70vw] mx-auto sm:py-1 py-5'>
        <button onClick={handleClick} className='block sm:hidden'>
          <Image className='hamburger' src="/Svg/menu-icon.svg" width={20} height={20} alt="" />
        </button>
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
              <NavLink href="/" activeClassName="text-teal-500" inactiveClassName="text-gray-700">
                Home
              </NavLink>
              <NavLink href="/about" activeClassName="text-teal-500" inactiveClassName="text-gray-700">
                About
              </NavLink>
              <NavLink href="/contact" activeClassName="text-teal-500" inactiveClassName="text-gray-700">
                Contact
              </NavLink>
              <NavLink href="/pages" activeClassName="text-teal-500" inactiveClassName="text-gray-700">
                Pages
              </NavLink>
              <NavLink href="/product" activeClassName="text-teal-500" inactiveClassName="text-gray-700">
                Product
              </NavLink>
            </div>
          </nav>
        )}

        <div className='nav hidden sm:block'>
          <div className='flex md:gap-2 lg:gap-4'>
            <NavLink href="/" activeClassName="text-[#007580] font-[500]" inactiveClassName="text-[#636270] font-[500]">Home</NavLink>
            <NavLink href="/shop" activeClassName="text-[#007580] font-[500]" inactiveClassName="text-[#636270] font-[500]">Shop</NavLink>
            <NavLink href="/product" activeClassName="text-[#007580] font-[500]" inactiveClassName="text-[#636270] font-[500]">Product</NavLink>
            <NavLink href="/pages" activeClassName="text-[#007580] font-[500]" inactiveClassName="text-[#636270] font-[500]">Pages</NavLink>
            <NavLink href="/about" activeClassName="text-[#007580] font-[500]" inactiveClassName="text-[#636270] font-[500]">About</NavLink>
          </div>
        </div>
        <div className='flex items-center'>
          <span className='text-[#636270] hidden lg:block'>Contact:</span>
          <span className='text-[#272343] hidden lg:block'>&nbsp; (808) 555-0111</span>
        </div>
      </div>
      <div className='bg-[#e4e4e4] h-[1.2px]'></div>
    </>
  );
};

export default Navbarbottom;
