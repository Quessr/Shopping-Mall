import { Product } from "./types";

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <div>
      <p>{category}</p>
      <p>{title}</p>
      <img src={image} tw="h-[150px] object-contain w-full" />
      <p>{description}</p>
      <span>{price}</span>
      <span>{rate}</span>
    </div>
  );
};

export default ProductDetail;
