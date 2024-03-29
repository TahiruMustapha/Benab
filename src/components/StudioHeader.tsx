import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logoLight.png";
import { IoReturnDownBack } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const StudioHeader = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-100 flex items-center justify-between">
        <Link
          className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200 "
          href={"/"}
        >
          {" "}
          <IoReturnDownBack /> Go to Website
        </Link>
        <Link className="flex items-center text-2xl font-semibold " href={"/"}>
          BENAB
          <FaShoppingCart />
        </Link>
        
        <p className="text-sm">Admin Studio for BENAB</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioHeader;
