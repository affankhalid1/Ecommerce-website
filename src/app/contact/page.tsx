import React from 'react'
import Image from 'next/image'
import type { Metadata } from "next";

const Page = () => {
  return (
    <div>
      <div className='flex flex-col gap-32'>
        <div className='w-[70%] flex flex-col mx-auto justify-center mt-20 gap-4'>
          <div className='text-xl sm:text-3xl font-bold flex justify-center text-center'>Get In Touch With Us</div>
          <div className='text-sm sm:text-base text-center max-w-[600px] text-[#9F9F9F] mx-auto'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-20 '>
          <div className='flex flex-col gap-16  items-center lg:items-start'>
            <div className='flex gap-4'>
              <div className='flex items-start  pt-1.5' >
                <Image src="/Svg/location.svg" width={20} height={20} alt='product' />
              </div>
              <div>
                <div className='text-lg  font-semibold'>Address</div>
                <div className='text-sm'>236 5th SE Avenue, New<br/> York NY10000, United <br/>States</div>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex items-start pt-1.5' >
                <Image src="/Svg/phone.svg" width={20} height={20} alt='product' />
              </div>
              <div>
                <div className='text-lg  font-semibold'>Phone</div>
                <div className='text-sm'>Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789</div>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex items-start pt-1.5' >
                <Image src="/Svg/time.svg" width={20} height={20} alt='product' />
              </div>
              <div>
                <div className='text-lg font-semibold'>Working Time</div>
                <div className='text-sm'>Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00</div>
              </div>
            </div>

          </div>
          <div className='form flex flex-col gap-6 w-full lg:w-[70%] items-center lg:items-start'>
            <div className='flex flex-col gap-4 '>
              <div>Your name</div>
              <input className='px-12 pl-5 lg:px-4 py-3.5 text-sm w-full sm:text-base  border-2 rounded-lg ' type="text" placeholder='Abc' />
            </div>
            <div className='flex flex-col gap-4'>
              <div>Email address</div>
              <input className='px-12 pl-5 lg:px-4 py-3.5 w-full  border-2 rounded-lg ' type="text" placeholder='abc@gmail.com' />
            </div>
            <div className='flex flex-col gap-4'>
              <div>Subject</div>
              <input className='px-12 pl-5 lg:px-4 py-3.5 w-full border-2 rounded-lg ' type="text" placeholder='This is an Optional' />
            </div>
            <div className='flex flex-col gap-4'>
              <div>Message</div>
              <input className='px-12 pl-5 lg:px-4 pt-3.5 pb-20 w-full border-2 rounded-lg ' type="text" placeholder='Hi! i’d like to ask about' />
            </div>
            <div className='flex '>
              <button className='px-7 py-3 w-full bg-[#007580] text-white rounded-lg border-[#B88E2F] border-2 text-center'>Submit</button>
            </div>
          </div>
        </div>

        <div className='bg-[#F4F4F4] rounded-lg  w-full '>
        <div className='flex gap-2 gap-y-4 py-5 sm:py-10 md:py-12 lg:py-28 xl:py-40 px-6 md:px-8 lg:px-12 xl:px-0  md:justify-evenly flex-wrap md:flex-nowrap'>
          <div className='flex gap-1 sm:gap-2 md:gap-4'>
         <div  className='flex items-start'>
         <Image className='w-[18px] h-[18px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] ' src="/Svg/winnerquality.svg" width={50} height={50} alt='product' />
         </div>
            <div>
              <div className='text-sm md:text-lg lg:text-xl xl:text-2xl font-[500] font-semibold'>High Quality</div>
              <div className=' text-[#898989] text-xs md:text-sm'>Crafted from top materials</div>
            </div>
          </div>

          <div className='flex gap-1 sm:gap-2 md:gap-4'>
          <div className='flex items-start'>
          <Image className='w-[18px] h-[18px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] ' src="/Svg/guarantee.svg" width={50} height={50} alt='product' />
          </div>
            <div>
              <div className='text-sm md:text-lg lg:text-xl xl:text-2xl font-[500] font-semibold'>Warranty Protection</div>
              <div className=' text-[#898989] text-xs md:text-sm'>Over 2 years</div>
            </div>
          </div>

          <div className='flex gap-1 sm:gap-2 md:gap-4'>
          <div className='flex items-start'>
          <Image className='w-[18px] h-[18px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] ' src="/Svg/customer-support.svg" width={50} height={50} alt='product' />
          </div>
            <div>
              <div className='text-sm md:text-lg lg:text-xl xl:text-2xl font-[500] font-semibold'>24 / 7 Support</div>
              <div className=' text-[#898989] text-xs md:text-sm'>Dedicated support</div>
            </div>
          </div>


        </div>
        </div>
      </div>
    </div>
  )
}

export default Page



export const metadata: Metadata = {
  title: "Contact - Comforty",
  description: "Discover the best furniture collection for your interior at Comforty. Shop stylish, comfortable, and high-quality furniture with free shipping on orders over $50. Transform your space today!",
};