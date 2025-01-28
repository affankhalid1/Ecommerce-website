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
import NumericStepper from "@/components/cartButton";
import Description from "@/components/DropdownDetails";
import dynamics from 'next/dynamic';
import DescriptionSanity from "@/components/DropdowndetailsSanity";
import DescriptionHtml from "@/components/DropdownDetailsHtml";
import DOMPurify from "dompurify";
const PortableText = dynamics(() => import('react-portable-text'), { ssr: false });

const Product = ({ params }: { params: { slug: string } }) => {
  const { user } = useUser(); // Extract the authenticated user

  // const email:any = user?.primaryEmailAddress?.emailAddress
  const userId: any = user?.id; // Clerk's unique user ID for the signed-in user

  const builder = ImageUrlBuilder(client);

  const [single, setSingle] = useState<any>(null);
  const [featured, setFeatured] = useState<any[]>([]);
  const [vendor, setVendor] = useState<any>([]);
  const [ishovering, setIshovering] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query1 = `*[ _type == "products" && slug.current == "${params.slug}" || _type == "beds" && slug.current == "${params.slug}"][0]`;
        const singleProduct = await client.fetch(query1);
        setSingle(singleProduct);

        const product_vendor_id = singleProduct.vendor._ref;

        const query2 = `*[ _type == "vendors" && _id == "${product_vendor_id}"][0]`;
        const vendor = await client.fetch(query2);
        setVendor(vendor);

        const query3 = `*[ _type == "products" && "Recommended" in badge][0...4]`;
        const featuredProducts = await client.fetch(query3);
        setFeatured(featuredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.slug]);


  const rawHtml = `
  <p>This <strong>futon sofa bed</strong> is your versatile solution for small spaces.</p>
  <ul>
    <li>Adjustable positions for sitting and reclining</li>
    <li>Foam-filled cushions for added comfort</li>
  </ul>
  <script>alert("XSS Attack!");</script>
`;

// Sanitize the raw HTML
const sanitizedHtml = DOMPurify.sanitize(rawHtml);

console.log(sanitizedHtml);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-20">

            <div>
              <ProductImage
                src={builder.image(single.image).width(3000).height(3000).url()}
              />
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
                ${single.price}
              </div>
              <div className=" flex items-center line-through ">
                ${single.priceWithoutDiscount}
              </div>
              <div className="flex items-center ">
              <DiscountCalculator actualPrice={single.priceWithoutDiscount} discountedPrice={single.price} />
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
                <NumericStepper/>
              </div>
              <button
                onClick={() => (
                  console.log(single._id + " added to cart"),
                  CartManager(single._id, 1, userId)
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
              <DescriptionHtml  title="Shipping Policy" content={sanitizedHtml}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center flex-wrap md:flex-nowrap sm:justify-between items-center pt-8 sm:pt-24 pb-4 sm:pb-10">
        <div className="heading text-2xl justify-center text-center sm:text-start sm:text-3xl flex sm:justify-start font-bold text-[#272343] ">
          Featured Products
        </div>
        <Link href="/product">
          <div className="font-bold underline underline-offset-4 decoration-2 justify-center sm:text-base text-sm">
            View all
          </div>
        </Link>
      </div>
      <div className="m-5 ml-0 flex flex-wrap justify-center md:justify-start gap-x-9 gap-y-10 w-full">
        {featured && featured.length > 0 ? (
          featured.map((item: any) => (
            <div key={item._id} className="">
              <div className="product-image-with-icons h-[220px] w-[220px] sm:h-[240px] sm:w-[240px] rounded-md relative">
                <Link href={`/product/${item.slug.current}`}>
                  <div
                    onMouseOver={() =>
                      setIshovering((prev) => ({
                        ...prev,
                        [item.slug.current]: true,
                      }))
                    }
                    onMouseLeave={() =>
                      setIshovering((prev) => ({
                        ...prev,
                        [item.slug.current]: false,
                      }))
                    }
                    className="flex justify-center items-center h-[220px] w-[220px] sm:h-[240px] sm:w-[240px] bg-[#F5F5F5]"
                  >
                    {ishovering[item.slug.current] ? (
                      <Image
                        className="rounded-lg object-contain"
                        src={builder
                          .image(item.image2)
                          .width(312)
                          .height(312)
                          .url()}
                        width={312}
                        height={312}
                        alt="product"
                      />
                    ) : (
                      <Image
                        className="rounded-lg object-contain"
                        src={builder
                          .image(item.image)
                          .width(312)
                          .height(312)
                          .url()}
                        width={312}
                        height={312}
                        alt="product"
                      />
                    )}
                  </div>
                </Link>
              </div>
              <div className="flex justify-between ">
                <div className="flex flex-col gap-2 my-2">
                  <div className="text-[#2A254B] text-sm sm:text-lg w-[200px] sm:w-[280]">
                    {item.title}
                  </div>
                  <div className="flex gap-3 font-semibold">
                    <div className="text-[#DB4444]">{item.price}</div>
                    {item.cutPrice && (
                      <div className="line-through text-[#7D8184]">
                        {item.cutPrice}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-[#F0F2F3] hover:bg-[#029FAE] cursor-pointer rounded-lg w-[40px] h-[40px] flex justify-center items-center mt-2">
                  <Image
                    className="object-contain"
                    src="/Svg/cart.svg"
                    width={25}
                    height={25}
                    alt="cart"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No featured products available.</div>
        )}
      </div>
    </div>
  );
};

export default Product;
