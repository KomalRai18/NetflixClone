import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';
import movieSlice from './movieSlice';
import searchMovieSlice from './searchMovieSlice'

const store = configureStore({
    reducer:{
        app: userSlice,
        movie: movieSlice,
        search: searchMovieSlice,
    }
});
export default store