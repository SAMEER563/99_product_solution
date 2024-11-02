import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <Navbar />

      {/* First Page */}
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start px-6 md:px-10 py-10 lg:py-20 bg-black h-screen">
        {/* Left Section: Text */}
        <div className="lg:mt-32 lg:ml-12 mb-10 lg:mb-0 text-center lg:text-left">
          <span className="bg-gradient-to-br from-[#5E6CD4] to-[#A47DE8] bg-clip-text text-transparent font-semibold text-3xl md:text-5xl">
            PolitikConnect
          </span>
          <p className="text-[#9299A0] text-base mt-4 ">
            PolitikConnect is a cutting-edge platform designed specifically to <br className="hidden lg:block"/>
            modernize and streamline the operations of political leaders such as <br className="hidden lg:block"/> 
            Members of Parliament (MPs) and Members of Legislative Assembly <br className="hidden lg:block"/>
            (MLAs). It is a comprehensive digital solution aimed at enhancing <br className="hidden lg:block"/>
            communication, task management, and performance tracking, enabling <br className="hidden lg:block"/>
            political leaders to connect effectively with their constituents, party <br className="hidden lg:block"/>
            workers, and office staff.
          </p>
        </div>

        {/* Right Section: Block */}
        <div className="w-full lg:w-[600px] lg:h-[360px] h-[260px] md:h-[460px] backdrop-blur-3xl bg-[] shadow-lg md:m- flex justify-center items-center my-6 md:my-16 relative overflow-hidden  ">

  
  {/* Image */}
  <img src="/mobile.png" alt="" className="relative z-10  w-full h-full object-cover lg:mr-32" />
</div>

      </div>

      {/* Second Page */}
      <div className="bg-black">
        <h1 className="text-white text-4xl ml-4 mb-12 py-4 lg:ml-24 px-16">Key Features</h1>

        {/* Cards */}
      {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1st card */}
  <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] lg:ml-40 ml-4 md:mt-3  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
    <div className="bg-[#262626] h-[94px] w-[92px] m-4">
      <img src="/task.png" alt="" className="h-[94px] w-[92px]"/>
    </div>
    <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
      Task Delegation & <br /> Management
    </h3>
    <p className="text-[#9299A0] text-base mt-2 ml-4">
      Allows political leaders to assign and track tasks efficiently across teams of office staff and party workers.
    </p>
  </div>

  {/* 2nd card */}
  <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] lg:ml-10 ml-4 mt-4  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
    <div className="bg-[#262626] h-[94px] w-[92px] m-4">
      <img src="/voter.png" alt="" className="h-[94px] w-[92px]" />
    </div>
    <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
      Voter Interaction & <br /> Engagement
    </h3>
    <p className="text-[#9299A0] text-base mt-2 ml-4">
      Facilitates direct communication with constituents, allowing leaders to address queries and concerns from the public.
    </p>
  </div>

  {/* 3rd card moved closer to 2nd card with mr-6 */}
  <div className=" lg:relative lg:right-20 ml-4 mt-4 p-4 bg-gradient-to-b from-[#121212] to-[#000000]  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
    <div className="bg-[#262626] h-[94px] w-[92px] m-4">
      <img src="/grivances.png" alt="" />
    </div>
    <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
      Grievance Redressal <br /> System
    </h3>
    <p className="text-[#9299A0] text-base mt-2 ml-4">
      User-centric website designs offering intuitive navigation for a seamless experience.
    </p>
  </div>

  {/* 4th card */}
  <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] lg:ml-40 lg:mt-6 ml-4 mt-4 border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
    <div className="bg-[#262626] h-[94px] w-[92px] m-4">
      <img src="/data.png" alt="" className="h-[94px] w-[92px]" />
    </div>
    <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
      Data-Driven <br /> Performance Reporting
    </h3>
    <p className="text-[#9299A0] text-base mt-2 ml-4">
      Provides real-time analytics and reports on tasks and engagements.
    </p>
  </div>

  {/* 5th card */}
  <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] lg:mt-6 lg:ml-10 ml-4 mt-4 border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
    <div className="bg-[#262626] h-[94px] w-[92px] m-4">
      <img src="/hire.png" alt="" className="h-[94px] w-[92px]"/>
    </div>
    <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
      Hierarchical Access <br /> Control
    </h3>
    <p className="text-[#9299A0] text-base mt-2 ml-4">
      Offers distinct user roles, ensuring top-level control.
    </p>
  </div>

  {/* 6th card moved closer to 5th card with ml-6 */}
  <div className="lg:relative lg:right-28 lg:ml-8 p-4 bg-gradient-to-b from-[#121212] to-[#000000] mt-4 mb-4 ml-4 border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
    <div className="bg-[#262626] h-[94px] w-[92px] m-4">
      <img src="/user.png" alt="" />
    </div>
    <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
      User-Friendly Interface
    </h3>
    <p className="text-[#9299A0] text-base mt-2 ml-4">
      Designed with simplicity in mind, accessible to users of varying tech proficiencies.
    </p>
  </div>
</div>

        {/* End of Cards */}
      </div>

      

        {/* Third Page */}

        <div className="bg-black text-center py-16 px-4 md:px-12 lg:p-52 ]">
            <h1 className="text-white text-4xl md:text-5xl lg:text-5xl text-center ">Why Choose PolitikConnect?</h1>
            
            <p className="text-[#9299A0]  mt-12 text-base md:text-base lg:mx-28">With PolitikConnect, political leaders can centralize their operations, foster deeper connections with their <br className="hidden lg:block"/> constituencies, and manage teams efficiently. By digitizing communication, grievance management, and <br className="hidden lg:block"/>performance tracking, this platform enhances leadership accountability, improves voter engagement, <br />and boosts operational efficiency, paving the way for better governance.</p>
            <span className="block text-lg text-white mt-6 md:mt-6">Explore PolitikConnect today to see how it can transform your leadership <br className="hidden lg:block"/>operations and connect you closer to the people you serve.</span>
        <Link to="/">
          <button className="border border-[#7F75F0] w-[124px] h-[36px] rounded-full text-[#7F75F0] mt-6">
            Get It
          </button>
        </Link>
        </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
