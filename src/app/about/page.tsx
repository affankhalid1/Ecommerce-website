import React from 'react'
import Image from 'next/image'
import Popular from '../components/Popular'
import Link from 'next/link'



const Page = () => {
  return (
    <div>
      <div className='w-[70vw] mx-auto flex flex-col gap-40 my-32'>
      <div className='flex gap-20 flex-wrap xl:flex-nowrap justify-center '>
        <div className='p-10 w-[600px] h-[400px] bg-[#007580] flex flex-col text-white  justify-between'>
          <div>
            <div className='text-2xl font-bold pb-4'>About Us - Comforty</div>
            <div>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </div>
          </div>
          <Link href = "/product"><div className='bg-[#f9f9f91c] w-fit py-4 px-8 cursor-pointer'>View Collection</div></Link>
        </div>
        <Image className='w-[600px] h-[400px] hidden lg:block' src="/img/imageBlock.jpg" width={419} height={0} alt=""/>
      </div>
      <div className=''>
        <div className='text-3xl font-bold text-[#272343] mb-12 text-center'>What Makes Our Brand Different</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center'>

          <div className='bg-[#F9F9F9] w-[100%] p-10 h-60 flex flex-col gap-4 text-[#007580]'>
          <Image className='' src="/Svg/Delivery.svg" width={25} height={25} alt=""/>
            <div className='text-xl'>Next day as standard</div>
            <div>Order before 3pm and get your order the next day as standard</div>
          </div>
          
          <div className='bg-[#F9F9F9] w-[100%] p-10 h-60 flex flex-col gap-4 text-[#007580]'>
          <Image className='' src="/Svg/Checkmark--outline.svg" width={25} height={25} alt=""/>
            <div className='text-xl'>Made by true artisans</div>
            <div>Handmade crafted goods made with real passion and craftmanship</div>
          </div>
          <div className='bg-[#F9F9F9] w-[100%] p-10 h-60 flex flex-col gap-4 text-[#007580]'>
          <Image className='' src="/Svg/Purchase.svg" width={25} height={25} alt=""/>
            <div className='text-xl'>Unbeatable prices</div>
            <div>For our materials and quality you won’t find better prices anywhere</div>
          </div>

          <div className='bg-[#F9F9F9] w-[100%] p-10 h-64 flex flex-col gap-4 text-[#007580]'>
          <Image className='' src="/Svg/Sprout.svg" width={25} height={25} alt=""/>
            <div className='text-xl'>Recycled packaging</div>
            <div>We use 100% recycled to ensure our footprint is more manageable</div>
          </div>

        </div>
      </div>
      <div>
      <div className='text-3xl font-bold text-[#272343] '>Our Popular Products</div>
      <Popular/>
      </div>
      </div>
    </div>
  )
}

export default Page
