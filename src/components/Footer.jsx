import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-gray-100 container rounded-lg mt-20 mb-5"
      role="contentinfo"
    >
      <div className="flex justify-between items-center px-8 py-4">
        <div>
          <Link to="/" aria-label="Cable Machinery GmbH Ana Sayfa">
            <img
              src="/logo/logo.png"
              alt="Cable Machinery GmbH Logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6  list-none">
            <li>
              <Link to="/" className="hover:text-[#0C4A79]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#0C4A79]">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#0C4A79]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#0C4A79]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center py-4 text-gray-600">
        © {new Date().getFullYear()} Cable Machinery GmbH | Alle Rechte
        vorbehalten | Design und Entwicklung Macaree
      </div>
    </footer>
  );
};

export default Footer;
