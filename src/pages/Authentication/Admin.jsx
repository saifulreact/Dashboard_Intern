import React from 'react'
import { CgMail } from "react-icons/cg";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';



const Admin = () => {
  return (
    <>
    <div className="main-div">
        <div className="container">
            <div className='flex justify-center items-center min-h-screen '>
                <div className="main_row p-10 bg-[#ffffff] rounded-2xl w-[440px] h-[372px] ">
                    <div className='text-center'>
                        <h1 className='font-poppin font-bold text-[24px] leading-8 text-[#07070C] tracking-normal'>Admin-only area</h1>
                        <p className='font-poppin font-normal text-[14px] leading-4 text-[#7E7E8F] w-[263px] m-auto mt-1 mb-5'>You need to provide a password to be able to access this page.</p>
                    </div>
                           <div className="user_part ">
                                   <p className='font-poppin font-normal text-[14px] leading-3.5 text-[#07070C]'>Password</p>
                                  <div className='mt-2 mb-5 w-[360px] h-12 border-2 border-solid border-[#E8EDF2] rounded-lg flex items-center px-4 '>
                                    <input className='pl-3.5 w-[304px]  flex items-center justify-center' type="password" placeholder='*******' />
                                    <span><CgMail className='text-[##9A9AAF]' /></span>
                                  </div>
                                    <div className='w-[360px] h-[52px] flex rounded-lg justify-center items-center my-5 bg-[#7364DB] font-poppin font-normal text-[16px] leading-6'>
                            <Link to={"/dashboard"} className='font-poppin font-normal text-[16px] leading-6 text-[#FFFFFF]'>Login</Link>
                    </div>
                    <p>              <Link to={"#"} className='font-poppin font-normal block text-[14px] text-[#8083A3] text-center leading-3.5'>Forgot your password ?</Link>
</p>
                                    
                               </div>

            </div>

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Admin
