import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { producte } from './types'

// Define a service using a base URL and expected endpoints
export const producteApi = createApi({
  reducerPath: "producteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SOME_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getproducteByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproducteByNameQuery } = producteApi;
