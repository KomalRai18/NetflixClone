import React, { useEffect } from 'react'
import useMovies from '../customhooks/useMovies'
import { useSelector } from 'react-redux'


const VideoBackground = ({movieId}) => {
  
  useMovies(movieId) 
   const trailer = useSelector(store=>store.movie.trailer)
    return (
        <div className='w-screen'>
          <iframe 
          className='w-screen aspect-video'
          src={`https://www.youtube.com/embed/${trailer.key}?si=WpOQ5EVANkU70N88&amp;controls=0&autoplay=1&mute=1`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
        </div>
      )
}

export default VideoBackground
