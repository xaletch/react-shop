import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SearchProductParams = {
    category: string;
    sortBy: string;
    order: string;
    search: string;
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
    async (params: SearchProductParams) => {
        const { category, sortBy, order, search } = params;
        const { data } = await axios.get(`https://6425b5ce9e0a30d92b39f227.mockapi.io/burgers?${category}${search}&sortBy=${sortBy}&order=${order}`);
        return data as ProductItem[];
    }
)

type ProductItem = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    weight: number;
}

interface ProductState {
    items: ProductItem[];
    status: 'loading' | 'success' | 'error';
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

const initialState: ProductState = {
    items: [],
    status: Status.LOADING,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<ProductItem[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    }
});

export const selectProductData = (state: RootState) => state.products;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;