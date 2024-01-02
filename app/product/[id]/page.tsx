"use client";

import { COLOR_MAP } from "@/app/components/ProductCard";
import { GoodsContent, getGoodsDetail } from "@/app/services/goods";
import { ORDER_STATE_KOR } from "@/app/types/product";
import { formatDate, formatPrice } from "@/app/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Product() {
  const param = useParams();
  const router = useRouter();
  const productId = param.id || "";
  const [product, setProduct] = useState<GoodsContent>();

  const fetchGoodsDetail = async (productId: number) => {
    try {
      const { data } = await getGoodsDetail(productId);
      if (!data) {
        return;
      }
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!productId) {
      router.push("/");
    }

    fetchGoodsDetail(Number(productId));
  }, []);

  const status = product?.goodsStatus || "NEW";
  const price = product?.sellPrice || 0;
  const date = product?.createdAt || "";

  return (
    // 세로 가운데 정렬
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl h-fit">
        <div className="card-body">
          <div className="flex items-center gap-3">
            <h2 className="card-title">{product?.goodsName}</h2>
            <div className={`badge ${COLOR_MAP[status]}`}>
              {ORDER_STATE_KOR[status]}
            </div>
          </div>
          <p>{product?.description}</p>
          <div className="flex justify-end">
            <div className="flex-col text-end">
              <div>{formatPrice(price)} 원</div>
              <div className="text-sm text-gray-500">{formatDate(date)}</div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">대화걸기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
