import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { FcCamcorder } from "react-icons/fc";
import { FaMessage } from "react-icons/fa6";
import { BsChatRightText } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import Lottie from "lottie-react";
import animation from "../../../public/Animaition.json"
import { MdSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { LiaToggleOnSolid } from "react-icons/lia";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";


const Navbar = () => {
    return (
        <nav className='pl-[17px]'>
            <div className="main_div flex flex-col gap-[18px] ">
                <div className="logo_col">
                    <div className='flex justify-between w-[256px] items-center'>

                        <div className="icon">
                            <span><IoIosArrowDropleft />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="dashboarmenu">
                    <ul>
                        <li ><Link className='flex gap-4 items-center font-var w-[206px] h-14  text-[#FFFFFF] bg-[#7364DB] rounded-[12px]     font-family: "Poppins", sans-serif;
'  to={"/dashboard"}><span><img src="logoone.png" alt="messagelogo" />
                            </span> Dashboard</Link></li>
                        <li ><Link className='flex gap-4 items-center font-semibold text-[14px]' to={"product"}><span><img src="shop.png" alt="product_iamge" />
                        </span> Products</Link></li>
                        <li ><Link className='flex gap-4  items-center w-[206px] h-14' to={"order"}><span><FaMessage />

                        </span> Orders</Link></li>
                        <li ><Link className='flex gap-4  items-center w-[206px] h-14' to={"payment"}><span><MdOutlinePayment />
                        </span> Payments</Link></li>
                        <li ><Link className='flex gap-4  items-center w-[206px] h-14 ' to={"tranjection"}><span><AiOutlineTransaction />
                        </span> Transactions</Link></li>
                        <li ><Link className='flex gap-4 items-center ' to={"client"}><span><IoIosPerson />
                        </span> Clients</Link></li>
                    </ul>
                </div>
                <div className="category_menu">
                    <ul>
                        <li><Link className=' w-[206px] h-[56px]  font-semibold text-[#07070C] text-[12px]' to={"#"}>Categories</Link></li>
                        <li><Link className='font-semibold font-[#7E7E8F] text-[12px]' to={"#"}>Laptops </Link></li>
                        <li><Link className='font-semibold font-[#7E7E8F] text-[12px]' to={"#"}>Mobile phones</Link></li>
                        <li><Link className='font-semibold font-[#7E7E8F] text-[12px]' to={"#"}>Desktops</Link></li>
                        <li><Link className='font-semibold font-[#7E7E8F] text-[12px]' to={"#"}>Accessories</Link></li>
                        <li><Link className='font-semibold font-[#7E7E8F] text-[12px]' to={"#"}>Portable storage</Link></li>
                        <li><Link className='font-semibold font-[#7E7E8F] text-[12px]' to={"#"}>Networking</Link></li>
                        <li><Link className='flex font-medium text-[12px] text-[#171721] gap-2 items-center'><span className='w-4 h-4'><FiPlusSquare /></span> Add category</Link></li>
                    </ul>
                </div>
                <div className='w-[206px] h-0.5 my-5 bg-[#E8EDF2]'></div>
            </div>
            <div className='font-medium text-[#8083A3] text-[12px]'>
                <p>Top Sellers</p>
            </div>

            <div className='flex gap-[-20px]'>
                <div className="single_person">
                    <img src="person.png" alt="person_images" />
                </div>
                <div className="single_person">
                    <img src="person.png" alt="person_images" />
                </div>

                <div className="single_person">
                    <img src="person.png" alt="person_images" />
                </div>
                <div className="single_person">
                    <img src="person.png" alt="person_images" />
                </div>
                <div className="single_cart w-9 h-9 flex justify-center items-center bg-[#7364DB] rounded-full">
                    <span><FaCirclePlus /></span>

                </div>
            </div>

            {/* lotti part start */}

            <div className='lotti_part w-[206px] py-5 px-[31px] my-8 h-screen'>
                <Lottie animationData={animation} />
                <div className='text_part_start w-[150px]'>
                    <p>Unlock more information now
                        by Upgrade to PRO</p>

                </div>

                <div className="btn py-[7px] px-[19px] bg-[#7364DB] font-semibold text-[#FFFFFF] text-[12px]  rounded-[4px]">
                    <Link to={"#"}>Upgrade Now</Link>
                </div>

            </div>

            <div className="bottm_part_start ">
                <div className='bg-[#E8EDF2] w-[206px] h-[53px] flex gap-3 justify-center items-center   '>
                    <span><IoMoonOutline />
                    </span>
                    <span><MdSunny />
                    </span>
                    <span><BsArrowUpRightSquare />
                    </span>
                    <div className='w-1 h-12 bg-red-50'>

                    </div>
                    <span><LiaToggleOnSolid />
                    </span>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
