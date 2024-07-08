import React from 'react'
import MoiveList from './moiveList'
// import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getNowPlayingMovies, getTopRatedMovies, getPopularMovies, getUpcomingMovies } from '../redux/movieSlice'


const movieContainer = () => {
  const movies = useSelector((store)=>store.movie)
  console.log(movies)
  return (
    <div className='bg-black bg-opacity-90'>
      <div className='-mt-56 relative z-10'>
      <MoiveList title={"Poplular Movies"} sMovies={movies.popularMovies} />
      <MoiveList title={"Top-Rated Movies"} sMovies={movies.topRatedMoives} />
      <MoiveList title={"Now Playing Movies"} sMovies={movies.nowPlayingMovies} />
      <MoiveList title={"Upcoming Movies"} sMovies={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default movieContainer
