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
import Card from '../../components/cards/Card';
import { FaRegSquare } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { RxBorderDotted } from "react-icons/rx";





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
    <div className="main_div w-full">
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
          <div className="card_part_start flex justify-between gap-6 mt-[38px] mb-9">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          {/* ----------------- card part end ----------------------- */}

          {/* ------------------  banner_part_start-------------------- */}
          <div className="main_baner_row flex gap-[18px] justify-between">
         <div className="col_chart">
             <div className="banner_row w-[752px] h-[502px]  pt-[25px] pb-[18px] px-6 rounded-2xl">
              <div className='flex justify-between'>
<div>
                                <h2 className='font-semibold text-[#07070C] text-[16px] font-poppin'>Sales Performance</h2>
</div>                       <div className='flex gap-[72px]'>
                         <p className='font-poppin font-normal text-[12px] text-[#9A9AAF]'>Today’s</p>
                       <div className='flex gap-[26px]'>
                         <p className='font-poppin font-normal text-[12px] text-[#7364DB]'>Monthly</p>
                        <span className='text-[#9A9AAF]'><BsThreeDotsVertical /></span>
                       </div>
                       </div>

              </div>

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
         {/* ================ best seller part start here man ============================= */}
          <div className="best_sellar_part_start w-[364px] rounded-2xl  px-6  h-[502px] pt-[15px] pb-[22px]">
        <div>
              <div className='flex justify-between'>
              <h2 className='font-poppin font-semibold text-[16px] text=[#070]'>Best Sellers</h2>
              <span><BsThreeDotsVertical /></span>
            </div>
            <div className="line w-[364px] h-0.5 bg-[#E8EDF2] mt-[21px] mb-4">

            </div>
        </div>

                <div >
                  
        <div className="person_details w-[311px] h-[51px] mb-[21px]">
          <div className='flex justify-between'>
       <div className='flex gap-3'>
            <div className="img_col ">
             <img className='w-10 h-10  ' src="Avatar.png" alt="person_image" />
           </div>
           <div className="text_one ">
            <p className='font-poppin font-normal text-[14px] text-[#07070C] mb-4'>Esther Howard</p>
            <p className='font-normal font-poppin text-[16px] text-[#9A9AAF]'>Louis Vuitton</p>
           </div>
       </div>
           <div className="last_two">
            <h4 className='font-poppin font-semibold text-[14px] text-[#07070C] mb-4'>$778.35</h4>
            <p className='font-poppin font-normal text-[14px] text-[#9A9AAF]'>1258 sales</p>
           </div>
          </div>

        </div>
        <div className="person_details w-[311px] h-[51px] mb-[21px]">
          <div className='flex justify-between'>
       <div className='flex gap-3'>
            <div className="img_col ">
             <img className='w-10 h-10  ' src="Avatar.png" alt="person_image" />
           </div>
           <div className="text_one ">
            <p className='font-poppin font-normal text-[14px] text-[#07070C] mb-4'>Esther Howard</p>
            <p className='font-normal font-poppin text-[16px] text-[#9A9AAF]'>Louis Vuitton</p>
           </div>
       </div>
           <div className="last_two">
            <h4 className='font-poppin font-semibold text-[14px] text-[#07070C] mb-4'>$778.35</h4>
            <p className='font-poppin font-normal text-[14px] text-[#9A9AAF]'>1258 sales</p>
           </div>
          </div>

        </div>
        <div className="person_details w-[311px] h-[51px] mb-[21px]">
          <div className='flex justify-between'>
       <div className='flex gap-3'>
            <div className="img_col ">
             <img className='w-10 h-10  ' src="Avatar.png" alt="person_image" />
           </div>
           <div className="text_one ">
            <p className='font-poppin font-normal text-[14px] text-[#07070C] mb-4'>Esther Howard</p>
            <p className='font-normal font-poppin text-[16px] text-[#9A9AAF]'>Louis Vuitton</p>
           </div>
       </div>
           <div className="last_two">
            <h4 className='font-poppin font-semibold text-[14px] text-[#07070C] mb-4'>$778.35</h4>
            <p className='font-poppin font-normal text-[14px] text-[#9A9AAF]'>1258 sales</p>
           </div>
          </div>

        </div>
        <div className="person_details w-[311px] h-[51px] mb-[21px]">
          <div className='flex justify-between'>
       <div className='flex gap-3'>
            <div className="img_col ">
             <img className='w-10 h-10  ' src="Avatar.png" alt="person_image" />
           </div>
           <div className="text_one ">
            <p className='font-poppin font-normal text-[14px] text-[#07070C] mb-4'>Esther Howard</p>
            <p className='font-normal font-poppin text-[16px] text-[#9A9AAF]'>Louis Vuitton</p>
           </div>
       </div>
           <div className="last_two">
            <h4 className='font-poppin font-semibold text-[14px] text-[#07070C] mb-4'>$778.35</h4>
            <p className='font-poppin font-normal text-[14px] text-[#9A9AAF]'>1258 sales</p>
           </div>
          </div>

        </div>
        <div className="person_details w-[311px] h-[51px] mb-[21px]">
          <div className='flex justify-between'>
       <div className='flex gap-3'>
            <div className="img_col ">
             <img className='w-10 h-10  ' src="Avatar.png" alt="person_image" />
           </div>
           <div className="text_one ">
            <p className='font-poppin font-normal text-[14px] text-[#07070C] mb-4'>Esther Howard</p>
            <p className='font-normal font-poppin text-[16px] text-[#9A9AAF]'>Louis Vuitton</p>
           </div>
       </div>
           <div className="last_two">
            <h4 className='font-poppin font-semibold text-[14px] text-[#07070C] mb-4'>$778.35</h4>
            <p className='font-poppin font-normal text-[14px] text-[#9A9AAF]'>1258 sales</p>
           </div>
          </div>

        </div>
        <div className="person_details w-[311px] h-[51px] mb-[21px]">
          <div className='flex justify-between'>
       <div className='flex gap-3'>
            <div className="img_col ">
             <img className='w-10 h-10  ' src="Avatar.png" alt="person_image" />
           </div>
           <div className="text_one ">
            <p className='font-poppin font-normal text-[14px] text-[#07070C] mb-4'>Esther Howard</p>
            <p className='font-normal font-poppin text-[16px] text-[#9A9AAF]'>Louis Vuitton</p>
           </div>
       </div>
           <div className="last_two">
            <h4 className='font-poppin font-semibold text-[14px] text-[#07070C] mb-4'>$778.35</h4>
            <p className='font-poppin font-normal text-[14px] text-[#9A9AAF]'>1258 sales</p>
           </div>
          </div>

        </div>

                </div>

         </div>
         {/* ================ best seller part end here man ============================= */}
        
          </div>




          {/* ------------------  banner_part_end-------------------- */}

          {/* ---------------------- Recent Purchases start ----------------------- */}

          <section className='w-[1135px] mb-[33px ] py-[25px] px-[27px] rounded-2xl h-[526px]'>
            <div className='flex justify-between'>
              <h3 className='font-poppin font-semibold text-[16px] text-[#07070C]'>Recent Purchases</h3>
              <span className='text-red-600'><BsThreeDotsVertical /></span>
            </div>
            <div className='w-[1001px] h-0.5 bg-[#E8EDF2] my-4'>

            </div>
            <div className="rechant_purchase_part_start">
              <div>
                <div className="row_one flex justify-between">
               <div className='flex gap-[26px] '>
                   <span className='w-[18px] h-[18px]  text-[#B0BAC9]'><FaRegSquare /></span>
                  <p  className='font-poppin font-normal text-[#9A9AAF] text-[14px]'>Products</p>
               </div>
                 <div className='flex gap-[76px] '>
                   <p  className='font-poppin font-normal text-[#9A9AAF] text-[14px]'>Order ID</p>
                  <p  className='font-poppin font-normal text-[#9A9AAF] text-[14px]'>Date</p>
                 </div>
                <div className='flex gap-[35px] '>
                    <p  className='font-poppin font-normal text-[#9A9AAF] text-[14px]'>Customer name</p>
                  <p  className='font-poppin font-normal text-[#9A9AAF] text-[14px]'>Status</p>
                </div>
              <div className='flex gap-[91px]'>
                    <p  className='font-poppin font-normal text-[#9A9AAF] text-[14px]'>Amount</p>
                  <p  className='font-poppin font-normal text-[#9A9AAF] text-[14px]'>Actions</p>
              </div>
                </div>
                <div className='w-[1082px] h-0.5 bg-[#E8EDF2] my-[17px]'>

                </div>
              </div>

              {/* ------------ row one details here start----------- */}
            <div>
                <div className='flex justify-between'>
              <div className='flex items-center gap-[26px]'>
                  <span className='text-[#B0BAC9] w-[18px] h-[18px ]'><FaRegSquare /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>MacBook Pro</p>
              </div>
              <div className='flex items-center gap-[82px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>#25413</p>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Aug 5th, 2021</p>
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <img src="little.png" alt="person_image" />
                  <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Bessie Cooper</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='text-[#50D1B2]'><GoDotFill /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Delivered</p>
              </div>
              <div className='flex items-center gap-[105px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>$400.00</p>
                <span className='text-[#7E7E8F]'><RxBorderDotted /></span>
              </div>
              </div>
                    <div className='w-[1082px] h-0.5 bg-[#E8EDF2] my-[17px]'>

                </div>
            </div>
            <div>
                <div className='flex justify-between'>
              <div className='flex items-center gap-[26px]'>
                  <span className='text-[#B0BAC9] w-[18px] h-[18px ]'><FaRegSquare /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>MacBook Pro</p>
              </div>
              <div className='flex items-center gap-[82px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>#25413</p>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Aug 5th, 2021</p>
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <img src="little.png" alt="person_image" />
                  <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Bessie Cooper</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='text-[#50D1B2]'><GoDotFill /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Delivered</p>
              </div>
              <div className='flex items-center gap-[105px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>$400.00</p>
                <span className='text-[#7E7E8F]'><RxBorderDotted /></span>
              </div>
              </div>
                    <div className='w-[1082px] h-0.5 bg-[#E8EDF2] my-[17px]'>

                </div>
            </div>
            <div>
                <div className='flex justify-between'>
              <div className='flex items-center gap-[26px]'>
                  <span className='text-[#B0BAC9] w-[18px] h-[18px ]'><FaRegSquare /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>MacBook Pro</p>
              </div>
              <div className='flex items-center gap-[82px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>#25413</p>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Aug 5th, 2021</p>
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <img src="little.png" alt="person_image" />
                  <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Bessie Cooper</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='text-[#50D1B2]'><GoDotFill /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Delivered</p>
              </div>
              <div className='flex items-center gap-[105px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>$400.00</p>
                <span className='text-[#7E7E8F]'><RxBorderDotted /></span>
              </div>
              </div>
                    <div className='w-[1082px] h-0.5 bg-[#E8EDF2] my-[17px]'>

                </div>
            </div>
            <div>
                <div className='flex justify-between'>
              <div className='flex items-center gap-[26px]'>
                  <span className='text-[#B0BAC9] w-[18px] h-[18px ]'><FaRegSquare /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>MacBook Pro</p>
              </div>
              <div className='flex items-center gap-[82px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>#25413</p>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Aug 5th, 2021</p>
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <img src="little.png" alt="person_image" />
                  <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Bessie Cooper</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='text-[#50D1B2]'><GoDotFill /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Delivered</p>
              </div>
              <div className='flex items-center gap-[105px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>$400.00</p>
                <span className='text-[#7E7E8F]'><RxBorderDotted /></span>
              </div>
              </div>
                    <div className='w-[1082px] h-0.5 bg-[#E8EDF2] my-[17px]'>

                </div>
            </div>
            <div>
                <div className='flex justify-between'>
              <div className='flex items-center gap-[26px]'>
                  <span className='text-[#B0BAC9] w-[18px] h-[18px ]'><FaRegSquare /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>MacBook Pro</p>
              </div>
              <div className='flex items-center gap-[82px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>#25413</p>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Aug 5th, 2021</p>
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <img src="little.png" alt="person_image" />
                  <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Bessie Cooper</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='text-[#50D1B2]'><GoDotFill /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Delivered</p>
              </div>
              <div className='flex items-center gap-[105px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>$400.00</p>
                <span className='text-[#7E7E8F]'><RxBorderDotted /></span>
              </div>
              </div>
                    <div className='w-[1082px] h-0.5 bg-[#E8EDF2] my-[17px]'>

                </div>
            </div>
            <div>
                <div className='flex justify-between'>
              <div className='flex items-center gap-[26px]'>
                  <span className='text-[#B0BAC9] w-[18px] h-[18px ]'><FaRegSquare /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>MacBook Pro</p>
              </div>
              <div className='flex items-center gap-[82px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>#25413</p>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Aug 5th, 2021</p>
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <img src="little.png" alt="person_image" />
                  <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Bessie Cooper</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='text-[#50D1B2]'><GoDotFill /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Delivered</p>
              </div>
              <div className='flex items-center gap-[105px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>$400.00</p>
                <span className='text-[#7E7E8F]'><RxBorderDotted /></span>
              </div>
              </div>
                    <div className='w-[1082px] h-0.5 bg-[#E8EDF2] my-[17px]'>

                </div>
            </div>
            <div>
                <div className='flex justify-between'>
              <div className='flex items-center gap-[26px]'>
                  <span className='text-[#B0BAC9] w-[18px] h-[18px ]'><FaRegSquare /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>MacBook Pro</p>
              </div>
              <div className='flex items-center gap-[82px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>#25413</p>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Aug 5th, 2021</p>
              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <img src="little.png" alt="person_image" />
                  <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Bessie Cooper</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='text-[#50D1B2]'><GoDotFill /></span>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>Delivered</p>
              </div>
              <div className='flex items-center gap-[105px]'>
                <p className='font-poppin font-normal text-[14px] text-[#07070C]'>$400.00</p>
                <span className='text-[#7E7E8F]'><RxBorderDotted /></span>
              </div>
              </div>
                    <div className='w-[1082px] h-0.5 bg-[#E8EDF2] my-[17px]'>

                </div>
            </div>
              {/* ------------ row one details here end----------- */}

            </div>
            <div>

            </div>
          </section>


          {/* ---------------------- Recent Purchases  end----------------------- */}

          {/* ------------------- overview part start --------------------- */}
          <div>
            <div className="main_row mt-[33px] flex justify-between">
              <div className="over_view_col_one w-[363px] h-[335px] p-[25px] rounded-2xl ">
                <div className='flex justify-between '>
                                  <h4 className='font-roboto font-bold text-[#000000] text-[28px] pb-[18px]'>Market Overview</h4>
                                  <span><BsThreeDotsVertical /></span>
                </div>
                <div className='flex justify-between'>
                   <div className="line w-[21px] h-[198px] relative bg-[#E8EDF2]  rounded-xl">
                  <div className='w-[21px] h-[51px] absolute top-[74%] rounded-4xl  bg-[#7364DB] '>
                    
                  </div>

                </div>
                   <div className="line w-[21px] h-[198px] relative bg-[#E8EDF2]  rounded-xl">
                  <div className='w-[21px] h-[77px] absolute top-[62%] rounded-4xl  bg-[#7364DB] '>

                  </div>

                </div>
                   <div className="line w-[21px] h-[198px] relative bg-[#E8EDF2]  rounded-xl">
                  <div className='w-[21px] h-[114px] absolute top-[44%] rounded-4xl  bg-[#7364DB] '>

                  </div>

                </div>
                   
                   <div className="line w-[21px] h-[198px] relative bg-[#E8EDF2]  rounded-xl">
                  <div className='w-[21px] h-[130px] absolute top-[34%] rounded-4xl  bg-[#7364DB] '>

                  </div>

                </div>
                   <div className="line w-[21px] h-[198px] relative bg-[#E8EDF2]  rounded-xl">
                  <div className='w-[21px] h-40 absolute top-[20%] rounded-4xl  bg-[#7364DB] '>

                  </div>

                </div>
                   <div className="line w-[21px] h-[198px] relative bg-[#E8EDF2]  rounded-xl">
                  <div className='w-[21px] h-[51px] absolute top-[74%] rounded-4xl  bg-[#7364DB] '>

                  </div>

                </div>
                   <div className="line w-[21px] h-[198px] relative bg-[#E8EDF2]  rounded-xl">
                  <div className='w-[21px] h-[51px] absolute top-[74%] rounded-4xl  bg-[#7364DB] '>

                  </div>

                </div>
                </div>
             
                  <div className='flex justify-between'>
                    <p className='font-poppin font-normal text-[12px] text-[#9A9AAF]'>Mon</p>
                    <p className='font-poppin font-normal text-[12px] text-[#9A9AAF]'>Tue</p>
                    <p className='font-poppin font-normal text-[12px] text-[#9A9AAF]'>Wed</p>
                    <p className='font-poppin font-normal text-[12px] text-[#9A9AAF]'>Thu</p>
                    <p className='font-poppin font-normal text-[12px] text-[#9A9AAF]'>Fri</p>
                    <p className='font-poppin font-normal text-[12px] text-[#E23738]'>Sat</p>
                    <p className='font-poppin font-normal text-[12px] text-[#E23738]'>Sun</p>
                  </div>

               
              </div>
              <div className="over_view_col_one w-[363px] h-[335px] p-[25px] rounded-2xl ">
                <div className='flex justify-between '>
                                  <h4 className='font-roboto font-bold text-[#000000] text-[28px] pb-[18px]'>Visits by Source</h4>
                                  <span><BsThreeDotsVertical /></span>
                </div>
                <div>
                  <div className="main_row_circle flex justify-between">
                    <div className="circle_cl">
                      <div className='w-[163px] rounded-full h-[163px] bg-[#E8EDF2] flex items-center justify-center'>
                        <h1 className='font-poppin font-semibold text-2xl text-[#7E7E8F]'>52% </h1>

                      </div>
                    </div>
                  <div className='flex flex-col'>
                      <div className="social_col ">
                      <div className='flex gap-3 items-center'>
                        <div className='w-3 h-3 rounded-xs bg-[#5415F1]'></div>
                        <div>
                          <p className='font-roboto font-normal text-[12px] text-[#07070C] '>Direct</p>
                        </div>
                      </div>
                    </div>
                      <div className="social_col ">
                      <div className='flex gap-3 items-center'>
                        <div className='w-3 h-3 rounded-xs bg-[#DD50D6]'></div>
                        <div>
                          <p className='font-roboto font-normal text-[12px] text-[#07070C] '>Social</p>
                        </div>
                      </div>
                    </div>
                      <div className="social_col ">
                      <div className='flex gap-3 items-center'>
                        <div className='w-3 h-3 rounded-xs bg-[#ECE663]'></div>
                        <div>
                          <p className='font-roboto font-normal text-[12px] text-[#07070C] '>Email</p>
                        </div>
                      </div>
                    </div>
                      <div className="social_col ">
                      <div className='flex gap-3 items-center'>
                        <div className='w-3 h-3 bg-[#E23738] rounded-xs'></div>
                        <div>
                          <p className='font-roboto font-normal text-[12px] text-[#07070C] '>Other</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="botm_text">
                    <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>

              </div>
              <div className="over_view_col_one w-[363px] h-[335px] p-[25px] rounded-2xl ">
                <div className='flex justify-between '>
                                  <h4 className='font-roboto font-bold text-[#000000] text-[28px] pb-[18px]'>Total Revenue</h4>
                                  <span><BsThreeDotsVertical /></span>
                </div>
                <div>
                  <div className="middle_part_start_here">
                    <h1>hello</h1>
                  </div>
                  <div className='flex gap-3'>
                    <div className="social_col ">
                      <div className='flex gap-3 items-center'>
                        <div className='w-3 h-3 bg-[#5415F1]'></div>
                        <div>
                          <p className='font-roboto font-normal text-[12px] text-[#07070C] '>Direct</p>
                        </div>
                      </div>
                    </div>
                    <div className="social_col ">
                      <div className='flex gap-3 items-center'>
                        <div className='w-3 h-3 bg-[#DD50D6]'></div>
                        <div>
                          <p className='font-roboto font-normal text-[12px] text-[#07070C] '>Social</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btom_part_start">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------- overview part end --------------------- */}

        </div>
      </div>
    </div>
      
    </>
  )
}

export default Dashboard
