import React from "react";
import { Link } from "react-router-dom";
import Lines from "./Lines";
import { IoMdArrowRoundBack } from "react-icons/io";

const First = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between min-h-screen bg-black px-4 md:px-10">
      {/* Left Section */}
      <div className=" lg:w-1/2 lg:mt-0">
        <h3 className="text-white text-3xl mb-5  mt-32 md:text-4xl px-2">
          Transforming Ideas into
        </h3>
        <h1 className=" text-6xl md:text-7xl bg-gradient-to-br from-[#5E6CD4] to-[#A47DE8] ml-2 bg-clip-text text-transparent py-3 font-semibold">
          Digital Solutions
        </h1>
        <p className="text-[#9299A0] text-base md:text-lg mt-4">
          Your trusted partner for Website Development, Mobile Apps,
          <br className="hidden lg:block" />
          and Comprehensive IT Services
        </p>
        <Link to="/start">
          <button className="border border-[#7F75F0] py-2 px-6 rounded-full text-[#7F75F0] mt-6">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full flex justify-center items-center  mt-10 lg:mt-0 relative mr-28">
        <Lines />

        <div className="relative w-full lg:w-auto">
          <img
            src="/first_bg.png"
            alt="Background Graphic"
            className="w-[300px] md:w-[600px] lg:w-[1440px] h-auto mt-[100px] lg:mt-[190px] mr-[0px] lg:mr-[258px]"
          />
          {/* Floating Panels */}
          <div className="absolute hidden md:hidden inset-0 lg:flex flex-col items-center justify-center space-y-8">
            {/* First Floating Panel */}
            <div className="absolute left-[120px] md:left-[227px] -top-[250px] lg:top-[120px] w-[180px] md:w-[232.9px] h-[240px] md:h-[312.99px] bg-gradient-to-t from-[#303030] to-[#1B1B1B] rounded-lg shadow-lg backdrop-blur-lg p-2 border-[1px]">
              <div className="mb-4">
                <h2 className="text-sm text-white flex">
                  <IoMdArrowRoundBack className="mt-1 mr-1 " />
                  Automation
                </h2>
              </div>
              <div className="bg-gray-800">
                <div className="flex border p-1 rounded-md justify-between mb-1">
                  <h3 className="text-sm text-white ">
                    ojoer0
                    <p className="text-gray-500">hgefhu</p>
                  </h3>
                  <div>rgr</div>
                </div>
                <div className="flex border p-1 rounded-md justify-between mb-1">
                  <h3 className="text-sm text-white ">
                    New Lead Alert
                    <p className="text-gray-500">hgefhu</p>
                  </h3>
                  <div>rgr</div>
                </div>
                <div className="flex border p-1 rounded-md justify-between mb-1">
                  <h3 className="text-sm text-white ">
                    Feedback Collection
                    <p className="text-gray-500">hgefhu</p>
                  </h3>
                  <div>rgr</div>
                </div>
                <div className="flex border p-1 rounded-md justify-between mb-1">
                  <h3 className="text-sm text-white ">
                    Weather Update
                    <p className="text-gray-500">hgefhu</p>
                  </h3>
                  <div>rgr</div>
                </div>
              </div>
            </div>

            {/* Second Floating Panel */}
            <div className="absolute left-[250px] md:left-[380px] -top-[140px] md:top-[180px] w-[180px] md:w-[254px] h-[240px] md:h-[312.95px] bg-gradient-to-t from-[#303030] to-[#1B1B1B]  rounded-lg shadow-lg backdrop-blur-lg p-4 md:p-6">
              {/* Summary Section */}
              <div className="mb-3">
                <h2 className="font-semibold mb-2 text-sm text-white">
                  Summary
                </h2>
                <div className="space-y-1">
                  <div className="h-2 w-full bg-gray-700 rounded"></div>
                  <div className="h-2 w-2/6 bg-gray-700 rounded"></div>
                  <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
                  <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
                  <div className="h-2 w-1/4 bg-gray-700 rounded"></div>
                </div>
              </div>

              {/* Data Assessment Section */}
              <div>
                <h2 className="font-medium mb-2 bg-blur text-sm text-white">
                  Data Assessment
                </h2>
                <div className="">
                  <div className="border rounded-lg">
                    <div className="grid grid-cols-4 w-[30px] h-[20px] border"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Floating Panel */}
            <div className="absolute left-[40px] md:left-[80px] -top-[60px] md:top-[280px] w-[160px] md:w-[218.34px] h-[120px] md:h-[155.96px] bg-gradient-to-t from-[#303030] to-[#1B1B1B] rounded-lg shadow-lg backdrop-blur-3xl flex items-center justify-center">
              <span className="m-4 md:m-10 text-purple-500 text-3xl">
                {"</>"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
