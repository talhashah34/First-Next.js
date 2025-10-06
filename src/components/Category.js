"use client";
import { FiChevronDown } from "react-icons/fi";
import { LayoutGrid, Headset } from "lucide-react";
import { Quicksand } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Button = ({ label, onClick, showArrow = true }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1 cursor-pointer whitespace-nowrap
    text-[#253D4E] font-bold text-sm sm:text-[13px] md:text-[14px] 
    ${quicksand.className} mx-1`}
  >
    {label}
    {showArrow && <FiChevronDown size={10} className="inline-block ml-1" />}
  </button>
);

const Category = () => {
  return (
    <main
      className="bg-[#FFFFFF] max-w-7xl mx-auto flex flex-wrap 
      items-center justify-between text-[13px] px-2 sm:px-4"
    >
      {/* Left section */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        {/* Browse Button */}
        <button
          className={`bg-[#3BB77E] flex text-[#FFFFFF] items-center gap-2 
          ${quicksand.className} rounded-[5px] px-2 py-2 my-2 cursor-pointer hover:bg-green-600`}
        >
          <LayoutGrid className="text-[#FFFFFF]" size={20} />
          Browse All Categories
          <FiChevronDown size={12} className="inline-block ml-1" />
        </button>

        {/* Hot Deals */}
        <button className="flex cursor-pointer whitespace-nowrap hover:bg-gray-100 gap-1 items-center">
          <Image src="/SVG4.png" width={20} height={21} alt="hot-icon" />
          <span className={`font-bold text-[#253D4E] ${quicksand.className}`}>
            Hot Deals
          </span>
        </button>

        {/* Menu buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-5 items-center">
          <Button label="Home" />
          <Button label="About" showArrow={false} />
          <Button label="Shop" />
          <Button label="Mega Menu" />
          <Button label="Vendors" />
          <Button label="Blog" />
          <Button label="Pages" />
          <Button label="Contact" showArrow={false} />
        </div>
      </div>

      {/* Right section (Support) */}
      <div className="flex items-center gap-2 mt-3 sm:mt-0 ml-auto">
        <Headset size={28} className="text-[#253D4E]" />
        <div className="flex flex-col leading-tight">
          <span
            className={`${quicksand.className} text-[#3BB77E] 
            text-base sm:text-[18px] font-bold`}
          >
            1900888123
          </span>
          <span
            className="text-[10px] sm:text-[11px] text-[#7E7E7E] 
                font-[var(--font-lato)]"
          >
            24/7 Support Center
          </span>
        </div>
      </div>
    </main>
  );
};

export default Category;
