import { Product } from "./types";
import "twin.macro";
import Link from "next/link";

const ProductItem = ({
  category,
  id,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li tw="border-2 p-3">
      <Link href={`/products/${id}`}>
      <p>{category}</p>
      <p>{title}</p>
      <img src={image} tw="h-[150px] object-contain w-full" />
      <span>{price}</span>
      <span>{rating.rate}</span>
      <span>{rating.count}</span>
      </ Link>
    </li>
  );
};

export default ProductItem;
