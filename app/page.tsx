import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { products as productsData } from "./mocks/product";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

export default function Home() {
  const products = productsData;
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 mt-2">
          <button className="btn btn-sm btn-outline">
            <AdjustmentsHorizontalIcon className="h-4 w-4 text-white" />
          </button>
          <button className="btn btn-sm btn-outline text-white font-thin">
            <div className="flex gap-1 items-center">
              <span>지역</span>
              <XMarkIcon className="h-4 w-4 text-white" />
            </div>
          </button>
          <button className="btn btn-sm btn-outline text-white font-thin">
            <div className="flex gap-1 items-center">
              <span>상태</span>
              <XMarkIcon className="h-4 w-4 text-white" />
            </div>
          </button>
          <button className="btn btn-sm btn-outline text-white font-thin">
            <div className="flex gap-1 items-center">
              <span>가격</span>
              <XMarkIcon className="h-4 w-4 text-white" />
            </div>
          </button>
        </div>
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
