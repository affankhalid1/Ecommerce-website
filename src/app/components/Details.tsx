import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Details = () => {
  return (
    <div className='my-32'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-20'>
        <div>
        <Image className=' ' src="/img/image (9).jpg" width={500} height={470} alt='product' />
        </div>
        <div className='flex flex-col gap-8'>
            <div className='text-xl font-semibold sm:text-4xl sm:font-bold text-[#272343]'>Library Stool <br /> Chair</div>
            <div className='px-3 py-2 rounded-full text-white w-fit cursor-pointer bg-[#029FAE]'>$20.00 USD</div>
            <div className='bg-[#e4e4e4] h-[1.2px] w-[70%]'></div>
            <div className='text-[#272343]'>The Library Stool Chair combines style and comfort with <br /> soft pink upholstery and sturdy black legs, perfect for any <br /> space.</div>
            <Link href = "/cart"><div className='flex bg-[#029FAE] w-fit gap-2 px-4 py-3 rounded-lg'>
            <Image className='' src="/Svg/cart1.svg" width={20} height={20} alt='product' />
            <div className='text-white text-sm'>Add To Cart</div>
                </div></Link>
        </div>
      </div>
    </div>
  )
}

export default Details
