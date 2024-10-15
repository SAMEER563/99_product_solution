import React from "react";
import { Link } from "react-router-dom";

const ItConsulting = () => {
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
          IT Consulting & Support
        </h1>

        {/* Description */}
        <p className="text-[#000000] mb-6 text-lg mt-4 ml-2">
          Our expert IT consulting services provide businesses with the insights
          and strategies they need to <br /> optimize their IT infrastructure.
          Whether you`&apos;`re looking to streamline operations, improve <br />{" "}
          cybersecurity, or adopt new technologies, we offer:
        </p>

        {/* IT Strategy Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Design */}
          <div className="p-4 bg-[#FFFFFF] w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              IT Strategy <br /> Development
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Align your IT capabilities with your <br /> business goals through
              strategic <br /> planning.
            </p>
          </div>

          {/* System Implementation */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              System <br /> Implementation
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              From upgrades to new system <br />
              deployments, we ensure smooth <br />
              transitions and minimal downtime.
            </p>
          </div>

          {/* Ongoing Support */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              Ongoing Support
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Our dedicated support team <br /> ensures your IT systems run{" "}
              <br />
              efficiently with proactive <br /> maintenance, troubleshooting,
              and <br /> 24/7 monitoring.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[#000000] text-lg mt-8 font-sans">
          We help you navigate the complexities of IT to ensure that your
          business remains competitive and agile.
        </p>
      </div>
    </div>
  );
};

export default ItConsulting;
