import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobApiSlice = createApi({
    reducerPath: "jobApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/jobs",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ["Jobs"],
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: (parms) => {
                if (parms) {
                    const url = [];
                    for (const item of Object.entries(parms)) {
                        switch (item[0]) {
                            case "skip":
                                url.push("$" + item.join("="))
                                break;
                            case "limit":
                                url.push("$" + item.join("="))
                                break;
                            case "company":
                                url.push(item[0] + "[$like]=%" + item[1] + "%")
                                break;
                            case "salaryFrom":
                                url.push(item.join("[$gt]="))
                                break;
                            case "salaryTo":
                                url.push(item.join("[$lt]="))
                                break;
                            default: url.push(item.join("="))
                                break;
                        }
                    }
                    return "?"+ url.join('&');
                }
                return "";
            },
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
