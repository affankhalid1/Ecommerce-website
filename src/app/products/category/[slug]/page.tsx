"use client"
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import  ImageUrlBuilder  from '@sanity/image-url'
import {CartManager} from '@/actions/CartManage'
import { useUser } from "@clerk/nextjs";
import { useSearchParams, useRouter } from 'next/navigation'





const CategoryPage =  ({params}: {params: {slug: string}}) => {
  const { user } = useUser(); // Extract the authenticated user
  

  // const email:any = user?.primaryEmailAddress?.emailAddress
  const userId:any = user?.id; // Clerk's unique user ID for the signed-in user

  const builder = ImageUrlBuilder(client)


  const SearchParams = useSearchParams() //get Search Parameters from URL
  const router = useRouter(); // To update the URL dynamically


  const [categoryname, setcategoryname] = useState("");
  const [products, setproducts] = useState([])
  const [totalpages, settotalpages] = useState(1) // Store total pages

  // Set the sorting option
  const [sortOption, setSortOption] = useState("Most popular");
  const [isOpen, setIsOpen] = useState(false);

  
  const options = [
    { label: "Most popular", query: "ratingCount desc" },
    { label: "Price (Low to High)", query: "price asc" },
    { label: "Price (High to Low)", query: "price desc" },
    { label: "Title (A to Z)", query: "title asc" },
    { label: "Title (Z to A)", query: "title desc" },
    
  ];
  
  const ProductsperPage = 12; // Number of products per page
  const currPage = parseInt(SearchParams.get('currpage')|| '1', 10) //Get page Number from URL
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        

    let query = `*[ _type == "categories" && slug.current == "${params.slug}"][0]`
    const category = await  client.fetch(query)
    setcategoryname(category.title)

    
    const category_id = category._id
    
    // Fetch total number of products for pagination calculations
    let totalquery = `count(*[ _type == "products" && category._ref == "${category_id}" || _type == "beds" && category._ref == "${category_id}"])`
    const totalProducts = await  client.fetch(totalquery)

    settotalpages(Math.ceil(totalProducts/ProductsperPage))

    // Fetch paginated products
    const start = (currPage - 1) * ProductsperPage
    const selectedQuery = options.find(option => option.label === sortOption)?.query || "popularity desc";
    
      const query2 = `*[_type == "products" && category._ref == "${category_id}" || _type == "beds" && category._ref == "${category_id}"] | order(${selectedQuery})[${start}...${start + ProductsperPage}]`;
      const categoryProductsfiltered = await client.fetch(query2);
      setproducts(categoryProductsfiltered);

  }
  catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currPage,sortOption]);

