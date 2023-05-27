import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    //import.meta.env.VITE_BASE_URL returns "http//localhost:5317 even though defined as :1337 ??????????????????????"
    // baseQuery: fetchBaseQuery({ baseURL: import.meta.env.VITE_BASE_URL }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337"}),
    reducerPath: "main",
    tagTypes: [],
    endpoints: (build) => ({
        postAiText: build.mutation({
            query: (payload) => ({
                url: "openai/text",
                method: "POST",
                body: payload,
            })
        })
    })
})

export const {
    usePostAiTextMutation
} = api;