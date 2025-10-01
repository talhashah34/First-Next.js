"use client"

import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { HiArrowNarrowRight } from "react-icons/hi";

import Image from "next/image";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600"], // pick the weights you need
});

const TopNavbar = () => {
  return (
    <>
    <header className="bg-[#FFFFFF] font-[var(--font-lato)] 
    text-[#7E7E7E] items-center border-b border-[#ECECEC]">
    <div className="max-w-7xl mx-auto flex justify-between text-[13px] py-2 items-center">
    <div className="flex gap-2 items-center">
      <Link href="/About">
      About Us
      </Link>
        <div className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
        <Link href="/MyAccount">
      My Account
      </Link>
        <div className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
        <Link href="/WishList">
      Wishlist
      </Link>
        <div className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
        <Link href="/OrderTracking">
      Order Tracking
      </Link>
      </div>
      <div className="flex text-[#7E7E7E] font-[var(--font-lato)] items-center">
        <span className="font-bold text-[#3BB77E]">100% Secure delivery without contacting the courier</span>
        </div>
        <div className="flex font-[var(--font-lato)] items-center gap-2">
        <p className="">Need help? Call Us:<span className="text-[#3BB77E]">+1800900122</span></p>
        <div className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
        <p>English
            <FiChevronDown size={12} className="inline-block mb-2 ml-1" />
        </p>
        <div className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
        <p>INR <FiChevronDown size={12} className="inline-block mb-2 ml-1" /></p>
        </div>    
      </div>
    </header>
    {/* this is the second Navbar */}
    <header className="bg-[#FFFFFF] font-[var(--font-lato)] 
    text-[#7E7E7E] items-center border-b border-[#ECECEC]">
        <div className="max-w-7xl mx-auto flex text-[13px] py-6 gap-6 items-center">
        <div className="w-28 md:w-36 lg:w-44">
        <Image 
        src='/Nest.png'
        width={150}
        height={50}
        alt="logo"
        />
        </div>
        {/* Search bar */}
        <div className="flex w-full max-w-md
        border border-[#BCE3C9] rounded-[0.25rem] m-[0.1875rem] gap-2 p-[0.1875rem] items-center">
        <input 
        type="text"
        className="flex-1 px-3 py-2 outline-none" 
        placeholder="Search for products..."/>
        <button className={`bg-[#3BB77E] rounded-[0.1875rem] cursor-pointer
        text-[#FFFFFF] px-4 py-2 justify-center items-center hover:bg-blue-400
        ${quicksand.className}`}>Search</button>
        </div>

        <div className="flex mx-5">
        <button 
        onClick={() => console.log("Button clicked")}
        className={`justify-center items-center 
        border border-[#ECECEC] hover:bg-gray-100 cursor-pointer
        rounded-[5px] shadow-md text-[#3BB77E] p-2 ${quicksand.className}`}
        >
          Become Vendor
          <HiArrowNarrowRight className="inline-block m-1" size={16} />
          </button>
          
          <div className="relative flex items-center gap-1 mx-10">
            <div className="relative">
            <Image 
            src="/SVG.png"
            width={26}
            height={26}
            alt="icon"
            />
            {/* Badge */}
            <span className="absolute -top-2 -right-1 w-4 h-4 bg-green-500 
            text-white text-[10px] font-bold
            flex items-center justify-center rounded-full">
              0
            </span>
          </div>
          <span className="font-[var(--font-lato)] text-[#7E7E7E] text-[14px]">Compare</span>
          
          <div className="flex relative items-center mx-4 gap-1">
            <Image 
            src="/SVG1.png"
            width={26}
            height={26}
            alt="icon"
            />
            {/* Badge */}
            <span className="absolute -top-2 right-12 w-4 h-4 bg-green-500 
            text-white text-[10px] font-bold
            flex items-center justify-center rounded-full">
              0
            </span>
          <span className="font-[var(--font-lato)] text-[#7E7E7E] text-[14px]">Wishlist</span>
          </div>
          </div>
          </div>
        </div>
    </header>
    </>
  );
};

export default TopNavbar;