import Image from "next/image";
import React from "react";

const SectionFive = () => {
  return (
    <div className="relative">
      <Image
        src="/images/Section 7.png"
        alt="2512 | PACCHIS BARAH | KANSO"
        width={400}
        height={800}
      />
      <div className="absolute bottom-40 left-0 right-0 text-[#2F2E2D]">
        <h2 className="font-sansita-regular text-center">Kanso</h2>
        <h2 className="font-sansita-regular text-center !text-[2rem]">Our First Collection</h2>
        <p className="font-bold text-sm px-6 text-center">Carefully curated collection of t-shirt made with organic cotton and minimal embroidery.</p>
      </div>
    </div>
  );
};

export default SectionFive;
