import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Navbars from '../components/main_nav/Navbars'

const LayoutOne = () => {
  return (
    <>
    
   <div className="">

      <Navbars/>
    
    
   <div className="flex">
    <Navbar/>
    <Outlet/>
   </div>


   </div>
      
    </>
  )
}

export default LayoutOne
