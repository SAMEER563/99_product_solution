import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#E4E4E7] h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-xl text-[#4338CA] font-bold text-start mt-10 ml-4 md:ml-16">
          About Us
        </h1>
        <h1 className="text-3xl md:text-6xl font-semibold text-black text-start ml-4 md:ml-16 mt-4">
          Who we are
        </h1>
        <p className="text-start text-black text-base md:text-[18px] font-[400] mt-4 ml-4 md:ml-16">
          99Products Solutions is a dynamic IT service provider, specializing in
          building tailored websites and mobile applications to meet the unique
          needs of businesses. We offer a wide range of IT services, including
          cloud solutions, DevOps, and IT consulting, with a focus on delivering
          scalable, innovative, and cost-effective solutions.
          <br />
          <br />
          At 99products Solutions, we pride ourselves on our customer-centric
          approach, ensuring that our clients receive the highest level of
          service, from consultation to implementation. We partner with
          organizations to transform their digital presence and optimize their
          operational efficiency with cutting-edge technology.
          <br />
          <br />
          With a team of skilled professionals and a passion for technology, we
          are committed to helping businesses grow and succeed in today’s
          competitive landscape.
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden relative md:flex justify-center items-center w-full md:w-1/2 ">
        {/* Background circular patterns */}
        <div className="relative flex justify-center items-end w-full h-full ">
          {/* Circular pattern */}
          <div className="absolute left-[550px] bottom-[150px] lg:left-[520px] md:left-[420px] md:bottom-[300px] lg:bottom-[180px] transform rotate-180 ">
            <div className="w-[300px] h-[300px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-11 left-11"></div>
            <div className="w-[320px] h-[320px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-10 left-10"></div>
            <div className="w-[340px] h-[340px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-9 left-9"></div>
            <div className="w-[360px] h-[360px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-8 left-8"></div>
            <div className="w-[380px] h-[380px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-7 left-7"></div>
            <div className="w-[400px] h-[400px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-6 left-6"></div>
            <div className="w-[420px] h-[420px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-5 left-5"></div>
            <div className="w-[440px] h-[440px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-4 left-4"></div>
            <div className="w-[460px] h-[460px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-3 left-3"></div>
            <div className="w-[480px] h-[480px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-2 left-2"></div>
            <div className="w-[500px] h-[500px] rounded-full border-[1px] border-purple-800 opacity-50 absolute top-1 left-1"></div>
          </div>
        </div>

        {/* Floating square panels */}
        <div className="flex space-x-4 md:space-x-8">
          <div className="absolute top-28 md:top-[420px] left-4 md:left-6 w-[200px] lg:top-[200px] lg:left-[120px] h-[200px] md:w-[230px] md:h-[230px] bg-white bg-opacity-30 backdrop-blur-lg rounded-xl"></div>
          <div className="w-[200px] h-[200px] md:w-[230px] md:h-[230px] absolute top-48 md:top-[520px] left-4 md:left-16 lg:top-[300px] lg:left-[180px] bg-white bg-opacity-30 backdrop-blur-lg rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
