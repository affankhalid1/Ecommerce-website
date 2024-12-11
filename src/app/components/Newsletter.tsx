"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Newsletter = () => {
const [images, setimages] = useState([
    {
        imgSrc: "/img/image7.jpg",
        id: 1
    },
    {
        imgSrc: "/img/Frame1.jpg",
        id: 2
    },
    {
        imgSrc: "/img/image1.jpg",
        id: 3
    },

    {
        imgSrc: "/img/image2.jpg",
        id: 5
    },
    {
        imgSrc: "/img/image8.jpg",
        id: 6
    }
])
  return (
    <div>
      <div className='w-full  bg-[#1e283213] flex flex-col items-center justify-center mb-4  gap-12 mt-32 px-8 sm:px-20 py-10 lg:py-32 rounded-xl'>
            <div className='flex flex-col items-center justify-center gap-8'>
            <div className='md:text-4xl sm:text-2xl text-xl  font-semibold  text-center px-2'>Or Subscribe To The Newsletter</div>
            <div className='flex gap-4 flex-wrap md:flex-nowrap  px-2'>
            <input className='outline-none bg-transparent border-b-2 border-black px-2 w-full text-sm sm:text-base' type="text" placeholder='Email Address...'/>
            <button className='bg-[#007580] text-white px-2.5 py-1.5 text-sm sm:text-base sm:px-4 sm:py-2 mx-auto rounded-md'>Submit</button>
            </div>
            </div>
            <div className='flex flex-col items-center gap-12'>
            <div className='md:text-4xl sm:text-2xl text-xl font-semibold px-2 text-center'>Follow Products And Discounts On Instagram</div>
           <div className='flex gap-2 justify-center flex-wrap 2xl:flex-nowrap'>
           {images.map((image) => {
                return  <div key={image.id}>
                <Image className='w-[180px] h-[180px] sm:w-[195px] sm:h-[195px] rounded-md' src={image.imgSrc} width={200} height={200} alt=""/>
                </div>})}
           </div>

            </div>
      </div>
    </div>
  )
}

export default Newsletter
