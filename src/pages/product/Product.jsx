import React, { useState } from 'react'
import "./Product.css"
import { TiHomeOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import Gride from '../../components/gride/Gride';








const Product = () => {
  const [isGrid, setIsGrid] = useState("grid")
  console.log(isGrid)
  return (
    <>

    <div className="main_div  w-full h-screen ">
      <div className="container">
        <div className="main_row ">


          <div>
            <h3 className='font-poppin font-bold  text-[28px] leading-9'>All product</h3>
       <div>
          
       </div>
          </div>
     <div className='flex justify-between'>
      <div className=''> <div className='flex gap-1 items-center'>
             <div className='flex items-center gap-2'>
            <span className='w-3 h-3 text-[#7E7E8F]'><TiHomeOutline /></span>
            <p className='text-[#000000] font-poppin font-normal text-[12px] leading-4'>Home</p>
          </div>

        <div className='flex gap-1'>
          <span className='text-[#7364DB]'><IoIosArrowForward /></span>
          <p className='font-poppin font-normal text-[#7364DB]'>All Products</p>
        </div>
      </div></div>
      <div className='w-[154px] h-[46px] rounded-tl-2xl flex justify-between  items-center     rounded-bl-2xl bg-[#E8EDF2]'>
        <div className='p-2 w-1/2'>
       <button onClick={()=> setIsGrid("list")}><span><CiGrid2H /></span><p className='font-poppin font-normal text-[12px] leading-4 '>List</p></button>
        
        </div>
        <button onClick={()=> setIsGrid("grid")} className='w-1/2'>
        <span><CiGrid41 />
        </span>
        <p className='font-poppin font-normal text-[12px] leading-4 '>Grid</p>
        </button>
      </div>
     </div>
        </div>
{
  isGrid ? <Gride/> : <list />
}
          <div className="main_part_start w-[1136px]  p-6 bg-[#ffffff]  rounded-2xl">
              <div>
                <div className="header_row flex w-full justify-between">
               <div className='flex gap-[243px] '>
                <div className='flex gap-13'>
                   <div className='flex gap-2'>
                    <p className='font-poppin font-semibold text-[#8B8B93] text-[12px]'>Image</p>
                    <div className='flex gap-0 items-center  flex-col'>
                      <span className='text-[#8083A3]'><IoIosArrowUp /></span>
                      <span className='text-[#8083A3] '><IoIosArrowDown /></span>
                    </div>
               </div>
                   
                    <div className='flex gap-2'>
                        <p className='font-poppin font-semibold text-[#8B8B93] text-[12px]'>Name</p>
                      <div className='flex gap-3'>
                           <div className='flex gap-0 items-center   flex-col'>
                      <span className='text-[#8083A3]'><IoIosArrowUp /></span>
                      <span className='text-[#8083A3] '><IoIosArrowDown /></span>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>

                  {/* bottom */}

                     <div className='flex  gap-[86px] '>
                    <div  className='flex gap-2'>
                      <p>SKU</p>
                      <div className='flex gap-0 items-center  flex-col'>
                      <span className='text-[#8083A3]'><IoIosArrowUp /></span>
                      <span className='text-[#8083A3] '><IoIosArrowDown /></span>
                    </div>
                    </div>
                    <div  className='flex gap-2'>
                      <p>SKU</p>
                      <div className='flex gap-0 items-center  flex-col'>
                      <span className='text-[#8083A3]'><IoIosArrowUp /></span>
                      <span className='text-[#8083A3] '><IoIosArrowDown /></span>
                    </div>
                    </div>
                    <div  className='flex gap-2'>
                      <p>SKU</p>
                      <div className='flex gap-0 items-center  flex-col'>
                      <span className='text-[#8083A3]'><IoIosArrowUp /></span>
                      <span className='text-[#8083A3] '><IoIosArrowDown /></span>
                    </div>
                    </div>
                    <div  className='flex gap-2'>
                      <p>SKU</p>
                      <div className='flex gap-0 items-center  flex-col'>
                      <span className='text-[#8083A3]'><IoIosArrowUp /></span>
                      <span className='text-[#8083A3] '><IoIosArrowDown /></span>
                    </div>
                    </div>
                    <div  className='flex gap-2'>
                      <p>SKU</p>
                      <div className='flex gap-0 items-center  flex-col'>
                      <span className='text-[#8083A3]'><IoIosArrowUp /></span>
                      <span className='text-[#8083A3] '><IoIosArrowDown /></span>
                    </div>
                    </div>
                    <div  className='flex gap-2'>
                      <p>SKU</p>
                      <div className='flex gap-0 items-center  flex-col'>
                      <span className='text-[#8083A3]'><IoIosArrowUp /></span>
                      <span className='text-[#8083A3] '><IoIosArrowDown /></span>
                    </div>
                    </div>
                   <div>

                   </div>
               


                 

               </div>


               
                </div>
                <div className='w-full bg-[#E8EDF2] h-0.5 mt-4'></div>
                {/* ------ another_part */}
                <div className='flex flex-col gap-4'>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center pt-4 pb-[30px]'>
                    <div className="img">
                      <img src="productimg.png" alt="productimage" />
                    </div>
                    <div className="text_rwo">
                      <h6 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h6>
                      <p className='font-poppin w-[330px] font-normal text-[12px ]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      
                    </div>
                    <div className="end_text">
                      <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>FROX-13563</p>
                    </div>
                    <div>
                      <p className='font-poppin font-semibold text-[14px] text-[#07070C]'>$576.28</p>
                    </div>

                    <div className='flex gap-2 items-center' >
                      <span className='text-green-500'><GoDotFill /></span>
                      <p className='font-poppin font-normal text-[#07070C] text-[14px]'>Active</p>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#7E7E8F]'>556</p>
                    </div>
                    <div className='flex justify-between text-[#FEA73E]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </div>
                    <div>
                      <p className='font-poppin font-normal text-[14px] text-[#07070C]'>186 / 2058</p>
                    </div>
                    <div>
                      <span className='text-[#7E7E8F]'><BsThreeDots /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom_row w-1/2 mt-[52px] pb-12">
              <div className='flex  gap-[111px] items-center'>
                <div className='flex gap-5 '>
                  <h2 className='w-10 h-10 bg-[#7364DB] flex justify-center items-center rounded-lg'>1</h2>
                 <div className='flex gap-9 items-center font-poppin font-semibold text-[#07070C] text-[12px]'>
                   <h2>2</h2>
                  <h2>3</h2>
                  <h2>4</h2>
                  <h2>5</h2>
                 </div>
                </div>
                <div className=' gap-5 w-[82px] h-10 bg-[#E8EDF2] border-2 border-solid border-[#E8EDF2] rounded-md flex justify-center items-center'>
                  <p className='font-poppin font-semibold text-[12px] text-[#9A9AAF]'>Next</p>
                  <span><IoIosArrowRoundForward /></span>
                </div>
              </div>
            </div>
      </div>
    </div>
      
    </>
  )
}

export default Product
