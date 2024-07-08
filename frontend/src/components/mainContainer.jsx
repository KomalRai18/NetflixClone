import React from 'react'
import VideoTitle from './videoTitle'
import VideoBackground from './videoBackground'
import { useSelector } from 'react-redux'

const mainContainer = () => {
  const movie = useSelector((store)=>store.movie.nowPlayingMovies)

  console.log(movie)
  const {title, overview, id} = movie[0];
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default mainContainer
