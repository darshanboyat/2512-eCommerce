import React, { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdBookmarkBorder } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";

const Sidebar = () => {
  const [signOut, setSignOut] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-[#A86549] hidden h-screen w-full md:w-[15vw] rounded-e-2xl fixed top-0 left-0 z-40 lg:flex flex-col justify-between md:py-12">
      <div className="admin-logo text-5xl text-center text-[#F4E9DF] leading-5">
        <h1>2512</h1>
        <small className="uppercase text-xs">PACCHIS BARAH</small>
      </div>
      <div className="flex flex-col justify-between px-8 font-bold text-[#F4E9DF]">
        <ul>
          <li className="mb-12">
            <Link href="/">
              <a className="flex items-center">
                <FaHome className="text-2xl mx-2" />
                2512 | Home
              </a>
            </Link>
          </li>
          <li className="my-12">
            <Link href="/admin/orders">
              <a className="flex items-center">
                <MdBookmarkBorder className="text-2xl mx-2" />
                All Orders
              </a>
            </Link>
          </li>
          <li className="my-12 flex items-center">
            <Link href="/admin/enquiries">
              <a className="flex items-center">
                <RiContactsBookLine className="text-2xl mx-2" />
                Enquiries
              </a>
            </Link>
          </li>
          <li className="my-12 flex items-center">
            <Link href="/admin/add-blog">
              <a className="flex items-center">
                <TfiWrite className="text-2xl mx-2" />
                Add Blog
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            setSignOut(true);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            Cookies.remove("token");
            router.push("/login?destination=/");
          }}
          className="bg-[#F4E9DF] text-[#A86549] w-full mx-2 rounded-lg py-2 font-bold flex justify-center"
        >
          {signOut ? (
            <ThreeDots
              visible={true}
              height="50"
              width="50"
              color="#A86549"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "Signout"
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
