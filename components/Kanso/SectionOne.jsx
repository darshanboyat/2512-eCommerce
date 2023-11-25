import React from "react";
import Image from "next/image";

const SectionOne = ({ children }) => {
  return (
    <div className="relative">
      <Image
        src="/images/Section 1.png"
        alt="2512 | Pacchis Barah - Kanso Collection"
        width={400}
        height={800}
        className="object-cover"
      />
      <div className="absolute top-0 left-0 right-0">
        {children}
        <h1 className="story-title text-center font-sansita-regular mt-[14.5rem] !leading-[2rem]">
          Kanso
        </h1>
        <p className="text-center story-title font-sansita-regular !text-[2.1rem] !leading-[1.1rem]  font-bold px-3 pt-3">
          Our First Collection
        </p>
        <p className="text-center text-[.9rem] font-bold px-4 pt-6 leading-4">
          Carefully curated collection of t-shirt made with organic cotton and
          minimal embroidery.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
