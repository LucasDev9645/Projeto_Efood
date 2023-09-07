import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Menu } from "../../util/types";

type CartState = {
  items: Menu[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
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
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, open, close, remove } = cartSlice.actions;

export default cartSlice.reducer;
