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

export interface GoodsParams {
  page?: number;
  size?: number;
  goodsName?: string;
  status?: GoodsStatus;
}

export const getGoodsList = (params?: GoodsParams) => {
  const { page, size, goodsName, status } = params ?? {};

  const queryString = Object.entries({
    page,
    size: size ?? 100,
    goodsName,
    status,
  })
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .filter(Boolean)
    .join("&");
  return client.get<Goods>(`/api/goods?${queryString}`);
};

export const getGoodsDetail = (id: number) => {
  return client.get<GoodsContent>(`/api/goods/${id}`);
};

interface GoodsCreateParams {
  goodsName: string;
  description: string;
  sellPrice: number;
  status?: GoodsStatus;
}

export const postGoods = (params: GoodsCreateParams) => {
  const realParams = {
    ...params,
    status: params.status ?? GOODS_STATUS.NEW,
  };
  return client.post<APIResponse<GoodsContent>>("/api/goods", realParams);
};
