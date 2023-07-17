import { IReview } from "../../../types/globalTypes";
import { apiSlice } from "../api/apiSlice";

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewReview: builder.mutation({
      query: (data: IReview) => ({
        url: `/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getBookReviews: builder.query({
      query: (id: string) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: ["reviews"],
    }),
  }),
});

export const { useAddNewReviewMutation, useGetBookReviewsQuery } = reviewApi;
