import React from 'react'
import Image from 'next/image'

const Brands = () => {
  return (
    <div>
      <div className='flex gap-2 w-full justify-evenly items-center mx-auto mt-24 flex-wrap'>
      <Image className='p-3' src="/img/Zapier-Logo.png" width={120} height={120} alt='cart' />
      <Image className='p-3 ' src="/img/pipedrive-Logo.png" width={120} height={120} alt='cart' />
      <Image className='p-3 ' src="/img/CIB-Logo.png" width={120} height={120} alt='cart' />
      <Image className='p-3 ' src="/img/Z-Logo.png" width={120} height={120} alt='cart' />
      <Image className='p-3 ' src="/img/Burnt-Logo.png" width={120} height={120} alt='cart' />
      <Image className='p-3 ' src="/img/Panda-Logo.png" width={120} height={120} alt='cart' />
      <Image className='p-3 ' src="/img/MOZ-Logo.png" width={120} height={120} alt='cart' />
      </div>
    </div>
  )
}

export default Brands
