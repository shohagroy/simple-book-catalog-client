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

    deleteUserBookCollection: builder.mutation({
      query: (data: { id: string; email: string }) => ({
        url: `/collections/${data.email}`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["collections"],
    }),

    updateUserBookCollection: builder.mutation({
      query: (data: { id: string; email: string; value: string }) => ({
        url: `/collections/${data.email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["collections"],
    }),
  }),
});

export const {
  useAddtoCollectionsMutation,
  useGetUserBookCollectionsQuery,
  useDeleteUserBookCollectionMutation,
  useUpdateUserBookCollectionMutation,
} = wishListApi;
