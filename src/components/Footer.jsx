import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-white/50 container rounded-lg mt-10 lg:mt-20 lg:mb-5 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-4 space-y-6 md:space-y-0">
        <div>
          <Link to="/" aria-label="Cable Machinery GmbH Ana Sayfa">
            <img
              src="/logo/logo.png"
              alt="Cable Machinery GmbH Logo"
              className="h-16 md:h-20 w-auto"
            />
          </Link>
        </div>
        <nav aria-label="Footer navigation" className="w-full">
          <ul className="flex flex-row  justify-center items-center gap-4 md:gap-6 list-none">
            <li>
              <Link
                to="/"
                className="hover:text-[#0C4A79] text-xs md:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[#0C4A79] text-xs md:text-base"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#0C4A79] text-xs md:text-base"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#0C4A79] text-xs md:text-base"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center py-4 text-gray-600 text-xs md:text-base border-t border-gray-200">
        © {new Date().getFullYear()} Cable Machinery GmbH | Alle Rechte
        vorbehalten | Design und Entwicklung Macaree
      </div>
    </footer>
  );
};

export default Footer;
