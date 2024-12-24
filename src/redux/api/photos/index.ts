import { api as index } from "..";
import { GetResponse } from "./types";


const api = index.injectEndpoints({
  endpoints: (build) => ({
    getLaptopphoto: build.query<GetResponse, void>({
      query: () => ({
        url: "/laptopphotos",
        method: "GET",
      }),
      providesTags: ["laptopphoto"],
    }),
  }),
});

export const { useGetLaptopphotoQuery} = api;
