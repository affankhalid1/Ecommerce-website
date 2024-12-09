"use client"
import React from 'react'
import Image from 'next/image'
import NavLink from './Navlink'

const Footer = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className='bg-[#e4e4e4] h-[1.2px]'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3  justify-center items-center   w-[70vw] mx-auto py-20'>
                <div className='flex flex-col gap-5'>
                    <div className="logo flex gap-2 ">
                        <Image className='' src="/Svg/Logo Icon.svg" width={40} height={40} alt="" />
                        <div className='text-2xl text-[#272343] font-semibold flex items-center'>Comforty</div>
                    </div>
                    <div className='text-[#9A9CAA]'>Discover furniture that combines style,<br /> comfort, and quality. Perfectly crafted to <br />enhance your living spaces<br /> and create lasting impressions</div>
                    <div className='flex gap-5 py-2'>
                        <NavLink href="/" className={(isActive) => isActive ? 'text-[#007580]   font-[500]' : ' text-[#636270] pl-0  font-[500]'}><Image className='max-w-[100px]' src="/Svg/Facebook.svg" width={15} height={15} alt="" /></NavLink>
                        <NavLink href="/shop" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#636270]  font-[500]'}><Image className='max-w-[100px]' src="/Svg/twitter.svg" width={15} height={15} alt="" /></NavLink>
                        <NavLink href="/product" className={(isActive) => isActive ? ' text-[#007580]  font-[500]' : ' text-[#636270]  font-[500]'}><Image className='max-w-[100px]' src="/Svg/instagram.svg" width={15} height={15} alt="" /></NavLink>
                        <NavLink href="/pages" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#636270]  font-[500]'}><Image className='max-w-[100px]' src="/Svg/pinterest.svg" width={15} height={15} alt="" /></NavLink>
                        <NavLink href="/about" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#636270]  font-[500]'}><Image className='max-w-[100px]' src="/Svg/YouTube.svg" width={15} height={15} alt="" /></NavLink>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#9A9CAA] '>CATEGORY</div>
                    <div className='flex flex-col gap-3'>
                        <NavLink href="/sofa" className={(isActive) => isActive ? 'text-[#007580] border-b-2 border-[#007580] w-[35px] font-[500]' : ' text-[#272343]  font-[500]'}>Sofa</NavLink>
                        <NavLink href="/armchair" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#272343]  font-[500]'}>Armchair</NavLink>
                        <NavLink href="/wingchair" className={(isActive) => isActive ? ' text-[#007580]  font-[500]' : ' text-[#272343]  font-[500]'}>Wing Chair</NavLink>
                        <NavLink href="/deskchair" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#272343]  font-[500]'}>Desk Chair</NavLink>
                        <NavLink href="/woodenchair" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#272343]  font-[500]'}>Wooden Chair</NavLink>
                        <NavLink href="/parkbench" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#272343]  font-[500]'}>Park Bench</NavLink>
                    </div>
                </div>
                </div>


                <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#9A9CAA]'>SUPPORT</div>
                    <div className='flex flex-col gap-3'>
                        <NavLink href="/helpandsupport" className={(isActive) => isActive ? 'text-[#007580] border-b-2 border-[#007580] w-[117px] font-[500]' : ' text-[#272343]  font-[500]'}>Help & Support</NavLink>
                        <NavLink href="/termsandconditions" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#272343]  font-[500]'}>Terms & Conditions</NavLink>
                        <NavLink href="/privacypolicy" className={(isActive) => isActive ? ' text-[#007580]  font-[500]' : ' text-[#272343]  font-[500]'}>Privacy Policy</NavLink>
                        <NavLink href="/contact" className={(isActive) => isActive ? 'text-[#007580]  font-[500]' : ' text-[#272343]  font-[500]'}>Help</NavLink>
                    </div>
                </div>
                </div>
                <div className='flex flex-col items-center '>
                <div className='flex flex-col gap-5'>
                    <div className='text-[#9A9CAA]'>NEWSLETTER</div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-2 flex-wrap sm:flex-nowrap'>
                            <input className='px-4 py-2  border-2 rounded-md border-[#007580] outline-none ' type="text" name="" id="" placeholder='Your email' />
                            <button className='text-white bg-[#007580]  px-4 py-2 rounded-md'>Subscribe</button>
                        </div>
                            <div className='text-[#9A9CAA]'>Subscribe to our newsletter to receive exclusive <br /> offers, the latest furniture trends, and <br /> updates on new arrivals. <br /> Transform your home with Comforty!</div>
                        <div></div>
                    </div>
                </div>
                </div>

                

                <div>

                </div>
            </div>
            <div className='bg-[#e4e4e4] h-[1.2px]'></div>
            <div className='mx-auto w-[70vw] py-5 flex justify-between'>
                <div className='text-sm text-[#9A9CAA]'>@ 2021 - Blogy - Designed & Develop by <b className='text-[#272343]'>Affan Khalid</b></div>
                <Image className='' src="/Svg/paymentgateway-logos.svg" width={180} height={180} alt='product' />
            </div>
        </div>
    )
}

export default Footer
