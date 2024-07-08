import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoading: false,
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser: (state, action)=>{
            state.user = action.payload
        },
        setLoading: (state, action)=>{
            state.isLoading = action.payload
        },
    },
})
export const {setUser, setLoading} = userSlice.actions
export default userSlice.reducer