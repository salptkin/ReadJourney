import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../services/axiosBaseQuery";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: axiosBaseQuery,
  tagTypes: ["OwnBook", "InfoBook"],
  endpoints: (build) => ({
    getRecommendedBooks: build.query({
      query: (params) => ({ url: "/books/recommend", method: "GET", params }),
    }),
    addBookToLibrary: build.mutation({
      query: (id) => ({ url: `/books/add/${id}`, method: "POST" }),
      invalidatesTags: ["OwnBook"],
    }),
    removeBookFromLibrary: build.mutation({
      query: (id) => ({ url: `/books/remove/${id}`, method: "DELETE" }),
      invalidatesTags: ["OwnBook"],
    }),
    getOwnBooks: build.query({
      query: ({ status }) => {
        return status !== ""
          ? { url: "/books/own", method: "GET", params: { status } }
          : { url: "/books/own", method: "GET" };
      },
      providesTags: ["OwnBook"],
    }),
    addNewBook: build.mutation({
      query: (data) => ({ url: "/books/add", method: "POST", data }),
      invalidatesTags: ["OwnBook"],
    }),
    getBookInfo: build.query({
      query: (id) => ({ url: `/books/${id}`, method: "GET" }),
      providesTags: ["InfoBook"],
    }),
    startReading: build.mutation({
      query: (data) => ({ url: "/books/reading/start", method: "POST", data }),
      invalidatesTags: ["InfoBook"],
    }),
    finishReading: build.mutation({
      query: (data) => ({ url: "/books/reading/finish", method: "POST", data }),
      invalidatesTags: ["InfoBook"],
    }),
    removeReading: build.mutation({
      query: (params) => ({
        url: "/books/reading",
        method: "DELETE",
        params,
      }),
      invalidatesTags: ["InfoBook"],
    }),
  }),
});

export const {
  useGetRecommendedBooksQuery,
  useAddBookToLibraryMutation,
  useRemoveBookFromLibraryMutation,
  useGetOwnBooksQuery,
  useAddNewBookMutation,
  useGetBookInfoQuery,
  useStartReadingMutation,
  useFinishReadingMutation,
  useRemoveReadingMutation,
} = bookApi;
