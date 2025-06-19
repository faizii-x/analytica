import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../public/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#152024] backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-[190px] h-auto">
          <img
            src={Logo} // Replace with your logo path
            alt="InsightIQ Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-blue-400 font-medium">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
          <Link to="/features" className="text-blue-600 hover:underline">
            Features
          </Link>
          <Link to="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-xl"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white/90 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-blue-600 hover:underline">
              About
            </Link>
            <Link to="/features" className="text-blue-600 hover:underline">
              Features
            </Link>
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
