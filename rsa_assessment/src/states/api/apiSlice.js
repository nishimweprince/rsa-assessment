import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chucknorris.io/jokes/',
  }),
  endpoints: (builder) => {
    return {
      getCategories: builder.query({
        query: () => 'categories',
      }),
      getRandomJoke: builder.query({
        query: ({ category }) => `random?category=${category}`,
      }),
    };
  },
});

export const { useLazyGetCategoriesQuery, useLazyGetRandomJokeQuery } = apiSlice;
