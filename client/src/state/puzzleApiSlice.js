import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const puzzleApiSlice = createApi({
    reducerPath: "puzzleApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/puzzles",
    }),
    tagTypes: ["Puzzles"],
    endpoints: (builder) => ({
        getPuzzles: builder.query({
            query: () => "",
            transformResponse: (result) => result.data,
            providesTags: ["Puzzles"]
        }),
        createPuzzle: builder.mutation({
            query: ({body}) => ({
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Puzzles"]
        }),
        getPuzzle: builder.query({
            query: (id) => `${id}`
        })
    })
})

export const { useGetPuzzleQuery, useGetPuzzlesQuery, useCreatePuzzleMutation } = puzzleApiSlice;
