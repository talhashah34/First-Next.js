import Image from "next/image";
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({
    image,
    name,
    brand,
    discountedprice,
    originalprice
}) => {

  return (
    <div className="border border-[#ECECEC] rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <Image
        src={image}
        alt="Product Image"
        width={300}
        height={160}
        className="w-full h-40 object-contain mb-3"
        style={{ objectFit: "contain" }}
        />
        
      <p className="text-sm text-gray-500">{brand}</p>
      <h3 className="font-semibold text-[14px] mb-1">{name}</h3>
      <div className="flex items-center gap-2">
      <span className="text-[#3BB77E] font-bold">{discountedprice}</span>
        <span className="text-gray-400 line-through text-sm ml-2">
            {originalprice}</span>
        <button className="w-full bg-[#DEF9EC] font-bold flex justify-center cursor-pointer
        text-[#3BB77E] py-2 rounded-md hover:bg-green-200 transition items-start">
            <ShoppingCart size={20} className="inline-block mr-2 " />
            Add
        </button>
        </div>

    </div>
  )
}

export default ProductCard
