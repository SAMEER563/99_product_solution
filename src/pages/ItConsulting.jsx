import React from "react";

const ItConsulting = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative w-[1084px] bg-[#E4E4E7] rounded-3xl shadow-lg mt-4">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 font-black border border-black w-[64px] h-[62px] rounded-xl"
        >
          <span className="text-xl text-[#1C1B1F]">✕</span>
        </button>

        <div className="m-6">
          {/* Title */}
        <h1 className="text-3xl md:text-5xl font-semibold text-[#000000] mb-3">
          IT Consulting & Support
        </h1>

        {/* Description */}
        <p className="text-[#000000] mb-6 text-lg mt-4 ml-2">
          Our expert IT consulting services provide businesses with the insights
          and strategies they need to <br /> optimize their IT infrastructure.
          Whether you`&apos;`re looking to streamline operations, improve <br />{" "}
          cybersecurity, or adopt new technologies, we offer:
        </p>

        {/* IT Strategy Development Section */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* IT Strategy Development */}
          <div className="p-4 bg-[#FFFFFF] w-[314px] h-[360px] rounded-xl shadow">
          <img src="/itstrategy.png" alt="" className="h-[94px] w-[92px] border border-none"/>
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
          <img src="/system.png" alt="" className="h-[94px] w-[92px] border border-none"/>
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
          <img src="/ongoing.png" alt="" className="h-[94px] w-[92px] border border-none"/>
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
    </div>
  );
};

export default ItConsulting;
