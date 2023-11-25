import Link from "next/link";
import React from "react";

const SelectColor = ({product}) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 px-5 py-8 border-b-4 border-white">
        <Link href="/shop/live_in_moment_tshirt_white">
          <a>
            <button
              className={`w-20 h-12 border-2 border-[#A86549] text-center font-bold flex justify-center items-center ${
                product.color === "white" ? "opacity-100" : "opacity-50"
              }`}
            >
              White
            </button>
          </a>
        </Link>
        <Link href="/shop/live_in_moment_tshirt_rust">
          <a>
            <button
              className={`w-20 h-12 border-2 border-[#A86549] bg-[#A86549] text-white text-center font-bold flex justify-center items-center ${
                product.color === "rust" ? "opacity-100" : "opacity-50"
              }`}
            >
              Rust
            </button>
          </a>
        </Link>
        <Link href="/shop/live_in_moment_tshirt_black">
          <a>
            <button
              className={`w-20 h-12 border-2 border-black bg-black text-white text-center font-bold flex justify-center items-center ${
                product.color === "black" ? "opacity-100" : "opacity-50"
              }`}
            >
              Black
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SelectColor;