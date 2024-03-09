"use client";
interface Props {
  product: ProductProps;
}
import { useDispatch } from "react-redux";
import { ProductProps } from "../../Type";
import Price from "./Price";
import { addToCart } from "@/redux/benabSlice";
import toast from "react-hot-toast";

const ProductInfo = ({ product }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{product?.title}</h2>
      <div className=" flex  items-center gap-5">
        <p className=" text-lg font-normal text-gray-500 line-through">
          {" "}
          <Price amount={product?.rowprice} />{" "}
        </p>
        <Price amount={product?.price} className=" text-lg font-bold" />
        <p className=" text-sm">
          You Saved{" "}
          <Price
            className="bg-green-700 text-white px-2 rounded-md "
            amount={product?.rowprice - product?.price}
          />{" "}
          from this item{" "}
        </p>
      </div>
      <p className=" text-sm tracking-wide text-gray-600">
        {product?.description}
      </p>
      <p className=" text-sm  text-gray-500">Be the first to leave a review.</p>
      <button
        onClick={() => {
          dispatch(addToCart(product));
        toast.success(`${product.title.substring(0,12)} added to cart successfully...`)
        }}
        className=" w-full py-4 bg-primeColor hover:bg-black text-white text-lg rounded-md"
      >
        Add To Cart
      </button>
      <p className=" text-sm font-normal">
        <span className=" font-medium text-base">Categories: </span>
        Spring collection, streetwear,women Tags: featured SKU: N/A
      </p>

    </div>
  );
};

export default ProductInfo;
