import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  tagTypes: ["books"],
  endpoints: () => ({}),
});
