import React from 'react'
import { LuDot } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="main_div">
            <div className="container">
                <div className="main_row flex justify-between py-[25px]">
                  <div className="first flex items-center gap-4 ">
                      <div >
                        <p className='font-poppin font-normal text-[12px] text-[#9A9AAF]'>© 2022 - <span className='text-[#7364DB]'>Frox</span> Dashboard</p>
                    </div>
                    <div className='flex gap-2'>
                        <span className='text-[#9A9AAF]'><LuDot /></span>
                        <p className='font-poppin font-normal text-[12px] text-[#9A9AAF]'>Made by <span className='text-[#7364DB]'>AliThemes</span> </p>
                    </div>
                  </div>
                  <div className="second_one">
                    <ul className='flex gap-3 font-poppin font-normal text-[12px] text-[#9A9AAF]'>
                        <li><Link to={"#"}>About</Link></li>
                        <li><Link to={"#"}>Careers</Link></li>
                        <li><Link to={"#"}>Policy</Link></li>
                        <li><Link to={"#"}>Contact</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
