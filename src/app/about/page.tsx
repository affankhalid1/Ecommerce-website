import React from 'react'
import Image from 'next/image'
import Popular from '../components/Popular'
import Link from 'next/link'



const Page = () => {
  return (
    <div>
      <div className='w-[70vw] mx-auto flex flex-col gap-16 sm:gap-40 my-16 sm:my-32'>
      <div className='flex gap-20 flex-wrap xl:flex-nowrap justify-center '>
        <div className='p-10 w-[600px] h-[400px] bg-[#007580] flex flex-col text-white  justify-between'>
          <div>
            <div className='text-[1.35rem] sm:text-2xl font-[500] sm:font-bold pb-4'>About Us - Comforty</div>
            <div className='text-xs sm:text-base'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </div>
          </div>
          <Link href = "/product"><div className='bg-[#f9f9f91c] text-xs sm:text-base w-fit py-3 px-3 sm:py-4 sm:px-8 cursor-pointer'>View Collection</div></Link>
        </div>
        <Image className='w-[600px] h-[400px] hidden lg:block' src="/img/imageBlock.jpg" width={419} height={0} alt=""/>
      </div>
      <div className=''>
        <div className='text-2xl sm:text-3xl font-bold text-[#272343] mb-10 sm:mb-12 text-center'>What Makes Our Brand Different</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center'>

          <div className='bg-[#F9F9F9] w-[100%] p-10 h-60 flex flex-col gap-4 text-[#007580]'>
          <Image className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' src="/Svg/Delivery.svg" width={25} height={25} alt=""/>
            <div className='text-base font-[500]  sm:font-normal sm:text-xl'>Next day as standard</div>
            <div className='text-sm sm:text-base md:text-sm'>Order before 3pm and get your order the next day as standard</div>
          </div>
          
          <div className='bg-[#F9F9F9] w-[100%] p-10 h-60 flex flex-col gap-4 text-[#007580]'>
          <Image className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' src="/Svg/Checkmark--outline.svg" width={25} height={25} alt=""/>
            <div className='text-base font-[500]  sm:font-normal sm:text-xl'>Made by true artisans</div>
            <div className='text-sm sm:text-base md:text-sm'>Handmade crafted goods made with real passion and craftmanship</div>
          </div>
          <div className='bg-[#F9F9F9] w-[100%] p-10 h-60 flex flex-col gap-4 text-[#007580]'>
          <Image className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' src="/Svg/Purchase.svg" width={25} height={25} alt=""/>
            <div className='text-base font-[500] sm:font-normal sm:text-xl'>Unbeatable prices</div>
            <div className='text-sm sm:text-base md:text-sm '>For our materials and quality you won’t find better prices anywhere</div>
          </div>

          <div className='bg-[#F9F9F9] w-[100%] p-10 h-64 flex flex-col gap-4 text-[#007580]'>
          <Image className='' src="/Svg/Sprout.svg" width={25} height={25} alt=""/>
            <div className='text-base font-[500] sm:font-normal sm:text-xl'>Recycled packaging</div>
            <div className='text-sm sm:text-base md:text-sm '>We use 100% recycled to ensure our footprint is more manageable</div>
          </div>

        </div>
      </div>
      <div>
      <div className='text-2xl sm:text-3xl font-bold text-[#272343] '>Our Popular Products</div>
      <Popular/>
      </div>
      </div>
    </div>
  )
}

export default Page


export const metadata: Metadata = {
  title: "About - Comforty",
  description: "Discover the best furniture collection for your interior at Comforty. Shop stylish, comfortable, and high-quality furniture with free shipping on orders over $50. Transform your space today!",
};
