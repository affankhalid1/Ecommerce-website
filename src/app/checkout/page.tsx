"use client"
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ImageUrlBuilder from "@sanity/image-url";
import { DeleteItem } from "@/actions/Deleteitem";
import {useRouter} from "next/navigation";
const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/StripePayment'),
  { ssr: false }
)

const Page = () => {
  const { user } = useUser(); // Extract the authenticated user

  const router = useRouter();
  
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);
  
  // const email: any = user.primaryEmailAddress?.emailAddress;
  const userId = user?.id || null; // Ensuring userId is defined
  
  useEffect(() => {
    if (!userId) return; // Safe check inside the effect

    const fetchData = async () => {
      let query = `*[ _type == "cartItems" && userId == "${userId}"]`;
      const cartdata = await client.fetch(query);
      console.log(cartdata);
      return cartdata;
    };
    
    fetchData().then((data) => {
      setcart(data);
      
      // Calculate the total price of all items in the cart
      const totalPrice = data.reduce((sum: number, item: any) => {
        const itemTotal = item.price * item.quantity;
        item.total = itemTotal; // Assign total to the item (if needed)
        return sum + itemTotal; // Accumulate the total price
      }, 0);
      
      let roundoffprice = totalPrice.toFixed(2);
      
      settotal(roundoffprice); // Update the total state with the calculated total
      
    });
  }, []);
  
  if (!user) {
    return <div className=' p-6 text-3xl text-[#757575]'>Please Signup</div>;
  }
  console.log(total);

  
  return (
    <div>
      {total>0 &&<DynamicComponentWithNoSSR amount={total}/>}
    </div>
  )
}

export default Page
