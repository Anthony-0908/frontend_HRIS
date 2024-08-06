import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import AdminLayout from '../Layouts/AdminLayout'
import UserLayout from '../Layouts/UserLayout'

const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Outlet/>,
        children:[
            {
                path:'Admin',
                element:<AdminLayout/>,
                children:[

                ],
            },

            {
                path:'/User',
                element:<UserLayout/>,
                children:[

                ]
            }
        ]
        
    }
])

export default Routes