import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const applicantApiSlice = createApi({
    reducerPath: "applicantApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/applicants",
    }),
    tagTypes: ["Applicants"],
    endpoints: (builder) => ({
        getUserJobs: builder.query({
            query: (userId) => ({
                url: `?userId=${userId}`,
            }),
            providesTags: ["Applicants"]
        }),
        getApplicants: builder.query({
            query: (jobId) => ({
                url: `?jobId=${jobId}`,
            }),
            providesTags: ["Applicants"]
        }),
        createApply: builder.mutation({
            query: ({ body }) => ({
                method: "POST",
                body: body
            }),
            invalidatesTags: ["Applicants"]
        }),
        removeApply: builder.mutation({
            query: (jobId) => ({
                url: `?jobId=${jobId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Applicants"]
        }),


    })
})

export const { useGetUserJobsQuery, useGetApplicantsQuery, useCreateApplyMutation, useRemoveApplyMutation } = applicantApiSlice;
