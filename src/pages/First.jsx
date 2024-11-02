import React from "react";
import { Link } from "react-router-dom";
import Lines from "./Lines";
import FloatingPanel from "../components/FloatingPannel";

const First = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between h-screen bg-black px-4">
      {/* Left Section */}
      <div className="lg:w-1/2 lg:ml-32 flex flex-col justify-center h-full">
        <h3 className="text-white text-3xl md:mt-0 mt-20 px-2">
          Transforming Ideas into
        </h3>
        <h1 className="text-5xl md:text-6xl bg-gradient-to-br from-[#5E6CD4] to-[#A47DE8] bg-clip-text text-transparent py-3 font-semibold">
          Digital Solutions
        </h1>
        <p className="text-[#9299A0] text-base mt-4 md:ml-4">
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
      <div className="lg:w-1/2 w-full flex justify-center items-center relative md:mr-2 mr-28">
        <Lines />
        <div className="relative w-full lg:w-[862px] lg:h-[524px] mb-24 lg:mt-0">
          <img
            src="/first_bg.png"
            alt="Background Graphic"
            className="w-[300px] md:w-[600px] h-auto mt-10 lg:mt-[60px] lg:w-[1320px] md:ml-[100px] lg:ml-[-100px]"
          />
        </div>
        <FloatingPanel />
      </div>
    </div>
  );
};

export default First;
