import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
    // add more slices like this
  },
});

export default store;
