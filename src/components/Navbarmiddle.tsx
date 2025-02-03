"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./Searchbar";
import { useUser } from "@clerk/nextjs";
import NavLink from "./Navlink";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbarmiddle = () => {
  const { user } = useUser(); // Extract the authenticated user
  const [result, setresult] = useState([]);

  // const createClerkPasskey = async () => {
  //   try {
  //     const response = await user?.createPasskey();
  //     console.log(response);
  //   }
  //   catch (error) {
  //     console.error("Error",JSON.stringify(error, null, 2));
  //   }
  // };

  // State to track if the navbar should be sticky
  const [isSticky, setIsSticky] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query) return;

    const response = await fetch(
      `/api/search?query=${encodeURIComponent(query)}`
    );
    const data = await response.json();

    setresult(data.results);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
        // setShow(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`  transition-all duration-500 ${
        isSticky ? "sticky top-0  shadow-lg z-40" : ""
      } `}
    >
      <div className="py-6 bg-[#F0F2F3] ">
        <div className="w-[70vw] mx-auto flex justify-between gap-3 ">
          <button onClick={handleClick} className="block sm:hidden">
            <Image
              className="hamburger "
              src="/Svg/menu-icon.svg"
              width={20}
              height={20}
              alt=""
            />
          </button>
          {isActive && (
            <nav className=" top-0 left-0 w-3/4 h-screen fixed bg-white shadow-lg z-50">
              <div className="p-4">
                <button
                  onClick={() => setIsActive(false)}
                  className="text-gray-700 text-2xl focus:outline-none"
                >
                  &times;
                </button>
              </div>
              <div className="space-y-4 px-4 py-8">
                <NavLink
                  href="/"
                  className="block text-gray-700 hover:text-teal-500"
                >
                  Home
                </NavLink>
                <NavLink
                  href="/products/category/sofas---couches"
                  className="block text-gray-700 hover:text-teal-500"
                >
                  Sofas & Couches
                </NavLink>
                <NavLink
                  href="/products/category/beds"
                  className="block text-gray-700 hover:text-teal-500"
                >
                  Beds
                </NavLink>
                <NavLink
                  href="/products/category/office-chair"
                  className="block text-gray-700 hover:text-teal-500"
                >
                  Office Chairs
                </NavLink>
               
                
                <NavLink
                  href="/about"
                  className="block text-gray-700 hover:text-teal-500"
                >
                  About
                </NavLink>
                <NavLink
                  href="/faqs"
                  className="block text-gray-700 hover:text-teal-500"
                >
                  Faqs
                </NavLink>
                <NavLink
                  href="/contact"
                  className="block text-gray-700 hover:text-teal-500"
                >
                  Contact
                </NavLink>
                <NavLink
                  href="/cart"
                  className="block text-gray-700 hover:text-teal-500"
                >
                  Cart
                </NavLink>
              </div>
            </nav>
          )}

          <div className="hidden lg:block">
            <div className="logo flex gap-0.5 sm:gap-2 justify-center items-center">
              <Image
                className="w-[25px] h-[25px]  sm:w-[40px] sm:h-[40px]"
                src="/Svg/Logo Icon.svg"
                width={40}
                height={40}
                alt=""
              />
              <div className="text-lg sm:text-2xl text-[#272343] font-[550] flex items-center">
                Comforty
              </div>
            </div>
          </div>

          <SearchBar onsearch={handleSearch} />

          <div className="hidden xl:block">
            {user ? (
              <div className="flex justify-center gap-2 mr-4">
                <UserButton />
                <div className="flex flex-col justify-center items-center text-[13px]">
                  <div className="text-gray-800">Welcome Back</div>
                  <div className="font-bold">{user.fullName}!</div>
                </div>
              </div>
            ) : (
              <div className="mr-4 flex items-center  ">
                <div className="bg-[#007580] text-white py-2 px-4 rounded-3xl text-[15px] hover:bg-[#005f63] transition-all">
                  <SignInButton mode="modal" />
                </div>
              </div>
            )}
          </div>

          {/* {user?.passkeys.length === 0 && (
            <button onClick={createClerkPasskey} className=" px-2 py-1 mr-2 text-sm border border-[#007580] rounded-lg bg-[#007580] text-white">
              Create a passkey now
            </button>
          )} */}

          <div className="hidden xl:block">
            <Link href="/cart">
              <div className="bg-white flex gap-1.5 sm:gap-3 py-1.5 sm:py-3 px-2 sm:px-4 rounded-lg">
                <Image
                  className="w-[16px] h-[16px]  sm:w-[20px] sm:h-[20px]"
                  src="/Svg/cart.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <div className="text-xs sm:text-sm text-[#272343]">Cart</div>
                <div className="bg-[#007580] size-4 sm:size-5 flex justify-center text-[9.5px] sm:text-[10px] items-center rounded-full text-white">
                  2
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarmiddle;
