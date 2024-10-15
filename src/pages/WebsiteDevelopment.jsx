import React from "react";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-[1084px] bg-[#E4E4E7] rounded-3xl  shadow-lg p-10">
        {/* Close button */}
      <Link to="/services" className="absolute top-4 right-4 text-[#000000]">
      <button className=" m-4 md:-8 font-black border border-black w-[64px] h-[62px] rounded-xl">
          <span className="text-xl text-[#1C1B1F]">✕</span>
        </button>
      </Link>

        {/* Title */}
        <h1 className="text-5xl  text-[#000000] m-2 ">
         <span className="font-semibold text-[#000000] text-5xl mb-2"> Website Development</span> (Design, </h1>
         <h1 className="mt-4 ml-2 text-5xl"> Custom Builds, E-commerce)
        </h1>

        {/* Description */}
        <p className="text-[#000000] mb-6 text-lg mt-4 ml-2">
          At 99products Solutions, we specialize in creating tailored,
          high-performance websites <br /> that align with your business goals.
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Design */}
          <div className="p-4 bg-[#FFFFFF] w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">Design</h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              We craft visually stunning, user- <br />centric website designs that
              offer <br /> intuitive navigation and deliver a <br /> seamless user experience.
            </p>
          </div>

          {/* Custom Builds */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
          <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">Custom Builds</h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Whether you need a unique website <br /> or advanced functionality, our
              team <br /> can develop custom-built websites <br /> tailored to your specific <br />

              requirements.
            </p>
          </div>

          {/* E-commerce */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
          <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">E-commerce</h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              We design and build robust, secure, <br /> and scalable e-commerce <br />
              platforms that enhance customer <br /> experiences and streamline your <br />
              online business operations.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[#000000] text-lg mt-8 font-sans">
          We use the latest technologies to ensure that your website is
          optimized for performance, <br /> responsiveness, and SEO.
        </p>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
