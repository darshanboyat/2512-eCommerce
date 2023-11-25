import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div className="relative">
      <Image
        src="/images/home_header.png"
        alt=""
        width={785}
        height={1400}
        className="w-full h-screen"
      />

      <div className="mx-4 absolute top-96 left-0 right-0">
        <h1 className="font-sansita-regular my-4">Sustainable. Beautiful.</h1>
        <p className="font-lato-regular">
          A collection that embodies the concept of simplicity{" "}
          <span className="underline">Learn more</span>
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
