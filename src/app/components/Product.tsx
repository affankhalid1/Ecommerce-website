"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Product = () => {
  const [carts, setcarts] = useState([
    {
      isOff: "40",
      imgSrc: "/assets/gamepad.png",
      addToCart: false,
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      cutPrice: "$160",
      ratingNumber: 88
    },
    {
      isOff: "35",
      imgSrc: "/assets/keyboard.png",
      addToCart: false,
      title: "AK-900 Wired Keyboard",
      price: "$960",
      cutPrice: "$1160",
      ratingNumber: 75
    },
    {
      isOff: "30",
      imgSrc: "/assets/monitor.png",
      addToCart: false,
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      cutPrice: "$400",
      ratingNumber: 99
    },
    {
      isOff: "25",
      imgSrc: "/assets/chair.png",
      addToCart: false,
      title: "S-Series Comfort Chair",
      price: "$375",
      cutPrice: "$500",
      ratingNumber: 99
    },
    {
      isOff: "30",
      imgSrc: "/assets/monitor.png",
      addToCart: false,
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      cutPrice: "$400",
      ratingNumber: 99
    },
    {
      isOff: "25",
      imgSrc: "/assets/chair.png",
      addToCart: false,
      title: "S-Series Comfort Chair",
      price: "$375",
      cutPrice: "$500",
      ratingNumber: 99
    }
  ])
  return (
    <div className='m-5 flex flex-wrap ml-40  gap-x-10 gap-y-10 w-[120%]'>
      {carts.map((item) => {
        return <div className=''>
          <div className='product-image-with-icons w-[16.9rem] h-[15.6rem] rounded-md bg-[#F5F5F5] p-3 relative'>
            <div>
              <div className="discount w-fit bg-[#DB4444] px-4 py-1.5 rounded-[4px]  flex justify-center items-center text-white text-xs">-{item.isOff}%</div>
            </div>
            <div className='flex flex-col gap-2 absolute top-3 right-3'>
              <Image className='' src="/svgs/heart.svg" width={33} height={33} alt='product' />
              <Image className='' src="/svgs/eye.svg" width={33} height={33} alt='product' />
            </div>

            <div className=' flex justify-center items-center bg-[#F5F5F5]'>
              <Image className=' object-contain' src={item.imgSrc} width={200} height={200} alt='product' />
            </div>
          </div>
          <div className='flex flex-col gap-2 my-2'>
            <div>{item.title}</div>
            <div className='flex gap-3 font-semibold'>
              <div className='text-[#DB4444]'>{item.price}</div>
              {item.cutPrice !== "" &&<div className='line-through text-[#7D8184]'>{item.cutPrice}</div>}
            </div>
            <div className='flex gap-3'>
              <div className='flex gap-1.5 px-1'>
                <Image src="/svgs/fill-star.svg" width={16} height={16} alt="star" />
                <Image src="/svgs/fill-star.svg" width={16} height={16} alt="star" />
                <Image src="/svgs/fill-star.svg" width={16} height={16} alt="star" />
                <Image src="/svgs/fill-star.svg" width={16} height={16} alt="star" />
                <Image src="/svgs/fill-star.svg" width={16} height={16} alt="star" />
              </div>
              <div className='text-[#7D8184] font-semibold text-sm'>({item.ratingNumber})</div>
            </div>
          </div>

        </div>
      })}
    </div>
  )
}

export default Product
