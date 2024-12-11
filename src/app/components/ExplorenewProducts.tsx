"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const ExplorenewProducts = () => {
  const [carts, setcarts] = useState([
    {
      imgSrc: "/img/card-1.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      id: 1
    },
    {
      imgSrc: "/img/card-2.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      cutPrice: "$30",
      id: 2
    },
    {
      imgSrc: "/img/card-3.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      id: 3
    },
    {
      imgSrc: "/img/card-4.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      id: 4
    },

  ])
  return (
    <>
   <div className='hidden xl:block  mt-20'>
   <div className="heading text-2xl justify-center   sm:text-3xl  flex sm:justify-start font-bold text-[#272343] pb-8">
      Explore new and popular styles
    </div>
   </div>

    <div className='grid  xl:grid-cols-2  gap-x-5 gap-y-6 items-center '>

      <div className=' '>
      <div className='block xl:hidden'>
      <div className="heading text-2xl justify-center text-center sm:text-start  sm:text-3xl  flex sm:justify-start font-bold text-[#272343] pt-24 pb-10">
      Explore new and popular styles
    </div>
      </div>
        <div className='flex items-center sm:justify-start justify-center'>
          <Image className=' xl:h-[450px] xl:w-[450px] 2xl:h-[550px] 2xl:w-[550px] ' src="/img/Explore-main.jpg" width={650} height={650} alt='product' />
        </div>
      </div>

      <div className='m-5 ml-0 grid sm:justify-start justify-center md:grid-cols-2   gap-x-1 gap-y-6 '>
        {carts.map((item) => {
          return <div key={item.id} className='flex '>
            <div className=' flex justify-center items-center h-[220px] w-[220px] lg:h-[270px] lg:w-[270px] xl:h-[220px] xl:w-[220px]  2xl:h-[270px] 2xl:w-[270px] '>
              <Image className=' object-contain' src={item.imgSrc} width={312} height={312} alt='product' />
            </div>
          </div>
        })}
      </div>
    </div>
    </>
  )
}

export default ExplorenewProducts

