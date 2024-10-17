import React, { useState } from "react";
// Import the CSS file for scrollbar
import "./Services.css";

// Define individual service components
const Service = ({ number, title, description, route, onHover }) => (
  <div
    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    onMouseEnter={onHover}
  >
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
  </div>
);

// Main component
const ServicesList = () => {
  const [activeService, setActiveService] = useState(0);

  const handleServiceHover = (index) => {
    setActiveService(index); // Update the active service index on hover
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-16 relative">
      {/* Vertical Indicator */}
      <div className="absolute left-4 top-[230px] transform -translate-y-0.5 flex flex-col lg:space-y-48 space-y-48 md:space-y-56">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-12 rounded-full ${
              activeService === i ? "bg-[#7F75F0]" : "bg-[#4E4E4E]"
            }`}
          ></div>
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
      <div className="space-y-16">
        <Service
          number="01/06"
          title="Website Development"
          description="Creative design, custom builds & e-commerce solutions"
          route="/web"
          onHover={() => handleServiceHover(0)}
        />
        <Service
          number="02/06"
          title="Mobile App Development"
          description="Innovative apps for iOS, Android & hybrid platforms"
          route="/mobile"
          onHover={() => handleServiceHover(1)}
        />
        <Service
          number="03/06"
          title="IT Consulting & Support"
          description="Expert guidance for your IT challenges"
          route="/consulting"
          onHover={() => handleServiceHover(2)}
        />
        <Service
          number="04/06"
          title="Cloud Solutions & Integration"
          description="Seamless integration & scalable cloud solutions"
          route="/cloud"
          onHover={() => handleServiceHover(3)}
        />
        <Service
          number="05/06"
          title="DevOps & Automation"
          description="Streamline operations with DevOps & Automation"
          route="/devops"
          onHover={() => handleServiceHover(4)}
        />
        <Service
          number="06/06"
          title="IT Outsourcing"
          description="Flexible IT support tailored to your needs"
          route="/outsourcing"
          onHover={() => handleServiceHover(5)}
        />
      </div>
    </div>
  );
};


export default ServicesList;
