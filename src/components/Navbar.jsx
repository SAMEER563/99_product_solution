import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black ">
      <div className="flex lg:justify-around    justify-between items-center w-full md:px-6 px-3 py-4">
        <div>
        <Link to="/">
        <img src="/logo.png" alt="" className='w-[175px] h-[52px] mt-4 ml-10' />
        </Link>
        </div>
        <div className="md:flex hidden md:gap-12 gap-20 text-base text-white ">
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/blogs">Blog</Link>
        </div>
        <div className="md:hidden flex">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="border border-[#7F75F0] py-1 px-2 rounded-full text-[#7F75F0]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 items-center bg-black py-4 text-white">
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/case-studies" onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="border border-[#7F75F0] py-1 px-2 rounded-full text-[#7F75F0]">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
