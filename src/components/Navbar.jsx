import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/logo/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile menü açıldığında scroll'u engelleyelim
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/", text: "Home", label: "Home page" },
    { to: "/products", text: "Products", label: "Products page" },
    { to: "/services", text: "Services", label: "Services page" },
    { to: "/contact", text: "Contact", label: "Contact page" },
  ];

  return (
    <header className="relative bg-gray-50 container mx-auto my-5 p-4 rounded-lg">
      <nav className="w-full" role="navigation" aria-label="Main navigation">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="relative z-50 font-bold"
              aria-label="Go to homepage"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="object-contain w-auto h-16 md:h-20"
                width="80"
                height="80"
                loading="eager"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="items-center hidden space-x-22 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="tracking-wider text-black text-lg font-semibold hover:text-[#0C4A79] transition-colors"
                  aria-label={link.label}
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="relative z-50 p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40 flex items-center justify-center pt-20 bg-white md:hidden"
              style={{ top: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col items-center p-4 space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className="text-black tracking-wider text-xl font-semibold hover:text-[#0C4A79] transition-colors"
                    aria-label={link.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
