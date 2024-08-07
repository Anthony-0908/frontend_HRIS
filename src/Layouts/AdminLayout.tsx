import React from 'react'
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      
      <Outlet />  {/* This will render the nested routes like admin/login */}
      
      </div>
    
  )
}

export default AdminLayout