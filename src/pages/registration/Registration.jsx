import React from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { SlEye } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";




const Registration = () => {
  return (
    <>
    <div className="main_dvi">
        <div className="container">
            <div className="main_row flex justify-center items-center min-h-screen">
               <div className='w-[440px]  bg-[#ffffff] rounded-2xl p-10'>
               <div className=' text-center'>
                <h1 className='font-poppin font-bold text-2xl'> Create an account</h1>
                <p className='font-poppin font-normal text-sm text-[#7E7E8F]'>You are welcome!</p>
               </div>
{/* ============= body part start =================== */}

                <div className='pt-7'>
                    <div>
                        <p className='font-poppin font-normal text-sm text-[#07070C]'>Your name</p>
                    </div>
                   {/* double part */}
                   <div className='flex justify-between mt-2 mb-6'>
                     <div className='w-[170px] relative pl-8 justify-center items-center h-12 border-2 border-solid border-[#C6CBD9] rounded-lg flex'>
                        <input className='w-114px h-7 placeholder:py-3 outline-0' type="text" placeholder='First name' />
                        <span className='absolute top-4 left-[80%] w-4 h-4 text-[#9A9AAF] '><MdOutlinePersonOutline />
</span>
                    </div>
                     <div className='w-[170px] relative pl-8 justify-center items-center h-12 border-2 border-solid border-[#C6CBD9] rounded-lg flex'>
                        <input className='w-114px h-7 placeholder:py-3 outline-0' type="text" placeholder='Last name' />
                        <span className='absolute top-4 left-[80%] w-4 h-4 text-[#9A9AAF] '><MdOutlinePersonOutline />
</span>
                    </div>

                   </div>
                 <div className='flex flex-col gap-5'>
                      <div>
                    <p className='font-poppin font-medium text-[14px] text-[#282828]'>E-mail</p>
                    <div>
                        <div className='w-[360px] mt-2 mb-5 h-12 border-2 border-solid border-[#C6CBD9] rounded-lg flex justify-between items-center px-3.5'>
                            <input type="text" placeholder='Email' />
                            <span className='text-[#9A9AAF]'><HiOutlineMail /></span>
                        </div>
                    </div>
                   </div>
                  
                     <div>
                    <p className='font-poppin font-medium text-[14px] text-[#282828]'>Phone numbers</p>
                    <div>
                        <div className='w-[360px] mt-2 mb-5 h-12 border-2 border-solid border-[#C6CBD9] rounded-lg flex justify-between items-center px-3.5'>
                            <input type="text" placeholder='(+01)' />
                            <span className='text-[#9A9AAF]'><FiPhone /></span>
                        </div>
                    </div>
                   </div>
                     <div>
                    <p className='font-poppin font-medium text-[14px] text-[#282828]'>Password</p>
                    <div>
                        <div className='w-[360px] mt-2 mb-5 h-12 border-2 border-solid border-[#C6CBD9] rounded-lg flex justify-between items-center px-3.5'>
                            <input type="text" placeholder='Password' />
                            <span className='text-[#9A9AAF]'><SlEye /></span>
                        </div>
                    </div>
                   </div>
                     <div>
                    <p className='font-poppin font-medium text-[14px] text-[#282828]'>Confirm Password</p>
                    <div>
                        <div className='w-[360px] mt-2 mb-5 h-12 border-2 border-solid border-[#C6CBD9] rounded-lg flex justify-between items-center px-3.5'>
                            <input type="text" placeholder='Confirm password' />
                            <span className='text-[#9A9AAF]'><SlEye /></span>
                        </div>
                    </div>
                   </div>

                 </div>
                </div>
                <div className=' w-[360px] h-[52px] my-5'>
                    <Link className="font-poppin rounded-lg w-full h-full  items-center justify-center flex font-semibold text-lg text-[#FFFFFF] bg-[#7364DB]" to={"#"}>Sign up </Link>
                    

                </div>

                <div>
                    <div className='flex gap-2.5 items-center'>
                        <input className='bg-red-600 ' type="checkbox" />
                        <p className='font-normal text-[14px] text-[#8083A3]'>I agree with terms & conditions</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                         <div className="first_one my-5  w-[170px] flex items-center px-3 gap-2.5 h-[50px] border-2 border-solid border-[#E8EDF2] rounded-lg">
                                <span ><FcGoogle className='w-5 h-5' /></span>
                            <p className='font-poppin font-normal text-[#07070C] text-[12px]'>Google account</p>

                        </div>
                         <div className="first_one my-5  w-[170px] flex items-center px-3 gap-2.5 h-[50px] border-2 border-solid border-[#E8EDF2] rounded-lg">
                                <span ><FaFacebook className='w-5 h-5' /></span>
                            <p className='font-poppin font-normal text-[#07070C] text-[12px]'>Facebook account</p>

                        </div>
                       
                    </div>
                    <div>
                        <p  className='font-normal font-poppin text-[#07070C] text-[14px] text-center'> Already have an account? <Link to={"/login"} className='text-[#7364DB]'>Sign in   </Link></p>
                    </div>
                </div>
               

               </div>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Registration
