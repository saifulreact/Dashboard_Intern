import React from 'react'
import Header from '../../components/header/Header'
import SecondHeader from '../../components/header/SecondHeader'
import { GoHomeFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { LuPrinter } from "react-icons/lu";
import { MdPerson } from "react-icons/md";
import { Link } from 'react-router-dom';



const OrderDetails = () => {
  return (
    <>
    <div className="main_div">
        <div className="container">
            <div className="main_row mt-[42px]">
               <div className="order_head_part_start">
                <h1 className='font-poppin font-bold text-[28px] text-[#07070C]'>Order Details</h1>
                {/* middle */}
                <div className='flex items-center gap-1.5 mt-3 mb-7'>
                    <div className='flex items-center gap-2.5'>
                        <span className='text-[#7E7E8F]'><GoHomeFill /></span>
                        <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>Home</p>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <span className='text-[#9A9AAF]'><IoIosArrowForward /></span>
                        <p className='font-poppin font-normal text-[12px] text-[#7364DB]'>Dashboard</p>
                    </div>
                </div>
               </div>
               {/* main_part_start */}

               <section className='banner_part w-[1133px] h-[1143px] bg-[#ffffff] rounded-[10px] px-5 py-5'>

                    <h5 className='font-poppin font-medium text-6 text-[#282828]'>Orders ID: #68543</h5>
                    <div className='flex justify-between mb-0.5 mt-6'>
                       <div className='flex gap-1.5 items-center'>
                         <span><SlCalender /></span>
                        <p className='font-poppin font-medium text-[18px] text-[#282D47]'>Mon, Jan 28, 2022, 8:40AM</p>
                       </div>
                       <div className='flex gap-3.5'>
                        <div className='w-[225px] h-12 bg-[#E8EDF2] rounded-sm flex justify-between px-3.5 items-center'> <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>Change Status</p>
                        <span className='text-[#7E7E8F]'><IoIosArrowDown /></span>
                        </div>
                        <div className='w-[72px] h-12 bg-[#E8EDF2] flex justify-center items-center rounded-sm '>
                            <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>Save</p>

                        </div>
                        <div className='w-12 h-12 bg-[#E8EDF2] rounded-sm flex justify-center items-center'>
                            <span className='text-[#7E7E8F]'><LuPrinter /></span>

                        </div>
                       </div>

                    </div>
                    <p className='font-poppin font-normal text-[14px] text-[#50D1B2]'>Pending</p>
                    <div className='w-[1085px] h-0.5 bg-[#E8EDF2] my-2.5'>
                        {/* after line part start here man  */}
                       <div className='flex justify-between'>
                         <div className='mt-5 px-5 flex gap-2.5'>
                            <div className='pt-5'>
                                <div className='w-12 flex justify-center items-center h-12 rounded-full bg-[#E8EDF2]'> <span className='w-6 h-6'><MdPerson /></span></div>
                            </div>
                            <div className='flex justify-between pt-4'>
                                <div>
                                <h5 className='font-poppin font-medium text-[14px] text-[#282828]'>Customer</h5>
                               <div className='font-poppin font-normal text-[14px] text-[#949CA9]'>
                                 <p>Full name: Jane Cooper   </p>
                                <p>E-mail: tim.jennings@example.com</p>
                                <p>Phone: +099 856 245</p>
                               </div>
                                <div className='w-[95px] h-8 bg-[#E8EDF2] rounded-lg items-center justify-center flex font-poppin font-medium text-[13px] text-[#7364DB]'>
                                    <Link to={"#"}>View Profile</Link>
                                </div>
                             </div>

                            </div>

                        </div>
                         <div className='mt-5 px-5 flex gap-2.5'>
                            <div className='pt-5'>
                                <div className='w-12 flex justify-center items-center h-12 rounded-full bg-[#E8EDF2]'> <span className='w-6 h-6'><MdPerson /></span></div>
                            </div>
                            <div className='flex justify-between pt-4'>
                                <div>
                                <h5 className='font-poppin font-medium text-[14px] text-[#282828]'>Customer</h5>
                               <div className='font-poppin font-normal text-[14px] text-[#949CA9]'>
                                 <p>Full name: Jane Cooper   </p>
                                <p>E-mail: tim.jennings@example.com</p>
                                <p>Phone: +099 856 245</p>
                               </div>
                                <div className='w-[95px] h-8 bg-[#E8EDF2] rounded-lg items-center justify-center flex font-poppin font-medium text-[13px] text-[#7364DB]'>
                                    <Link to={"#"}>View Profile</Link>
                                </div>
                             </div>

                            </div>

                        </div>
                         <div className='mt-5 px-5 flex gap-2.5'>
                            <div className='pt-5'>
                                <div className='w-12 flex justify-center items-center h-12 rounded-full bg-[#E8EDF2]'> <span className='w-6 h-6'><MdPerson /></span></div>
                            </div>
                            <div className='flex justify-between pt-4'>
                                <div>
                                <h5 className='font-poppin font-medium text-[14px] text-[#282828]'>Customer</h5>
                               <div className='font-poppin font-normal text-[14px] text-[#949CA9]'>
                                 <p>Full name: Jane Cooper   </p>
                                <p>E-mail: tim.jennings@example.com</p>
                                <p>Phone: +099 856 245</p>
                               </div>
                                <div className='w-[95px] h-8 bg-[#E8EDF2] rounded-lg items-center justify-center flex font-poppin font-medium text-[13px] text-[#7364DB]'>
                                    <Link to={"#"}>View Profile</Link>
                                </div>
                             </div>

                            </div>

                        </div>

                       </div>

                    </div>

               </section>
               
            </div>
        </div>
    </div>
      
    </>
  )
}

export default OrderDetails
