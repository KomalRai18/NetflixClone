import React, { useEffect } from 'react'
import Header from './header'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieContainer from './movieContainer'
import MainContainer from './mainContainer'
import useNowPlayingMovie from '../customhooks/useNowPlayingMovies'
import usePopularMovies from '../customhooks/usePopularMovies'
import useTopRatedMovies from '../customhooks/useTopRatedMovies'
import useUpcomingMovies from '../customhooks/useUpcomingMovies'
import SearchMovie from './SearchMovie'

function Browser() {
  const user = useSelector((store)=>store.app.user)
  const toggleSearch = useSelector((store)=>store.movie.toggle)
  const navigate = useNavigate()
  
  useNowPlayingMovie()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
  
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  }, [])
  return (
    <div>
        <Header/>
        {
          toggleSearch? (
            <SearchMovie/>
          ): (
            <div>
              <MainContainer/>
              <MovieContainer/>
            </div>
          )
        }
    </div>
)
}

export default Browser
