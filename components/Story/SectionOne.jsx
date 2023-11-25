import React from "react";
import Image from "next/image";

const SectionOne = ({ children }) => {
  return (
    <div className="relative">
      <Image
        src="/images/Section 6.png"
        alt="2512 | Pacchis Barah Story"
        width={400}
        height={800}
      />
      <div className="absolute top-0 left-0 right-0">
        {children}
        <h1 className="story-title text-center font-sansita-regular mt-64">
          Our Story
        </h1>
        <p className="text-center text-xs font-bold px-6 pt-3 tracking-wide">
          A story of sustainable clothing and nature loving people.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
