import { useAppSelector } from "../hooks/redux"

export const FavouritesPage = () => {
    const { favourites } = useAppSelector(s => s.github)

    if (favourites.length === 0) return <p>No items...</p>

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            <ul>
                {favourites.map(fav => (
                    <li key={fav}>
                        <a href={fav} target="_blanck">{fav}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}