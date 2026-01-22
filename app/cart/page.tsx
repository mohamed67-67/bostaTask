"use client";

import ItemCardPrice from "@/components/views/cartPage/ItemCardPrice";
import { RootState } from "@/state/store";
import { getTotalcost } from "@/utils/helpers";
import { useSelector } from "react-redux";

export default function CartPage() {
  const cartState = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex flex-col lg:grid gap-5 my-5 sm:my-10 grid-cols-3">
      <div className="col-span-2 flex flex-col justify-center items-center gap-3">
        {cartState.items.length === 0 ? (
          <p>No items found in the cart</p>
        ) : (
          <>
            {cartState.items.map((item) => (
              <div key={item.id}>
                <ItemCardPrice item={item} />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="col-span-1 relative">
        <div className="sticky top-20 w-full p-5 border border-bcolor rounded-md">
          <h5 className="text-xl mb-5 font-semibold">Order Summary</h5>
          <div className="flex border-b border-b-gray-200 pb-3 flex-col">
            <div className="flex justify-between w-full items-center">
              <p className="text-gray-500 text-sm">SubTotal:</p>
              <p>${getTotalcost(cartState.items)}</p>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="text-gray-500 text-sm">Shipping:</p>
              <p className="">Free</p>
            </div>
          </div>
          <div className="flex justify-between w-full pt-3 items-center">
            <p className="text-black font-semibold">Total:</p>
            <p>${getTotalcost(cartState.items)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
