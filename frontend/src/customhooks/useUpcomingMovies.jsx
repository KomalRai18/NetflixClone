import axios from "axios";
import { getUpcomingMovies } from "../redux/movieSlice";
import { Upcoming_Movies, options } from "../../../backend/utils/constant";
import { useDispatch } from "react-redux";

const useUpcomingMovies = async()=>{
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Upcoming_Movies,options)
        console.log(res.data.results)
        dispatch(getUpcomingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
export default useUpcomingMovies