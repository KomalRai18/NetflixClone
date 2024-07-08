import axios from "axios";
import { Popular_Movies, options } from "../../../backend/utils/constant";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";

const usePopularMovies = async()=>{

    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_Movies, options);
        console.log(res.data.results)
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
export default usePopularMovies
