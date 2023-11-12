export const ORDER_STATE = {
  BOOKING: "B",
  POSSIBLE: "P",
  COMPLETE: "C",
} as const;

export const ORDER_STATE_KOR = {
  B: "예약중",
  P: "거래가능",
  C: "거래완료",
};

export interface Product {
  id: number;
  seller: string;
  productName: string;
  content: string;
  price: number;
  registeredDate: string;
  orderState: (typeof ORDER_STATE)[keyof typeof ORDER_STATE];
}
