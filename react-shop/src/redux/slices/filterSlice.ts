import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum SortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    NAME_DESC = 'name',
    NAME_ASC = '-name',
}

export type TypeSort = {
    name : string;
    sortProperty: SortPropertyEnum;
}

export interface FilterState {
    searchValue: string;
    categoryId: number;
    sort: TypeSort;
}

const initialState: FilterState = {
    searchValue: '',
    categoryId: 0,
    sort: {
        name : 'популярности',
        sortProperty: SortPropertyEnum.RATING_DESC,
    }
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSort(state, action: PayloadAction<TypeSort>) {
            state.sort = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterState>) {
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
        },
    },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setSort, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;