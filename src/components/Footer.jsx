import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-around bg-black '>
        {/* Left Section */}
        <div className='flex flex-col '>
         <Link to="/">           
         <img src="/logo.png" alt="" className='w-[175px] h-[52px] mt-16 ml-4 md:' />
            </Link> 
            <p className='text-[#9299A0] my-4 text-center'>© 2024 99products Solutions. All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className='flex flex-col'>
            <ul className='md:flex hidden gap-6 text-base text-white  mt-16'>
                <Link to="/">Services</Link>
                <Link to="/">Products</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Contact Us</Link>
            </ul>
            <div className='flex gap-4 text-white my-6 text-3xl mt-28 mr-4 md:m-6 md:ml-20'>
                <Link to="/"><FaFacebook /></Link>
                <Link to="/"><AiFillInstagram /></Link>
                <Link to="/"><FaLinkedinIn /></Link>
                <Link to="/"><FaXTwitter /></Link>
            
            </div>
        </div>
    </div>
  )
}

export default Footer