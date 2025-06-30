import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='text-black px-4 md:px-16 lg:px-24 fixed top-0 w-full z-50 bg-white shadow'>
      <div className="flex items-center justify-between py-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className='w-10' />
          <h1 className="text-xl font-bold">INTERCOM</h1>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 font-semibold ml-10">
          <select className="border-none outline-none bg-transparent">
            <option>Products</option>
          </select>
          <select className="border-none outline-none bg-transparent">
            <option>Solutions</option>
          </select>
          <a href="#services" className='hover:text-gray-400'>Customers</a>
          <select className="border-none outline-none bg-transparent">
            <option>Resources</option>
          </select>
          <a href="#contact" className='hover:text-gray-400'>Pricing</a>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex ml-6 gap-4">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full transition">
            Start free trial <FaArrowRight className="ml-2" />
          </button>
          <button className="hover:bg-gray-200 text-black font-bold px-4 py-2 rounded-full transition border border-black">
            View Demo
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 pb-4 px-4">
          <select className="border border-gray-300 rounded px-2 py-1">
            <option>Products</option>
          </select>
          <select className="border border-gray-300 rounded px-2 py-1">
            <option>Solutions</option>
          </select>
          <a href="#services" className='text-gray-700'>Customers</a>
          <select className="border border-gray-300 rounded px-2 py-1">
            <option>Resources</option>
          </select>
          <a href="#contact" className='text-gray-700'>Pricing</a>

          <div className="flex flex-col gap-3 mt-4">
            <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full transition">
              Start free trial <FaArrowRight className="ml-2" />
            </button>
            <button className="hover:bg-gray-200 text-black font-bold px-4 py-2 rounded-full transition border border-black">
              View Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
