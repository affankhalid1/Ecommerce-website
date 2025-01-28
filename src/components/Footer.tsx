"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className='bg-[#e4e4e4] h-[1.2px]'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-3 gap-y-8     w-[70vw] mx-auto pt-12 pb-3 sm:py-20'>
                <div className='flex flex-col gap-5 pr-2'>
                    <div className="logo flex gap-2 justify-center md:justify-start">
                        <Image className='w-[30px] h-[30px]  sm:w-[40px] sm:h-[40px]' src="/Svg/Logo Icon.svg" width={40} height={40} alt="" />
                        <div className='text-xl sm:text-2xl text-[#272343] font-semibold flex items-center'>Comforty</div>
                    </div>
                    <div className='text-[#9A9CAA] text-sm sm:text-base text-center md:text-start'>Discover furniture that combines style,<br /> comfort, and quality. Perfectly crafted to <br />enhance your living spaces<br /> and create lasting impressions</div>
                    <div className='flex gap-3 sm:gap-5 py-2 justify-center md:justify-start items-center'>
                        <Link href="" className=' text-[#636270] pl-0  font-[500]'><Image className='max-w-[100px]' src="/Svg/Facebook.svg" width={15} height={15} alt="" /></Link>
                        <Link href="" className=' text-[#636270]  font-[500]'><Image className='max-w-[100px]' src="/Svg/twitter.svg" width={15} height={15} alt="" /></Link>
                        <Link href="" className=' text-[#636270]  font-[500]'><Image className='max-w-[100px]' src="/Svg/instagram.svg" width={15} height={15} alt="" /></Link>
                        <Link href="" className=' text-[#636270]  font-[500]'><Image className='max-w-[100px]' src="/Svg/pinterest.svg" width={15} height={15} alt="" /></Link>
                        <Link href="" className=' text-[#636270]  font-[500]'><Image className='max-w-[100px]' src="/Svg/YouTube.svg" width={15} height={15} alt="" /></Link>
                    </div>
                </div>

                <div className='flex flex-col lg:items-center'>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#9A9CAA]  text-center md:text-start text-sm sm:text-base font-[550px] sm:font-normal'>CATEGORY</div>
                    <div className='flex flex-col gap-3'>
                        <Link href="/product" className=' text-[#272343] hover:text-[#007580] font-[500] text-center md:text-start text-sm sm:text-base'>Sofa</Link>
                        <Link href="/product" className=' text-[#272343] hover:text-[#007580] font-[500] text-center md:text-start text-sm sm:text-base'>Armchair</Link>
                        <Link href="/product" className=' text-[#272343] hover:text-[#007580] font-[500] text-center md:text-start text-sm sm:text-base'>Wing Chair</Link>
                        <Link href="/product" className=' text-[#272343] hover:text-[#007580] font-[500] text-center md:text-start text-sm sm:text-base'>Desk Chair</Link>
                        <Link href="/product" className= ' text-[#272343] hover:text-[#007580] font-[500] text-center md:text-start text-sm sm:text-base'>Wooden Chair</Link>
                        <Link href="/product" className=' text-[#272343] hover:text-[#007580] font-[500] text-center md:text-start text-sm sm:text-base'>Park Bench</Link>
                    </div>
                </div>
                </div>


                <div className='flex flex-col '>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#9A9CAA] text-sm sm:text-base text-center md:text-start font-[550px] sm:font-normal'>SUPPORT</div>
                    <div className='flex flex-col gap-3 '>
                        <Link href="/contact" className=' text-[#272343] hover:text-[#007580] font-[500] text-sm sm:text-base  text-center md:text-start'>Help & Support</Link>
                        <Link href="/faqs" className=' text-[#272343] hover:text-[#007580] font-[500] text-sm sm:text-base  text-center md:text-start'>Terms & Conditions</Link>
                        <Link href="/faqs" className=' text-[#272343] hover:text-[#007580] font-[500]  text-sm sm:text-base text-center md:text-start'>Privacy Policy</Link>
                        <Link href="/contact" className=' text-[#272343] hover:text-[#007580] font-[500] text-sm sm:text-base  text-center md:text-start'>Help</Link>
                    </div>
                </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex flex-col gap-5'> 
                    <div className='text-[#9A9CAA] text-center md:text-start text-sm sm:text-base font-[550px] sm:font-normal'>NEWSLETTER</div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-2 flex-wrap sm:flex-nowrap justify-center md:justify-start '>
                            <input className='px-4 py-2 text-sm sm:text-base  border-2 rounded-md border-[#007580] outline-none ' type="text" name="" id="" placeholder='Your email' />
                            <button className='text-white bg-[#007580]  px-4 py-2 rounded-md text-sm sm:text-base'>Subscribe</button>
                        </div>
                            <div className='text-[#9A9CAA] text-sm sm:text-base text-center md:text-start'>Subscribe to our newsletter to receive exclusive <br /> offers, the latest furniture trends, and <br /> updates on new arrivals. <br /> Transform your home with Comforty!</div>
                        <div></div>
                    </div>
                </div>
                </div>

                

                <div>

                </div>
            </div>
            <div className='bg-[#e4e4e4] h-[1.2px]'></div>
            <div className='mx-auto w-[70vw] py-5 flex justify-center sm:justify-between flex-wrap  sm:flex-nowrap gap-3'>
                <div className='text-sm text-[#9A9CAA] text-center md:text-start '>@ 2021 - Comforty - Designed & Develop by <b className='text-[#272343] '>Affan Khalid</b></div>
                <Image className='w-[150px]  sm:w-[180px] ' src="/Svg/paymentgateway-logos.svg" width={180} height={180} alt='product' />
            </div>
        </div>
    )
}

export default Footer
