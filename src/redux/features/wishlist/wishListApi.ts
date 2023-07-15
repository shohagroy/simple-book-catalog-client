import { IWishList } from "../../../types/globalTypes";
import { apiSlice } from "../api/apiSlice";

const wishListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: (data: IWishList) => ({
        url: `/wishlists/${data.email}`,
        method: "POST",
        body: data.data,
      }),
      invalidatesTags: ["wishLists"],
    }),
    getUserWishlists: builder.query({
      query: (email: string) => ({
        url: `/wishlists/${email}`,
        method: "GET",
      }),
      providesTags: ["wishLists"],
    }),

    deleteUserWishList: builder.mutation({
      query: (data: IWishList) => ({
        url: `/wishlists/${data.email}`,
        method: "DELETE",
        body: data.data,
      }),
      invalidatesTags: ["wishLists"],
    }),
  }),
});

export const {
  useAddToWishListMutation,
  useGetUserWishlistsQuery,
  useDeleteUserWishListMutation,
} = wishListApi;
