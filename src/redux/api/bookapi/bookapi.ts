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

interface IGetBooksParams {
  page?: number;
  limit?: number;
}
type ICreateBookInput = Omit<IBook, "_id">;
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["book", "borrows"],
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksResponse, IGetBooksParams>({
      query: ({ page = 1, limit = 10 } = {}) =>
        `/books?page=${page}&limit=${limit}`,
      providesTags: ["book", "borrows"],
    }),
    getBookById: builder.query<IBook, string>({
      query: (id) => `books/${id}`,
      providesTags: (result, error, id) => [{ type: "book", id }],
    }),
    createBook: builder.mutation<ICreateBookResponse, ICreateBookInput>({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book", "borrows"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book", "borrows"],
    }),
    updateBook: builder.mutation<void, UpdateBookArg>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["book", "borrows"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetBookByIdQuery,
} = bookApi;
