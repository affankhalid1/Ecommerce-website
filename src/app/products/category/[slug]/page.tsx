"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import  ImageUrlBuilder  from '@sanity/image-url'
import {CartManager} from '@/actions/CartManage'
import { useUser } from "@clerk/nextjs";



const CategoryPage =  ({params}: {params: {slug: string}}) => {
  const { user } = useUser(); // Extract the authenticated user
  

  // const email:any = user?.primaryEmailAddress?.emailAddress
  const userId:any = user?.id; // Clerk's unique user ID for the signed-in user
 

  const builder = ImageUrlBuilder(client)
  const [categoryname, setcategoryname] = useState("");
 
  const [products, setproducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {

    let query = `*[ _type == "categories" && slug.current == "${params.slug}"][0]`
    const category = await  client.fetch(query)
    setcategoryname(category.title)

    
    const category_id = category._id

    let query2 = `*[ _type == "products" && category._ref == "${category_id}" || _type == "beds" && category._ref == "${category_id}"]`
    const categoryProducts = await  client.fetch(query2)

    setproducts(categoryProducts)

  }
  catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
        // Use a state object to track hover for each product
        const [isHovering, setIsHovering] = useState<{ [key: string]: boolean }>({});

  return (
    <div>
            <div className="heading text-2xl justify-center text-center sm:text-start  sm:text-3xl  flex sm:justify-start font-bold text-[#272343] pt-8 sm:pt-24 pb-4 sm:pb-10">
      {categoryname}
    </div> 
    <div  className='m-5 ml-0 flex flex-wrap justify-center sm:justify-start gap-x-5  2xl:gap-x-9 gap-y-10 sm:gap-y-5 w-[101%]'>
      {products.map((item:any) => {

        return <div key={item._id} className=''>
          <div className='product-image-with-icons w-[200px] h-[200px] xs:w-[140px] xs:h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] 2xl:w-[235px] 2xl:h-[235px] rounded-md relative'>
            <div className='absolute top-2 left-2'>
              {item.offer == "New" &&<div className="discount w-fit bg-[#01AD5A] px-2 py-1 sm:px-4 sm:py-1.5 rounded-[4px]  flex justify-center items-center text-white text-[11px] sm:text-xs">{item.offer}</div>}
              {item.offer == "Sales" && <div className="discount w-fit bg-[#F5813F] px-2 py-1 sm:px-4 sm:py-1.5 rounded-[4px]  flex justify-center items-center text-white text-[11px] sm:text-xs">{item.offer}</div>}
            </div>

            <Link href = {`/product/${item.slug.current}`}>
            <div onMouseOver={() => setIsHovering((prev) => ({ ...prev, [item.slug.current]: true }))}
                  onMouseLeave={() => setIsHovering((prev) => ({ ...prev, [item.slug.current]: false }))} className=' flex justify-center  items-center w-[200px] h-[200px] xs:w-[140px] xs:h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px]  2xl:w-[235px] 2xl:h-[235px] bg-[#F5F5F5]'>
              {isHovering[item.slug.current]?
              <Image className=' rounded-lg object-contain' src={builder.image(item.image2).width(624).height(624).url()} width={312} height={312} alt='product' />:
               <Image className=' rounded-lg object-contain' src={builder.image(item.image).width(624).height(624).url()} width={312} height={312} alt='product' />}
            </div>
            </Link>
          </div>
          <div className='flex justify-between '>
          <div className='flex flex-col gap-2 my-2'>
            <div className='text-[#2A254B] text-[10px] xs:text-[12px]  sm:text-sm lg:text-[15px] w-[130px] xs:w-[110px]  sm:w-[150px]  lg:w-[170px]  xl:w-[200px]   2xl:w-[205px] '>{item.title}</div>
            <div className='flex gap-3 font-semibold'>
            <div className='text-[#DB4444] text-xs sm:text-sm lg:text-base'>{`$ ${item.price}`}</div>
            {item.price&&<div className='line-through text-xs sm:text-sm lg:text-base text-[#7D8184]'>{`$ ${item.priceWithoutDiscount}`}</div >}
            </div>
          </div>
          <button onClick={() => (
            console.log(item._id+ " added to cart"),
            CartManager(item._id, 1, userId)
          )} className='bg-[#F0F2F3] hover:bg-[#029FAE] cursor-pointer rounded-sm sm:rounded-md w-[22px] h-[22px] xs:w-[20px] xs:h-[20px] sm:w-[30px] sm:h-[30px] flex justify-center items-center mt-2'>
          <Image className=' w-[13px] h-[13px] xs:w-[11px] xs:h-[11px] sm:w-[18px] sm:h-[18px] object-contain' src="/Svg/cart.svg" width={25} height={25} alt='cart' title='Add to cart' />
          </button>
          </div>

        </div>
      })}
    </div>
    </div>
  )
}

export default CategoryPage
