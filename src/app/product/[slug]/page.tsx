"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import ProductImage from "@/components/ImageZoom";
import { CartManager } from "@/actions/CartManage";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import StarRating from "@/components/Star";
import DiscountCalculator from "@/components/DiscountPercentage";
import DeliveryDate from "@/components/DeliveryDate";
// import NumericStepper from "@/components/cartButton";
import Description from "@/components/DropdownDetails";
import dynamics from 'next/dynamic';
import DescriptionSanity from "@/components/DropdowndetailsSanity";
import DescriptionHtml from "@/components/DropdownDetailsHtml";
// import DOMPurify from "dompurify";
import sanitizeHtml from "sanitize-html";
import products from "@/src/style/products.module.css";
const PortableText = dynamics(() => import('react-portable-text'), { ssr: false });
import FilterPanel from "@/components/Filterpanel";



const Product = ({ params }: { params: { slug: string } }) => {
  const { user } = useUser(); // Extract the authenticated user

  // const email:any = user?.primaryEmailAddress?.emailAddress
  const userId: any = user?.id; // Clerk's unique user ID for the signed-in user

  const builder = ImageUrlBuilder(client);

  const [single, setSingle] = useState<any>(null);
  const [vendor, setVendor] = useState<any>([]);
  // const [selectedimage, setSelectedimage] = useState("");
  const [selectedimageIndex, setSelectedimageIndex] = useState(0);
  const [category, setcategory] = useState<any>([]);
  const [similarItems, setSimilarItems] = useState<any>([]);
  const [ishovering, setIshovering] = useState<{ [key: string]: boolean }>({});
  // const [quantity, setquantity] = useState(1);


  // Add to cart quantity button  
    const min = 1
    const max = 10
    const step = 1
    const initialValue = 1
 
    const [value, setValue] = useState(initialValue);
  
    const increment = () => {
      if (value + step <= max) {
        setValue(value + step);
      }
    };
  
    const decrement = () => {
      if (value - step >= min) {
        setValue(value - step);
      }
    };

    

    // Image Next Button
  const handlenext = () => {
    setSelectedimageIndex((prevIndex) => (prevIndex + 1) % single.images.length);
  };

  // Image Previous Button
  const handleprev = () => {  
    setSelectedimageIndex((prevIndex) => (prevIndex - 1 + single.images.length) % single.images.length);
  };



//  Fetching Data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query1 = `*[ _type == "products" && slug.current == "${params.slug}" || _type == "beds" && slug.current == "${params.slug}"][0]`;
        const singleProduct = await client.fetch(query1);
        setSingle(singleProduct);
        console.log(singleProduct);

        // setSelectedimage(singleProduct.image);

        const product_category_id = singleProduct.category._ref;

        const query5 = `*[ _type == "products" && category._ref == "${product_category_id}" || _type == "beds" && category._ref == "${product_category_id}"][0...5]`;
        const current_categoryItems = await client.fetch(query5);
        console.log(current_categoryItems);
        setSimilarItems(current_categoryItems);

        // const product_id = singleProduct._id;

        const query = `*[ _type == "categories" && _id == "${product_category_id}"][0]`;
        const current_category = await client.fetch(query);
        setcategory(current_category);

        const product_vendor_id = singleProduct.vendor._ref;

        const query2 = `*[ _type == "vendors" && _id == "${product_vendor_id}"][0]`;
        const vendor = await client.fetch(query2);
        setVendor(vendor);

        // const query3 = `*[ _type == "products" && "Recommended" in badge][0...5]`;
        // const featuredProducts = await client.fetch(query3);
        // setFeatured(featuredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.slug]);



  const rawHtml = `
        <div className="sofa-specifications bold">

            <table>
                <tr>
                    <th colSpan={2}>Other Dimensions</th>
                </tr>
                <tr>
                    <td>Overall</td>
                    
                    <td>${single?.otherDimensions?.overall}</td>
                </tr>
                <tr>
                    <td>Seat</td>
                    <td>${single?.otherDimensions?.seat}</td>
                </tr>
            </table>

            <br />

            <table>
                <tr>
                    <th colSpan={2}>Details</th>
                </tr>
                <tr>
                    <td>Product Type</td>
                    <td></td>
                    <td>${single?.details?.productType? single?.details?.productType : "Sofa"}</td>
                </tr>
                <tr>
                    <td>Back Type</td>
                    <td></td>
                    <td>${single?.details?.backType? single?.details?.backType : "Regular"}</td>
                </tr>
                
                <tr>
                    <td>Upholstery Color</td>
                    <td></td>
                    <td>${single?.color}</td>
                </tr>
                
                <tr>
                    <td>Upholstered</td>
                    <td></td>
                    <td>${single?.details?.upholstered ? "Yes" : "No"}</td>
                </tr>
                <tr>
                    <td>Upholstery Material</td>
                    <td></td>
                    <td>${single?.details?.upholsteryMaterial}</td>
                </tr>
              
                <tr>
                    <td>Cushion Construction</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>${single?.details?.cushionConstruction}</td>
                </tr>
                
            </table>

            <br />

            <table>
                <tr>
                    <th colSpan={2}>Assembly</th>
                </tr>
                <tr>
                    <td>Assembly Required</td>
                    <td>&nbsp;&nbsp;&nbsp;</td>
                    <td>${single?.assembly?.assemblyRequired ? "Yes" : "No"}</td>
                </tr>
                <tr>
                    <td>Suggested Number of People for Assembly / Installation</td>
                    <td>&nbsp</td>
                    <td>${single?.assembly?.assemblyRequired? "2" : "No"}</td>
                </tr>
                <tr>
                    <td>Additional Tools Required (Not Included)</td>
                    <td>&nbsp</td>
                    <td>All Tools Included</td>
                </tr>
            </table>

            <br />

            <table>
                <tr>
                    <th colSpan={2}>Warranty</th>
                </tr>
                <tr>
                    <td>Commercial Warranty</td>
                    <td>&nbsp</td>
                    <td>${single?.warranty?.commercialWarranty? "Yes" : "No"}</td>
                </tr>
                <tr>
                    <td>Commercial Warranty Length</td>
                    <td>&nbsp</td>
                    <td>${single?.warranty?.commercialWarrantyLength? single?.warranty?.commercialWarrantyLength : "No"}</td>
                </tr>
                <tr>
                    <td>Product Warranty</td>
                    <td>&nbsp</td>
                    <td>${single?.warranty?.productWarranty ? "Yes" : "No"}</td>
                </tr>
                <tr>
                    <td>Warranty Length</td>
                    <td>&nbsp</td>
                    <td>${single?.warranty?.warrantyLength? single?.warranty?.warrantyLength : "No"}</td>
                </tr>
                <tr>
                    <td>Full or Limited Warranty</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>${single?.warranty?.fullOrLimitedWarranty? single?.warranty?.fullOrLimitedWarranty : "No"}</td>
                </tr>
            </table>
        </div>
`;

// Sanitize the raw HTML
const sanitizedHtml = sanitizeHtml(rawHtml, {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  allowedAttributes: {
    "*": ["class", "style"],
    a: ["href", "name", "target"],
    img: ["src", "alt"],
  },
});

// console.log(sanitizedHtml);

  if (!single) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="Details my-16">
        <div className="">
          <div className="grid lg:grid-cols-[2fr,1.2fr] gap-y-20 gap-x-5">
            <div className="grid grid-cols-[0.4fr,3.6fr] gap-4">
            <div className="flex flex-col gap-4">
            {
              single.images && single.images.length > 0 && single.images.map((image: any, index: number) => {
                return (

              <Image key={index} src={builder.image(image).width(300).height(300).url()}
               width={80} height={80} alt='cart'
               className={`rounded-md md:rounded-lg ${selectedimageIndex === index ? "border-[3px] border-[#029FAE]" : ""}`}
               onClick={() => setSelectedimageIndex(index)}/>
                )
              })
            }
            </div>
            <div>
            <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handleprev}
          className={`absolute left-0 bg-white text-white p-2 rounded-full border-2 flex items-center justify-center border-[#007580] z-20 ${selectedimageIndex === 0 ? "opacity-80 cursor-not-allowed" : ""}`}
          disabled={selectedimageIndex === 0} // Disable when first image
        >
          <Image className="w-[18px] h-[18px] xs:w-[22px] xs:h-[22px] sm:w-[30px] sm:h-[30px]  md:w-[37px] md:h-[37px]" src="/Svg/previcon.svg" width={37} height={37} alt='previous' />
        </button>

        {/* Main Image */}
        {selectedimageIndex !== null && single.images ? (
          <ProductImage
            src={builder.image(single.images[selectedimageIndex]).width(6000).height(6000).url()}
          />
        ) : (
          <p>No Image Available</p>
        )}

        {/* Next Button */}
        <button
          onClick={handlenext}
          className={`absolute right-0 bg-white text-white p-2 rounded-full border-2 flex items-center justify-center border-[#007580] z-20 ${selectedimageIndex === single.images.length - 1 ? "opacity-80 cursor-not-allowed" : ""}`}
          disabled={selectedimageIndex === single.images.length - 1} // Disable when last image
          
        >
          <Image className="w-[18px] h-[18px] xs:w-[22px] xs:h-[22px] sm:w-[30px] sm:h-[30px]  md:w-[37px] md:h-[37px]" src="/Svg/nexticon.svg" width={37} height={37} alt='next' />
        </button>
      </div>
            </div>
            {/* <div>
              <ProductImage
                src={builder.image(selectedimage).width(3000).height(3000).url()}
              />
            </div> */}
            </div>


            <div className="flex flex-col gap-4">

              <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold sm:text-2xl sm:font-bold text-[#272343]">
                {single.title}
              </div>
              <div className="">
                See More by{" "}
                <Link
                  href={`/vendor/${vendor._id}`}
                  className=" underline text-[#029FAE] "
                >
                  {vendor.name}
                </Link>
              </div>
              <div className="flex gap-1.5 items-center">
                <div className="text-[15px] ">{single.rating}</div>

                <StarRating rating={single.rating} />

                <div className="text-[15px] underline text-[#029FAE] ">{single.ratingCount} Reviews</div>
              </div>

              </div>
              <div className="flex  gap-2">
              <div className="text-2xl font-[500] text-[#af2424]">
                ${(single.price*value).toFixed(2)}
              </div>
              <div className=" flex items-center line-through ">
                ${single.priceWithoutDiscount}
              </div>
              <div className="flex items-center ">
              <DiscountCalculator actualPrice={single.priceWithoutDiscount*value} discountedPrice={single.price*value} />
              </div>
              </div>
              <div className="">
                Fabric: <span className="font-semibold">{single.color} {single.fabric}</span>
              </div>
              <div>
                <DeliveryDate zipCode="75600" deliveryDays={3} />
              </div>
              <div className="">
              <div className="my-4">


                {/* <NumericStepper/> */}
                <div className="flex items-center border w-40 rounded-full h-10">
      {/* Decrement Button */}
      <button
        onClick={decrement}
        className="w-8 h-full flex items-center px-6 border border-black  rounded-l-full justify-center text-2xl text-gray-600 hover:bg-gray-100 disabled:text-gray-300"
        disabled={value <= min}

      >
        −
      </button>

      {/* Value Display */}
      <input
        type="text"
        value={value}
        readOnly
        className="w-full text-center border-x-0 border h-full  border-black outline-none text-gray-800"
      />

      {/* Increment Button */}
      <button
        onClick={increment}
        className="w-10 h-full flex items-center px-6 border border-black rounded-r-full justify-center text-2xl text-gray-600 hover:bg-gray-100 disabled:text-gray-300"
        disabled={value >= max}
      >
        +
      </button>
    </div>

              </div>

              {/* Add to Cart */}
              <button
                onClick={() => (
                  console.log(single._id + " added to cart"),
                  CartManager(single._id, value, userId)
                )}
                className="flex bg-[#029FAE] w-fit gap-2 px-6 py-3.5 rounded-lg"
              >
                <Image
                  className=""
                  src="/Svg/cart1.svg"
                  width={20}
                  height={20}
                  alt="product"
                />
                <button className="text-white text-sm">Add To Cart</button>
              </button>
              </div>

              <div className="bg-[#e4e4e4] h-[1.2px] w-full"></div>


              <div>
              
                    <DescriptionSanity title="Description" content={single.description} />
              </div>
              <div>
              <Description title="Return Policy" content= " Not loving it? We offer returns for most items within 30 days of delivery for a refund or store credit." />
              </div>
              <div>
              <DescriptionHtml  title="Specifications" content={sanitizedHtml}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center flex-wrap md:flex-nowrap sm:justify-between items-center pt-8 sm:pt-24 pb-4 sm:pb-10">
        <div className="heading text-2xl justify-center text-center sm:text-start sm:text-3xl flex sm:justify-start font-bold text-[#272343] ">
          Similar Products
        </div>
        <Link href={`/products/category/${category?.slug?.current}`}>
          <div className="font-bold underline underline-offset-4 decoration-2 justify-center sm:text-base text-sm">
            View all
          </div>
        </Link>
      </div>
      
      <div className='m-5 ml-0 flex flex-wrap justify-center sm:justify-start gap-x-5  2xl:gap-x-9 gap-y-10 sm:gap-y-5 w-[101%]'>
      {similarItems && similarItems.length > 0 ? (
          similarItems.map((item:any) => {

        return <div key={item._id} className=''>
          <div className='product-image-with-icons w-[200px] h-[200px] xs:w-[140px] xs:h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] 2xl:w-[235px] 2xl:h-[235px] rounded-md relative'>
            <div className='absolute top-2 left-2'>
              {item.offer == "New" &&<div className="discount w-fit bg-[#01AD5A] px-2 py-1 sm:px-4 sm:py-1.5 rounded-[4px]  flex justify-center items-center text-white text-[11px] sm:text-xs">{item.offer}</div>}
              {item.offer == "Sales" && <div className="discount w-fit bg-[#F5813F] px-2 py-1 sm:px-4 sm:py-1.5 rounded-[4px]  flex justify-center items-center text-white text-[11px] sm:text-xs">{item.offer}</div>}
            </div>

            <Link href = {`/product/${item.slug.current}`}>
            <div onMouseOver={() => setIshovering((prev) => ({ ...prev, [item.slug.current]: true }))}
                  onMouseLeave={() => setIshovering((prev) => ({ ...prev, [item.slug.current]: false }))} className=' flex justify-center  items-center w-[200px] h-[200px] xs:w-[140px] xs:h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px]  2xl:w-[235px] 2xl:h-[235px] '>
              {ishovering[item.slug.current]?(
              <Image className=' rounded-lg object-contain' src={builder.image(item.image2).width(624).height(624).url()} width={312} height={312} alt='product' />):(
               <Image className=' rounded-lg object-contain' src={builder.image(item.image).width(624).height(624).url()} width={312} height={312} alt='product' />)}
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
          
          { single._id == item._id &&
          <div className=" flex  items-center">
            <div className="bg-[#029FAE] text-sm px-2 py-1 text-[#1e1e1f] rounded-md">
            Current Item
            </div>
          </div>
}
        </div>
      })
    ):(
      <div>No featured products available.</div>
    )}
    </div>
    </div>
  );
};

export default Product;
