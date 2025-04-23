import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-rajasthan-blue text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Rajasthan Tourism
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-rajasthan-orange transition duration-300">
              Home
            </Link>
            
            <Link to="#" className="hover:text-rajasthan-orange transition duration-300">
              About
            </Link>
            <Link to="#" className="hover:text-rajasthan-orange transition duration-300">
              Contact
            </Link>
          </div>
          <button className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;