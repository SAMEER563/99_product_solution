import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#141414] text-white font-sans flex justify-center items-center">
      <div className="mt-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl ">
            Need a quote? Have a question?
          </h1>
          <p className="text-4xl md:text-5xl  font-bold mt-2">Get in touch!</p>
          <p className="text-gray-400 mt-2 text-sm md:text-base text-center">
            Our team is happy to answer any queries you may <br className="block lg:hidden"/> have. Fill out the
            form and <br className="hidden lg:block"/> we’ll be in touch as soon as possible.
          </p>
        </div>
        <div className="max-w-[90vw] md:max-w-[1070px] h-auto rounded-[40px] border border-[#3D3F43] m-4 flex flex-col md:flex-row">
          <div className="w-full md:w-[390px] h-auto rounded-t-[40px] md:rounded-tl-[40px] md:rounded-tr-[0px] md:rounded-l-[40px] bg-[#3D3F43]">
            {/* Contact info */}
            <div className="m-10 ">
              <h2 className="text-lg  mb-4">Contact info</h2>
              <p className="mb-2 text-[#9299A0]">99product solutions</p>
              <div className="mt-16">
                <div className="flex items-center mb-1">
                  <span className="inline-block h-3 w-3 bg-[#7F75F0] rounded-full mr-2"></span>
                  <p>Address:</p>
                </div>
                <p className="text-sm">Office address</p>
              </div>
              <div>
                <div className="flex items-center mt-16">
                  <span className="inline-block h-3 w-3 bg-[#7F75F0] rounded-full mr-2"></span>
                  <p>Contact:</p>
                </div>
                <p className="text-sm">+023828139809</p>
              </div>
            </div>
          </div>

          <div className="m-6 flex-1">
            {/* Form Section */}
            <form action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none"
                  type="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Subject"
                  required
                />
                <input
                  className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Company name"
                />
              </div>
              <div className="mt-4">
                <textarea
                  className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg focus:outline-none w-full"
                  placeholder="Write a message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-between mt-4">
                <p className="text-[#9299A0] text-sm m-4">
                  By submitting, you agree to the storage and processing of
                  <br />
                  your personal information to provide the requested content.{" "}
                  <br />
                  See our{" "}
                  <a href="#" className="text-white">
                    Privacy Policy
                  </a>{" "}
                  for details.
                </p>
                <button
                  className="bg-[#7F75F0] text-black py-1 px-6 m-4 rounded-full w-[99px] md:w[120px] h-[40px] md:w-auto"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
