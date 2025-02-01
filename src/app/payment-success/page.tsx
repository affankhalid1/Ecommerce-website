"use client"
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ImageUrlBuilder from "@sanity/image-url";
import { DeleteAllItem } from "@/actions/DeleteAllitems";
import {useRouter} from "next/navigation";
const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/StripePayment'),
  { ssr: false }
)


interface IParams {
    searchParams: {
        amount: number
    }
}

const PaymentSuccess = ({ searchParams }: IParams) => {


    const { user } = useUser(); // Extract the authenticated user

  const router = useRouter();

  if (!user) {
    return <div className=' p-6 text-3xl text-[#757575]'>Please Signup</div>;
  }
  // const email: any = user.primaryEmailAddress?.emailAddress;
  const userId:any = user?.id; // Clerk's unique user ID for the signed-in user

  useEffect(() => {
    const fetchData = async () => {
      try{
      await DeleteAllItem(userId)
        console.log("All items deleted from cart")
      }
      catch(error){
            console.error("error deleting cart items", error)
      }
 } 

 fetchData();
   
  }, []);



  
    return (
        <div className="text-center w-full">
            <h1 className="text-6xl">Thank you for purchasing $ {searchParams.amount}</h1 > 
        </div>
    )
}

export default PaymentSuccess