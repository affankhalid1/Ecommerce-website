"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const FeaturedProducts = () => {
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
    
  ])
  return (
    <div className='m-5 ml-0 flex flex-wrap  md:justify-start  gap-x-9 gap-y-10 w-[120%]'>
      {carts.map((item) => {
        return <div key={item.id} className=''>
          <div className='product-image-with-icons h-[255px] w-[255px] sm:h-[312px] sm:w-[312px] rounded-md relative'>
            <div className='absolute top-2 left-2'>
              {item.offer == "New" &&<div className="discount w-fit bg-[#01AD5A] px-4 py-1.5 rounded-[4px]  flex justify-center items-center text-white text-xs">{item.offer}</div>}
              {item.offer == "Sales" && <div className="discount w-fit bg-[#F5813F] px-4 py-1.5 rounded-[4px]  flex justify-center items-center text-white text-xs">{item.offer}</div>}
            </div>

            <Link href ="/details"><div className=' flex justify-center items-center h-[255px] w-[255px] sm:h-[312px] sm:w-[312px] bg-[#F5F5F5]'>
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
