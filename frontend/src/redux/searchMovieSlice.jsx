import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieName: null,
    searchedMovie : null,
};

const searchMovieSlice = createSlice({

    name:"SeachMovie",
    initialState,
    reducers:{
        setSearchedMovie: (state, action)=>{
            const {movies, searchMovie} = action.payload
            state.movieName = searchMovie
            state.searchedMovie = movies
        },  
    },
})
export const {setSearchedMovie} = searchMovieSlice.actions
export default searchMovieSlice.reducer