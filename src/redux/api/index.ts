import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}api`,
  // prepareHeaders: (headers) => {
  //   if (process.env.VITE_API_KEY) {
  //     headers.set(
  //       "Authorization",
  //       `Bearer ${process.env.NEXT_PUBLIC_TG_TOKEN}`
  //     );
  //   }
  //   return headers;
  // },
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["laptops","laptopphoto"],
  endpoints: () => ({}),
});
