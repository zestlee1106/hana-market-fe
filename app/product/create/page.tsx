"use client";

import { postGoods } from "@/app/services/goods";
import { formatPrice } from "@/app/utils";
import { useRouter } from "next/navigation";
import React from "react";

function Create() {
  const [goodsName, setGoodsName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [sellPrice, setSellPrice] = React.useState(0);

  const isPossibleCreate = React.useMemo(() => {
    return goodsName !== "" && description !== "" && sellPrice !== 0;
  }, [goodsName, description, sellPrice]);

  const router = useRouter();

  const create = async () => {
    try {
      await postGoods({
        goodsName,
        description,
        sellPrice,
      });
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body text-center">
          <h2 className="card-title">상품을 등록하세요!</h2>
          <input
            type="text"
            placeholder="상품명"
            value={goodsName}
            onChange={(e) => setGoodsName(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />

          <div className="flex h-[48px] items-center gap-2 font-semibold text-base">
            <div className="text-left mb-2">가격</div>
            <div className="text-left mb-2">{formatPrice(sellPrice)}원</div>
          </div>
          <input
            type="range"
            min={0}
            max={100000}
            value={sellPrice}
            onChange={(e) => setSellPrice(Number(e.target.value))}
            className="range"
            step="1000"
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span>{formatPrice(100000)}</span>
          </div>
          <div className="card-actions justify-end">
            <button
              className={`btn btn-primary ${
                !isPossibleCreate && "btn-disabled"
              }`}
              onClick={create}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
