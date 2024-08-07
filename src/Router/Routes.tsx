import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import UserLayout from '../Layouts/UserLayout';
import Login from '../Pages/Admin/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          // {
          //   path: 'dashboard',
          //   element: <AdminDashboard />,
          // },
        ],
      },
      {
        path: 'user',
        element: <UserLayout />,
        children: [
          // User routes
        ],
      },
    ],
  },
]);


export default router