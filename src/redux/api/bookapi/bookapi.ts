import type {
  IBook,
  IBooksResponse,
  ICreateBookResponse,
} from "@/interface/book/book.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksResponse, void>({
      query: () => "/books",
      providesTags: ["book"],
    }),
    createBook: builder.mutation<ICreateBookResponse, IBook>({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useDeleteBookMutation,
} = bookApi;
