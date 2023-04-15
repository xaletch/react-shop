import { configureStore } from '@reduxjs/toolkit';
import filter from "./filterSlice"
import cart from './slices/cartClise';

export const store = configureStore({
    reducer: {
        filter,
        cart
    },
});