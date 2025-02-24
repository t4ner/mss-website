import React from "react";
import logo from "/logo/logo.png";
import { Link } from "react-router-dom";
import Hero from "./Hero";
const Navbar = () => {
  return (
    <div>
      <header className=" rounded-lg bg-white/50 container mx-auto my-5">
        <nav
          aria-label="Main navigation"
          className="flex justify-around items-center p-4 font-krona"
        >
          <Link
            to="/"
            className="hover:text-[#0C4A79]  transition-colors"
            aria-label="Home page"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-[#0C4A79] transition-colors"
            aria-label="Products page"
          >
            Products
          </Link>

          <div className="flex items-center">
            <Link to="/" aria-label="Go to homepage">
              <img
                src={logo}
                alt="Company Logo"
                className="h-20 w-auto"
                width="80"
                height="80"
              />
            </Link>
          </div>

          <Link
            to="/services"
            className="hover:text-[#0C4A79] transition-colors"
            aria-label="Services page"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#0C4A79] transition-colors"
            aria-label="Contact page"
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
