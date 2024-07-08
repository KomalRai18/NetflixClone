import React from 'react'
import { Poster_Url } from '../../../backend/utils/constant'
import { setOpen } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'
import { getId } from '../redux/movieSlice'
import VideoBackground from './videoBackground'

const MovieCard = ({poster, movieId}) => {

  const dispatch = useDispatch()
  const handleOpen = ()=>{
    dispatch(setOpen(true))
    dispatch(getId(movieId))
  }
  if(poster===null) {
    return null
  }

  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
      <img src = {`${Poster_Url}/${poster}`}/>
    </div>
  )
}

export default MovieCard
