import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../public/images/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#152024] text-gray-300 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start">
          <Link to="/" className="w-[190px]">
            <img
              src={Logo}
              alt="Analytica Logo"
              className="w-full h-auto object-contain"
            />
          </Link>
          <p className="text-sm mt-4">
            Helping businesses grow with real-time insights, predictive
            analytics, and tailored reports.
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FontAwesomeIcon icon={faEnvelope} /> info@analyticadata.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faPhone} /> +123 456 7890
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Analytica Data. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
