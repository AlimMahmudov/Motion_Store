import { api as index } from "..";
import { GetResponse } from "./types";


const api = index.injectEndpoints({
  endpoints: (build) => ({
    getLaptops: build.query<GetResponse, void>({
      query: () => ({
        url: "/laptops/",
        method: "GET",
      }),
      providesTags: ["laptops"],
    }),
  }),
});

export const { useGetLaptopsQuery } = api;
