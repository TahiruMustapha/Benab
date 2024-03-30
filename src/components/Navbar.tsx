"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathName = usePathname();
  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Studio",
      link: "/studio",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="w-full h-20 bg-white  border-b-[1px] text-[#444] border-b-gray-400 sticky top-0 z-50">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center gap-2 justify-between">
        <Link className="flex items-center text-2xl font-semibold " href={"/"}>
          BENAB
          <FaShoppingCart />
        </Link>
        <div className="relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md">
          <input
            type="text"
            placeholder="Search your products here"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <IoCloseOutline
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 hover:text-red-500 duration-200 hover:cursor-pointer"
            />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer" />
          )}
        </div>
        <div
          className={`${
            showNav
              ? "md:hidden   inline-flex  bg-[#f3f3f3] absolute top-20 left-0  flex-col w-[300px] h-[100vh] gap-2 "
              : "hidden md:inline-flex items-center gap-2"
          }`}
        >
          {navBarList.map((item) => (
            <Link
              className={`${
                showNav
                  ? ` text-primeColor transition ease-in-out delay-150 hover:text-xl hover:-translate-y-1 hover:scale-100 bg-white hover:text-white duration-300  hover:bg-gray-400 py-2  hover:font-medium px-4  ${
                      pathName === item?.link && "  text-gray-950 underline"
                    }`
                  : `flex  hover:font-medium  justify-center w-20 h-6 items-center px-12  text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-400 duration-0 last:border-r-0 ${
                      pathName === item?.link && "text-gray-950 underline"
                    }`
              }
             
                `}
              href={item?.link}
              key={item?.link}
            >
              {item?.title}
            </Link>
          ))}
          {session?.user && (
            <button
              onClick={() => signOut()}
              className={`
              ${
                showNav
                  ? `bg-white hover:bg-gray-400 duration-300 flex px-4 py-2`
                  : `flex items-center justify-center w-20 h-6 px-12 text-gray-500 hover:font-medium hover:underline underline-offset-4 decoration-[1px] hover:text-red-600 md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0`
              }
              `}
            >
              Logout
            </button>
          )}
        </div>

        <HiMenuAlt2
          onClick={() => setShowNav(!showNav)}
          className=" inline-flex md:hidden cursor-pointer w-8 h-6"
        />
      </nav>
    </div>
  );
};

export default Navbar;
