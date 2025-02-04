// "use client"
// import { useEffect } from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import ImageUrlBuilder from "@sanity/image-url";
// import { DeleteAllItem } from "@/actions/DeleteAllitems";
// import {useRouter} from "next/navigation";
// const DynamicComponentWithNoSSR = dynamic(
//   () => import('@/components/StripePayment'),
//   { ssr: false }
// )


// interface IParams {
//     searchParams: {
//         amount: number
//     }
// }

// const PaymentSuccess = ({ searchParams }: IParams) => {


//     const { user } = useUser(); // Extract the authenticated user

//   const router = useRouter();

  
//   useEffect(() => {
//     const fetchData = async () => {
//       try{
//         await DeleteAllItem(userId)
//         console.log("All items deleted from cart")
//       }
//       catch(error){
//         console.error("error deleting cart items", error)
//       }
//     } 
    
//     fetchData();
    
//   }, []);
  
  
//   if (!user) {
//     return <div className=' p-6 text-3xl text-[#757575]'>Please Signup</div>;
//   }
//   // const email: any = user.primaryEmailAddress?.emailAddress;
//   const userId:any = user?.id; // Clerk's unique user ID for the signed-in user

  
//     return (
//         <div className="text-center w-full">
//             <h1 className="text-6xl">Thank you for purchasing $ {searchParams.amount}</h1 > 
//         </div>
//     )
// }

// export default PaymentSuccess


"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { DeleteAllItem } from "@/actions/DeleteAllitems";
import Link from "next/link";

interface IParams {
  searchParams: {
    amount: number;
  };
}

const PaymentSuccess = ({ searchParams }: IParams) => {
  const { user } = useUser(); // Extract the authenticated user
  const router = useRouter();
  const userId: any = user?.id;

  useEffect(() => {
    const clearCart = async () => {
      try {
        if (userId) {
          await DeleteAllItem(userId);
          console.log("All items deleted from cart");
        }
      } catch (error) {
        console.error("Error deleting cart items", error);
      }
    };
  
    if (userId) { // Ensure userId is available
      clearCart();
    }
  }, [userId]); // Depend only on userId
  

  if (!user) {
    return <div className="p-6 text-3xl text-gray-600">Please Signup</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Green Checkmark Icon */}
      <div className="mb-6 flex items-center justify-center w-24 h-24 bg-[#105a61] text-white rounded-full">
        <svg
          className="w-16 h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-3.72a.75.75 0 00-1.06-1.06L10.5 11.94 8.28 9.72a.75.75 0 10-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l5.25-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Thank You Message */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Payment Successful!
      </h1>
      <p className="mt-3 text-lg sm:text-xl text-gray-600">
        Thank you for your purchase of <span className="font-semibold">${searchParams.amount}</span>.
      </p>

      {/* Return to Homepage Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 text-white bg-[#007580] hover:bg-[#1d5e64] rounded-lg shadow-md transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default PaymentSuccess;
