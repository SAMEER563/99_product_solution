import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 md:px-10 py-10 lg:py-20 bg-black">
      {/* Left Section: Text */}
      <div className="lg:mt-32 lg:ml-20 mb-10 lg:mb-0 text-center lg:text-left">
        <h1 className="text-white text-3xl md:text-4xl mb-4">
          Our Latest Innovation
        </h1>
        <span className="bg-gradient-to-br from-[#5E6CD4] to-[#A47DE8]  bg-clip-text text-transparent font-semibold text-3xl md:text-5xl">
          PolitikConnect
        </span>
        <p className="text-white text-base md:text-lg mt-4">
          PolitikConnect is a modern platform that streamlines operations for
          MPs
          <br className="hidden lg:block" />
          and MLAs. It enhances communication, task management, and{" "}
          <br className="hidden lg:block" />
          performance tracking, helping leaders connect with constituents,
          <br className="hidden lg:block" />
          party workers, and staff.
        </p>
        <Link to="/" className="inline-block text-[#7F75F0] mt-4 ">
          <div className="flex gap-2">
            Explore
            <FaArrowRightLong className="mt-1.5" />
          </div>
        </Link>
      </div>

      {/* Right Section: Block */}
      <div className="w-full lg:w-[380px] h-[260px] md:h-[460px] bg-[#1E1E1E] rounded-3xl shadow-lg md:m-8 flex justify-center items-center">
        {/* Content inside the block, if any */}
      </div>
    </div>
  );
};

export default Latest;
