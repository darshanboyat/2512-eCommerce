import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f2eadf] w-full py-8">
      <div className="container">
        <div className="border-b-2 border-white py-4">
          <h3 className="text-center underline text-4xl text-[#a66347]">
            2512
          </h3>
          <h5 className="uppercase text-xs font-bold text-center text-[#a66347]">
            Pacchis barah
          </h5>
        </div>
        <div className="text-[#a66347] flex justify-center py-8">
          <FaInstagram className="bg-white p-2 border-2 border-[#a66347] text-5xl mx-2" />
          <FaFacebook className="bg-white p-2 border-2 border-[#a66347] text-5xl mx-2" />
          <FaPinterest className="bg-white p-2 border-2 border-[#a66347] text-5xl mx-2" />
          <FaYoutube className="bg-white p-2 border-2 border-[#a66347] text-5xl mx-2" />
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <Link href="/">
              <a className="text-black font-semibold no-underline text-right border-b-2 border-white pb-2">
                My Account
              </a>
            </Link>
            <Link href="/" className="py-4">
              <a className="text-black font-semibold no-underline text-right pt-2">
                Delivery & Return
              </a>
            </Link>
            <Link href="/" className="py-4">
              <a className="text-black font-semibold no-underline text-right">
                Contact Us
              </a>
            </Link>
            <Link href="/" className="py-4">
              <a className="text-black font-semibold no-underline text-right">
                Blog
              </a>
            </Link>
          </div>
          <div className="border-l-2 border-white h-32" />

          <div className="flex flex-col">
            <Link href="/about">
              <a className="text-black font-semibold pb-2 no-underline border-b-2 border-white pr-14">About Us</a>
            </Link>
            <Link href="/about">
              <a className="text-black font-semibold no-underline pt-2">Our Story</a>
            </Link>
            <Link href="/about">
              <a className="text-black font-semibold no-underline">Sustainability</a>
            </Link>
            <Link href="/about">
              <a className="text-black font-semibold no-underline">Kanso</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
