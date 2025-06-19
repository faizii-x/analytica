import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../public/images/logo.webp";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#152024] backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="w-[190px] h-auto">
          <img
            src={Logo}
            alt="Analytica Logo"
            className="w-full h-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 text-white ">
          <Link to="/" className="">
            {pathname === "/" ? (
              <span className=" text-blue-600 ">Home</span>
            ) : (
              "Home"
            )}
          </Link>

          <Link to="/about" className="">
            {pathname === "/about" ? (
              <span className=" text-blue-600 ">About</span>
            ) : (
              "About"
            )}
          </Link>

          <Link to="/features" className="">
            {pathname === "/features" ? (
              <span className=" text-blue-600 ">Features</span>
            ) : (
              "Features"
            )}
          </Link>

          <Link to="/contact" className="">
            {pathname === "/contact" ? (
              <span className=" text-blue-600 ">Contact</span>
            ) : (
              "Contact"
            )}
          </Link>
        </nav>

        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-xl"
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#152024] backdrop-blur-sm">
          <nav className="flex flex-col space-y-4 text-white ">
            <Link to="/" className="border-b pb-2">
              {pathname === "/" ? (
                <span className=" text-blue-600 ">Home</span>
              ) : (
                "Home"
              )}
            </Link>

            <Link to="/about" className="border-b pb-2">
              {pathname === "/about" ? (
                <span className=" text-blue-600 ">About</span>
              ) : (
                "About"
              )}
            </Link>

            <Link to="/features" className="border-b pb-2">
              {pathname === "/features" ? (
                <span className=" text-blue-600 ">Features</span>
              ) : (
                "Features"
              )}
            </Link>

            <Link to="/contact" className="">
              {pathname === "/contact" ? (
                <span className=" text-blue-600 ">Contact</span>
              ) : (
                "Contact"
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
