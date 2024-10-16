import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Lines from "./Lines";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoToggle } from "react-icons/io5";

const First = () => {

  const [isEnabled, setIsEnabled] = useState(true);

  // Toggle the switch on click
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };


  // Scroll to component when the route matches
 const ScrollToComponent = () => {
  const location = useLocation();

  useEffect(() => {
    const elementId = location.pathname.slice(1); // Get the route path (e.g., 'section1')
    const element = document.getElementById(elementId); // Find the element by id

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element
    }
  }, [location]);

  return null;
};



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
          <div className="absolute hidden md:hidden  inset-0 lg:flex flex-col items-center justify-center space-y-8">
            {/* First Floating Panel */}
            <div className="absolute left-[120px] md:left-[227px] -top-[250px] lg:top-[120px] w-[180px] md:w-[240px] h-[322.53px] md:h-[322.53px] bg-[#303030] rounded-lg shadow-lg backdrop-blur-lg p-2 border-gray-600 border">
              <div className="flex gap-2 mb-2">
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              </div>
              <div className="mb-4">
                <h2 className="text-sm text-white flex">
                  <IoMdArrowRoundBack className="mt-1 mr-1 " />
                  Automation
                </h2>
              </div>
            <div className="w-[211.76px] h-[36.38px] border-[0.54px] border-[#303038] rounded-lg bg-[#1D1F20] m-2 flex justify-between items-center ">
                  <div className="w-[90px] h-[23px] justify-between items-center flex flex-col mb-2 mt-2">
                 <h1 className="text-[6.6px] ml-2 text-[#9299A0]"> <span className="text-white font-semibold  text-[8.6px]">Social Media Report</span> Google Analytics → Slack</h1>
                  </div>
                    {/* Switch (replacing the icon) */}
      <div className="mr-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={toggleSwitch}
          />
          <div
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-purple-700 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>
            <div className="w-[211.76px] h-[36.38px] border-[0.54px] border-[#303038] rounded-lg bg-[#1D1F20] m-2 flex justify-between items-center ">
                  <div className="w-[90px] h-[23px] justify-between items-center flex flex-col mb-2 mt-2">
                 <h1 className="text-[6.6px] ml-2 text-[#9299A0]"> <span className="text-white font-semibold text-[8.6px]">Social Media Report</span> Google Analytics → Slack</h1>
                  </div>
                    {/* Switch (replacing the icon) */}
      <div className="mr-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={toggleSwitch}
          />
          <div
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-purple-700 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>
            <div className="w-[211.76px] h-[36.38px] border-[0.54px] border-[#303038] rounded-lg bg-[#1D1F20] m-2 flex justify-between items-center ">
                  <div className="w-[90px] h-[23px] justify-between items-center flex flex-col mb-2 mt-2">
                 <h1 className="text-[6.6px] ml-2 text-[#9299A0]"> <span className="text-white font-semibold text-[8.6px]">Social Media Report</span> Google Analytics → Slack</h1>
                  </div>
                    {/* Switch (replacing the icon) */}
      <div className="mr-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={toggleSwitch}
          />
          <div
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-purple-700 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>
            <div className="w-[211.76px] h-[36.38px] border-[0.54px] border-[#303038] rounded-lg bg-[#1D1F20] m-2 flex justify-between items-center ">
                  <div className="w-[90px] h-[23px] justify-between items-center flex flex-col mb-2 mt-2">
                 <h1 className="text-[6.6px] ml-2 text-[#9299A0]"> <span className="text-white font-semibold text-[8.6px]">Social Media Report</span> Google Analytics → Slack</h1>
                  </div>
                    {/* Switch (replacing the icon) */}
      <div className="mr-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={toggleSwitch}
          />
          <div
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-purple-700 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>
            <div className="w-[211.76px] h-[36.38px] border-[0.54px] border-[#303038] rounded-lg bg-[#1D1F20] m-2 flex justify-between items-center ">
                  <div className="w-[90px] h-[23px] justify-between items-center flex flex-col mb-2 mt-2">
                 <h1 className="text-[6.6px] ml-2 text-[#9299A0]"> <span className="text-white font-semibold text-[8.6px]">Social Media Report</span> Google Analytics → Slack</h1>
                  </div>
                    {/* Switch (replacing the icon) */}
      <div className="mr-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={toggleSwitch}
          />
          <div
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-purple-700 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>

              

            </div>
            

            {/* Second Floating Panel */}
            <div className="absolute left-[250px] md:left-[380px] -top-[140px] md:top-[240px] w-[180px] md:w-[254px] h-[240px] md:h-[285px] bg-[#303030] blur-[14.86]  rounded-lg shadow-lg backdrop-blur-lg p-4 md:p-4 border-gray-600 border">
              {/* Summary Section */}
              <div className="flex gap-2 mb-2">
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              </div>
              <div className="mb-3">
                <h2 className="font-semibold mb-2 text-sm text-white">
                  Summary
                </h2>
                <div className="space-y-1">
                  <div className="h-[7.28px] w-[227.07px] bg-[#26262B] rounded"></div>
                  <div className="h-[7.28px] w-[85.15px] bg-[#26262B] rounded"></div>
                  <div className="h-[7.28px] w-[138.28px] bg-[#26262B] rounded"></div>
                  <div className="h-[7.28px] w-[138.28px] bg-[#26262B] rounded"></div>
                  <div className="h-[7.28px] w-[40.03px] bg-[#26262B] rounded"></div>
                </div>
              </div>

              {/* Data Assessment Section */}
              <div>
                <h2 className="font-medium mb-2 bg-blur text-sm text-white">
                  Data Assessment
                </h2>
                <div className="">
                  <div className="w-[227.07px] h-[24.02px] bg-[#26262B] border border-[#2F2E32] flex gap-6 rounded-tl-[5.82px] rounded-tr-[5.82px]">
                    <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1"></div>
                    <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1"></div>
                    <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1"></div>
                    <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1"></div>
                  </div>
                  <div className="w-[227.07px] h-[24.02px] bg-[#171717] border border-[#2F2E32] flex">
                  <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1 "></div>
                    <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1 ml-24 mr-8"></div>
                    <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1"></div>
                  </div>
                  <div className="w-[227.07px] h-[24.02px] bg-[#171717] border border-[#2F2E32] flex">
                  <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1 ml-16"></div>
                  </div>
                  <div className="w-[227.07px] h-[24.02px] bg-[#171717] border border-[#2F2E32] rounded-br-[5.82px] rounded-bl-[5.82px] flex">
                  <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1 ml-16"></div>
                  <div className="w-[34.21px] h-[7.28px] bg-[#2E2F38] m-1 ml-6"></div>

                  </div>
                  
                </div>
              </div>
            </div>

            {/* Third Floating Panel */}
            <div className="absolute left-[40px] md:left-[80px] -top-[60px] md:top-[318px] w-[160px] md:w-[218.34px] h-[120px] md:h-[155.96px] bg-[#303030] blur-[20] border-gray-600 border rounded-lg shadow-lg backdrop-blur-3xl items-center justify-center">
            <div className="flex gap-2 m-2">
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              <div className="bg-white w-[4.34px] h-[4.34px] rounded-full"></div>
              </div>
              <div className="flex">
                <div className="m-6">
                <div className="space-y-1">
                  <div className="h-[5.82px] w-[86.61px] bg-[#26262B] rounded"></div>
                  <div className="h-[7.28px] w-[50.22px] bg-[#26262B] rounded"></div>
                  <div className="h-[7.28px] w-[64.77px] bg-[#26262B] rounded"></div>
                
                </div>
                </div>
                <div className="flex mt-6 ml-4">
                  <span className="text-gray-600 text-3xl font-extrabold">{`<`}</span>
                  <span className="text-[#7F75F0] text-3xl font-extrabold">/</span>
                  <span className="text-gray-600 text-3xl font-extrabold">{`>`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
