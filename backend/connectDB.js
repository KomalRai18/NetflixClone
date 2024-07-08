import { connect } from 'mongoose'

export const connectDB = async(url)=>{
    return await connect(url)
}

