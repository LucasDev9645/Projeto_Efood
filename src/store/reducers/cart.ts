import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Menu } from "../../util/types";

type CartState = {
  items: Menu[];
  isOpen: boolean;
  isOrderOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOrderOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const food = state.items.find((item) => item.id === action.payload.id);
      if (!food) {
        state.items.push(action.payload);
      } else {
        alert("Item já esta no carrinho");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    orderOpen: (state) => {
      state.isOrderOpen = true;
    },
    closeOrderOpen: (state) => {
      state.isOrderOpen = false;
    },
  },
});

export const { add, open, close, remove, orderOpen, closeOrderOpen, clear } =
  cartSlice.actions;

export default cartSlice.reducer;
