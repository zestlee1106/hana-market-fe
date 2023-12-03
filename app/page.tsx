import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { products as productsData } from "./mocks/product";

export default function Home() {
  const products = productsData;
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <ProductCard
            goodsName={product.goodsName}
            description={product.description}
            sellPrice={product.sellPrice}
            createdAt={product.createdAt}
            status={product.status}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
