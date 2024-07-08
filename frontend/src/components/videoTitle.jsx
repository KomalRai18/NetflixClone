import React from 'react'
import { useSelector } from 'react-redux'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
    const user = useSelector((store)=>store.app.user)
    const trailer = useSelector((store)=>store.movie.trailer)
  return (
    <div className='absolute text-white pt-[20%] p-12 w-[vw] aspect-video'>
      {
        user && (
            <div>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='mt-4 w-1/3'>{overview.substring(100)}...</p>
                <div className='mt-8 flex'>
                    <button className='text-black px-6 rounded-md bg-white py-2 font-bold hover:bg-opacity-80 flex items-center'>
                    <CiPlay1 size={24}/>
                    <span className='ml-1'>Play</span>
                    </button>
                    <button className='text-black px-6 rounded-md bg-gray-500 bg-opacity-50 py-2 font-bold hover:bg-opacity-80 flex items-center mx-2'>
                    <CiCircleInfo size={24}/>
                    <span className='ml-1'>Watch now</span>
                    </button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default VideoTitle
