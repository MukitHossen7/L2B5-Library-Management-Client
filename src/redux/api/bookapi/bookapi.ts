import type {
  IBook,
  IBooksResponse,
  ICreateBookResponse,
} from "@/interface/book/book.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UpdateBookArg = {
  id: string;
  data: Partial<Omit<IBook, "_id">>;
};

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["book", "borrow"],
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
    updateBook: builder.mutation<void, UpdateBookArg>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["book", "borrow"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApi;
