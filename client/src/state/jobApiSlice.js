import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobApiSlice = createApi({
    reducerPath: "jobApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/jobs",
    }),
    tagTypes: ["Jobs"],
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => "",
            transformResponse: (result) => result.data,
            providesTags: ["Jobs"]
        }),
        getJob: builder.query({
            query: (id) => `/${id}`
        }),
        createJob: builder.mutation({
            query: ({ body }) => ({
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Jobs"]
        }),
        modifyJob: builder.mutation({
            query: ({ body }) => ({
                url: `/${body.id}`,
                method: "PATCH",
                body: body
            }),
            invalidatesTags: ["Jobs"]
        }),
        removeJob: builder.mutation({
            query: (jobId) => ({
                url: `/${jobId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Jobs"]
        }),
        removeAllJob: builder.mutation({
            query: () => ({
                method: "DELETE",
            }),
            invalidatesTags: ["Jobs"]
        }),

    })
})

export const { useGetJobQuery, useGetJobsQuery, useCreateJobMutation, useModifyJobMutation, useRemoveJobMutation, useRemoveAllJobMutation } = jobApiSlice;
