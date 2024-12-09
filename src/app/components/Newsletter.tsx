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
        imgSrc: "/img/image.jpg",
        id: 4
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
      <div className='w-screen  -mx-[15.5vw] bg-[#1e283213] flex flex-col items-center justify-center gap-12 mt-32 py-32 rounded-md'>
            <div className='flex flex-col items-center gap-8'>
            <div className='md:text-4xl text-2xl  font-semibold  text-center px-2'>Or Subscribe To The Newsletter</div>
            <div className='flex gap-4 flex-wrap md:flex-nowrap  px-2'>
            <input className='outline-none bg-transparent border-b-2 border-black px-2 w-full' type="text" placeholder='Email Address...'/>
            <button className='bg-[#007580] text-white px-4 py-2 mx-auto rounded-md'>Submit</button>
            </div>
            </div>
            <div className='flex flex-col items-center gap-12'>
            <div className='md:text-4xl text-2xl font-semibold px-2 text-center'>Follow Products And Discounts On Instagram</div>
           <div className='flex gap-2 justify-center flex-wrap xl:flex-nowrap'>
           {images.map((image) => {
                return <div key={image.id}>
                <Image className='w-[200px] h-[200px] rounded-md' src={image.imgSrc} width={200} height={200} alt=""/>
                </div>})}
           </div>

            </div>
      </div>
    </div>
  )
}

export default Newsletter
