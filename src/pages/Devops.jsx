import React from "react";

const Devops = ({ closeModal }) => {
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
          <h1 className="text-3xl md:text-5xl font-semibold text-[#000000] mb-2 ml-6">
            DevOps & <br className="md:hidden"/> Automation
          </h1>

          {/* Description */}
          <p className="text-[#000000] mb-4 text-sm mt-4 ml-6">
            We provide DevOps solutions to accelerate your development cycles,
            improve collaboration, and <br /> increase the quality of your
            releases. Our services include:
          </p>

          {/* CI/CD Pipeline Setup Section */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* CI/CD Pipeline Setup */}
            <div className="p-2 bg-[#FFFFFF] w-[300px] h-[340px] rounded-xl shadow ml-6">
              <img src="/ci.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                CI/CD Pipeline Setup
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Automate your code deployment <br />
                process with Continuous <br /> Integration and Continuous Delivery
                <br />
                pipelines, reducing manual errors <br /> and speeding up releases.
              </p>
            </div>

            {/* Infrastructure as Code (IaC) */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow">
              <img src="/infra.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                Infrastructure as <br /> Code (IaC)
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Manage and provision your <br />
                infrastructure using code, ensuring <br /> consistency,
                repeatability, and <br /> scalability across environments.
              </p>
            </div>

            {/* Automation */}
            <div className="p-2 bg-white w-[300px] h-[340px] rounded-xl shadow md:ml-6 lg:-ml-6">
              <img src="/automation.png" alt="" className="h-[92px] w-[92px] m-2 border border-none" />
              <h3 className="text-xl font-semibold text-[#000000] ml-2 mt-8">
                Automation
              </h3>
              <p className="text-[#000000] text-sm mt-1 ml-2">
                Streamline workflows, testing, and <br /> deployments using
                advanced <br /> automation tools, reducing human <br />
                intervention and maximizing <br /> efficiency.
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-[#000000] text-base mb-12 mt-6 ml-6  ">
            By integrating DevOps practices, we help businesses reduce time to
            market, improve software quality, <br /> and foster a culture of
            continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Devops;
