import ButtonComp from "@/components/Button";
import { ICartItem } from "@/interfaces/stateInterfaces";
import { addToCart, reduceQuantity, removeItem } from "@/state/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

export default function ItemCardPrice({ item }: { item: ICartItem }) {
  const dispatch = useDispatch();
  return (
    <div className="border-2 border-bcolor rounded-md p-3 flex-col sm:flex-row flex w-full justify-between">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-52 bg-darkg flex items-center justify-center rounded-lg">
          <Image
            priority
            alt={item.title}
            src={item.image}
            width={200}
            height={200}
            className="object-contain min-w-52 aspect-square"
          />
        </div>
        <div className="flex font-semibold justify-evenly flex-col">
          <h5>{item.title}</h5>
          <p className="text-secondary">${item.price}</p>
          <p className="text-sm font-medium">{item.description}</p>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col mt-5 sm:mt-0 justify-between items-end">
        <div onClick={() => dispatch(removeItem(item))} className="w-6">
          <Image
            className="min-w-8 cursor-pointer"
            alt="remove"
            width={10}
            height={10}
            src="/icons/bin.png"
          />
        </div>
        <div className="flex border rounded-md min-w-26 gap-3 items-center border-bcolor px-3 py-1">
          <ButtonComp
            className="text-xl border-none"
            onClick={() => dispatch(addToCart(item))}
            title="+"
          />
          <p>{item.quantity}</p>
          <ButtonComp
            className="text-xl border-none"
            onClick={() => dispatch(reduceQuantity(item))}
            title="-"
          />
        </div>
      </div>
    </div>
  );
}
