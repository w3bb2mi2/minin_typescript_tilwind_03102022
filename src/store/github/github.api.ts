import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IUser, ServerResponse } from "../../models/models"

export const githubApi = createApi({
    reducerPath: "github/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com/"
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (res: ServerResponse<IUser>)=>{return res.items}
        })
    })
})

export const { useSearchUsersQuery } = githubApi