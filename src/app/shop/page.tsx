import React from 'react'
import Newsletter from '../components/Newsletter'
import Allproducts from '../components/Allproducts'

const page = () => {
  return (
    <div className="mb-32">
      <div className="heading text-3xl font-bold text-[#272343] pt-20 pb-6">
      Shop Now
    </div>
      <Allproducts/>
    </div>
  )
}

export default page
