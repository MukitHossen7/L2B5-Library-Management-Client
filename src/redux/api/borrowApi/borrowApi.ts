import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["borrows", "book"],
  endpoints: (builder) => ({
    getBorrowSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["borrows", "book"],
    }),
    createBorrow: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["borrows", "book"],
    }),
  }),
});

export const {
  useCreateBorrowMutation,
  useGetBorrowSummaryQuery,
  useLazyGetBorrowSummaryQuery,
} = borrowApi;
