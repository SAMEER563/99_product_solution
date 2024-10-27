import React from "react";

const WebsiteDevelopment = ({ closeModal }) => {
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
          <h1 className="text-3xl md:text-5xl font-semibold text-[#000000] mb-1 ml-6">
            Website <br className="md:hidden"/>Development
          </h1>
          <h2 className="text-xl md:text-4xl mt-2 text-[#000000] ml-6">(Design, Custom Builds, E-commerce)</h2>

          {/* Description */}
          <p className="text-[#000000] mb-4 text-sm mt-4 ml-6 ">
            At 99product Solutions, we specialize in creating tailored,
            high-performance websites <br /> that align with your business goals.
          </p>

          {/* Services Section */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {/* Design */}
            <div className="p-2 bg-[#FFFFFF] w-[300px] h-[340px] rounded-xl shadow ml-6">
              <img src="/design.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">Design</h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                We craft visually stunning, user-centric website designs that
                offer intuitive navigation and deliver a seamless user experience.
              </p>
            </div>

            {/* Custom Builds */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow">
              <img src="/custom.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">Custom Builds</h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Whether you need a unique website or advanced functionality, our
                team can develop custom-built websites tailored to your specific requirements.
              </p>
            </div>

            {/* E-commerce */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow md:ml-6 lg:-ml-6">
              <img src="/ecom.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">E-commerce</h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                We design and build robust, secure, and scalable e-commerce
                platforms that enhance customer experiences and streamline your online business operations.
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-[#000000] text-base text-start mb-12 mt-6 ml-6 ">
            We use the latest technologies to ensure that your website is optimized
            for performance, responsiveness, and SEO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
