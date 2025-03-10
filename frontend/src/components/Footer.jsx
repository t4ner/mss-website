import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="bg-white container lg:rounded-lg shadow-sm mt-10 lg:mt-20 lg:mb-5 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
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

          {/* Legal links - Visible on all screens */}
          <nav
            aria-label="Legal Footer navigation"
            className="lg:ml-auto mt-4 lg:mt-0"
          >
            <ul className="flex flex-wrap text-sm lg:text-base justify-center lg:justify-end gap-x-4 lg:gap-x-8 gap-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 "
                >
                  {t("footer.legal.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200"
                >
                  {t("footer.legal.terms")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons - Removed */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <p className="text-gray-500 text-sm lg:text-base  text-center">
            {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
