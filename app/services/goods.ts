import { APIResponse } from "../types/response";
import client from "./index";

const GOODS_STATUS = {
  NEW: "NEW",
  SOLD_OUT: "SOLDOUT",
  RESERVED: "RESERVED",
} as const;

export type GoodsStatus = (typeof GOODS_STATUS)[keyof typeof GOODS_STATUS];

export interface GoodsContent {
  createdAt: string;
  description: string;
  goodsName: string;
  goodsStatus: GoodsStatus;
  id: number;
  sellPrice: number;
  updatedAt: string;
  viewCount: number;
}

export interface Goods {
  content: GoodsContent[];
  empty: boolean;
  first: boolean;
  last: boolean;
  totalElements: number;
  totalPages: number;
}

export const getGoodsList = () => {
  return client.get<Goods>("/goods");
};

export const getGoodsDetail = (id: number) => {
  return client.get<APIResponse<Goods>>(`/goods/${id}`);
};
