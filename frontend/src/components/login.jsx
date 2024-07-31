import React, { useState } from 'react'
import Header from './header'
import axios from 'axios'; 
import { API_End_Point } from '../../../backend/utils/constant.js';
import toast, {Toaster} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { setUser, setLoading } from '../redux/userSlice.jsx';

function Login() {

    const [isLogin, setIsLogin] = useState(false);
    const [fullname, setFullName] = useState("");
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isLoading = useSelector((store)=>store.app.isLoading)

    function loginHandler(){
      setIsLogin(!isLogin)
    }

    async function getInputData(e){
      e.preventDefault();
      dispatch(setLoading(true))
      if(isLogin){
        const user = {email, password};
        try {
          const res = await axios.post(`https://backend-two-sooty.vercel.app/login`, user, {
            headers:{
              "Content-Type":"application/json"
            },
            withCredentials: true,
          })
          console.log(res)
          if(res.data.success){
            toast.success(res.data.msg)
          }
          dispatch(setUser(res.data.user))
          navigate('/browse')
        } catch (error) {
          toast.error(error.response.data.err)
          console.log("User failed to Log in!", error)
        } finally{
          dispatch(setLoading(false))
        }
      } else{
        const user = {fullname, email, password}
        try {
          const res = await axios.post(`https://backend-two-sooty.vercel.app/signup`, user, {
            headers:{
              "Content-Type":"application/json",
            },
            withCredentials: true
          })
          console.log(res);
          if(res.data.succes){
            toast.success(res.data.msg)
          }
          dispatch(setUser(res.data.user))
          navigate('/browse')
        } catch (error) {
          toast.error(error.response.data.err)
          console.log("User failed to sign up", error)
        } finally{
          dispatch(setLoading(false))
        }
      }
      setEmail("");
      setFullName("");
      setPassword("");
    }

  return (
    <div className='w-full'>
      <Header/>
      <div className='absolute'>
      <img src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg" alt="netflix-background" />
      </div>
      <form action="" className='flex flex-col w-96 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-95 rounded-md'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin? "Login":"Signup"}</h1>
        <div className='flex flex-col'>{!isLogin && <input type="text" name='username' placeholder='Enter your name' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' value={fullname} onChange={(e)=>setFullName(e.target.value)}/>}          
            <input type="email" name='email' placeholder='Enter your Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name='password' placeholder='Enter Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className='mt-5 p-3 text-white bg-red-700 mb-5 rounded-sm' onClick={getInputData}>{isLoading ? "loading..." : (isLogin? "Login" : "Signup")}</button>
            <p className='text-white'>{isLogin ? "New to Netflix?":"Already have an Account?"}<span className='ml-2 text-blue-600 cursor-pointer' onClick={loginHandler}>{isLogin? "Signup" : "Login"}</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login
