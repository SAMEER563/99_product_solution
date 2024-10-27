import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <Navbar />

      {/* First Page */}
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start px-6 md:px-10 py-10 lg:py-20 bg-black">
        {/* Left Section: Text */}
        <div className="lg:mt-32 lg:ml-0 mb-10 lg:mb-0 text-center lg:text-left">
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
        <h1 className="text-white text-4xl ml-4 mb-12 py-4 md:ml-32 px-16">Key Features</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 ml-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap- md:ml-16 lg:ml-44 mt-10 mr-16 md:mr-16 -my-6 ">
          {/* 1st card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000]  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4">
              <img src="/task.png" alt="" className="h-[94px] w-[92px]"/>
            </div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Task Delegation & <br /> Management
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              Allows political leaders to assign and track tasks efficiently across teams of office staff and party workers. The platform ensures accountability by enabling follow-ups and tracking progress in real-time.
            </p>
          </div>

          {/* 2nd card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000]  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4">
              <img src="/voter.png" alt="" className="h-[94px] w-[92px]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Voter Interaction & <br /> Engagement
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              Facilitates direct communication with constituents, allowing leaders to address queries, concerns, and feedback from the public. By digitizing public grievances, it provides a structured mechanism for addressing issues promptly.
            </p>
          </div>

          {/* 3rd card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000]  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4">
              <img src="/grivances.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Grievance Redressal <br /> System
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              We craft visually stunning, user-centric website designs that offer intuitive navigation and deliver a seamless user experience.
            </p>
          </div>

          {/* 4th card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4">
              <img src="/data.png" alt="" className="h-[94px] w-[92px]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Data-Driven <br /> Performance Reporting
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              PolitikConnect provides real-time analytics and reports on tasks and engagements carried out by leaders and their teams, enabling data-driven decisions to enhance public image.
            </p>
          </div>

          {/* 5th card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4">
              <img src="/hire.png" alt="" className="h-[94px] w-[92px]"/>
            </div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Hierarchical Access <br /> Control
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              The platform offers distinct user roles including MPs/MLAs, Karyakartas, Office Staff, and public users. Super Admin and Karyakarta Head roles ensure top-level control.
            </p>
          </div>

          {/* 6th card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4">
              <img src="/user.png" alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              User-Friendly Interface
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              Designed with simplicity in mind, PolitikConnect is accessible to users of varying tech proficiencies with an intuitive dashboard for seamless task management.
            </p>
          </div>
        </div>
        {/* End of Cards */}
      </div>

      

        {/* Third Page */}

        <div className="bg-black text-center py-16 px-4 md:px-12 lg:p-52 ]">
            <h1 className="text-white text-4xl md:text-5xl lg:text-5xl text-center ">Why Choose PolitikConnect?</h1>
            
            <p className="text-[#9299A0] text-center mt-12 text-base md:text-lg lg:mx-28">With PolitikConnect, political leaders can centralize their operations, foster deeper connections with their <br className="hidden lg:block"/> constituencies, and manage teams efficiently. By digitizing communication, grievance management, and <br className="hidden lg:block"/>performance tracking, this platform enhances leadership accountability, improves voter engagement, and <br />boosts operational efficiency, paving the way for better governance.</p>
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
