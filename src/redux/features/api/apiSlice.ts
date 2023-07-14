import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_ENV === "development"
        ? "http://localhost:5000/api/v1"
        : "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  tagTypes: ["books"],
  endpoints: () => ({}),
});
