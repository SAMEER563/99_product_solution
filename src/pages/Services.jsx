import React, { useState, useEffect } from "react";
import "./Services.css";
import WebsiteDevelopment from "./WebsiteDevelopment";
import ItConsulting from "./ItConsulting";
import Devops from "./Devops";
import ItOutsourcing from "./ItOutsourcing";
import MobileDevelopment from "./MobileDevelopment";

// Modal Component with Close Button
const Modal = ({ children, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
    role="dialog"
    aria-modal="true"
  >
    <div className="bg-white rounded-lg p-8 w-[90%] max-w-lg relative ">
      {children}
    
    </div>
  </div>
); 

// Service Component
const Service = ({ number, title, description, onLearnMore, onHover, onLeave, image }) => (
  <div
    className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="text-left flex flex-col ml-4">
      <span className="text-[#7F75F0] text-xl md:text-3xl font-semibold mb-2">
        {number}
      </span>
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      <p className="text-white text-xl mb-6">{description}</p>
      <button
        onClick={onLearnMore}
        className="text-[#7F75F0] font-semibold hover:underline flex md:flex items-center"
      >
        Learn more <span className="ml-2">→</span>
      </button>
    </div>

    <div className="lg:w-[444px] md:h-[274.3px] md:mr-6 border-[#3D3A3A] rounded-xl">
      <img src={image} alt={title} className="w-full h-full hidden  md:flex object-cover rounded-xl" />
    </div>
  </div>
);

// Vertical Indicator Component
const VerticalIndicator = ({ activeService }) => {
  const isActivePart = (serviceIndex, partIndex) => {
    if (activeService === null) return false;
    
    // First service activates the first part (index 0)
    if (serviceIndex === 0 && partIndex === 0) return activeService === serviceIndex;

    // Last service activates the third part (index 2)
    if (serviceIndex === 4 && partIndex === 2) return activeService === serviceIndex;

    // Services 2 to 4 activate the second part (index 1)
    if (serviceIndex >= 1 && serviceIndex <= 3 && partIndex === 1) return activeService === serviceIndex;
    
    return false;
  };

  return (
    <div className="absolute left-10 top-44 md:top-20 transform -translate-y-0.5 flex flex-col space-y-16  md:left-24 mt-0  md:space-y-36 md:mt-52 lg:mt-52">
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
  );
};

// Main Services List Component
const ServicesList = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    if (hoveredService !== null) {
      const timer = setTimeout(() => {
        setActiveService(hoveredService);
      }, 200); // Adds a small delay to avoid blinking

      return () => clearTimeout(timer);
    }
  }, [hoveredService]);

  const services = [
    { number: "01/05", title: "Website Development", description: "Creative design, custom builds & e-commerce solutions", image: "/code1.png", component: <WebsiteDevelopment /> },
    { number: "02/05", title: "Mobile App Development", description: "Innovative apps for iOS, Android & hybrid platforms",image:"/mobiledevelop.png", component: <MobileDevelopment /> },
    { number: "03/05", title: "IT Consulting & Support", description: "Expert guidance for your IT challenges",image:"/itconsult.png", component: <ItConsulting /> },
    { number: "04/05", title: "DevOps & Automation", description: "Streamline operations with DevOps & Automation",image:"/devops.png", component: <Devops /> },
    { number: "05/05", title: "IT Outsourcing", description: "Flexible IT support tailored to your needs", image:"/itout.png", component: <ItOutsourcing /> },
  ];

  const openModal = (component) => {
    setActiveService(component);
  };

  const closeModal = () => {
    setActiveService(null);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-16 relative">
      <VerticalIndicator activeService={activeService} />

      <div className="text-center mb-12 md:mt-16">
        <h1 className="text-3xl md:text-4xl">What we offer</h1>
        <p className="mt-4">
          Your trusted partner for Website Development, Mobile Apps, <br />
          and Comprehensive IT Services
        </p>
      </div>

      <div className="space-y-10 md:space-y-16 md:ml-24 ml-16">
        {services.map((service, index) => (
          <Service
            key={index}
            number={service.number}
            title={service.title}
            description={service.description}
            image={service.image}
            onLeave={() => setHoveredService(null)}
            onLearnMore={() => openModal(service.component)}
          />
        ))}
      </div>

      {activeService && (
  <Modal>
    {React.cloneElement(activeService, { closeModal })} {/* Pass closeModal as a prop */}
  </Modal>
)}
    </div>
  );
};

export default ServicesList;
