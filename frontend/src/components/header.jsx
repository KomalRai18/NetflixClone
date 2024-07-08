import axios from 'axios';
import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import {useSelector, useDispatch} from 'react-redux'
import { API_End_Point } from '../../../backend/utils/constant';
import toast from 'react-hot-toast';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { setToggle } from '../redux/movieSlice';

function Header() {
  const user = useSelector((store)=>store.app.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toggleSearch = useSelector((store)=>store.movie.toggle)
  const logoutHandler = async()=>{
    try {
      const res = await axios.get(`${API_End_Point}/logout`)
      if(res.data.success){
        toast.success(res.data.msg)
        }
        dispatch(setUser(null))
        navigate('/')
    } catch (error) {
        console.log("User falied to log out!",error)
        toast.error(error.response.data.err) 
    }
  }
  const toggleHandler = ()=>{
    dispatch(setToggle(toggleSearch))
  }
  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between bg-gradient-to-b from-black px-6'>
      <img src="\src\pictures\netflix-logo-removebg-preview.png" alt='netflix-logo'/>
      {
        user && (
          <div className='flex items-center'>
            <IoIosArrowDropdown size={24} color='white'/>
            <h1 className='text-lg font-medium text-white'>{user.fullname}</h1>
            <div className='ml-4'>    
            <button className='bg-red-800 text-white px-4 py-2' onClick={logoutHandler}>Logout</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2' onClick={toggleHandler}>{toggleSearch? "Home": "Search Movie"}</button>
            </div>
          </div>
          )
      }
    </div>
  )
}

export default Header
