import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/logo/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
    { to: "/", text: t("navigation.home"), label: t("navigation.home") },
    {
      to: "/products",
      text: t("navigation.products"),
      label: t("navigation.products"),
    },
    {
      to: "/services",
      text: t("navigation.services"),
      label: t("navigation.services"),
    },
    {
      to: "/contact",
      text: t("navigation.contact"),
      label: t("navigation.contact"),
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="relative bg-gray-50 container mx-auto my-5 p-4 lg:rounded-lg">
      <nav className="w-full" role="navigation" aria-label="Main navigation">
        <div className="container px-0  lg:px-4 mx-auto">
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
            <div className="items-center hidden space-x-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="tracking-wider text-black  font-medium hover:text-[#0C4A79] transition-colors"
                  aria-label={link.label}
                >
                  {link.text}
                </Link>
              ))}

              {/* Language Selector */}
              <div className="relative ml-4 group">
                <button
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 hover:border-[#0C4A79] transition-all duration-300 shadow-sm hover:shadow-md"
                  onClick={(e) => {
                    const select = e.currentTarget.nextElementSibling;
                    select.click();
                  }}
                >
                  {i18n.language === "en" ? (
                    <svg className="w-5 h-5" viewBox="0 0 640 480">
                      <path fill="#012169" d="M0 0h640v480H0z" />
                      <path
                        fill="#FFF"
                        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
                      />
                      <path
                        fill="#C8102E"
                        d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
                      />
                      <path
                        fill="#FFF"
                        d="M241 0v480h160V0H241zM0 160v160h640V160H0z"
                      />
                      <path
                        fill="#C8102E"
                        d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 640 480">
                      <path fill="#FFCE00" d="M0 320h640v160H0z" />
                      <path d="M0 0h640v160H0z" />
                      <path fill="#DD0000" d="M0 160h640v160H0z" />
                    </svg>
                  )}
                  <span className="text-sm font-medium">
                    {i18n.language.toUpperCase()}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={i18n.language}
                  className="absolute opacity-0 inset-0 w-full h-full cursor-pointer"
                >
                  <option value="en">{t("language.en")}</option>
                  <option value="de">{t("language.de")}</option>
                </select>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              {/* Mobile Language Selector */}
              <div className="relative mr-4">
                <button
                  className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-200 hover:border-[#0C4A79] transition-all duration-300 shadow-sm hover:shadow-md"
                  onClick={(e) => {
                    const select = e.currentTarget.nextElementSibling;
                    select.click();
                  }}
                >
                  {i18n.language === "en" ? (
                    <svg className="w-4 h-4" viewBox="0 0 640 480">
                      <path fill="#012169" d="M0 0h640v480H0z" />
                      <path
                        fill="#FFF"
                        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
                      />
                      <path
                        fill="#C8102E"
                        d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
                      />
                      <path
                        fill="#FFF"
                        d="M241 0v480h160V0H241zM0 160v160h640V160H0z"
                      />
                      <path
                        fill="#C8102E"
                        d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"
                      />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 640 480">
                      <path fill="#FFCE00" d="M0 320h640v160H0z" />
                      <path d="M0 0h640v160H0z" />
                      <path fill="#DD0000" d="M0 160h640v160H0z" />
                    </svg>
                  )}
                  <span className="text-xs font-medium">
                    {i18n.language.toUpperCase()}
                  </span>
                </button>
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={i18n.language}
                  className="absolute opacity-0 inset-0 w-full h-full cursor-pointer"
                >
                  <option value="en">{t("language.en")}</option>
                  <option value="de">{t("language.de")}</option>
                </select>
              </div>

              <button
                className="relative z-[71] p-2"
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
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-[70] flex items-center justify-center pt-20 bg-white md:hidden"
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
