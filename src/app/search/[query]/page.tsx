"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from "next";
import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import  ImageUrlBuilder  from '@sanity/image-url'

const page = ({params}: {params: {query: string}}) => {

    const builder = ImageUrlBuilder(client)

    const [result, setresult] = useState([])
    useEffect(() => {
        const handleSearch = async (query: string) =>{
            if (!query) return
    
            const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`)
            const data = await response.json()
    
             setresult(data.results)
             console.log(data.results)
            }
            handleSearch(params.query)
       
    }, [])
  return (
    <div>
      <div className="heading text-2xl justify-center text-center sm:text-start  sm:text-3xl  flex sm:justify-start font-bold text-[#272343] pt-8 sm:pt-24 pb-4 sm:pb-10">
       Searching results for "{(params.query).replace(/%20/g, ' ')}"
    </div> 
      <div className='m-5  ml-0 flex flex-wrap justify-center sm:justify-start   gap-x-9 gap-y-10 sm:gap-y-24 w-[101%]'>
      {result.length > 0 ? result.map((item:any) => {
        return <div key={item.slug.current} className=''>
          <div className='product-image-with-icons w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-md relative'>
            <div className='absolute top-2 left-2'>
              {item.offer == "New" &&<div className="discount w-fit bg-[#01AD5A] px-2 py-1 sm:px-4 sm:py-1.5 rounded-[4px]  flex justify-center items-center text-white text-[11px] sm:text-xs">{item.offer}</div>}
              {item.offer == "Sales" && <div className="discount w-fit bg-[#F5813F] px-2 py-1 sm:px-4 sm:py-1.5 rounded-[4px]  flex justify-center items-center text-white text-[11px] sm:text-xs">{item.offer}</div>}
            </div>

            <Link href = {`/product/${item.slug.current}`}>
            <div className=' flex justify-center  items-center w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-[#F5F5F5]'>
              <Image className=' rounded-lg object-contain' src={builder.image(item.image).width(312).height(312).url()} width={312} height={312} alt='product' />
            </div>
            </Link>
          </div>
          <div className='flex justify-between '>
          <div className='flex flex-col gap-2 my-2'>
            <div className='text-[#2A254B] text-sm  sm:text-lg  w-[200px] sm:w-[280]'>{item.title}</div>
            <div className='flex gap-3 font-semibold'>
              <div className='text-[#DB4444] text-sm sm:text-base'>{`$ ${item.priceWithoutDiscount}`}</div>
              {item.price&&<div className='line-through text-sm sm:text-base text-[#7D8184]'>{`$ ${item.price}`}</div >}
            </div>
          </div>
          <div className='bg-[#F0F2F3] hover:bg-[#029FAE] cursor-pointer rounded-lg w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] flex justify-center items-center mt-2'>
          <Image className=' w-[17px] h-[17px] sm:w-[25px] sm:h-[25px] object-contain' src="/Svg/cart.svg" width={25} height={25} alt='cart' />
          </div>
          </div>

        </div>

      }) : <div className='text-center  text-3xl text-[#757575]'>No result found</div>}
    </div>
    </div>
  )
}

export default page
