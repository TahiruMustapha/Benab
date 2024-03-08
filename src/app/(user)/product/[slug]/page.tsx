import Container from "@/components/Container";
import Onsale from "@/components/Onsale";
import { client, urlFor } from "@/lib/sanityClient";
import { groq } from "next-sanity";
import Image from "next/image";
import { ProductProps } from "../../../../../Type";
import { PortableText } from "@portabletext/react";
import ProductInfo from "@/components/ProductInfo";
import { RichText } from "@/components/RichText";


interface Props {
  params: {
    slug: string;
  };
}
// portable text

// portable text
export const generateStaticParams = async () => {
  const query = groq`*[_type == 'product']{
        slug
    }`;

  const slugs: any = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug?.slug?.current);
  return slugRoutes?.map((slug: string) => ({
    slug,
  }));
};

const specialOffersQuery = groq`*[_type == 'product' && position == 'On Sale']{
    ...
   } | order(_createdAt asc)`;

const SinglePage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
    ...
  }`;

  const product: ProductProps = await client.fetch(query, { slug });
  const specialOffersProduct = await client.fetch(specialOffersQuery);

  return (
    <Container className=" my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2 h-full  -mt-5 xl:-mt-8 bg-gray-100 p-4 ">
        <div>
          <Onsale products={specialOffersProduct} />
        </div>
        <div className="h-full xl:col-span-2">
          <Image
            src={urlFor(product?.image).url()}
            alt="product image"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full  md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col justify-center gap-6">
          <ProductInfo product={product} />
        </div>
      </div>
      <PortableText value={product?.body} components={RichText}  />
    </Container>
  );
};

export default SinglePage;