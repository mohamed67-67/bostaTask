"use client";

import { ICartItem } from "@/interfaces/stateInterfaces";
import { CartCount } from "@/utils/helpers";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next/client";
import { toast } from "sonner";

const initialState: { items: ICartItem[]; totalCount: number } = {
  items: [],
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const user = getCookie("user");
      if (!user) {
        toast.info("please login to add to your cart");
        return state;
      }
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem?.quantity) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalCount = CartCount(state.items);
      toast.success("added to cart successfully");
    },
    reduceQuantity: (state, action: PayloadAction<ICartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item?.quantity && item?.quantity > 1) {
          item.quantity -= 1;
        }
      }
      state.totalCount = CartCount(state.items);
    },
    removeItem: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalCount = CartCount(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
    },
  },
});

export const { addToCart, reduceQuantity, clearCart, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
