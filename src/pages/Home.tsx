import { useSearchUsersQuery } from "../store/github/github.api"

export const Home = () => {
    const {isLoading, isError, data } = useSearchUsersQuery("eduard")
    return (
        <div>Home</div>
    )
}