import React from "react";

const MobileDevelopment = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative w-[1084px]  bg-[#E4E4E7] rounded-3xl shadow-lg overflow-auto">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-8 right-6 font-black border border-black w-[48px] h-[48px] rounded-xl" // Reduced size and position
        >
          <span className="text-lg text-[#1C1B1F]">✕</span> {/* Reduced icon size */}
        </button>

        <div className="m-4"> {/* Reduced margin */}
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-semibold text-[#000000] mb-1 ml-6"> {/* Reduced size and margin */}
            Mobile App <br className="md:hidden"/>Development
          </h1>
          <h2 className="text-xl md:text-4xl mt-2 text-[#000000] ml-6">(iOS, Android, Hybrid)</h2>

          {/* Description */}
          <p className="text-[#000000] mb-4 text-sm mt-2 ml-6"> {/* Reduced size and margin */}
            Our mobile app development services help businesses establish a strong
            presence on <br /> mobile platforms. We create feature-rich,
            user-friendly apps for:
          </p>

          {/* Mobile Platforms Section */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduced gap */}
            {/* iOS */}
            <div className="p-2 bg-[#FFFFFF] w-[300px] h-[340px] rounded-xl shadow ml-6"> {/* Reduced size */}
              <img src="/ios.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" /> {/* Reduced icon size */}
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">iOS</h3>
              <p className="text-[#000000] text-sm mt-1 ml-2"> {/* Reduced size */}
                Leverage the power of Apple&apos;s <br />
                ecosystem with custom iPhone <br /> and iPad apps that deliver <br />
                exceptional user experiences.
              </p>
            </div>

            {/* Android */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow">
              <img src="/android.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">Android</h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Reach a wide audience with <br /> dynamic, scalable Android apps{" "}
                <br />
                designed for functionality and <br />
                performance.
              </p>
            </div>

            {/* Hybrid */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow md:ml-6 lg:-ml-6">
              <img src="/hybrid.png" alt="" className="h-[92px] w-[92px] border border-none m-2" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">Hybrid</h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Reduce development time and <br />
                costs by building hybrid apps that <br /> work seamlessly across
                multiple <br /> platforms using technologies like <br /> React
                Native and Flutter.
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-[#000000] text-base mb-12 mt-6 ml-6  font-sans"> {/* Reduced size and margin */}
            Our development process focuses on usability, security, and
            scalability to meet your business needs and <br /> delight your users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;
