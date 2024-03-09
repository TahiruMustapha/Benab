"use client";
import React from "react";
import { ProductProps } from "../../Type";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";
import Link from "next/link";
import { ImCrop, ImCross } from "react-icons/im";
import Price from "./Price";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/redux/benabSlice";

interface Props {
  item: ProductProps;
}
const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className=" w-full grid grid-cols-5 mb-4 py-2 border">
      <div className="flex col-span-5 md:col-span-2 gap-4 items-center ml-4">
        <ImCross
          onClick={() => {
            dispatch(deleteProduct(item?._id));
            toast.success(`${item?.title.substring(0,12)} deleted succssfully...`)
          }}
          className=" text-primeColor hover:text-red-500 cursor-pointer duration-300 "
        />
        <Link href={`/product/${item.slug.current}`}>
          <Image
            src={urlFor(item?.image).url()}
            alt="product-image"
            width={50}
            height={50}
            className=" w-32 h-32 object-contain"
          />
        </Link>
        <h1 className=" font-semibold">{item?.title?.substring(0, 20)}</h1>
      </div>
      <div className=" col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0 gap-6">
        <p className=" flex w-1/3 text-lg font-semibold">
          {" "}
          <Price amount={item?.price} />{" "}
        </p>
        <div className=" w-1/3 text-lg flex items-center gap-6">
          <span
            onClick={() => {
              dispatch(decreaseQuantity({ _id: item?._id }));
              const dNumber = item?.quantity;
              if (dNumber == 1) {
                toast.error("Product cannot be less than 1...");
              }else{
                toast.success(`${item?.title.substring(0,12)} decrease successfully...`);

              }
            }}
            className=" w-6 h-6 bg-gray-100 flex items-center justify-center text-2xl border-[1px] hover:bg-gray-300 border-gray-300 hover:border-gray-500 cursor-pointer duration-300"
          >
            -
          </span>
          <p>{item?.quantity}</p>
          <span
            onClick={() => {
              dispatch(increaseQuantity({ _id: item?._id }));
              toast.success(`${item?.title.substring(0,12)} increase successfully...`);
            }}
            className=" w-6 h-6 bg-gray-100 flex items-center justify-center text-2xl border-[1px] hover:bg-gray-300 border-gray-300 hover:border-gray-500 cursor-pointer duration-300"
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${item.quantity * item.price}</p>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;
