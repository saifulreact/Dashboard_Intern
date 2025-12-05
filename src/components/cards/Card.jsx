import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const Card = () => {
  return (
    <>
    <div className='w-[265px] h-[158px] rounded-2xl bg-[#FFFFFF] pt-4 pb-3 pl-[18px] pr-[17px]' >
        <div className="top flex justify-between">
            <p>Total sells</p>
            <div >
                <span><BsThreeDotsVertical /></span>
            </div>
        </div>
        <div className="middle_part_start flex justify-between items-center mt-4 mb-2 ">
            <div className='flex gap-2'>
              <div className='w-8 h-8 bg-[#50D1B2] rounded-lg flex justify-center items-center'>
                  <span className='text-[#ffffff]'> <AiOutlineDelete />
</span>
              </div>
<h3 className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>$126.500</h3>
            </div>
            <div className='flex gap-2 text-[#50D1B2] font-poppin text-[16px]'>
                <div><span><FaArrowUpRightFromSquare /> </span> </div>
               <div>
                 <p>34.7%</p>
               </div>

            </div>
        </div>
        <div className="end_textf_part flex justify-end">
            <p className='font-poppin font-normal text-[#9A9AAF] text-[16px]' >Compared to Jan 2022</p>
        </div>


    </div>
      
    </>
  )
}

export default Card
