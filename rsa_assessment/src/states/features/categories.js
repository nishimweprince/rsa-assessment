import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        selectedCategory: null,
    },
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;