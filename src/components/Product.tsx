"use client";
import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "../../Type";
import { AiOutlineShopping } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/benabSlice";
import toast  from "react-hot-toast";

interface Props {
  product: ProductProps;
  bg?: string;
}

const Product = ({ product, bg }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full relative group rounded-md  border-[1px] border-black hover:shadow-lg duration-200 shadow-gray-500 overflow-hidden group">
      <div className=" w-full h-80 flex items-center justify-center bg-white overflow-hidden">
        <div>
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.image).url()}
              alt="product image"
              width={700}
              height={700}
              className=" w-72 h-72 object-contain"
            />
          </Link>
          <div className=" absolute  w-full bottom-0 flex items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-2 transitiont-transform duration-300">
            <button
              onClick={() => {
                dispatch(addToCart(product));
                toast.success(
                  `${product?.title?.substring(0, 12)}... added to cart`
                );
              }}
              className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
            >
              <span>
                {" "}
                <AiOutlineShopping />{" "}
              </span>
              Add to cart
            </button>

            <Link
              href={`/product/${product?.slug?.current}`}
              className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
            >
              <span>
                {" "}
                <BsArrowsFullscreen />
              </span>
              Quick view
            </Link>
          </div>

          {product?.isnew && (
            <div className=" absolute top-2 right-2 z-50">
              <p className=" bg-primeColor   text-white text-xs font-semibold rounded-full cursor-pointer hover:bg-black duration-300 flex items-center justify-center px-4 py-1">
                New
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-80 py-6 flex-col gap-1 px-4">
        <div className=" flex items-center justify-between gap-2">
          <h2 className="text-lg text-primeColor font-bold">
            {product?.title.substring(0, 16)}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-[#767676] text-xs line-through">
              ${product?.rowprice}
            </p>
            <p className=" font-semibold">${product?.price}</p>
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <p className="text-[#767676]  text-sm">
            {" "}
            A product by{" "}
            <span className=" font-semibold text-primeColor">
              {product?.brand}
            </span>{" "}
          </p>
          <div className="flex items-center gap-1">
            <MdOutlineStarPurple500 className="text-lg text-yellow-500" />
            <span className=" font-medium text-sm">{product?.ratings}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Product;
