import { IBook } from "../../../types/globalTypes";
import { apiSlice } from "../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (query: string) => ({
        url: `/books?${query}`,
        method: "GET",
      }),
      providesTags: ["books"],
    }),

    getSingleBooks: builder.query({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
      providesTags: ["books"],
    }),

    postNewBook: builder.mutation({
      query: (data: Partial<IBook>) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    updateBookInfo: builder.mutation({
      query: (data: IBook) => ({
        url: `/books/${data._id!}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    deleteSingleBook: builder.mutation({
      query: (data: IBook) => ({
        url: `/books/${data._id!}`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  usePostNewBookMutation,
  useGetSingleBooksQuery,
  useUpdateBookInfoMutation,
  useDeleteSingleBookMutation,
} = bookApi;
