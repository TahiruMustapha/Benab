import React from "react";
import Heading from "./Heading";
import { ProductProps } from "../../Type";
import Container from "./Container";
import Product from "./Product";

interface Props {
  products: ProductProps[];
  title?: string;
}

const BestSellers = ({ products, title }: Props) => {
  return (
    <Container className="w-[85%] pb-20">
      <Heading heading={title} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products?.map((item: ProductProps) => (
          <Product key={item._id} product={item}  />
        ))}
       
      </div>
    </Container>
  );
};

export default BestSellers;
