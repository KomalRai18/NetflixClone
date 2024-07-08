import { useDispatch } from "react-redux"
import { getNowPlayingMovies } from "../redux/movieSlice"
import axios from "axios"
import { Now_Playing_Movie, options } from "../../../backend/utils/constant"

const useNowPlayingMovie = async()=>{
    const dispatch = useDispatch()
    try {
      const res = await axios.get(Now_Playing_Movie, options)
      console.log(res.data.results)
      dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error)
    }
  }
export default useNowPlayingMovie