"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";

const Allproducts = () => {
  const builder = ImageUrlBuilder(client);

  const fetchData = async () => {
    let query = `*[ _type == "categories" ]`;
    const category = await client.fetch(query);
    return category;
  };

  let [category, setCategory] = useState([]);
  useEffect(() => {
    fetchData().then((data) => {
      setCategory(data);
    });
  }, []);

  return (
    <div>
      <div className="heading text-2xl flex justify-center text-center sm:text-start  sm:text-3xl  sm:justify-start font-bold text-[#272343]  pt-8 sm:pt-24 pb-4 sm:pb-10">
        Top Categories
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-12 lg:gap-x-2 md:pr-10 xl:px-0 gap-y-12  sm:justify-start justify-center">
      {category.map((item: any) => {
        return (
            <div key={item._id} className="flex justify-center mr-10">
              <Link href = {`/products/category/${item.slug.current}`} className="flex flex-col  relative justify-end mx-1 w-[220px] h-[220px] sm:h-[300px] sm:w-[300px]   2xl:h-[350px] 2xl:w-[350px] hover:scale-105  transition transform duration-300 ">
              <Image
                className="object-contain rounded-lg"
                src={builder.image(item.image).width(760).height(760).url()}
                width={380}
                height={380}
                alt="category"
              />
              <div className="bg-[#000000bd] h-20 rounded-b-lg flex flex-col px-4 py-4 gap-1 absolute w-full text-white">
                <div className="text-lg font-semibold "> {item.title}</div>
                <div className="text-xs text-[#d6d6d6]">{item.products} Products</div>
              </div>
            </Link>
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default Allproducts;
