import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Navbars from '../components/main_nav/Navbars'
import Footer from '../components/footer/Footer'

const LayoutOne = () => {
  return (
    <>
      <div className="">
        <Navbars/>

        {/* Main Layout */}
        <div className="flex">
          <Navbar/>
          <Outlet/>
        </div>

        {/* Footer should be here */}
        <Footer/>
      </div>
    </>
  )
}

export default LayoutOne
