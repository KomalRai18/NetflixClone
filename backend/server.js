import express, { urlencoded, json } from 'express'
import cookieParser from 'cookie-parser'
import router from './routers/router.js'
import { config } from 'dotenv'
import cors from 'cors'
import {connectDB} from './connectDB.js'



config({
    path:'.env'
})

const app = express();
connectDB(process.env.DATABASE_URI)
.then(()=>console.log("Successfully connected to the database"))
.catch((err)=>console.log("Error in connecting to the database", err))


app.use(cookieParser())
app.use(urlencoded({extended:true}));
app.use(json());
const corsOptions = {
    origin: 'https://netflix-clone-sooty-pi.vercel.app',
    method: ["POST", "GET"],
    credentials: true,
}
app.use(cors(corsOptions))
app.get('/', (req,res)=>{
    res.send("Welcome to the server")
})
app.use('/user', router);
app.listen(process.env.PORT, ()=>{
    console.log(`Server is connected to the localhost at port ${process.env.PORT}`);
})
