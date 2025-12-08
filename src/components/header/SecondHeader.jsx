import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";


const SecondHeader = () => {
  return (
    <>
    <div className="main_div">
        <div className="container">
            <div className="main_row flex justify-between items-center w-full pt-3 pb-[28px ]">
             <div className='flex items-center'>
                   <div className='flex gap-1 items-center'>
                    <span><GoHomeFill /></span>
                    <p>Home</p>
                </div>
                <div className='flex items-center gap-3'>
                    <span><IoIosArrowForward /></span>
                    <p>Seller details</p>
                </div>
             </div>

                <div className='flex items-center gap-2'>
                    <span><SlCalender /></span>
                    <p>Feb 15, 2022 - Feb 21, 2022</p>
                </div>

            </div>
            
        </div>
    </div>
      
    </>
  )
}

export default SecondHeader
