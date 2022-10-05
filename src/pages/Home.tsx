import { useEffect, useState } from "react"
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/github/github.api"

export const Home = () => {
    const [search, setSearch] = useState("");
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3
    })


    useEffect(() => {
        setDropdown(debounced.length>3 && data?.length! > 0)
    }, [debounced])
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <p className="text-center text-red-600">Something went wrong...</p>}
            <div className="relative w-[560px]">
                <input
                    type="text"
                    className="border py-2 px-4 w-full h-[42px] mb-2"
                    placeholder="Search for Github username..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                {dropdown && <ul className="overflow-hidden list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
                    {isLoading && <p className="text-center">Loading...</p>}
                    {data?.map(user => (
                        <li
                            key={user.id}
                            className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                        >{user.login}</li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}