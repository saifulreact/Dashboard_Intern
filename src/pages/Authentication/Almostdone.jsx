import React from 'react'

const Almostdone = () => {
  return (
    <>
    <div className="main_div flex justify-center items-center min-h-screen">
        <div className="container">
            <div className="main_rwo w-[440px] h-[583px] p-10 bg-[#ffffff] rounded-l-2xl">
              <div className='text-center'>
                  <div className="animaion mb-4 ">
                    <img className='m-auto' src="Success 1.png" alt="trofy_part" />
                </div>
                <div>
                    <h1 className='font-poppin font-semibold text-[28px] leading-8 text-[#07070C] mb-1'>Almost done!</h1>
                    <p className='font-poppin font-normal text-[#7E7E8F] text-[14px] leading-4'>Last step </p>
                </div>

              </div>
                <div className='mb-20 mt-[30px]' >
                    <div className="mesage_animation ">
                        <img className=' m-auto' src="mail 1.png" alt="message_part" />

                    </div>
                    <div>
                        <h2 className='font-poppin font-semibold text-[#07070C] text-[20px] leading-5 text-center py-5'>Thank you!</h2>
                        <div className='w-[284px] h-[82px]  '>
                            <p className='text-center font-publicsans'>We sent an email to <span className='text-[#7364DB]'>foxdashboard@hotmail.com </span><br />
Click confirmation link in the email to <br /> verify your account</p>
                        </div>
                    </div>
                </div>
                    <div className='w-[360px] h-[52px] flex rounded-lg justify-center items-center bg-[#7364DB] font-poppin font-normal text-[16px] leading-6'>
                            <p className='font-poppin font-normal text-[16px] leading-6 text-[#FFFFFF]'>Open Email App & Confirm</p>
                    </div>

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Almostdone
