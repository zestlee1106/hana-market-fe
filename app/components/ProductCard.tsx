import React from "react";
import { Product } from "../types/product";

interface ProductProps extends Omit<Product, "id"> {}

const ProductCard = ({
  seller,
  productName,
  content,
  price,
  registeredDate,
  orderState,
}: ProductProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
