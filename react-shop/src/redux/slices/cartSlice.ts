import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

export type CartItem = {
    id: string;
    name: string;
    imageUrl: string;
    count: number;
    price: number;
    weight: number;
};

interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

const { items, totalPrice } = getCartFromLocalStorage();

const initialState: CartSliceState = {
    totalPrice: totalPrice,
    items: items,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        itemPrice(state, action: PayloadAction<string>) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            state.items = state.items.filter((obj) => obj.count !== 0);

            if (findItem) {
                findItem.count --;
                state.totalPrice -= findItem.price;
            };
        },
        removeItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            
            if (findItem) {
                state.totalPrice -= findItem.price * findItem.count;
            }
        },
        clearItem(state) {
            state.items = [];
            state.totalPrice = 0;
        }
    },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id);

export const { addProduct, removeItem, clearItem, itemPrice } = cartSlice.actions;

export default cartSlice.reducer;