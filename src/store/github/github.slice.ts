import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const LS_FAV_KEY = "rfk"

interface GithubState{
    favourites:string[]
}

const initialState: GithubState = {
    favourites: []
}

export const githubSlice = createSlice({
    name:"github",
    initialState,
    reducers:{
        addFavoutire(state, action: PayloadAction<string>){
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourites(state, action: PayloadAction<string>){
            state.favourites = state.favourites.filter(f=>f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})
export const githubAction = githubSlice.actions;
export const githubReducer = githubSlice.reducer;