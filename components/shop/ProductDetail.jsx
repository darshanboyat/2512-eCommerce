import React, { memo } from "react";
import Breadcrumb from "../common/breadcrumb";
import Navbar from "../common/header";
import Carousel from "./carousel";
import SelectSize from "./SelectSize";
import SelectColor from "./SelectColor";

const ProductDetail = ({ product }) => {
  return (
    <main className="bg-[#f2eadf]">
      <div className="container border-b-4 border-white">
        <Navbar />
        <Breadcrumb name={product.name} category={product.category} />
        <Carousel
          sliderImages={[...product.images]}
          rating={product.rating}
          numberOfRatings={product.numberOfRatings}
        />
        <h2 className="px-5 pt-[2.5rem] text-[1.125rem]">Live In The Moment</h2>
        <div className="flex items-center px-5">
          <h2 className="font-bold text-[1.125rem]">₹979</h2>
          <small className="text-[.75rem] pl-2">
            <span className="line-through">₹1399</span>{" "}
            <span className="font-semibold text-[#49AC56]">30% OFF</span>
          </small>
        </div>
        <p className="px-5 pb-4">Incl of taxes</p>
      </div>
      <h2 className="text-2xl px-5 pt-4">Color</h2>
      <SelectColor product={product} />

      <SelectSize />
    </main>
  );
};

export default memo(ProductDetail);
