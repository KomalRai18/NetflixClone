import React from 'react'
import MovieCard from './movieCard'


const MoiveList = ({title, sMovies, searchingMovie=false}) => {
  console.log(sMovies)
  return (
    <div className='p-8'>
      <h1 className={`${searchingMovie ? "text-black" : "text-white"} text-3xl font-bold`}>{title}</h1>
        <div className='flex overflow-x-auto cursor-pointer no-scrollbar'>
            <div className='flex items-center mt-6'>
              {sMovies?.map((movie)=>{
                return (
                  <MovieCard poster={movie.poster_path} key={movie.id} movieId={movie.id}/>
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default MoiveList
