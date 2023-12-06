import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import 'animate.css';

const Navbar = ({ position }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="px-[0.94rem] py-2">
        <nav
          className={`fixed ${
            position ? "top-[3rem]" : "top-4"
          } left-4 right-4 z-50 bg-[#e9e0d9] px-[1rem] py-[0.6rem] rounded-md drop-shadow-md transition-all`}
        >
          <div className="flex items-center justify-between">
            <div className="lg:hidden pt-2 pr-6">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-black font-semibold focus:outline-none"
              >
                <GiHamburgerMenu size={25} />
              </button>
            </div>
            <Link href="/">
              <a className="text-2xl font-bold">
                <Image
                  src="/icons/2512_RGB 2.png"
                  alt="2512 | PACCHIS BARAH"
                  className="!pt-1"
                  width={60}
                  height={45}
                />
              </a>
            </Link>
            <Link href="/cart" className="mb-2">
              <a className="text-[1.25rem]">
                <IoBagOutline size={25} className="mx-4" />
              </a>
            </Link>
          </div>
        </nav>
      </div>
      {navOpen && <NavList navOpen={navOpen} setNavOpen={setNavOpen} />}
    </>
  );
};

export default Navbar;

const NavList = ({ navOpen, setNavOpen }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <div
      className={`animate__animated animate__slideInLeft font-semibold bg-[#EADAC8] w-[80vw] h-screen fixed top-0 left-0 z-50 flex flex-col justify-between`}
    >
      <div className="">
        <div className="flex flex-end relative top-10 left-64 right-0 text-[2rem]">
          <IoMdClose onClick={() => setNavOpen(false)} />
        </div>
        <ul className="flex flex-col mt-12 px-4">
          <li className="my-4 px-[1.88rem]">
            <Link href="/">
              <a className="text-[1.25rem]">Home</a>
            </Link>
          </li>
          <li className="my-4 px-[1.88rem]">
            <Link href="/shop/tshirt">
              <a className="text-[1.25rem]">Shop</a>
            </Link>
          </li>
          <li
            className="my-4 px-[1.88rem]"
            onClick={() => {
              setAboutOpen(!aboutOpen);
            }}
          >
            <div className="flex justify-between items-baseline">
              <h3 className="text-[1.25rem]">About Us</h3>
              {!aboutOpen ? <IoMdAdd className="text-[1.25rem]" /> : <FaMinus className="text-[1rem]"/>}
            </div>
            {aboutOpen && (
              <ul className="text-[0.875rem] pl-4">
                <li>
                  <Link href="/our-story">Our Story</Link>
                </li>
                <li>
                  <Link href="/sustainability">Sustainability</Link>
                </li>
                <li>
                  <Link href="/kanso">Kanso</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="my-4 px-[1.88rem]">
            <Link href="/auth">
              <a className="text-[1.25rem]">My Account</a>
            </Link>
          </li>
          <li className="my-4 px-[1.88rem]">
            <Link href="/contact">
              <a className="text-[1.25rem]">Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-[5rem] flex justify-center">
        <Link href="/login">
          <a>
            <button className="w-[15rem] py-[0.5625rem] text-white bg-[#A86549]">
              Login
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
