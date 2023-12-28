import React from "react";
import { ORDER_STATE_KOR, OrderStatus, Product } from "../types/product";
import { formatDate, formatPrice } from "../utils";

export interface ProductProps
  extends Omit<Product, "id" | "viewCount" | "updatedAt"> {
  onClick: () => void;
}

const COLOR_MAP: Record<OrderStatus, string> = {
  NEW: "badge-primary",
  RESERVED: "badge-secondary",
  SOLDOUT: "badge-accent",
} as const;

const ProductCard = ({
  goodsName,
  description,
  sellPrice,
  createdAt,
  status,
  onClick,
}: ProductProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" onClick={onClick}>
      <div className="card-body">
        <h2 className="card-title">
          {goodsName}
          <div className={`badge ${COLOR_MAP[status]}`}>
            {ORDER_STATE_KOR[status]}
          </div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{formatPrice(sellPrice)} 원</div>
        </div>
        <div className="card-actions justify-end">
          <div className="text-sm text-gray-500">{formatDate(createdAt)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
