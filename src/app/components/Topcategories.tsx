import React from 'react'
import Image from 'next/image'

const Topcategories = () => {
  return (
    <div>
      <div className="heading text-3xl font-bold text-[#272343] pt-28 pb-16">
        Top Categories
      </div>
      <div  className='grid md:grid-cols-2 xl:grid-cols-3 gap-x-2  gap-y-5'>
        <div className='flex flex-col relative justify-end mx-1 h-[255px] w-[255px] sm:h-[300px] sm:w-[300px]  2xl:h-[380px] 2xl:w-[380px] '>
          <Image className='object-contain rounded-lg' src="/img/Frame1.jpg" width={380} height={380} alt='cart' />
          <div className='bg-[#000000bd] h-20 rounded-b-lg flex flex-col px-4 py-4 gap-1 absolute w-full text-white'>
            <div className='text-lg font-semibold '> Wing Chair</div>
            <div className='text-xs text-[#d6d6d6]'>3,584 Products</div>
          </div>
        </div>
        <div className='flex flex-col relative justify-end mx-1 h-[255px] w-[255px] sm:h-[300px] sm:w-[300px] 2xl:h-[380px] 2xl:w-[380px]'>
          <Image className='object-contain rounded-lg' src="/img/Image7.jpg" width={380} height={380} alt='cart' />
          <div className='bg-[#000000bd] h-20 rounded-b-lg flex flex-col px-4 py-4 gap-1 absolute w-full text-white'>
            <div className='text-lg font-semibold '> Wooden Chair</div>
            <div className='text-xs text-[#d6d6d6]'>157 Products</div>
          </div>
        </div>
        <div className='flex flex-col relative justify-end mx-1 h-[255px] w-[255px] sm:h-[300px] sm:w-[300px] 2xl:h-[380px] 2xl:w-[380px]'>
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
