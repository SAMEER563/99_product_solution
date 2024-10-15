import React from "react";
import { Link } from "react-router-dom";

const MobileDevelopment = () => {
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
        <h1 className="text-5xl font-semibold text-[#000000] m-2 ">
          Mobile App Development{" "}
        </h1>
        <h1 className="mt-4 ml-2 text-5xl"> (iOS, Android, Hybrid)</h1>

        {/* Description */}
        <p className="text-[#000000] mb-6 text-lg mt-4 ml-2">
          Our mobile app development services help businesses establish a strong
          presence on <br /> mobile platforms. We create feature-rich,
          userfriendly apps for:
        </p>

        {/* iOS Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* iOS */}
          <div className="p-4 bg-[#FFFFFF] w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">iOS</h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Leverage the power of Apple`&apos;`s <br />
              ecosystem with custom iPhone <br /> and iPad apps that deliver{" "}
              <br /> exceptional user experiences.
            </p>
          </div>

          {/* Android */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              Android
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Reach a wide audience with <br /> dynamic, scalable Android apps{" "}
              <br />
              designed for functionality and <br />
              performance.
            </p>
          </div>

          {/* Hybrid */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              Hybrid
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Reduce development time and <br />
              costs by building hybrid apps that <br /> work seamlessly across
              multiple <br /> platforms using technologies like <br /> React
              Native and Flutter.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[#000000] text-lg mt-8 font-sans">
          Our development process focuses on usability, security, and
          scalability to meet your business needs and <br /> delight your users.
        </p>
      </div>
    </div>
  );
};

export default MobileDevelopment;
