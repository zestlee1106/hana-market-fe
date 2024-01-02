import { format, parseISO } from "date-fns";

export const formatDate = (date: string) => {
  if (!date) return "";

  const parsedDate = parseISO(date);
  return format(parsedDate, "yyyy년 MM월 dd일 H시 mm분");
};

export const formatPrice = (price: number) => {
  return price.toLocaleString();
};
