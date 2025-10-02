"use client";

import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600"], // pick the weights you need
});

const Navbar = () => {
  return (
    <header className="bg-[#FFFFFF] font-[var(--font-lato)] text-[#7E7E7E] border-b border-[#ECECEC]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-6">
        
        {/* Logo */}
        <div className="w-28 md:w-36 lg:w-44 shrink-0">
          <Image 
            src="/Nest.png"
            width={150}
            height={50}
            alt="logo"
          />
        </div>

        {/* Search bar */}
        <div className="flex flex-1 max-w-md border border-[#BCE3C9] p-1
        rounded-[0.25rem] items-center min-w-[200px]">
          <input 
            type="text"
            className="flex-1 px-3 py-2 outline-none"
            placeholder="Search for products..."
          />
          <button
            className={`bg-[#3BB77E] rounded-r-[0.25rem] cursor-pointer 
              text-[#FFFFFF] px-4 py-2 hover:bg-blue-400 ${quicksand.className}`}
          >
            Search
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 flex-wrap justify-end">
          
          {/* Vendor button */}
          <button 
            onClick={() => console.log("Button clicked")}
            className={`flex items-center border border-[#ECECEC]
               hover:bg-gray-100 cursor-pointer whitespace-nowrap rounded-[5px] 
               shadow-md text-[#3BB77E] px-3 py-2 ${quicksand.className}`}
          >
            Become Vendor
            <HiArrowNarrowRight className="ml-2" size={16} />
          </button>

          {/* Icons group */}
          <div className="flex items-center gap-6">
            
            {/* Compare */}
            <div className="relative flex items-center">
              <div className="relative">
                <Image src="/SVG.png" width={26} height={26} alt="compare-icon" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 
                text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              <span className="ml-2 text-[14px]">Compare</span>
            </div>

            {/* Wishlist */}
            <div className="relative flex items-center">
              <div className="relative">
                <Image src="/SVG1.png" width={24} height={24} alt="wishlist-icon" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 
                text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              <span className="ml-2 text-[14px]">Wishlist</span>
            </div>

            {/* Cart */}
            <div className="relative flex items-center">
              <div className="relative">
                <Image src="/SVG2.png" width={24} height={24} alt="cart-icon" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 
                text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              <span className="ml-2 text-[14px]">Cart</span>
            </div>

            {/* Account */}
            <div className="flex items-center">
              <Image src="/SVG3.png" width={22} height={22} alt="user-icon" />
              <span className="ml-2 text-[14px]">Account</span>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
