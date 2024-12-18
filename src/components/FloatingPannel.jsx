import React, { useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

const FloatingPannel = () => {

    const [isEnabled, setIsEnabled] = useState(true);

    // Toggle the switch on click
    const toggleSwitch = () => {
      setIsEnabled(!isEnabled);
    };

  return (
    <>
     {/* Floating Panels */}
     <div className="absolute hidden md:hidden  inset-0 lg:flex flex-col items-center justify-center space-y-8 ">
            {/* First Floating Panel */}
            <div className="absolute left-[120px] md:left-[180px] -top-[250px] lg:top-[100px] w-[180px] md:w-[240px] h-[322.53px] md:h-[322.53px] bg-[] rounded-lg shadow-lg  p-2 border-gray-600 border backdrop-blur-2xl">
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
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-[#6059AF] 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>
            <div className="w-[211.76px] h-[36.38px] border-[0.54px] border-[#303038] rounded-lg bg-[#1D1F20] m-2 flex justify-between items-center ">
                  <div className="w-[90px] h-[23px] justify-between items-center flex flex-col mb-2 mt-2">
                 <h1 className="text-[6.6px] ml-2 text-[#9299A0]"> <span className="text-white font-semibold text-[8.6px]">New Lead Alert</span> HubSpot → Email</h1>
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
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-[#6059AF] 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>
            <div className="w-[211.76px] h-[36.38px] border-[0.54px] border-[#303038] rounded-lg bg-[#1D1F20] m-2 flex justify-between items-center ">
                  <div className="w-[120px] h-[22px] justify-between m-2 flex flex-col ">
                 <h1 className="text-[6.6px]  flex flex-col text-[#9299A0]"> <span className="text-white font-semibold text-[8.6px]">Feedback Collection</span>Google Forms → Notion</h1>
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
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-[#6059AF] 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>
            <div className="w-[211.76px] h-[36.38px] border-[0.54px] border-[#303038] rounded-lg bg-[#1D1F20] m-2 flex justify-between items-center ">
                  <div className="w-[90px] h-[23px] justify-between items-center flex flex-col mb-2 mt-2">
                 <h1 className="text-[6.6px] ml-2 text-[#9299A0]"> <span className="text-white font-semibold text-[8.6px]">Weather Update</span> Weather API → Slack</h1>
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
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-[#6059AF] 
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
            className={`w-8 h-3  bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-700 peer-checked:bg-[#6059AF] 
            peer-checked:before:translate-x-full peer-checked:before:border-white before:content-[''] before:absolute before:top-[-2.5px] before:left-[px] before:bg-white 
            before:border-gray-300 before:border before:rounded-full before:h-4 before:w-4 before:transition-all`}
          ></div>
        </label>
      </div>
              </div>

              

            </div>
            

            {/* Second Floating Panel */}
            <div className="absolute left-[250px] md:left-[320px] -top-[140px] md:top-[220px] w-[180px] md:w-[254px] h-[240px] md:h-[285px] bg-[] bg-blur-[10.86]  rounded-lg shadow-lg  p-4 md:p-4 border-gray-600 border backdrop-blur-2xl">
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
            <div className="absolute left-[40px] md:left-[80px] -top-[60px] md:top-[298px] w-[160px] md:w-[218.34px] h-[120px] md:h-[155.96px] bg-[] blur-[20] border-gray-600 border rounded-lg shadow-lg  backdrop-blur-2xl items-center justify-center">
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
    </>
  )
}

export default FloatingPannel