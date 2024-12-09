import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbartop = () => {
    return (
        <div>
            <div className='py-3.5 bg-[#272343]  text-white xs:text-xs md:text-sm'>
                <div className='w-[70vw] mx-auto flex justify-between gap-2 flex-wrap'>
                    <div className='flex gap-2'>
                        <Image className='' src="/Svg/check 1.svg" width={20} height={20} alt="" />
                        <div className='text-sm sm:text-md'>Free Shipping On All Orders Above $50</div>
                    </div>
                    <div className='flex justify-center items-center gap-6'>
                        <div className=' hidden '>
                            <div className='flex gap-1.5 items-center'>
                            <div>Eng</div>
                            <Image className='' src="/Svg/Dropdown.svg" width={12} height={12} alt="" />
                            </div>
                        </div>
                        <div>
                            <Link href = "/faqs"><div className='text-sm sm:text-md'>Faqs</div></Link>
                        </div >
                        <Link href = "/contact"><div className='flex gap-1.5 items-center'>
                            <Image className='' src="/Svg/alert-circle 1.svg" width={18} height={18} alt="" />
                            <div className='text-sm sm:text-md'>Need Help</div>    
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbartop
