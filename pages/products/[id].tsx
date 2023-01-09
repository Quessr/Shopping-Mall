import { useQuery } from "react-query";
import { Product } from "../../components/product/types";
import { fetcher, QueryKeys } from "../../utils/fetcher";
import { useRouter } from "next/router";
import ProductDetail from "../../components/product/detail";

const ProductDetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({ method: "GET", path: `/products/${id}` })
  );

  console.log('id',id)

  if (!data) return null;

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail item={data} />
    </div>
  );
};

export default ProductDetailPage;
