import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import categoriesSlice from './features/categories';

const store = configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      categories: categoriesSlice,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

export default store;