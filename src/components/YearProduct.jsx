import React from "react";

import Container from "./Container";
import Image from "next/image";
import productOfTheYear from "@/assets/productOfTheYear.webp";
import Link from "next/link";
const YearProduct = () => {
  return (
    <div className="w-full bg-[#f3f3f3]">
      <Container className="md:bg-transparent relative py-0 mb-10">
        <Image
          src={productOfTheYear}
          alt="product"
          className="w-full object-cover h-full hidden md:inline-block"
        />
        <div className="w-full md:w-2/3 xl:w-1/3 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start justify-center gap-6">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of the year
          </h1>
          <p className=" text-base font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dicta magni ipsum repellendus .
          </p>
          <Link
            href={"/shop"}
            className="bg-primeColor rounded-md text-white text-lg w-[185px] h-[50px] hover:bg-black duration-200 font-bold flex items-center justify-center"
          >
            Shop Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default YearProduct;
