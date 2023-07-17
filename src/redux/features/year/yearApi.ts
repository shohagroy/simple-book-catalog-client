import { apiSlice } from "../api/apiSlice";

const yearApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookYears: builder.query({
      query: () => ({
        url: `/years`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBookYearsQuery } = yearApi;
