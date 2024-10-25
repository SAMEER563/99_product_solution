import React from "react";

const MobileDevelopment = ({ closeModal }) => {
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
          Mobile App Development
        </h1>
        <h2 className="text-2xl md:text-4xl mt-2 text-[#000000] ">(iOS, Android, Hybrid)</h2>

        {/* Description */}
        <p className="text-[#000000] mb-6 text-lg mt-4 ml-2">
          Our mobile app development services help businesses establish a strong
          presence on <br /> mobile platforms. We create feature-rich,
          userfriendly apps for:
        </p>

        {/* Mobile Platforms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* iOS */}
          <div className="p-4 bg-[#FFFFFF] w-[314px] h-[360px] rounded-xl shadow">
          <img src="/ios.png" alt="" className="h-[92px] w-[92px] border border-none"/>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">iOS</h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Leverage the power of Apple`&apos;`s <br />
              ecosystem with custom iPhone <br /> and iPad apps that deliver{" "}
              <br /> exceptional user experiences.
            </p>
          </div>

          {/* Android */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
          <img src="/android.png" alt="" className="h-[92px] w-[92px] border border-none"/>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">Android</h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Reach a wide audience with <br /> dynamic, scalable Android apps{" "}
              <br />
              designed for functionality and <br />
              performance.
            </p>
          </div>

          {/* Hybrid */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
          <img src="/hybrid.png" alt="" className="h-[92px] w-[92px] border border-none"/>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">Hybrid</h3>
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
    </div>
  );
};

export default MobileDevelopment;
