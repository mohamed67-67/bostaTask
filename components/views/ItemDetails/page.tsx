"use client";

import ButtonComp from "@/components/Button";
import { ICartItem } from "@/interfaces/stateInterfaces";
import { addToCart } from "@/state/cartSlice";

import { useDispatch } from "react-redux";

export default function ItemDetailsClientComp({ item }: { item: ICartItem }) {
  const dispatch = useDispatch();
  return (
    <div>
      <ButtonComp
        onClick={() => dispatch(addToCart(item))}
        dark
        title="Add"
        icon="/icons/shopping.svg"
        className="text-sm py-1"
      />
    </div>
  );
}
