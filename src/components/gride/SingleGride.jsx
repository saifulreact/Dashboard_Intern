import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";



const SingleGride = () => {
    // const singleProduct=useState([
    //     product:image,
    //     name:"sdaflk",
    //     productdescription:"adfslkj",
    //     icon:"ljk",
    //     "ion"
    // ])
  return (
    <>
    <div className="container">
        <div className="single_row w-[345px] h-[304px] rounded-lg bg-[#E8EDF2]">
            <div>
                <div>
                  <div>
                      <div className="img_col">
                        <img src="./singleImages.png" alt="card_images" />
                    </div>
                    <div className='flex justify-between'>
                        <h4 className='font-poppin font-semibold text-[#262631] text-[14px]'>Cubitt Smart Watch</h4>
                        <span><BsThreeDots className='text-[#7E7E8F]' /></span>
                    </div>
                  </div>
                    <div className='text-[#FEA73E] font'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                    </div>
                    <div>
                        <p className='font-semibold font-poppin text-[14px] text-[#07070C]'>$576.28</p>
                        <p className='font-semibold font-poppin text-[#7E7E8F] text-[14px]'> FROX-13563</p>
                    </div>
                </div>
                <div>
                    <p className='font-poppin font-normal text-[10px] text-[#7E7E8F] mt-8 mb-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque ipsum, lacinia et tempor eget, hendrerit et orci. Phasellus at nisi non turpis accumsan feugiat vel non arcu. Aliquam ultrices lacus et leo ultrices facilisis. Aliquam ullamcorper lectus dui, ac posuere sapien iaculis ac. </p>
                </div>
                <div className='w-[300px] h-px'>
                    <span><GoDotFill className='text-[#50D1B2]' /></span>
                    <p className='font-normal text-[14px] text-[#07070C] '>Active</p>

                </div>
                <div>
                    <p className='font-poppin font-semibold text-[#07070C] text-[16px]'>186 / 2058</p>
                </div>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default SingleGride
