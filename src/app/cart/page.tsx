"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'


const page = () => {

  const [carts, setcarts] = useState([
    {
      offer: "New",
      imgSrc: "/img/image.jpg",
      title: "Libray Stool Chair",
      price: "$99",
      size: "L",
      quantity: "1",
      id: 1
    },
    {
      offer: "Sales",
      imgSrc: "/img/image1.jpg",
      title: "Libray Stool Chair",
      price: "$99",
      size: "M",
      quantity: "2",
      id: 2
    },

  ])
  return (
    <div>
      <div className='my-16 grid  grid-cols-[3fr] md:grid-cols-[3fr,1fr] '>
        <div className='left pr-20'>
          <div className='left-side flex flex-col gap-6'>
            <div className='font-semibold text-lg'>Bag</div>
            <div className='flex flex-col gap-8'>
              {carts.map((item) => {
                return <div key={item.id} className='flex justify-between gap-4'>
                  <div className='flex gap-4'>
                    <Image className='w-[120px] h-[120px]' src={item.imgSrc} width={120} height={120} alt="" />
                    <div className='flex flex-col gap-4'>
                      <div className='font-[550] text-[#272343]'>{item.title}</div>
                      <div className='text-sm text-[#757575]'>
                        <div>Ashen Slate/Cobalt Bliss</div>
                        <div>Size: &nbsp; <span className='underline'>{item.size}</span> &nbsp; Quantity: &nbsp; <span className='underline'>{item.quantity}</span></div>
                      </div>
                      <div className="icons flex gap-2">
                        <Image src="/Svg/like-icon.svg" width={20} height={20} alt="" />
                        <Image src="/Svg/delete-icon.svg" width={20} height={20} alt="" />
                      </div>
                    </div>
                  </div>
                    <div className='right-side'>
                      <div className='text-[#111111]' >MRP: &nbsp;{item.price}</div>
                    </div>

                </div>
              })}
            </div>
          </div>
        </div>
        <div className='right px-5 text-sm flex flex-col gap-5'>
          <div className='font-semibold text-lg'>Summary</div>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div>Subtotal</div>
              <div>$198.00</div>
            </div>
            <div className='flex justify-between'>
              <div>Estimated Delivery & Handling</div>
              <div>Free</div>
            </div>
            <div className='bg-[#e4e4e4] h-[1.2px]'></div>
            <div className='flex justify-between'>
              <div>Total</div>
              <div>$198.00</div>
            </div>
            <div className='bg-[#e4e4e4] h-[1.2px]'></div>
            <button className='w-full bg-[#029FAE] rounded-full py-3 text-center text-white'>Member Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
