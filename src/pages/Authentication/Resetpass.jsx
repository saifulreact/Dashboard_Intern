import React from 'react'
import { CgMail } from "react-icons/cg";


const Resetpass = () => {
  return (
    <>
    <div className="main-div">
        <div className="container">
            <div className='flex justify-center items-center min-h-screen '>
                <div className="main_row p-10 bg-[#ffffff] rounded-2xl w-[440px] h-[372px] ">
                    <div className='text-center'>
                        <h1 className='font-poppin font-bold text-[24px] leading-8 text-[#07070C] tracking-normal'>Reset Password</h1>
                        <p className='font-poppin font-normal text-[14px] leading-4 text-[#7E7E8F] w-[263px] m-auto mt-1 mb-5'>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                    </div>
                           <div className="user_part ">
                                   <p className='font-poppin font-normal text-[14px] leading-3.5 text-[#07070C]'>Email address</p>
                                  <div className='mt-2 mb-5 w-[360px] h-12 border-2 border-solid border-[#E8EDF2] rounded-lg flex items-center px-4 '>
                                    <input className='pl-3.5 w-[304px]  flex items-center justify-center' type="text" placeholder='Email' />
                                    <span><CgMail className='text-[##9A9AAF]' /></span>
                                  </div>
                                    <div className='w-[360px] h-[52px] flex rounded-lg justify-center items-center my-5 bg-[#7364DB] font-poppin font-normal text-[16px] leading-6'>
                            <p className='font-poppin font-normal text-[16px] leading-6 text-[#FFFFFF]'>Reset Password</p>
                    </div>
                    <p>              <p className='font-poppin font-normal text-[14px] text-[#07070C] leading-3.5'>Remember password ?  <span className='text-[#7364DB]'>Sign In</span></p>
</p>
                                    
                               </div>

            </div>

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Resetpass
