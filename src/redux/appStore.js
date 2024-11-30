import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
const appStore = configureStore({
    reducer: {
        cart: CartSlice
    }
});
export default appStore;