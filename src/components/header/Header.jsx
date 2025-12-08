import React from 'react'
import SecondHeader from './SecondHeader'
import Sellerprofile from '../sellerprofile/Sellerprofile'

const Header = () => {
  return (
    <>
    <div className="main_div">
        <div className="container">
            <h1 className='head_row'>Seller Details</h1>
            < SecondHeader />
          <div>
              <Sellerprofile/>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default Header
