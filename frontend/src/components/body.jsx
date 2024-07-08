import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Browser from './browser'
import Login from './login'
import Header from './header'
import Signup from './signup'
import React from 'react'


function Body (){
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browser/>
        },
        {
            path:'/header',
            element:<Header/>
        },
        {
            path:'/',
            element:<Signup/>
        },

    ])
    return(
        <>
            <RouterProvider router= {appRouter}/>
        </>
    )

}
export default Body