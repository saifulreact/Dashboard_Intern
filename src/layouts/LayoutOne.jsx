import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Navbars from '../components/main_nav/Navbars'

const LayoutOne = () => {
  return (
    <>
    
   <Navbars/>
   {/* <Navbar/> */}
    <Outlet/>
      
    </>
  )
}

export default LayoutOne
