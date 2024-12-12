import React from 'react'
import Newsletter from '../components/Newsletter'
import Allproducts from '../components/Allproducts'
import type { Metadata } from "next";

const Page = () => {
  return (
    <div className="mb-32">
      <div className="heading text-2xl text-center sm:text-start sm:text-3xl font-bold text-[#272343] pt-10 sm:pt-20 pb-2 sm:pb-6">
      Shop Now
    </div>
      <Allproducts/>
    </div>
  )
}

export default Page


export const metadata: Metadata = {
  title: "Shop Now - Comforty",
  description: "Discover the best furniture collection for your interior at Comforty. Shop stylish, comfortable, and high-quality furniture with free shipping on orders over $50. Transform your space today!",
};
