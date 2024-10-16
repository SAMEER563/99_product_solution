import React from "react";
import { Link } from "react-router-dom";

const Devops = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-[1084px] bg-[#E4E4E7] rounded-3xl  shadow-lg p-10">
        {/* Close button */}
        <Link to="/" className="absolute top-4 right-4 text-[#000000]">
          <button className=" m-4 md:-8 font-black border border-black w-[64px] h-[62px] rounded-xl">
            <span className="text-xl text-[#1C1B1F]">✕</span>
          </button>
        </Link>

        {/* Title */}
        <h1 className="text-5xl font-semibold text-[#000000] m-2 ">
          DevOps & Automation
        </h1>

        {/* Description */}
        <p className="text-[#000000] mb-6 text-lg mt-4 ml-2">
          We provide DevOps solutions to accelerate your development cycles,
          improve collaboration, and <br /> increase the quality of your
          releases. Our services include:
        </p>

        {/* CI/CD Pipeline Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Design */}
          <div className="p-4 bg-[#FFFFFF] w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              CI/CD Pipeline Setup
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Automate your code deployment <br />
              process with Continuous <br /> Integration and Continuous Delivery{" "}
              <br />
              pipelines, reducing manual errors <br /> and speeding up releases
            </p>
          </div>

          {/* Infrastructure as Code (IaC) */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              Infrastructure as <br /> Code (IaC)
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Manage and provision your <br />
              infrastructure using code, ensuring <br /> consistency,
              repeatability, and <br /> scalability across environments.
            </p>
          </div>

          {/* Automation */}
          <div className="p-4 bg-white w-[314px] h-[360px] rounded-xl shadow">
            <div className="bg-[#D9D9D9] h-[94px] w-[92px] m-4"></div>
            <h3 className="text-2xl font-semibold text-[#000000] ml-4">
              Automation
            </h3>
            <p className="text-[#000000] text-base  mt-2 ml-4">
              Streamline workflows, testing, and <br /> deployments using
              advanced <br /> automation tools, reducing human <br />{" "}
              intervention and maximizing <br /> efficiency.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[#000000] text-lg mt-8 font-sans">
          By integrating DevOps practices, we help businesses reduce time to
          market, improve software quality, <br /> and foster a culture of
          continuous improvement.
        </p>
      </div>
    </div>
  );
};

export default Devops;
