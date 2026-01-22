import { ICartItem } from "@/interfaces/stateInterfaces";
import { toast } from "sonner";

export const CartCount = (cartItems: ICartItem[]) => {
  let totalCount = 0;
  cartItems.map((cartItem) => {
    totalCount += cartItem.quantity!;
  });
  return totalCount;
};

export const trimText = ({
  length,
  text,
}: {
  length: number;
  text: string;
}) => {
  if (text.length < length) return text;
  return text.substring(0, length) + "...";
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractErrorArray = (err: any) => {
  toast.error(err.response.data);
};

export const getTotalcost = (items: ICartItem[]) => {
  let sum = 0;
  items.map((item) => {
    sum += item.quantity! * item.price;
  });
  return sum;
};
