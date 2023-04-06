import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  base: [],
  toppings: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Action
    addBase: (state, action) => {
      state.base = [action.payload];
    },
    addToppings: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
  },
});

export const { addBase, addToppings } = basketSlice.actions;

// Selectors
export const selectPizza = (state) => state.basket;

export default basketSlice.reducer;
