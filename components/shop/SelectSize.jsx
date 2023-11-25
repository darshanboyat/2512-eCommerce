import React, { useState } from "react";

const SelectSize = () => {
  const [size, setSize] = useState("S");

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold px-5 pt-4">Select Size</h2>
        <h3 className="text-[#A86549] pt-4">Size Chart</h3>
      </div>
      <div className="grid grid-cols-6 gap-2 px-5 py-8">
        <button
          onClick={() => {
            setSize("S");
          }}
          className={`w-12 h-12 border-2  ${
            size === "S"
              ? "bg-[#A86549] border-[#fff] text-white"
              : "text-[#A86549] border-[#A86549] bg-white"
          } text-center font-bold flex justify-center items-center`}
        >
          S
        </button>
        <button
          onClick={() => {
            setSize("M");
          }}
          className={`w-12 h-12 border-2  ${
            size === "M"
              ? "bg-[#A86549] border-[#fff] text-white"
              : "text-[#A86549] border-[#A86549] bg-white"
          } text-center font-bold flex justify-center items-center`}
        >
          M
        </button>
        <button
          onClick={() => {
            setSize("L");
          }}
          className={`w-12 h-12 border-2  ${
            size === "L"
              ? "bg-[#A86549] border-[#fff] text-white"
              : "text-[#A86549] border-[#A86549] bg-white"
          } text-center font-bold flex justify-center items-center`}
        >
          L
        </button>
        <button
          disabled
          className={`relative w-12 h-12 border-2  ${
            size === "XL"
              ? "bg-[#A86549] border-[#fff] text-white"
              : "text-[#A86549] border-[#A86549] bg-white opacity-50"
          } text-center font-bold flex justify-center items-center`}
        >
          XL
        </button>
        <button
          disabled
          className={`relative w-12 h-12 border-2  ${
            size === "2XL"
              ? "bg-[#A86549] border-[#fff] text-white"
              : "text-[#A86549] border-[#A86549] bg-white opacity-50"
          } text-center font-bold flex justify-center items-center`}
        >
          2XL
        </button>
        <button
          disabled
          className={`relative w-12 h-12 border-2  ${
            size === "3XL"
              ? "bg-[#A86549] border-[#fff] text-white"
              : "text-[#A86549] border-[#A86549] bg-white opacity-50"
          } text-center font-bold flex justify-center items-center`}
        >
          3XL
        </button>
      </div>
    </div>
  );
};

export default SelectSize;
