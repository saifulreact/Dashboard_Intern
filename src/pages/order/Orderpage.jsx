import React from 'react'
import { RiHome5Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

const Orderpage = () => {
  return (
    <>
      <div className="main_div">
        <div className="container">
          <div className="main_row">
            <h2>Orders List</h2>
          </div>
            <div className="another_part flex justify-between items-center">
                 <div className='pt-3 flex gap-2 pb-[19px]'>
                            <div className='flex gap-2'>
                              <span className='text-[#7E7E8F]'><RiHome5Fill /></span>
                            <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>Home</p>
                            </div>
                            <div className='flex gap-2'>
                              <span className='text-[#7E7E8F]'><IoIosArrowForward /></span>
                              <p className='font-poppin font-normal text-[12px] text-[#7364DB]'>Order List</p>
                            </div>
                          </div>
                          <div className='flex justify-between items-center gap-4'>
                            <span><SlCalender />
</span>
                            <p>Feb 15, 2022 - Feb 21, 2022</p>
                          </div>
            </div>
            <div className="middle_rwo flex justify-between bg-amber-300 ">
              <div className='flex gap-3  w-[225px] h-12 rounded-lg items-center justify-center bg-[#ffffff] '>
                <p>All Category</p>
                <span><IoIosArrowDown />
</span>
              </div>
              <div className='flex gap-3'>
                <div className='w-[173px] h-12 bg-[#ffffff] rounded-lg'>
                 <div className='flex gap-2'>
                   <p>10-02-2021</p>
                  <span><SlCalender />
</span>
                 </div>

                </div>
              </div>
              <div className='flex gap-3'>
                <div className='w-[173px] h-12 bg-[#ffffff] rounded-lg'>
                 <div className='flex gap-2'>
                   <p>Status</p>
                  <span><SlCalender />
</span>
                 </div>

                </div>
              </div>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-[173px] h-12 bg-[#ffffff] rounded-lg'>
                 <div className='flex gap-2'>
                   <p>Filters</p>
                  <span><SlCalender />
</span>
                 </div>

                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Orderpage
