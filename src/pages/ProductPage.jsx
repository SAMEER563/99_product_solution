import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <div>
      <Navbar />

      {/* First Page */}
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start px-6 md:px-10 py-10 lg:py-20 bg-black">
        {/* Left Section: Text */}
        <div className="lg:mt-32 lg:ml-20 mb-10 lg:mb-0 text-center lg:text-left">
          <span className="bg-gradient-to-br from-[#5E6CD4] to-[#A47DE8] bg-clip-text text-transparent font-semibold text-3xl md:text-5xl">
            PolitikConnect
          </span>
          <p className="text-white text-base mt-4">
            PolitikConnect is a cutting-edge platform designed specifically to <br />
            modernize and streamline the operations of political leaders such as <br />
            Members of Parliament (MPs) and Members of Legislative Assembly <br />
            (MLAs). It is a comprehensive digital solution aimed at enhancing <br />
            communication, task management, and performance tracking, enabling <br />
            political leaders to connect effectively with their constituents, party <br />
            workers, and office staff.
          </p>
        </div>

        {/* Right Section: Block */}
        <div className="w-full lg:w-[380px] h-[260px] md:h-[460px] bg-[#1E1E1E] rounded-3xl shadow-lg md:m-8 flex justify-center items-center">
          {/* Content inside the block, if any */}
        </div>
      </div>

      {/* Second Page */}
      <div className="bg-black">
        <h1 className="text-white text-4xl ml-4 md:ml-52">Key Features</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-52 mt-10 mr-52 ">
          {/* 1st card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000]  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Task Delegation & <br /> Management
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              Allows political leaders to assign and track tasks efficiently across teams of office staff and party workers. The platform ensures accountability by enabling follow-ups and tracking progress in real-time.
            </p>
          </div>

          {/* 2nd card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000]  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Voter Interaction & <br /> Engagement
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              Facilitates direct communication with constituents, allowing leaders to address queries, concerns, and feedback from the public. By digitizing public grievances, it provides a structured mechanism for addressing issues promptly.
            </p>
          </div>

          {/* 3rd card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000]  border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Grievance Redressal <br /> System
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              We craft visually stunning, user-centric website designs that offer intuitive navigation and deliver a seamless user experience.
            </p>
          </div>

          {/* 4th card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Data-Driven <br /> Performance Reporting
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              PolitikConnect provides real-time analytics and reports on tasks and engagements carried out by leaders and their teams, enabling data-driven decisions to enhance public image.
            </p>
          </div>

          {/* 5th card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#ffffff] ml-4">
              Hierarchical Access <br /> Control
            </h3>
            <p className="text-[#9299A0] text-base mt-2 ml-4">
              The platform offers distinct user roles including MPs/MLAs, Karyakartas, Office Staff, and public users. Super Admin and Karyakarta Head roles ensure top-level control.
            </p>
          </div>

          {/* 6th card */}
          <div className="p-4 bg-gradient-to-b from-[#121212] to-[#000000] border border-[#2A2A2A] w-[360px] h-[450px] rounded-xl shadow">
            <div className="bg-[#262626] h-[94px] w-[92px] m-4"></div>
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

        <div className="bg-black ">
            <h1 className="text-white md:text-7xl text-center ">Why Choose PolitikConnect?</h1>
            
            <p className="text-[#9299A0] text-center mt-12">With PolitikConnect, political leaders can centralize their operations, foster deeper connections with their constituencies, and manage teams efficiently. By digitizing communication, grievance management, and performance tracking, this platform enhances leadership accountability, improves voter engagement, and boosts operational efficiency, paving the way for better governance.</p>
            <span className="ml-60 text-medium text-white mt-12">Explore PolitikConnect today to see how it can transform your leadership operations and connect you closer to the people you serve.</span>
        </div>

      <Footer />
    </div>
  );
};

export default ProductPage;