import React from 'react'
import { TiHomeOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LiaFilterSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa";



const Tranjextion = () => {
  return (
    <>
    
        <div className="main_div">
          <div className="container">
            <h1 className='font-poppin font-bold text-[28px] text-[#07070C]'>Transations List</h1>


            <div>
               
             <div className='flex gap-1 items-center'>
                         <div className='flex items-center gap-2'>
                        <span className='w-3 h-3 text-[#7E7E8F]'><TiHomeOutline /></span>
                        <p className='text-[#000000] font-poppin font-normal text-[12px] leading-4'>Home</p>
                      </div>
            
                    <div className='flex gap-1'>
                      <span className='text-[#7364DB]'><IoIosArrowForward /></span>
                      <p className='font-poppin font-normal text-[#7364DB]'>Order List</p>
                    </div>
                  </div>
                  <div className="category_part_start flex justify-between">
                    <div className='w-[225px] h-12 rounded-lg flex items-center justify-center bg-[#ffffff]'>
                      <div className='flex gap-2 '>
                        <p>All Category</p>
                        <span><MdKeyboardArrowDown /></span>
                      </div>
                    </div>
                    <div className='flex justify-between '>
                      <div className='w-[173px] h-12 bg-[#ffffff] flex justify-center items-center  rounded-lg'>
                        <p>10-02-2021</p>
                        <span><SlCalender /></span>
                      </div>
                      <div className='w-[173px] h-12 bg-[#ffffff] flex justify-center items-center  rounded-lg'>
                        <p>Status</p>
                        <span><MdKeyboardArrowDown /></span>
                      </div>
                      <div className='w-[173px] h-12 bg-[#ffffff] flex justify-center items-center  rounded-lg'>
                        <p>Filters</p>
                        <span><LiaFilterSolid /></span>
                      </div>
                    </div>
                  </div>
                 
                 </div>

                 <section className='middle_part_starts w-[1135px] mt-[27px] mb-[19px] rounded-2xl h-[514px] bg-[#ffffff] py-[25px] pl-[25px] pr-[9px]'>
                  <div className='flex justify-between'>
                    <h4 className='font-poppin font-semibold text-[16px] text-[#07070C]'>Pending transactions</h4>
                    <span className='text-[#9A9AAF]'><BsThreeDotsVertical />
</span>
                  </div>
                  {/* line_part_start */}
                  <div className='flex justify-between'>
                    <div className='flex gap-[76px]'>
                     <div className='flex gap-[26px] '>
                       <span><FaRegSquare /></span>
                      <p>Order ID</p>

                     </div>
                     <div>
                      <p>Paid</p>
                     </div>

                    </div>
                    <div className='flex  justify-between'>
                      <p>Payment Method</p>
                      <p>Date</p>
                      <p>Status</p>
                      <p>Actions</p>
                    </div>
                  </div>

                 </section>
                
            </div>
          </div>
  
      
    </>
  )
}

export default Tranjextion
