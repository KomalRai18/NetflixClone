import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null,
    popularMovies : null,
    topRatedMoives: null,
    upcomingMovies: null,
    toggle: false,
    trailer: null,
    open: false,
    id: null,
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
       getNowPlayingMovies: (state, action)=>{
        state.nowPlayingMovies = action.payload
       },
       getPopularMovies: (state, action)=>{
        state.popularMovies = action.payload
       },
       getTopRatedMovies: (state, action)=>{
        state.topRatedMoives = action.payload
       },
       getUpcomingMovies: (state, action)=>{
        state.upcomingMovies= action.payload
       },
       setToggle: (state)=>{
        state.toggle = !state.toggle
       },
       getTrailer : (state, action)=>{
        state.trailer = action.payload
       },
       setOpen: (state, action)=>{
        state.open = action.payload
       },
       getId: (state, action)=>{
        state.id = action.payload
       }
    }
})
export const {getId, setOpen, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, setToggle, getTrailer} = movieSlice.actions
export default movieSlice.reducer