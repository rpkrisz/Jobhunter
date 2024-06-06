import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/authentication",
    }),
    endpoints: (build) => ({
        login: build.mutation({
            query: ({body}) => ({
                method: "POST",
                body: {
                    ...body,
                    strategy: "local",
                },
            })
        })
    })
})

export const { useLoginMutation } = authApiSlice
