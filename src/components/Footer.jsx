import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-white container rounded-lg shadow-sm mt-10 lg:mt-20 lg:mb-5 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Link to="/" aria-label="Cable Machinery GmbH Ana Sayfa">
              <img
                src="/logo/logo.png"
                alt="Cable Machinery GmbH Logo"
                className="h-14 lg:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Main Navigation links - Hidden on mobile */}
          <nav
            aria-label="Main Footer navigation"
            className="hidden md:block md:ml-auto"
          >
            <ul className="flex flex-wrap text-sm lg:text-base justify-end gap-x-8 gap-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 font-medium"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal links - Visible on all screens */}
          <nav
            aria-label="Legal Footer navigation"
            className="md:ml-auto mt-4 md:mt-0"
          >
            <ul className="flex flex-wrap text-sm lg:text-base justify-center md:justify-end gap-x-4 md:gap-x-8 gap-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 font-medium"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons - Removed */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Cable Machinery GmbH | Alle Rechte
            vorbehalten | Design und Entwicklung Macaree
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
