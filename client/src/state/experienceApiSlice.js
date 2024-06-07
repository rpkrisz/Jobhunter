import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const experienceApiSlice = createApi({
    reducerPath: "experienceApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/experiences",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ["Experiences"],
    endpoints: (builder) => ({
        getExperiences: builder.query({
            query: () => "",
            transformResponse: (result) => result.data,
            providesTags: ["Experiences"]
        }),
        createExperience: builder.mutation({
            query: ({ body }) => ({
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Experiences"]
        }),
        modifyExperience: builder.mutation({
            query: ({ body }) => ({
                url: `/${body.id}`,
                method: "PATCH",
                body: body
            }),
            invalidatesTags: ["Experiences"]
        }),
        removeExperience: builder.mutation({
            query: (experienceId) => ({
                url: `/${experienceId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Experiences"]
        }),
        removeAllExperience: builder.mutation({
            query: () => ({
                method: "DELETE",
            }),
            invalidatesTags: ["Experiences"]
        }),
    })
})

export const { useGetExperiencesQuery, useCreateExperienceMutation, useModifyExperienceMutation, useRemoveExperienceMutation, useRemoveAllExperienceMutation, } = experienceApiSlice;
