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
        id:1
    },
    {
      imgSrc: "/img/card-2.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      cutPrice: "$30",
      id:2
    },
    {
      imgSrc: "/img/card-3.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      id:3
    },
    {
      imgSrc: "/img/card-4.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      id:4
    },
    
  ])
  return (
    <div className='grid grid-cols-1 2xl:grid-cols-2 gap-x-5 gap-y-6 my-20'>
        <div className='flex items-center'>
        <Image className=' ' src="/img/Explore-main.jpg" width={650} height={650} alt='product' />
        </div>
        <div className='m-5 ml-0 grid grid-cols-1 md:grid-cols-2  sm:justify-center md:justify-start  gap-x-1 gap-y-6 w-[120%]'>
      {carts.map((item) => {
        return <div key={item.id} className=''>
          <div className='product-image-with-icons h-[255px] w-[255px] sm:h-[312px] sm:w-[312px] relative'>
            <div className='absolute top-2 left-2'>
            </div>

            <div className=' flex justify-center items-center h-[255px] w-[255px] sm:h-[312px] sm:w-[312px] bg-[#F5F5F5]'>
              <Image className=' object-contain' src={item.imgSrc} width={312} height={312} alt='product' />
            </div>
          </div>
          

        </div>
      })}
    </div>
    </div>
  )
}

export default ExplorenewProducts

