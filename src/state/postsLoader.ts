// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {PostState, Post} from './types'
// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAll: builder.query<PostState,unknown>({
      query: () => 'posts',
      transformResponse: (response:Post[])=>{
        return response.reduce((acc,elem)=>{
            acc[elem.id] = elem;
            return acc;
        }, {} as PostState)
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllQuery } = postsApi;