export const ORDER_STATE_KOR = {
  N: "신규",
  R: "예약중",
  S: "판매 완료",
} as const;

export type OrderStatus = keyof typeof ORDER_STATE_KOR;

export interface Product {
  id: number;
  goodsName: string;
  viewCount: number;
  status: OrderStatus;
  sellPrice: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}
