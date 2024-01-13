"use client";

import ProductCard from "./components/ProductCard";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import {
  GoodsContent,
  GoodsParams,
  GoodsStatus,
  getGoodsList,
} from "./services/goods";
import { useRouter, useSearchParams } from "next/navigation";
import useModal from "./hooks/modal";
import Nav from "./components/Nav";

export default function Home() {
  const [products, setProducts] = useState<GoodsContent[]>([]);
  const router = useRouter();

  const fetchGoods = async (params?: GoodsParams) => {
    try {
      const { data } = await getGoodsList(params);
      if (!data) {
        return;
      }
      setProducts(data.content);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGoods();
  }, []);

  const clickCard = (id: number) => {
    router.push(`/product/${id}`);
  };

  const { openModal } = useModal();
  const handleOpenFilter = () => {
    openModal({
      type: "custom",
      componentName: "Filter",
    });
  };

  const params = useSearchParams();
  const status = params.get("status");
  const name = params.get("name");

  useEffect(() => {
    const params = {
      goodsName: name || "",
      status: status as GoodsStatus,
    };
    fetchGoods(params);
  }, [status, name]);

  const deleteFilter = (type: string) => {
    const changedParams: GoodsParams = {
      status: status as GoodsStatus,
      goodsName: name || "",
    };

    if (type === "status") {
      changedParams.status = undefined;
    }

    if (type === "name") {
      changedParams.goodsName = undefined;
    }

    const query: Record<string, string> = {
      status: changedParams.status || "",
      name: changedParams.goodsName || "",
    };

    const queryString = new URLSearchParams(query).toString();

    router.push(`?${queryString}`);
  };

  return (
    <div className="flex flex-col gap-2 min-w-[24rem]">
      <div className="flex flex-row gap-2 mt-2">
        <button className="btn btn-sm btn-outline" onClick={handleOpenFilter}>
          <AdjustmentsHorizontalIcon className="h-4 w-4 text-white" />
        </button>
        {!!status && (
          <button
            className="btn btn-sm btn-outline text-white font-thin"
            onClick={() => deleteFilter("status")}
          >
            <div className="flex gap-1 items-center">
              <span>상태</span>
              <XMarkIcon className="h-4 w-4 text-white" />
            </div>
          </button>
        )}
        {!!name && (
          <button
            className="btn btn-sm btn-outline text-white font-thin"
            onClick={() => deleteFilter("name")}
          >
            <div className="flex gap-1 items-center">
              <span>상품명</span>
              <XMarkIcon className="h-4 w-4 text-white" />
            </div>
          </button>
        )}
      </div>
      {products.map((product) => (
        <ProductCard
          goodsName={product.goodsName}
          description={product.description}
          sellPrice={product.sellPrice}
          createdAt={product.createdAt}
          status={product.goodsStatus}
          key={product.id}
          onClick={() => clickCard(product.id)}
        />
      ))}
    </div>
  );
}
