"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'


const Popular = () => {
  const [carts, setcarts] = useState([
    {
      imgSrc: "/img/Photo1.jpg",
      title: "The Dandy chair",
      price: "$99",
      id: 3
    },
    {
      imgSrc: "/img/Parent1.jpg",
      title: "The Dandy chair",
      price: "$99",
      id: 4
    },

  ])

  return (
    <div>
      <div className='flex flex-wrap xl:flex-nowrap'>


        <div className=' mt-5 mr-5 flex flex-wrap xl:flex-nowrap  gap-x-9 gap-y-10 w-full '>
          <div className='hidden sm:block'>
            <div className='product-image-with-icons  relative'>

              <div className=' flex justify-center items-center bg-[#F5F5F5]'>
                <Image className=' ' src="/img/Large.jpg" width={630} height={375} alt='product' />
              </div>
            </div>
            <div className='flex justify-between '>
              <div className='flex flex-col gap-2 my-2'>
                <div>The Poplar suede sofa</div>
                <div className='flex gap-3 font-semibold'>
                  <div className='text-[#2A254B]'>$99</div>
                </div>
              </div>
            </div>



          </div>
        </div>

        <div className='m-5 ml-0 flex flex-wrap xl:flex-nowrap  gap-x-9 gap-y-10 w-full'>
          {carts.map((item) => {
            return <div key={item.id} className=''>
              <div className='product-image-with-icons  relative'>

                <div className=' flex justify-center items-center bg-[#F5F5F5]'>
                  <Image className=' ' src={item.imgSrc} width={305} height={375} alt='product' />
                </div>
              </div>
              <div className='flex justify-between '>
                <div className='flex flex-col gap-2 my-2'>
                  <div className='text-[#2A254B]'>{item.title}</div>
                  <div className='flex gap-3 font-semibold'>
                    <div className='text-[#2A254B]'>{item.price}</div>
                  </div>
                </div>
              </div>

            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Popular
