"use client";
import { Quicksand } from "next/font/google";
import Image from "next/image";

import ProductCard from "./ProductCard";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const CategorySidebar = () => {
  const categories = [
    "Baking Material",
    "Bread and Juice",
    "Clothing & Beauty",
    "Deals of the Day",
    "Fresh Fruits",
    "Fresh Seafood",
    "Milks and Dairies",
    "Pet Foods & Toy",
    "Vegetables",
    "Wine & Drinks",
    "Uncategorized",
  ];

  return (
    <aside className="w-full sm:w-1/5 bg-white border border-[#ECECEC] rounded-lg p-4 shadow-sm h-fit">
      <h2 className="font-bold text-[#253D4E] mb-3 text-lg">Category</h2>
      <ul className={`space-y-2 text-sm text-[14px]`}>
        {categories.map((cat, i) => (
          <li
            key={i}
            className="hover:text-[#3BB77E] cursor-pointer border border-[#ECECEC] rounded-md p-2 transition-all"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Product = () => {
    const items = [
        {
            id: 1,
            name: "Seeds of Change Organic Red Rice",
            discountedprice: "$28.85",
            originalprice: "$32.80",
            image: "/product1.png",
            brand: "NestFood", 
        },
        {
            id: 2,
            name: "All Natual Style Chicken Meatballs",
            discountedprice: "$52.85",
            originalprice: "$55.80",
            image: "/product2.png",
            brand: "NestFood", 
        },
              {
            id: 3,
            name: "Angie's Sweet & Salty Kettle Corn",
            discountedprice: "$48.85",
            originalprice: "$52.80",
            image: "/product3.png",
            brand: "Country Crock", 
        },
              {
            id: 4,
            name: "Foster Farms Takeout Crispy Classic",
            discountedprice: "$17.85",
            originalprice: "$19.80",
            image: "/product4.png",
            brand: "Country Crock", 
        },
              {
            id: 5,
            name: "Blue Almonds Lightly Salted Vegetables",
            discountedprice: "$23.85",
            originalprice: "$25.80",
            image: "/product5.png",
            brand: "Country Crock", 
        },
              {
            id: 6,
            name: "Chabani Complete Vanilla Greek Yogurt",
            discountedprice: "$54.85",
            originalprice: "$55.80",
            image: "/product6.png",
            brand: "Country Crock", 
        },
              {
            id: 7,
            name: "Haagen Caramel Cone Ice Cream Boxed",
            discountedprice: "$22.85",
            originalprice: "$24.80",
            image: "/product7.png",
            brand: "Hambger Hel", 
        },
              {
            id: 8,
            name: "Gorton's Beer Battered Fish Fillets",
            discountedprice: "$23.85",
            originalprice: "$25.80",
            image: "/product8.png",
            brand: "Hambger Hel", 
        },
              {
            id: 9,
            name: "Encore Seafoods Stuffed Alaskan",
            discountedprice: "$35.85",
            originalprice: "$37.80",
            image: "/product9.png",
            brand: "Hambger Hel", 
        },
              {
            id: 10,
            name: "Canada Dry Ginger Ale - 2 L Bottle",
            discountedprice: "$32.85",
            originalprice: "$33.80",
            image: "/product10.png",
            brand: "Hambger Hel", 
        },
              {
            id: 11,
            name: "Extra Virgin Olive Oil, canola oil, nonfat",
            discountedprice: "$58.00",
            originalprice: "$60.00",
            image: "/product11.png",
            brand: "Totino's Pizza", 
        },
              {
            id: 12,
            name: "Frozen vegetables Broccoli, Spinach",
            discountedprice: "$71.00",
            originalprice: "$75.00",
            image: "/product12.png",
            brand: "Totino's Pizza", 
        },
              {
            id: 13,
            name: "Frozen fruit strawberries, berries",
            discountedprice: "$78.00",
            originalprice: "$98.00",
            image: "/product13.png",
            brand: "Maruchan Ramen", 
        },
              {
            id: 14,
            name: "Pre-portioned, low-fat ice cream yogurt",
            discountedprice: "$79.00",
            originalprice: "$99.00",
            image: "/product14.png",
            brand: "Maruchan Ramen", 
        },
              {
            id: 15,
            name: "Dried fruit: apricots, figs, prunes",
            discountedprice: "$56.00",
            originalprice: "$76.00",
            image: "/product15.png",
            brand: "USA Noodle Soup", 
        },
    ]

  return (
    <section
      className={`max-w-7xl mx-auto text-[#253D4E] px-4 py-6 ${quicksand.className}`}
    >
      {/* 🟢 Top Bar (Title + Filters) */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="font-bold text-[22px] sm:text-[24px] text-[#253D4E]">
          Popular Products
        </h1>

        <div className="flex flex-wrap gap-4 font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px]">
          <span className="text-[#3BB77E] cursor-pointer">All</span>
          <span className="hover:text-[#3BB77E] cursor-pointer">Baking Material</span>
          <span className="hover:text-[#3BB77E] cursor-pointer">Fresh Fruits</span>
          <span className="hover:text-[#3BB77E] cursor-pointer">Milk & Dairies</span>
          <span className="hover:text-[#3BB77E] cursor-pointer">Meats</span>
          <span className="hover:text-[#3BB77E] cursor-pointer">Vegetables</span>
        </div>
      </div>

      {/* 🟢 Main Section (Product Grid + Sidebar on Right) */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-6">
        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>

        {/* Sidebar on Right */}
        <CategorySidebar />
      </div>
    </section>
  );
};

export default Product;
