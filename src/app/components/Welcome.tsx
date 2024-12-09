import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Welcome = () => {
  return (
    <div>
      <div className='bg-[#F0F2F3] w-full h-[85vh] sm:h-[70vh] px-8 lg:px-24 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center rounded-bl-[5rem]'>
        <div className='flex flex-col gap-6'>
            <div className='text-sm mt-1'>WELCOME TO CHAIRY</div>
            <div className='text-xl sm:text-3xl md:text-5xl  font-bold text-[#272343]'>Best Furniture <br />Collection for your <br />interior.</div>
            <Link href = "/shop"><div className='button flex gap-2 bg-[#029FAE] w-fit px-3 items-center sm:px-5 py-2 my-6 rounded-lg'>
                
                <div className='text-white text-sm sm:text-md'>Shop Now</div>
                <Image className='' src="Svg/rightarrow.svg" width={25} height={25} alt='cart' />
            </div></Link>
        </div>
        <div className='flex justify-end'>
        <Image className='' src="/img/Product Image.png" width={350} height={600} alt='cart' />
        </div>
      </div>
    </div>
  )
}

export default Welcome
