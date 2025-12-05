import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";
import { FaMicrophone } from "react-icons/fa6";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { TbMessageDots } from "react-icons/tb";
import { IoNotificationsOff } from "react-icons/io5";






const Navbars = () => {
  return (
    <>
    <div className="main_div">
       <div className='bg-[#ffffff]'>
         <div className="container">
            <div className="main_row justify-between flex py-6   px-[17px]">
              <div className='flex gap-[120px]'>
                  <div className="logo_col">
                    <img src="logo.png" alt="main_logo" />
                </div>
                <div className='w-[33px] h-[33px] flex justify-center items-center bg-[#E8EDF2] rounded-full'>
                    <span className='text-[#9A9AAF]'><IoIosArrowBack />
</span>
                </div>
              </div>
<div className='flex'>
    
              <div className="search">
                <div className='w-[360px] h-12 bg-[#C6CBD9] ml-8 rounded-xl flex justify-between'>
                <div className='flex pl-2'>
                        <span className=' flex items-center mr-2 '><VscSearch /> </span>
                    <input type="text"  placeholder='Search ' className='outline-none w-full h-full'  />
                </div>
                    <span className='flex text-[#7b808f] items-center mr-2 '><FaMicrophone /></span>
                </div>
              </div>
              <div className="browser ml-[47px] flex items-center justify-center">
                   <span> <BsBoxArrowInDownLeft /></span>

                <p className='pl-3 font-poppin font-semibold text-[16px] text-[#7E7E8F]'>Browse</p>
                <span className='pl-[51px]'><RiArrowDownSLine /></span>
              </div>
</div>

            
                 <div className="brn_part  flex items-center justify-center gap-12 ">
                <Link to={"#"}> <span><TbMessageDots /></span> </Link>
                <Link to={"#"}> <IoNotificationsOff /> </Link>
                <Link to={"#"}> <img src="profile.png" alt="profile_images" /> </Link>
                
            
             </div>
            
            </div>
        </div>

       </div>
    </div>
      
    </>
  )
}

export default Navbars
