import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbarmiddle = () => {
    return (
        <div>
            <div className='py-6 bg-[#F0F2F3] '>
            <div className='w-[70vw] mx-auto flex justify-between '>
                <div className="logo flex gap-0.5 sm:gap-2 justify-center items-center">
                    <Image className='w-[25px] h-[25px]  sm:w-[40px] sm:h-[40px]' src="/Svg/Logo Icon.svg" width={40} height={40} alt="" />
                    <div className='text-lg sm:text-2xl text-[#272343] font-[550] flex items-center'>Comforty</div>
                </div>
                <Link href = "/cart">
                <div className='bg-white flex gap-1.5 sm:gap-3 py-1.5 sm:py-3 px-2 sm:px-4 rounded-lg'>
                <Image className='w-[16px] h-[16px]  sm:w-[20px] sm:h-[20px]' src="/Svg/cart.svg" width={20} height={20} alt="" />
                    <div className='text-xs sm:text-sm text-[#272343]'>Cart</div>
                    <div className='bg-[#007580] size-4 sm:size-5 flex justify-center text-[9.5px] sm:text-[10px] items-center rounded-full text-white'>2</div>
                </div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Navbarmiddle
