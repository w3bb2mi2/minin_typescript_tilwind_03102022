import React, { useState } from "react"
import { useAction } from "../hooks/actions"
import { useAppSelector } from "../hooks/redux"
import { IRepo } from "../models/models"

export const RepoCard = ({ repo }: { repo: IRepo }) => {

    const { addFavoutire, removeFavourites } = useAction()

    const { favourites } = useAppSelector(st => st.github)

    const [isFavourite, setIsFavourite] = useState(favourites.includes(repo.html_url))

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavoutire(repo.html_url)
        setIsFavourite(true)
    }
    const removeToFavourite = (event: React.MouseEvent) => {
        event.preventDefault();
        removeFavourites(repo.html_url)
        setIsFavourite(false)
    }

    return (
        <a href={repo.html_url} target={"_blank"}>
            <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Forks:<span className="font-bold">{repo.forks}</span>
                    Watchers:<span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">{repo?.description}</p>
                {
                    !isFavourite &&
                    <button
                        className="py-2 px-4 bg-green-400 rounded hover:shadow-md transition-all"
                        onClick={addToFavourite}
                    >Add</button>
                }
                {
                    isFavourite &&
                    <button
                        className="py-2 px-4 m-2 bg-orange-400 rounded hover:shadow-md transition-all"
                        onClick={removeToFavourite}
                    >Remove</button>
                }
            </div>

        </a>
    )
}