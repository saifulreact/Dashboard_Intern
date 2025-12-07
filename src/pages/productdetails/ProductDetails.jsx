import React from 'react'
import { RiHome5Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { BiBold } from "react-icons/bi";
import { BiItalic } from "react-icons/bi";
import { BiUnderline } from "react-icons/bi";
import { BiFontColor } from "react-icons/bi";
import { BiStrikethrough } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";
import { BiSmile } from "react-icons/bi";
import { BiParagraph } from "react-icons/bi";
import { BiAlignLeft } from "react-icons/bi";
import { BiAlignMiddle } from "react-icons/bi";
import { BiAlignRight } from "react-icons/bi";
import { BiAlignJustify } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { BiListOl } from "react-icons/bi";
import { BiImage } from "react-icons/bi";
import { BiLinkAlt } from "react-icons/bi";
import { BiFile } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";







const ProductDetails = () => {
  return (
    <>
    <div className="main_div">
        <div className="container">
          <div className=''>
              <h1 className='font-poppin font-bold text-[16px] text-[#07070C]'>Product Details</h1>

            <div className='pt-3 flex gap-2 pb-[19px]'>
              <div className='flex gap-2'>
                <span className='text-[#7E7E8F]'><RiHome5Fill /></span>
              <p className='font-poppin font-normal text-[12px] text-[#7E7E8F]'>Home</p>
              </div>
              <div className='flex gap-2'>
                <span className='text-[#7E7E8F]'><IoIosArrowForward /></span>
                <p className='font-poppin font-normal text-[12px] text-[#7364DB]'>Product Details</p>
              </div>
            </div>
          </div>

          {/* ------------------------ middle part start here man ---------------------- */}
          <section className='w-[1135px] h-[1426px] bg-[#ffffff] rounded-2xl'>
       <div className='flex justify-between'>
          <div>
              <div className="hed pt-[50px] font-poppin font-medium text-[16px] text-[#282828] pl-[30px]">
              <h3>Product Name</h3>
            </div>
            {/* ----------------- input part start -------------------- */}

            <div className='pl-[30px]'>

            <div >
              <input type="text" placeholder='Type name here'   className='placeholder:text-[#9A9AAF] pl-3 py-4 w-[527px] h-12 rounded-lg border-2 border-solid boder-[#9A9AAF]'/>
            </div>
            <div>
              <h5>Description</h5>
              <div className='w-[501px] h-4 '>
               
                  <div className="icon_part flex justify-between">
                    <div className="icon_one flex gap-5">
                      <BiBold/>
                      <BiItalic/>
                      <BiUnderline/>
                      <BiStrikethrough/>
                      <BiFontColor/>
                      <BiHighlight/>
                      <BiSmile/>
                      
                    </div>
                    <div className='flex gap-4'>
                      <span><BiParagraph/></span>
                      <BiAlignLeft/>
                      <BiAlignMiddle/>
                      <BiAlignRight/>
                      <BiAlignJustify/>
                      <BiListUl/>
                      <BiListOl/>
                      <BiImage/>
                      <BiLinkAlt/>
                    </div>
                    <div className='flex gap-4'>
                      <BiFile/>
                      <BiVideo/>
                      <BiUndo/> 
                      <BiRedo/>

                    </div>
                  </div>
                </div>
                <input type="text" placeholder='Type description here' className='w-[501px] h-4' />
                
              </div>
            <div>
              <h5 className='font-poppin font-medium text-[16px] text-[#282828]'>Category</h5>
              <div className=' gap-5 w-[531px] h-12  border-2 border-solid border-[#E8EDF2]  pl-3 items-center rounded-lg flex justify-between'>
                <input type="text" placeholder='Type Category here' />
                <span><IoIosArrowDown /></span>
              </div>
            </div>
            </div>
        
            {/* ----------------- input part end -------------------- */}
          </div>
       {/* ----------------- img col start ------------------ */}
       <div className="img_col w-full h-full">
          <div className='w-full h-full'>
            <img className='w-[483px]' src="watch.png" alt="images" />
          </div>
       </div>

       </div>

          </section>
          {/* ------------------------ middle part end here man ---------------------- */}
            

          
        </div>
    </div>
      
    </>
  )
}

export default ProductDetails
