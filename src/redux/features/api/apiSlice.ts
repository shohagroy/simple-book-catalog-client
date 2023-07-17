import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VITE_BACKEND_BASE_URL, VITE_ENV } from "../../../configs/env.config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      VITE_ENV === "production"
        ? VITE_BACKEND_BASE_URL
        : "http://localhost:5000/api/v1",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  tagTypes: ["books", "wishLists", "collections", "reviews"],
  endpoints: () => ({}),
});
