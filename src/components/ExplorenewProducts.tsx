"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";

const ExplorenewProducts = () => {
  const builder = ImageUrlBuilder(client);

  const fetchData1 = async () => {
    let query = `*[ _type == "popularmain" ]`;
    const category = await client.fetch(query);
    return category;
  };
  const fetchData = async () => {
    let query = `*[ _type == "popularstyles" ]`;
    const category = await client.fetch(query);
    return category;
  };

  let [popularStyles, setPopularStyles] = useState([]);
  let [popularMain, setPopularMain] = useState([]);
  useEffect(() => {
    fetchData().then((data) => {
      setPopularStyles(data);
    });
    fetchData1().then((data) => {
      setPopularMain(data);
    });
  }, []);
 
  return (
    <>
   <div className='hidden xl:block  mt-20'>
   <div className="heading text-2xl justify-center   sm:text-3xl  flex sm:justify-start font-bold text-[#272343] pb-8">
      Explore new and popular styles
    </div>
   </div>

    <div className='grid  xl:grid-cols-2  gap-x-5 gap-y-6 items-center '>

      <div className=' '>
      <div className='block xl:hidden'>
      <div className="heading text-2xl justify-center text-center sm:text-start  sm:text-3xl  flex sm:justify-start font-bold text-[#272343] pt-24 pb-10">
      Explore new and popular styles
    </div>
      </div>
      {popularMain.map((item:any) => {
          return <div key={item._id} >
            <div className='flex items-center sm:justify-start justify-center'>
          <Image className=' xl:h-[450px] xl:w-[450px] 2xl:h-[550px] 2xl:w-[550px] ' src={builder.image(item.image).width(2000).height(2000).url()} width={650} height={650} alt='product' />
        </div>
          </div>
        })}
      </div>

      <div className='m-5 ml-0 grid sm:justify-start justify-center md:grid-cols-2   gap-x-1 gap-y-6 '>
        {popularStyles.map((item:any) => {
          return <div key={item._id} className='flex '>
            <div className=' flex justify-center items-center h-[220px] w-[220px] lg:h-[270px] lg:w-[270px] xl:h-[220px] xl:w-[220px]  2xl:h-[270px] 2xl:w-[270px] '>
              <Image className=' object-contain' src={builder.image(item.image).width(400).height(400).url()} width={312} height={312} alt='product' />
            </div>
          </div>
        })}
      </div>
    </div>
    </>
  )
}

export default ExplorenewProducts

