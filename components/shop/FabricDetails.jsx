import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaPlus, FaMinus, FaRegStar } from "react-icons/fa";

const FabricDetails = ({ activeFabricDetail, setActiveFabricDetails }) => {
  useEffect(() => {
    setActiveFabricDetails("description");
  }, []);

  const handleClick = (open) => {
    console.log(open);
    setActiveFabricDetails(open);
  };

  return (
    <div className="accordion lg:px-14">
      <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-y-[1px] !border-black">
        <h2
          className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick("description")}
        >
          <span className="accordion-header-text">Description</span>
          <span className="accordion-header-icon">
            {activeFabricDetail === "description" ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
      </div>
      <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-b-[1px] !border-black">
        <h2
          className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick("material")}
        >
          <span className="accordion-header-text">Material</span>
          <span className="accordion-header-icon">
            {activeFabricDetail === "material" ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
      </div>

      <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-b-[1px] !border-black">
        <h2
          className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick("care")}
        >
          <span className="accordion-header-text">Care</span>
          <span className="accordion-header-icon">
            {activeFabricDetail === "care" ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
      </div>

      <Link href="/home/delivery-returns">
        <a target="_blank">
          <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-b-[1px] !border-black">
            <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]">
              <span className="accordion-header-text">
                Delivery, Returns & Exchange
              </span>
              <span className="accordion-header-icon">
                <FaPlus />
              </span>
            </h2>
          </div>
        </a>
      </Link>
      <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-b-[1px] border-black">
        <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]">
          <span className="accordion-header-text">Rating & Reviews</span>
          <span className="accordion-header-icon flex gap-2">
            {[1, 2, 3, 4, 5].map((ele) => (
              <FaRegStar key={ele} />
            ))}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default FabricDetails;
