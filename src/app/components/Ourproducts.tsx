"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const Ourproducts = () => {
    const [carts, setcarts] = useState([
      {
        offer: "New",
        imgSrc: "/img/image.jpg",
        title: "Libray Stool Chair",
        price: "$20",
          id:1
      },
      {
        offer: "Sales",
        imgSrc: "/img/image1.jpg",
        title: "Libray Stool Chair",
        price: "$20",
        cutPrice: "$30",
        id:2
      },
      {
        imgSrc: "/img/image2.jpg",
        title: "Libray Stool Chair",
        price: "$20",
        id:3
      },
      {
        imgSrc: "/img/image3.jpg",
        title: "Libray Stool Chair",
        price: "$20",
        id:4
      },
      {
        offer: "New",
        imgSrc: "/img/image4.jpg",
        title: "Libray Stool Chair",
        price: "$20",
          id:5
      },
      {
        offer: "Sales",
        imgSrc: "/img/image5.jpg",
        title: "Libray Stool Chair",
        price: "$20",
        cutPrice: "$30",
        id:6
      },
      {
        imgSrc: "/img/image6.jpg",
        title: "Libray Stool Chair",
        price: "$20",
        id:7
      },
      {
        imgSrc: "/img/image.jpg",
        title: "Libray Stool Chair",
        price: "$20",
        id:8
      },
    ])
  return (
    <div>
      <div className='m-5 ml-0 flex flex-wrap justify-center sm:justify-start   gap-x-9 gap-y-10 sm:gap-y-24 w-[101%]'>
      {carts.map((item) => {
        return <div key={item.id} className=''>
          <div className='product-image-with-icons w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-md relative'>
            <div className='absolute top-2 left-2'>
              {item.offer == "New" &&<div className="discount w-fit bg-[#01AD5A] px-2 py-1 sm:px-4 sm:py-1.5 rounded-[4px]  flex justify-center items-center text-white text-[11px] sm:text-xs">{item.offer}</div>}
              {item.offer == "Sales" && <div className="discount w-fit bg-[#F5813F] px-2 py-1 sm:px-4 sm:py-1.5 rounded-[4px]  flex justify-center items-center text-white text-[11px] sm:text-xs">{item.offer}</div>}
            </div>

            <Link href = "/details">
            <div className=' flex justify-center  items-center w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-[#F5F5F5]'>
              <Image className=' rounded-lg object-contain' src={item.imgSrc} width={312} height={312} alt='product' />
            </div>
            </Link>
          </div>
          <div className='flex justify-between '>
          <div className='flex flex-col gap-2 my-2'>
            <div className='text-[#2A254B] text-sm  sm:text-lg'>{item.title}</div>
            <div className='flex gap-3 font-semibold'>
              <div className='text-[#DB4444] text-sm sm:text-base'>{item.price}</div>
              {item.cutPrice&&<div className='line-through text-sm sm:text-base text-[#7D8184]'>{item.cutPrice}</div >}
            </div>
          </div>
          <div className='bg-[#F0F2F3] hover:bg-[#029FAE] cursor-pointer rounded-lg w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] flex justify-center items-center mt-2'>
          <Image className=' w-[17px] h-[17px] sm:w-[25px] sm:h-[25px] object-contain' src="Svg/cart.svg" width={25} height={25} alt='cart' />
          </div>
          </div>

        </div>
      })}
    </div>
    </div>
  )
}

export default Ourproducts
