import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/",
    }),
    endpoints: (build) => ({
        login: build.mutation({
            query: ({ body }) => ({
                url:"authentication",
                method: "POST",
                body: {
                    ...body,
                    strategy: "local",
                },
            })
        }),
        register: build.mutation({
            query: ({ body }) => ({
                url: "users",
                method: "POST",
                body: body,
            })
        })

    })
})

export const { useLoginMutation, useRegisterMutation } = authApiSlice
