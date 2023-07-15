import { ICollection, IWishList } from "../../../types/globalTypes";
import { apiSlice } from "../api/apiSlice";

const wishListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addtoCollections: builder.mutation({
      query: (data: ICollection) => ({
        url: `/collections/${data.id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["collections"],
    }),
    getUserBookCollections: builder.query({
      query: (email: string) => ({
        url: `/collections/${email}`,
        method: "GET",
      }),
      providesTags: ["collections"],
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
  useAddtoCollectionsMutation,
  useGetUserBookCollectionsQuery,
  useDeleteUserWishListMutation,
} = wishListApi;
