import React, { useState } from "react";
// Import the CSS file for scrollbar
import "./Services.css";

// Define individual service components
const Service = ({ number, title, description, route, onHover, onLeave }) => (
  <div
    className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center"
    onMouseEnter={onHover}  // Activate on hover
    onMouseLeave={onLeave}  // Reset on hover leave
  >
    {/* Left side content */}
    <div className="text-left flex relative">
      <div>
        <div className="flex mb-4 flex-col ml-4">
          <span className="text-[#7F75F0] text-xl md:text-3xl font-semibold mb-2">
            {number}
          </span>
          <h2 className="text-2xl md:text-3xl">{title}</h2>
        </div>
        <p className="text-white text-xl mb-6 ml-4">{description}</p>
        <a
          href={route}
          className="text-[#7F75F0] font-semibold hover:underline flex items-center ml-4"
        >
          Learn more <span className="ml-2">→</span>
        </a>
      </div>
    </div>

    {/* Right side container */}
    <div className="md:w-[430px] md:h-[267.3px] border-[1px] w-full h-[220px] border-[#3D3A3A] rounded-xl  ">
      {/* Content inside the block, if any */}
      <div className=" ml-32 md:ml-40 md:mt-28 mt-20  w-[91.8px] h-[35.43px] bg-[#1E1E1E] border-[#7F75F0] rounded-lg border ">
        <h1 className="md:ml-2 md:mt-1 font-medium">{`<`}/{`>`} Code</h1>
      </div>
    </div>
  </div>
);

// Main component
const ServicesList = () => {
  const [activeService, setActiveService] = useState(null);  // Set to null initially

  const handleServiceHover = (index) => {
    setActiveService(index); // Set the active service index on hover
  };

  const handleServiceLeave = () => {
    setActiveService(null);  // Reset active state when the cursor leaves
  };

  // Helper function to determine which part of the indicator is active
  const isActivePart = (serviceIndex, partIndex) => {
    if (activeService === null) return false; // No active service means no indicator is highlighted
    if (serviceIndex === 0 && partIndex === 0) return activeService === serviceIndex;
    if (serviceIndex >= 1 && serviceIndex <= 3 && partIndex === 1) return activeService === serviceIndex;
    if (serviceIndex === 4 && partIndex === 2) return activeService === serviceIndex;
    return false;
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-16 relative">
      {/* Vertical Indicator */}
      <div className="absolute md:left-4 left-4 top-[240px] transform -translate-y-0.5 flex flex-col md:space-y-36 space-y-80">
        {[...Array(5)].map((_, serviceIndex) => (
          <div key={serviceIndex} className="flex flex-col space-y-2">
            {[...Array(3)].map((_, partIndex) => (
              <div
                key={partIndex}
                className={`w-[4px] h-[60px] rounded-full transition-all duration-300 ${
                  isActivePart(serviceIndex, partIndex)
                    ? "bg-[#7F75F0] scale-105"
                    : "bg-[#4E4E4E] scale-100"
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>

      {/* Main Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl">What we offer</h1>
        <p className="mt-4">
          Your trusted partner for Website Development, Mobile Apps, <br />
          and Comprehensive IT Services
        </p>
      </div>

      {/* Services Section */}
      <div className="space-y-20 md:space-y-16">
        <Service
          number="01/05"
          title="Website Development"
          description="Creative design, custom builds & e-commerce solutions"
          route="/web"
          onHover={() => handleServiceHover(0)}
          onLeave={handleServiceLeave}
        />
        <Service
          number="02/05"
          title="Mobile App Development"
          description="Innovative apps for iOS, Android & hybrid platforms"
          route="/mobile"
          onHover={() => handleServiceHover(1)}
          onLeave={handleServiceLeave}
        />
        <Service
          number="03/05"
          title="IT Consulting & Support"
          description="Expert guidance for your IT challenges"
          route="/consulting"
          onHover={() => handleServiceHover(2)}
          onLeave={handleServiceLeave}
        />
        <Service
          number="04/05"
          title="DevOps & Automation"
          description="Streamline operations with DevOps & Automation"
          route="/devops"
          onHover={() => handleServiceHover(3)}
          onLeave={handleServiceLeave}
        />
        <Service
          number="05/05"
          title="IT Outsourcing"
          description="Flexible IT support tailored to your needs"
          route="/outsourcing"
          onHover={() => handleServiceHover(4)}
          onLeave={handleServiceLeave}
        />
      </div>
    </div>
  );
};

export default ServicesList;
