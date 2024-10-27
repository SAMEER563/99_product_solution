import React from "react";

const ItConsulting = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative w-[1084px] bg-[#E4E4E7] rounded-3xl shadow-lg overflow-auto">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-8 right-6 font-black border border-black w-[48px] h-[48px] rounded-xl"
        >
          <span className="text-lg text-[#1C1B1F]">✕</span>
        </button>

        <div className="m-4"> {/* Reduced margin */}
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-semibold text-[#000000] mb-2 ml-6">
            IT Consulting & <br className="md:hidden"/> Support
          </h1>

          {/* Description */}
          <p className="text-[#000000] mb-4 text-sm mt-4 ml-6">
            Our expert IT consulting services provide businesses with the insights
            and strategies they need to <br /> optimize their IT infrastructure.
            Whether you’re looking to streamline operations, improve <br />
            cybersecurity, or adopt new technologies, we offer:
          </p>

          {/* IT Strategy Development Section */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* IT Strategy Development */}
            <div className="p-2 bg-[#FFFFFF] w-[300px] h-[340px] rounded-xl shadow ml-6">
              <img src="/itstrategy.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                IT Strategy <br /> Development
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Align your IT capabilities with your <br /> business goals through
                strategic planning.
              </p>
            </div>

            {/* System Implementation */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow">
              <img src="/system.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                System <br /> Implementation
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                From upgrades to new system <br />
                deployments, we ensure smooth <br />
                transitions and minimal downtime.
              </p>
            </div>

            {/* Ongoing Support */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow md:ml-6 lg:-ml-6">
              <img src="/ongoing.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                Ongoing Support
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Our dedicated support team <br />
                ensures your IT systems run efficiently with proactive <br />
                maintenance, troubleshooting, and 24/7 monitoring.
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-[#000000] text-base mb-12 mt-6 ml-6 ">
            We help you navigate the complexities of IT to ensure that your
            business remains competitive and agile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItConsulting;
