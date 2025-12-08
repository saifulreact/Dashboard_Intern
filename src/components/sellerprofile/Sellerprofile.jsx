import React from 'react'

const Sellerprofile = () => {
  return (
    <>
    <div className="main_div">
        <div className="container">
            <div className="main_rwo">
                <div className="profile_col w-[299px] h-[1019px] rounded-lg bg-[#ffffff] p-6">
                    <div className='flex justify-center items-center flex-col '>
                       <div>
                         <img src="pro.png" alt="profile_iamges" />
                        <h2 className='py-2'>FoxMedia.,JSC</h2>
                        <p>Since 2012</p>
                       </div>

                       {/* details_part_start */}
                     <div className='w-full flex flex-col gap-4 py-6'>
                          <div className='flex justify-between  '>
                        <p className='font-poppin font-semibold text-[14px] text-[#7E7E8F] w-full'>Owner Name</p>
                        <p className='font-poppin font-semibold text-[14px] text-[#07070C] w-full'>Jonhson Mark</p>
                       </div>
                          <div className='flex justify-between  '>
                        <p className='font-poppin font-semibold text-[14px] text-[#7E7E8F] w-full'>Company Type</p>
                        <p className='font-poppin font-semibold text-[14px] text-[#07070C] w-full'>Partnership</p>
                       </div>
                          <div className='flex justify-between  '>
                        <p className='font-poppin font-semibold text-[14px] text-[#7E7E8F] w-full'>Email</p>
                        <p className='font-poppin font-semibold text-[14px] text-[#07070C] w-full'>foxmedia@gmal.co</p>
                       </div>
                          <div className='flex justify-between  '>
                        <p className='font-poppin font-semibold text-[14px] text-[#7E7E8F] w-full'>Website</p>
                        <p className='font-poppin font-semibold text-[14px] text-[#07070C] w-full'>foxmedia.com.uk</p>
                       </div>
                          <div className='flex justify-between  '>
                        <p className='font-poppin font-semibold text-[14px] text-[#7E7E8F] w-full'>Contact No.  </p>
                        <p className='font-poppin font-semibold text-[14px] text-[#07070C] w-full'>(+18) 985 45632</p>
                       </div>
                          <div className='flex justify-between  '>
                        <p className='font-poppin font-semibold text-[14px] text-[#7E7E8F] w-full'>Fax</p>
                        <p className='font-poppin font-semibold text-[14px] text-[#07070C] w-full'>(+18) 985 45648</p>
                       </div>
                          <div className='flex justify-between  '>
                        <p className='font-poppin font-semibold text-[14px] text-[#7E7E8F] w-full'>Location</p>
                        <p className='font-poppin font-semibold text-[14px] text-[#07070C] w-full'>United Kingdom</p>
                       </div>
                          <div className='flex justify-between  '>
                        <p className='font-poppin font-semibold text-[14px] text-[#7E7E8F] w-full'>Joined</p>
                        <p className='font-poppin font-semibold text-[14px] text-[#07070C] w-full'>18 January 2012</p>
                       </div>
                     </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Sellerprofile
