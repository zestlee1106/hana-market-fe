import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { products as productsData } from "./mocks/product";

export default function Home() {
  const products = productsData;
  return (
    <>
      {products.map((product) => (
        <ProductCard
          seller={product.seller}
          productName={product.productName}
          content={product.content}
          price={product.price}
          registeredDate={product.registeredDate}
          orderState={product.orderState}
          key={product.id}
        />
      ))}
    </>
  );
}
