import React from "react";

const ItOutsourcing = ({ closeModal }) => {
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
          <h1 className="text-3xl md:text-5xl font-semibold text-[#000000] mb-1 ml-6 ">
            IT Outsourcing
          </h1>

          {/* Description */}
          <p className="text-[#000000] mb-4 text-sm mt-8 md:mt-4 ml-6">
            Save time and resources by entrusting your IT needs to our experienced
            professionals. Our IT <br /> outsourcing services include:
          </p>

          {/* Card Section */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Dedicated Teams */}
            <div className="p-2 bg-[#FFFFFF] w-[300px] h-[340px] rounded-xl shadow ml-6">
              <img src="/dedicated.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                Dedicated Teams
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                We provide skilled, dedicated teams that work as an extension of your in-house staff,
                delivering expertise in development, testing, and maintenance.
              </p>
            </div>

            {/* Flexible Engagement Models */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow">
              <img src="/flexible.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                Flexible Engagement <br /> Models
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Whether you need full-time support or project-based assistance, we offer flexible models
                to suit your business needs.
              </p>
            </div>

            {/* End-to-End Management */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow md:ml-6 lg:-ml-6">
              <img src="/end.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                End-to-End <br /> Management
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                From project management to technical support, we take care of all aspects of IT so you
                can focus on your core business activities.
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-[#000000] text-base mb-12 mt-6 ml-6  ">
            Our outsourcing solutions allow you to scale quickly, access specialized skills,
            and reduce operational costs without compromising on quality or control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItOutsourcing;
