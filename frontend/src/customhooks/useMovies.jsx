import React, { useEffect } from 'react';
import axios from 'axios';
import { options } from '../../../backend/utils/constant';
import { getTrailer } from '../redux/movieSlice'
import { useDispatch } from 'react-redux';

const useMovies = async(movieId) => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
        console.log(res.data.results)
        const trailer = res?.data?.results?.filter((item)=>{
            return item.type==="Teaser"
        })
        dispatch(getTrailer(trailer[0]))
        console.log(trailer)
    } catch (error) {
        console.log(error)
    }
}

export default useMovies
