import React from 'react'
import Image from 'next/image'

const Topcategories = () => {
  return (
    <div>
      <div className="heading text-2xl flex justify-center text-center sm:text-start  sm:text-3xl  sm:justify-start font-bold text-[#272343]  pt-8 sm:pt-24 pb-4 sm:pb-10">
      Top Categories
    </div>
      <div  className='grid lg:grid-cols-2 xl:grid-cols-3 gap-x-12 lg:gap-x-2 md:pr-10 xl:px-0 gap-y-5 justify-center sm:justify-start'>
        <div className='flex flex-col relative justify-end mx-1 w-[220px] h-[220px] sm:h-[300px] sm:w-[300px]   2xl:h-[350px] 2xl:w-[350px] '>
          <Image className='object-contain rounded-lg' src="/img/Frame1.jpg" width={380} height={380} alt='cart' />
          <div className='bg-[#000000bd] h-20 rounded-b-lg flex flex-col px-4 py-4 gap-1 absolute w-full text-white'>
            <div className='text-lg font-semibold '> Wing Chair</div>
            <div className='text-xs text-[#d6d6d6]'>3,584 Products</div>
          </div>
        </div>
        <div className='flex flex-col relative justify-end mx-1 w-[220px] h-[220px] sm:h-[300px] sm:w-[300px]  2xl:h-[350px] 2xl:w-[350px]'>
          <Image className='object-contain rounded-lg' src="/img/Image7.jpg" width={380} height={380} alt='cart' />
          <div className='bg-[#000000bd] h-20 rounded-b-lg flex flex-col px-4 py-4 gap-1 absolute w-full text-white'>
            <div className='text-lg font-semibold '> Wooden Chair</div>
            <div className='text-xs text-[#d6d6d6]'>157 Products</div>
          </div>
        </div>
        <div className='flex flex-col relative justify-end mx-1 w-[220px] h-[220px] sm:h-[300px] sm:w-[300px] 2xl:h-[350px] 2xl:w-[350px]'>
          <Image className='object-contain rounded-lg' src="/img/image8.jpg" width={380} height={380} alt='cart' />
          <div className='bg-[#000000bd] h-20 rounded-b-lg flex flex-col px-4 py-4 gap-1 absolute w-full text-white'>
            <div className='text-lg font-semibold '> Desk Chair</div>
            <div className='text-xs text-[#d6d6d6]'>154 Products</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topcategories
