"use client"

import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const TopNavbar = () => {
  return (
    <header className="bg-[#FFFFFF] border-b border-[#ECECEC] text-[#7E7E7E] font-[var(--font-lato)]">
      <nav className="max-w-7xl mx-auto flex flex-wrap 
      justify-between items-center gap-2 px-4 py-2 text-[12px] sm:text-[13px]">
        
        {/* Left Links */}
        <ul className="flex flex-wrap gap-2 items-center">
          <li><Link href="/About">About Us</Link></li>
          <li className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
          <li><Link href="/MyAccount">My Account</Link></li>
          <li className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
          <li><Link href="/WishList">Wishlist</Link></li>
          <li className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
          <li><Link href="/OrderTracking">Order Tracking</Link></li>
        </ul>

        {/* Middle Message (hide on small screens) */}
        <p className="hidden md:block font-bold text-[#3BB77E] text-[11px] sm:text-[13px] text-center">
          100% Secure delivery without contacting the courier
        </p>

        {/* Right Section */}
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <p>
              Need help? Call Us:
              <span className="text-[#3BB77E] ml-1">+1800900122</span>
            </p>
          </li>
          <li className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
          <li>
            <p className="flex items-center">
              English <FiChevronDown size={12} className="ml-1" />
            </p>
          </li>
          <li className="hidden sm:block w-[1px] h-[10px] bg-[#D9D9D9]" />
          <li>
            <p className="flex items-center">
              INR <FiChevronDown size={12} className="ml-1" />
            </p>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default TopNavbar;