// Function to change the page dynamically in the URL
const handlePageChange = (page: number) => {
  router.push(`?currpage=${page}`) // Updates the URL with the new page number
};

        // Use a state object to track hover for each product
        const [isHovering, setIsHovering] = useState<{ [key: string]: boolean }>({});

  return (
    <div>
            <div className='flex flex-col  md:flex-row md:items-center gap-4 justify-between pr-5 pt-8 sm:pt-20 pb-4 sm:pb-10'>
            <div className="heading text-2xl justify-center text-center sm:text-start  sm:text-3xl  flex sm:justify-start font-bold text-[#272343] ">
      {categoryname}
    </div> 

     <div className='flex justify-center sm:justify-start'>
     <div className="relative inline-block text-left ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 font-medium flex items-center gap-1"
        >
          <div className='flex flex-col  sm:flex-row '>
          <div>Sort by:</div> <div className='flex'><div className="ml-1 text-teal-600">{sortOption} </div> <Image src="/Svg/arrowdownward.svg" width={20} height={20} alt="cart" /></div>
          </div>
          
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
            {options.map((option, index) => (
              <div
                key={index}
                className={`px-4 py-2 text-gray-700 cursor-pointer hover:bg-teal-100 ${
                  sortOption === option.label ? "bg-teal-500 text-white" : ""
                }`}
                onClick={() => {
                  setSortOption(option.label);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
     </div>
      {/* <div className="grid grid-cols-4 gap-4 mt-4">
        {products.length> 0 && products.map((item:any) => (
          <div key={item._id} className="border p-4 rounded-md shadow-md">
            <Image src={builder.image(item.image).width(624).height(624).url()} width={624} height={624} alt={item.title} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div> */}


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
                  onMouseLeave={() => setIsHovering((prev) => ({ ...prev, [item.slug.current]: false }))} className=' flex justify-center  items-center w-[200px] h-[200px] xs:w-[140px] xs:h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px]  2xl:w-[235px] 2xl:h-[235px] '>
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

    {/* Pagination Controls */}
       <div className="flex justify-center my-4 gap-3">
         {/* Previous Page Button */}
         <button onClick={() => handlePageChange(currPage - 1)} disabled={currPage === 1} className='size-10 flex justify-center items-center rounded-full border border-black'>
         <Image className=' w-[13px] h-[13px] sm:w-[20px] sm:h-[20px]  ' src="/Svg/pageleftarrow.svg" width={25} height={25} alt='rightarrow' />
         </button>

         {/* Page Numbers */}
         {Array.from({ length: totalpages }, (_, i) => i + 1).map((page) => (
           <button key={page} onClick={() => handlePageChange(page)} className={`size-10   rounded-full ${currPage === page ? 'bg-teal-600 text-white' : 'bg-gray-200'}`}>
             {page}
           </button>
         ))}

         {/* Next Page Button */}
         <button onClick={() => handlePageChange(currPage + 1)} disabled={currPage === totalpages} className='size-10 flex justify-center items-center rounded-full border border-black'>
           <Image className=' w-[13px] h-[13px] sm:w-[20px] sm:h-[20px]  ' src="/Svg/pagerightarrow.svg" width={25} height={25} alt='leftarrow' />
         </button>
       </div>
    </div>
  )
}

export default CategoryPage

// "use client"
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useSearchParams, useRouter } from 'next/navigation'; // Import hooks to manage URL params
// import { client } from '@/sanity/lib/client';
// import ImageUrlBuilder from '@sanity/image-url';
// import { CartManager } from '@/actions/CartManage';
// import { useUser } from "@clerk/nextjs";

// const CategoryPage = ({ params }: { params: { slug: string } }) => {
//   const { user } = useUser(); // Extract the authenticated user
//   const userId: any = user?.id; // Clerk's unique user ID for the signed-in user
//   const builder = ImageUrlBuilder(client);

//   const searchParams = useSearchParams(); // Get search parameters from the URL
//   const router = useRouter(); // To update URL dynamically

//   const [categoryName, setCategoryName] = useState("");
//   const [products, setProducts] = useState([]);
//   const [totalPages, setTotalPages] = useState(1); // Store total pages
  
//   // Set the sorting option
//   const [sortOption, setSortOption] = useState("Most popular");
//   const [isOpen, setIsOpen] = useState(false);

//   const options = [
//     { label: "Most popular", query: "ratingCount desc" },
//     { label: "Price (Low to High)", query: "price asc" },
//     { label: "Price (High to Low)", query: "price desc" },
//     { label: "Title (A to Z)", query: "title asc" },
//     { label: "Title (Z to A)", query: "title desc" },
//   ];

//   const productsPerPage = 12; // Number of products per page
//   const currPage = parseInt(searchParams.get('currpage') || '1', 10); // Get page number from URL

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch category details
//         const query = `*[ _type == "categories" && slug.current == "${params.slug}"][0]`;
//         const category = await client.fetch(query);
//         setCategoryName(category?.title || "");

//         if (!category?._id) return;
//         const category_id = category._id;
        
//         // Fetch total number of products for pagination calculation
//         const totalQuery = `count(*[_type == "products" && category._ref == "${category_id}"])`;
//         const totalProducts = await client.fetch(totalQuery);
//         setTotalPages(Math.ceil(totalProducts / productsPerPage)); // Calculate total pages
        
//         // Fetch paginated products
//         const start = (currPage - 1) * productsPerPage;
//         const selectedQuery = options.find(option => option.label === sortOption)?.query || "popularity desc";
        
//         const query2 = `*[_type == "products" && category._ref == "${category_id}"]
//                         | order(${selectedQuery})[${start}...${start + productsPerPage}]`;
//         const categoryProductsFiltered = await client.fetch(query2);
//         setProducts(categoryProductsFiltered);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [currPage, sortOption]); // Re-fetch when page number or sort option changes

//   // Function to change the page dynamically in the URL
//   const handlePageChange = (page: number) => {
//     router.push(`?currpage=${page}`); // Updates the URL with the new page number
//   };

//   return (
//     <div>
//       <div className='flex flex-col md:flex-row md:items-center gap-4 justify-between pr-5 pt-8 sm:pt-20 pb-4 sm:pb-10'>
//         <div className="heading text-2xl justify-center text-center sm:text-start sm:text-3xl flex sm:justify-start font-bold text-[#272343]">
//           {categoryName}
//         </div>
//       </div>

//       <div className='m-5 ml-0 flex flex-wrap justify-center sm:justify-start gap-x-5 2xl:gap-x-9 gap-y-10 sm:gap-y-5 w-[101%]'>
//         {products.map((item: any) => (
//           <div key={item._id}>
//             <Link href={`/product/${item.slug.current}`}>
//               <Image src={builder.image(item.image).width(624).height(624).url()} width={312} height={312} alt={item.title} className='rounded-lg object-contain' />
//             </Link>
//             <div>{item.title}</div>
//             <div className='text-[#DB4444] font-semibold'>{`$ ${item.price}`}</div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center my-4 gap-3">
//         {/* Previous Page Button */}
//         <button onClick={() => handlePageChange(currPage - 1)} disabled={currPage === 1} className='px-4 py-2 rounded-md bg-teal-500 hover:bg-teal-600 text-white disabled:bg-gray-300'>
//           Previous
//         </button>

//         {/* Page Numbers */}
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button key={page} onClick={() => handlePageChange(page)} className={`px-4 py-2 rounded-md ${currPage === page ? 'bg-teal-600 text-white' : 'bg-gray-200'}`}>
//             {page}
//           </button>
//         ))}

//         {/* Next Page Button */}
//         <button onClick={() => handlePageChange(currPage + 1)} disabled={currPage === totalPages} className='px-4 py-2 rounded-md bg-teal-500 hover:bg-teal-600 text-white disabled:bg-gray-300'>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

