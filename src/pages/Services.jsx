import React, { useState } from "react";

// Define individual service components
const Service = ({ number, title, description, route, onHover }) => (
  <div
    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    onMouseEnter={onHover}
  >
    <div className="text-left flex relative">
      <div>
        <div className="flex mb-4 flex-col">
          <span className="text-[#7F75F0] text-xl md:text-3xl font-semibold mb-2">
            {number}
          </span>
          <h2 className="text-2xl md:text-3xl">{title}</h2>
        </div>
        <p className="text-white text-xl mb-6">{description}</p>
        <a
          href={route}
          className="text-[#7F75F0] font-semibold hover:underline flex items-center"
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
    <div className="bg-black text-white min-h-screen p-6 md:p-16 overflow-none">
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
