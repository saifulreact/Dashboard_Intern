import React from 'react'
import { CgMail } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import animation from"../../../../public/Animaiton/Animaiton.json"
import Lottie from 'lottie-react';



const Login = () => {
  return (
    <>
    <div className="main_div">
      <div className="container">
        <div className="main_rowf flex justify-center items-center min-h-screen ">
          <div className="login_part w-[440px] flex rounded-2xl items-center flex-col  p-10 bg-[#ffffff]">
            <div className="part_one">
              <div className='animation_part_start w-60 '> 
          <Lottie animationData={animation}/>

              </div>
              <h1 className='font-poppin font-bold text-2xl text-[##07070C]  leading-6 tracking-normal pt-3.5 pb-1.5'>Welcome Back!</h1>
            <p className='font-poppin font-normal text-[14px] leading-3.5 text-[#7E7E8F] pb-[30px]'>Let’s build something greate</p>
        
            </div>
          
            <div className="bottom_part_start">
           <div className="user_part">
               <p className='font-poppin font-normal text-[14px] leading-3.5 text-[#07070C]'>E-mail or phone number</p>
              <div className='mt-2 mb-5 w-[360px] h-12 border-2 border-solid border-[#E8EDF2] rounded-lg flex items-center px-4 '>
                <input className='pl-3.5 w-[304px]  flex items-center justify-center' type="text" placeholder='Email' />
                <span><CgMail className='text-[##9A9AAF]' /></span>
              </div>
                 <p className='font-poppin font-normal text-[14px] leading-3.5 text-[#07070C]'>Password</p>
              <div className='mt-2 mb-5 w-[360px] h-12 border-2 border-solid border-[#E8EDF2] rounded-lg flex items-center px-4 '>
                <input className='pl-3.5 w-[304px]  flex items-center justify-center' type="text" placeholder='Password' />
                <span><IoEyeOutline className='text-[##9A9AAF]' /></span>
              </div>
           </div>
              <Link to={"#"} className="w-[360px] h-[52px] rounded-lg font-poppin font-normal text-[16px] leading-6 my-5 text-[#FFFFFF] items-center flex justify-center bg-[#7364DB]">Login</Link>
              <p className='text-end font-poppin font-normal text-[14px] leading-4 text-[#8083A3]'>Forgot password?</p>
              <div className="logn_wiht_google flex gap-5 my-5">
                <div className='w-[170px] h-[50px] flex items-center justify-center  border-2 border-solid border-[#E8EDF2] rounded-lg gap-2.5'>
                  <span><FcGoogle className='w-5 h-5' /></span>
                  <p className='font-poppin font-normal text-[14px] leading-4'>Google account </p>
                </div>
                <div className='w-[170px] h-[50px] flex items-center justify-center  border-2 border-solid border-[#E8EDF2] rounded-lg gap-2.5'>
                  <span><ImFacebook2 className='text-[##9A9AAF]'/></span>
                  <p className='font-poppin font-normal text-[14px] leading-4'>Facebook account  </p>
                </div>
              </div>
              <Link to={"/registration"} className='font-poppin font-normal text-[14px] text-[#07070C] leading-3.5'>Don’t have an account? <span className='text-[#7364DB]'>Sign up</span></Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Login
