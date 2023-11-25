import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";

const Fade = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (current) => {
        setCurrentSlide(current);
      },
    };
  useEffect(() => {}, [currentSlide]);
  const sliderImages = [
    "/images/carousel1.png",
    "/images/carousel2.png",
    "/images/carousel1.png",
    "/images/carousel2.png",
    "/images/carousel1.png",
    "/images/carousel2.png",
    "/images/carousel1.png",
    "/images/carousel2.png",
  ];

  return (
    <div className="p-6">
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`2512 | carousel image ${index + 1}`}
              width={400}
              height={500}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
      <div
        className="h-2 bg-[#A86549] rounded-full"
        style={{
          width: `${((currentSlide + 1) / sliderImages.length) * 100}%`,
          transition: "width 0.3s ease",
        }}
      />
      <div className="flex justify-end">
        <p className="underline font-semibold">View All</p>
      </div>
    </div>
  );
};

export default Fade;
