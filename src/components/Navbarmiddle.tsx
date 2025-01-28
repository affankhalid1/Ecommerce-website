"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './Searchbar'
import { useUser } from "@clerk/nextjs";


import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'


const Navbarmiddle = () => {
  const { user } = useUser(); // Extract the authenticated user
    const [result, setresult] = useState([])

      // State to track if the navbar should be sticky
  const [isSticky, setIsSticky] = useState(false);


    const handleSearch = async (query: string) =>{
        if (!query) return

        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`)
        const data = await response.json()

         setresult(data.results)
        }
        
        useEffect(() => {
            const handleScroll = () => {
              if (window.scrollY > 200) {
                setIsSticky(true);
                // setShow(true);
              } else {
                setIsSticky(false);

              }
            };
        
            window.addEventListener("scroll", handleScroll);
        
            // Cleanup event listener on unmount
            return () => {
              window.removeEventListener("scroll", handleScroll);
            };
          }, []);
    return (
        <div 
        className={`  transition-all duration-500 ${
            isSticky ? "sticky top-0  shadow-lg z-40" : ""} `}>
            <div className='py-6 bg-[#F0F2F3] '>
            <div className='w-[70vw] mx-auto flex justify-between '>
                <div>
                <div className="logo flex gap-0.5 sm:gap-2 justify-center items-center">
                    <Image className='w-[25px] h-[25px]  sm:w-[40px] sm:h-[40px]' src="/Svg/Logo Icon.svg" width={40} height={40} alt="" />
                    <div className='text-lg sm:text-2xl text-[#272343] font-[550] flex items-center'>Comforty</div>
                </div>
                </div>

                <SearchBar onsearch={handleSearch}/>

                <div  className='flex justify-center '>
            <UserButton />
                </div>
            <div className='mr-4 flex items-center  '>
            <SignedOut>
            <button className="bg-[#007580] text-white py-2 px-4 rounded-3xl text-[15px] hover:bg-[#005f63] transition-all">
      <SignInButton />
    </button>
          </SignedOut>
          <SignedIn>
          </SignedIn>
            </div>

                <Link href = "/cart">
                <div className='bg-white flex gap-1.5 sm:gap-3 py-1.5 sm:py-3 px-2 sm:px-4 rounded-lg'>
                <Image className='w-[16px] h-[16px]  sm:w-[20px] sm:h-[20px]' src="/Svg/cart.svg" width={20} height={20} alt="" />
                    <div className='text-xs sm:text-sm text-[#272343]'>Cart</div>
                    <div className='bg-[#007580] size-4 sm:size-5 flex justify-center text-[9.5px] sm:text-[10px] items-center rounded-full text-white'>2</div>
                </div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Navbarmiddle
