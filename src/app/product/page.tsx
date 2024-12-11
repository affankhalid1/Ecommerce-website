import React from 'react'
import Newsletter from '../components/Newsletter'
import Allproducts from '../components/Allproducts'

const Page = () => {
  return (
    <div>
      <div>
      <div className="heading text-center sm:text-start text-3xl font-bold text-[#272343] pt-20 pb-6">
      All Products
    </div>
      <Allproducts/>
      <Newsletter/>
    </div>
    </div>
  )
}

export default Page


export const metadata: Metadata = {
  title: "Products - Comforty",
  description: "Discover the best furniture collection for your interior at Comforty. Shop stylish, comfortable, and high-quality furniture with free shipping on orders over $50. Transform your space today!",
};