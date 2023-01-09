import { useQuery } from "react-query";
import ProductItem from "../../components/product/item";
import { Product } from "../../components/product/types";
import { fetcher, QueryKeys } from "../../utils/fetcher";
import "twin.macro"

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({ method: "GET", path: "/products" })
  );
  return (
    <div>
      <h2>상품목록</h2>
      <ul tw="list-none grid grid-cols-3">
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
