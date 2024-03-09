"use client";
import Link from "next/link";
import React from "react";
import { MdSwitchAccount } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { StateProps } from "../../Type";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";

const PageButton = () => {
  const { productData } = useSelector((state: StateProps) => state.benab);
  const { data: session } = useSession();
  return (
    <div className="flex fixed top-60  right-2 z-20 flex-col gap-2">
      <button
        onClick={() => !session?.user ? signIn() : toast.error("You already signed in...") }
        className="bg-white pt-2 rounded-md  cursor-pointer items-center justify-center shadow-textShadow overflow-x-hidden group text-[#33475b] w-14  flex flex-col gap-1"
      >
        <div className="flex justify-center items-center">
          {session?.user ? (
            <Image
              src={session?.user?.image!}
              alt="user image"
              width={35}
              height={35}
              className="rounded-full -translate-x-12 group-hover:translate-x-4 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          )}

          {session?.user ? (
            <Image
              src={session?.user?.image!}
              alt="user image"
              width={35}
              height={35}
              className="rounded-full -translate-x-4 group-hover:translate-x-12 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          )}
        </div>
        <p className=" text-xs">Profile</p>
      </button>
      <Link
        href={"/cart"}
        className="bg-white pt-2 relative rounded-md cursor-pointer items-center justify-center shadow-textShadow overflow-x-hidden group text-[#33475b] w-14  flex flex-col gap-1"
      >
        <div className="flex items-center justify-center">
          <RiShoppingCart2Fill className="text-2xl  -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p className=" text-xs">Cart</p>
        <p
          className=" absolute top-1 right-1 bg-primeColor text-white text-xs w-4 h-4
           rounded-full flex items-center justify-center font-semibold"
        >
          {productData ? productData?.length : 0}
        </p>
      </Link>
     
    </div>
  );
};

export default PageButton;
