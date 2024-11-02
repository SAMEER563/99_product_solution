import React, {  useState } from "react";
import { Link } from "react-router-dom";
import Lines from "./Lines";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "../components/Navbar";
import FloatingPannel from "../components/FloatingPannel";

const First = () => {



  


  return (
    <>

    <div className="flex flex-col lg:flex-row  justify-between h-screen bg-black px-4  md:py-12 md:">
      {/* Left Section */}
      <div className=" lg:w-1/2 lg:ml-32">
        <h3 className="text-white text-3xl  md:mt-32 mt-20 md:text-3xl px-2">
          Transforming Ideas into
        </h3>
        <h1 className=" text-5xl md:text-6xl bg-gradient-to-br from-[#5E6CD4] to-[#A47DE8] ml-2 bg-clip-text text-transparent py-3 font-semibold">
          Digital Solutions
        </h1>
        <p className="text-[#9299A0] text-base md:text-base mt-4 md:ml-4">
          Your trusted partner for Website Development, Mobile Apps,
          <br className="hidden lg:block" />
          and Comprehensive IT Services
        </p>
        <Link to="/start">
          <button className="border border-[#7F75F0] w-[124px] h-[36px] rounded-full text-[#7F75F0] mt-6 md:ml-4">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full flex justify-center items-center  mt-4 lg:mt-0   relative md:mr-2 mr-28">
        <Lines />

        <div className="relative  w-full lg:w-[862px] lg:h-[524x] mb-24  md:mt-32 lg:mt-0">
          <img
            src="/first_bg.png"
            alt="Background Graphic"
            className="w-[300px] md:w-[600px] h-auto mt-[70px] mr-100px lg:mt-[460px] lg:w-[1320px] md:ml-[100px] lg:ml-[-100px] lg:h-[824px] "
          />
          </div>
         <FloatingPannel />
        </div>
      </div>
    
    </>
   
  );
};

export default First;
