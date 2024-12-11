import React from 'react'
import Details from '../components/Details'
import FeaturedProducts from '../components/FeaturedProducts'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <Details/>
      <div className='flex flex-col md:flex-row gap-4 justify-center flex-wrap md:flex-nowrap sm:justify-between items-center pt-8 sm:pt-24 pb-4 sm:pb-10'>
      <div className="heading text-2xl justify-center text-center sm:text-start  sm:text-3xl  flex sm:justify-start font-bold text-[#272343] ">
      Featured Products
    </div> 
    <Link href = "/product">
    <div className='font-bold underline underline-offset-4 decoration-2 justify-center  sm:text-base text-sm'>
      View all
    </div></Link>
      </div>
      <FeaturedProducts/>
    </div>
  )
}

export default Page

export const metadata: Metadata = {
  title: "Product Details - Comforty",
  description: "Discover the best furniture collection for your interior at Comforty. Shop stylish, comfortable, and high-quality furniture with free shipping on orders over $50. Transform your space today!",
};
