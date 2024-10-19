import React from "react";

const ItOutsourcing = ({ closeModal }) => {
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
         <h1 className="text-3xl md:text-5xl font-semibold text-[#000000] mb-2">
          IT Outsourcing
        </h1>

        {/* Description */}
        <p className="text-[#000000] mb-6 text-lg mt-4">
          Save time and resources by entrusting your IT needs to our experienced
          professionals. Our IT <br /> outsourcing services include:
        </p>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dedicated Teams */}
          <div className="p-4 bg-[#FFFFFF] w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              Dedicated Teams
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              We provide skilled, dedicated teams <br /> that work as an
              extension of your in- <br /> house staff, delivering expertise in{" "}
              <br /> development, testing, and <br /> maintenance.
            </p>
          </div>

          {/* Flexible Engagement Models */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              Flexible Engagement <br /> Models
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Whether you need full-time support <br /> or project-based
              assistance, we <br /> offer flexible models to suit your <br />{" "}
              business needs.
            </p>
          </div>

          {/* End-to-End Management */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              End-to-End <br /> Management
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              From project management to <br /> technical support, we take care
              of <br /> all aspects of IT so you can focus on <br /> your core
              business activities.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[#000000] text-lg mt-8 font-sans">
          Our outsourcing solutions allow you to scale quickly, access
          specialized skills, and reduce operational <br /> costs without
          compromising on quality or control.
        </p>
       </div>
      </div>
    </div>
  );
};

export default ItOutsourcing;
