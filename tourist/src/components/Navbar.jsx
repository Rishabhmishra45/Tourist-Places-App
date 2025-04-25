import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-wide hover:text-red-100 transition duration-300">
          Royal Rajasthan
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-base font-medium">
            <Link to="/" className="hover:text-red-200 hover:underline transition duration-300">
              Home
            </Link>
            <Link to="#" className="hover:text-red-200 hover:underline transition duration-300">
              About
            </Link>
            <Link to="#" className="hover:text-red-200 hover:underline transition duration-300">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden focus:outline-none text-white hover:text-red-200 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 flex flex-col space-y-2 text-base font-medium">
            <Link to="/" className="hover:text-red-200 hover:underline transition duration-300">
              Home
            </Link>
            <Link to="#" className="hover:text-red-200 hover:underline transition duration-300">
              About
            </Link>
            <Link to="#" className="hover:text-red-200 hover:underline transition duration-300">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
