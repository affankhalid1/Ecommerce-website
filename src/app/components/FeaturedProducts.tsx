"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const FeaturedProducts = () => {
  const [carts, setcarts] = useState([
    {
      offer: "New",
      imgSrc: "/img/Image6.jpg",
      title: "Libray Stool Chair",
      price: "$20",
        id:1
    },
    {
      offer: "Sales",
      imgSrc: "/img/image.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      cutPrice: "$30",
      id:2
    },
    {
      imgSrc: "/img/image8.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      id:3
    },
    {
      imgSrc: "/img/image2.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      id:3
    },
    {
      imgSrc: "/img/image4.jpg",
      title: "Libray Stool Chair",
      price: "$20",
      id:4
    },
    
  ])
  return (
    <div className='m-5 ml-0 flex flex-wrap justify-center md:justify-start  gap-x-9 gap-y-10 w-full'>
      {carts.map((item) => {
        return <div key={item.id} className=''>
          <div className='product-image-with-icons h-[220px] w-[220px] sm:h-[240px] sm:w-[240px] rounded-md relative'>
            <Link href ="/details"><div className=' flex justify-center items-center h-[220px] w-[220px] sm:h-[240px] sm:w-[240px] bg-[#F5F5F5]'>
              <Image className=' object-contain' src={item.imgSrc} width={312} height={312} alt='product' />
            </div></Link>
          </div>
          <div className='flex justify-between '>
          <div className='flex flex-col gap-2 my-2'>
            <div>{item.title}</div>
            <div className='flex gap-3 font-semibold'>
              <div className='text-[#DB4444]'>{item.price}</div>
              {item.cutPrice&&<div className='line-through text-[#7D8184]'>{item.cutPrice}</div>}
            </div>
          </div>
          <div className='bg-[#F0F2F3] hover:bg-[#029FAE] cursor-pointer rounded-lg w-[40px] h-[40px] flex justify-center items-center mt-2'>
          <Image className=' object-contain' src="Svg/cart.svg" width={25} height={25} alt='cart' />
          </div>
          </div>

        </div>
      })}
    </div>
  )
}

export default FeaturedProducts


