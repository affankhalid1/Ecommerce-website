
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import ImageUrlBuilder from "@sanity/image-url";
import { DeleteItem } from "@/actions/Deleteitem";
import {useRouter} from "next/navigation";



const Cart = () => {
  const builder = ImageUrlBuilder(client);

  const { user } = useUser(); // Extract the authenticated user

  const router = useRouter();

  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);
  
  if (!user) {
    return <div className=' p-6 text-3xl text-[#757575]'>Please Signup</div>;
  }
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

      // Quantity of items
      // const totalQuantity = data.reduce((sum: number, item: any) => {
      //   const itemTotal = item.price * item.quantity;
      //   item.total = itemTotal; // Assign total to the item (if needed)
      //   return sum + itemTotal; // Accumulate the total price
      // }, 0);
    });
  }, []);
  if (!user) {
    return <div className="p-6 text-3xl text-[#757575]">Please Signup</div>;
  }


  console.log(total);

  return (
    <div>
      <div>
        <div className="my-16 grid  grid-cols-[3fr] md:grid-cols-[3fr,1fr]  gap-y-10">
          <div className="left pr-20 overflow-y-scroll  max-h-[75vh]">
            <div className="left-side flex flex-col gap-6">
              <div className="font-semibold text-lg">Items</div>
              <div className="flex flex-col gap-8">
                {cart.length > 0 ? (
                  cart.map((item: any) => {
                    return (
                      <div
                        key={item._id}
                        className="flex justify-between gap-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr,3fr] gap-x-4 gap-y-3  ">
                          <Link href={`/product/${item.slug}`}>
                            <Image
                              className=""
                              src={builder
                                .image(item.image)
                                .width(180)
                                .height(180)
                                .url()}
                              width={180}
                              height={180}
                              alt=""
                            />
                          </Link>
                          <div className="flex flex-col gap-2 sm:gap-4">
                            <Link href={`/product/${item.slug}`}>
                              <div className="font-[550] text-[#272343] text-sm sm:text-base">
                                {item.productName}
                              </div>
                            </Link>
                            {/* <div className='text-sm text-[#757575]'>
                        <div className='hidden sm:block'>{item}</div>
                        <div className='text-xs sm:text-base'>Size: &nbsp; <span className='underline'>{item.size}</span> &nbsp; Quantity: &nbsp; <span className='underline'>{item.quantity}</span></div>
                      </div> */}
                            <div className="icons flex gap-2">
                              <Image
                                src="/Svg/like-icon.svg"
                                width={20}
                                height={20}
                                alt=""
                              />
                              <button onClick={async ()=> {
                                await DeleteItem(item._id)
                                const handleDelete = async (id: string) => {
                                  // Remove item from the cart UI immediately
                                  const updatedCart = cart.filter((item:any) => item._id !== id);
                                  setcart(updatedCart); // Update state to remove the item visually
                                }
                                
                                handleDelete(item._id)}}>
                              <Image
                                src="/Svg/delete-icon.svg"
                                width={20}
                                height={20}
                                alt=""
                              />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="right-side">
                          <div className="text-[#111111] hidden sm:block">
                            MRP: &nbsp;${item.price*item.quantity}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className='text-center p-4 text-3xl text-[#757575]'>Your cart is Empty</div>
                )}
              </div>
            </div>
          </div>
          <div className="right  md:px-5 text-xs sm:text-sm flex flex-col gap-5 w-[70%] sm:w-full ">
            <div className="font-semibold text-lg">Summary</div>
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="flex justify-between gap-2">
                <div>Subtotal</div>
                <div>${total}</div>
              </div>
              <div className="flex justify-between gap-2 ">
                <div>Estimated Delivery & Handling</div>
                <div>Free</div>
              </div>
              <div className="bg-[#e4e4e4] h-[1.2px] "></div>
              <div className="flex justify-between gap-2">
                <div>Total</div>
                <div>${total}</div>
              </div>
              <div className="bg-[#e4e4e4] h-[1.2px]"></div>
              <button onClick={() => router.push("/checkout")} className="w-full bg-[#029FAE] rounded-full py-3 text-center text-white flex justify-center">
                <span className="hidden lg:block">Member &nbsp;</span> Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
