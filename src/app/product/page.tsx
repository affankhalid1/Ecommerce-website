import React from 'react'
import Newsletter from '../components/Newsletter'
import Allproducts from '../components/Allproducts'

const Page = () => {
  return (
    <div>
      <div>
      <div className="heading text-3xl font-bold text-[#272343] pt-20 pb-6">
      All Products
    </div>
      <Allproducts/>
      <Newsletter/>
    </div>
    </div>
  )
}

export default Page
