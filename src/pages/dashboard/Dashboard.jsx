import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';











const Dashboard = () => {

  const data = [
    { name: "Jan", uv: 400 },
    { name: "Feb", uv: 300 },
    { name: "Mar", uv: 200 },
    { name: "Apr", uv: 278 },
    { name: "May", uv: 189 },
  ];
  return (
    <>
    <div className="main_div">
      <div className="container">
        <div className="main_row">
          {/* ------------------- header part start --------------------------- */}
          <div className="head_pard">
            <h2 className='font-poppin text-[#07070C] font-bold text-[28px]' >Dashboard</h2>
       <div className='flex justify-between '>

             <div className='flex'>
            <div className='flex gap-1'>
                <span><MdHome /></span>
              <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>Home</p>
            </div>
             <span className='px-[7px]'> <IoIosArrowForward /></span>
              <p className='font-poppin font-normal text-[12px] text-[#7364DB]'>Dashboard</p>


            </div>
            <div className='flex gap-2'>
              <span className='text-[#7E7E8F] w-4 h-4'><FaCalendarAlt /></span>
              <p className='font-poppin font-normal text-[#7E7E8F] text-[12px]'>Feb 15, 2022 - Feb 21, 2022</p>
            </div>
       </div>
          </div>
          {/* ------------------ header part end --------------------------- */}
          {/* ----------------- card part start ----------------------- */}
          <div className="card_row flex justify-between">
            <div className="card_details bg-[#FFFFFF] w-[265px] h-[108px] rounded-[16px] border-2 ">

                <div className='flex justify-between'>
                  <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>Total sells</p>
                  <span className='text-[#9A9AAF]'><BsThreeDotsVertical /></span>
                  <div>
                  <div className='flex gap-2'>
                      <div className='w-8 h-8 bg-[#50D1B2]  justify-center items-center flex rounded-[8px]'>
                      <span className='text-white'><RiDeleteBin5Line /></span>
                    </div>
                    <div>
                      <h5 className='font-bold   font-poppin text-[#07070C] text-[12px]'>$126.500</h5>
                    </div>
                    
                  </div>
                   <div className='text-[#50D1B2]'>
                    <span className='w-3 h-3'><FaArrowUpRightFromSquare /></span>
                    <h5 className='font-poppin font-bold text-[16px]'>34.7%</h5> 
                   </div>
                  </div>
                </div>
               <div className='text-end flex'>
                 <p className='font-poppin font-normal text-[11px] text-[#9A9AAF] inline-block'>Compared to Jan 2022</p>
               </div>

            </div>
            <div className="card_details bg-[#FFFFFF] w-[265px] h-[108px] rounded-[16px]">

                <div className='flex justify-between'>
                  <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>Total sells</p>
                  <span className='text-[#9A9AAF]'><BsThreeDotsVertical /></span>
                  <div>
                  <div className='flex gap-2'>
                      <div className='w-8 h-8 bg-[#50D1B2]  justify-center items-center flex rounded-[8px]'>
                      <span className='text-white'><RiDeleteBin5Line /></span>
                    </div>
                    <div>
                      <h5 className='font-bold   font-poppin text-[#07070C] text-[12px]'>$126.500</h5>
                    </div>
                    
                  </div>
                   <div className='text-[#50D1B2]'>
                    <span className='w-3 h-3'><FaArrowUpRightFromSquare /></span>
                    <h5 className='font-poppin font-bold text-[16px]'>34.7%</h5> 
                   </div>
                  </div>
                </div>
               <div className='text-end flex'>
                 <p className='font-poppin font-normal text-[11px] text-[#9A9AAF] inline-block'>Compared to Jan 2022</p>
               </div>

            </div>
            <div className="card_details bg-[#FFFFFF] w-[265px] h-[108px] rounded-[16px]  ">

                <div className='flex justify-between'>
                  <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>Total sells</p>
                  <span className='text-[#9A9AAF]'><BsThreeDotsVertical /></span>
                  <div>
                  <div className='flex gap-2'>
                      <div className='w-8 h-8 bg-[#50D1B2]  justify-center items-center flex rounded-[8px]'>
                      <span className='text-white'><RiDeleteBin5Line /></span>
                    </div>
                    <div>
                      <h5 className='font-bold   font-poppin text-[#07070C] text-[12px]'>$126.500</h5>
                    </div>
                    
                  </div>
                   <div className='text-[#50D1B2]'>
                    <span className='w-3 h-3'><FaArrowUpRightFromSquare /></span>
                    <h5 className='font-poppin font-bold text-[16px]'>34.7%</h5> 
                   </div>
                  </div>
                </div>
               <div className='text-end flex'>
                 <p className='font-poppin font-normal text-[11px] text-[#9A9AAF] inline-block'>Compared to Jan 2022</p>
               </div>

            </div>
            <div className="card_details bg-[#FFFFFF] w-[265px] h-[108px] rounded-[16px] ">

                <div className='flex justify-between'>
                  <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>Total sells</p>
                  <span className='text-[#9A9AAF]'><BsThreeDotsVertical /></span>
                  <div>
                  <div className='flex gap-2'>
                      <div className='w-8 h-8 bg-[#50D1B2]  justify-center items-center flex rounded-[8px]'>
                      <span className='text-white'><RiDeleteBin5Line /></span>
                    </div>
                    <div>
                      <h5 className='font-bold   font-poppin text-[#07070C] text-[12px]'>$126.500</h5>
                    </div>
                    
                  </div>
                   <div className='text-[#50D1B2]'>
                    <span className='w-3 h-3'><FaArrowUpRightFromSquare /></span>
                    <h5 className='font-poppin font-bold text-[16px]'>34.7%</h5> 
                   </div>
                  </div>
                </div>
               <div className='text-end flex'>
                 <p className='font-poppin font-normal text-[11px] text-[#9A9AAF] inline-block'>Compared to Jan 2022</p>
               </div>

            </div>
          </div>
          {/* ----------------- card part end ----------------------- */}

          {/* ------------------  banner_part_start-------------------- */}
          <div className="main_baner_row">
            <div className="banner_row">
              <div className="banner_col_rechart_part">
                 <AreaChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

      <AreaChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>



              </div>
              <div className="box_col w-[364px] h-[502px] ">
                <div className="hd_row flex justify-between">
                  <h6>Best Sellers</h6>
                  <span><BsThreeDotsVertical /></span>
                </div>

              </div>
            </div>
          </div>


          {/* ------------------  banner_part_end-------------------- */}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Dashboard
