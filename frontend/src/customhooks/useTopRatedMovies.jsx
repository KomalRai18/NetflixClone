import axios from "axios";
import { getTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { Top_Rated_Movies, options } from "../../../backend/utils/constant";

const useTopRatedMovies = async()=>{
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movies,options);
        console.log(res.data.results)
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
    
}
export default useTopRatedMovies