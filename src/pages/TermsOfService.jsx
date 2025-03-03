import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto px-4 pt-8 lg:pt-12 ">
        <h1 className="text-base lg:text-4xl font-bold mb-8 text-gray-900">
          {t("imprint.title")}
        </h1>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-sm lg:text-xl font-semibold mb-4 text-gray-900">
            {t("imprint.companyInfo.title")}
          </h2>
          <div className="space-y-2 text-gray-700">
            <p className="font-semibold text-sm lg:text-base">
              {t("imprint.companyInfo.companyName")}
            </p>
            <p className="text-sm lg:text-base">
              {t("imprint.companyInfo.management")}
            </p>
            <div className="mt-4">
              <p className="text-sm lg:text-base">
                <span className="font-medium">
                  {t("imprint.companyInfo.contact.labels.address")}:{" "}
                </span>
                {t("imprint.companyInfo.contact.values.address")}
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-medium">
                  {t("imprint.companyInfo.contact.labels.phone")}:{" "}
                </span>
                <a
                  href="tel:+4962186277411"
                  className="text-[#0C4A79] hover:underline"
                >
                  {t("imprint.companyInfo.contact.values.phone")}
                </a>
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-medium">
                  {t("imprint.companyInfo.contact.labels.email")}:{" "}
                </span>
                <a
                  href="mailto:manufacturing@mssmachinery.de"
                  className="text-[#0C4A79] hover:underline"
                >
                  {t("imprint.companyInfo.contact.values.email")}
                </a>
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-medium">
                  {t("imprint.companyInfo.contact.labels.website")}:{" "}
                </span>
                <a
                  href="https://www.mssmachinery.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0C4A79] hover:underline"
                >
                  {t("imprint.companyInfo.contact.values.website")}
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-sm lg:text-xl font-semibold mb-4 text-gray-900">
            {t("imprint.registration.title")}
          </h2>
          <div className="space-y-2 text-gray-700">
            <p className="text-sm lg:text-base">
              {t("imprint.registration.court")}
            </p>
            <p className="text-sm lg:text-base">
              {t("imprint.registration.number")}
            </p>
            <p className="text-sm lg:text-base">
              {t("imprint.registration.vatId")}
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-sm lg:text-xl font-semibold mb-4 text-gray-900">
            {t("imprint.responsibility.title")}
          </h2>
          <div className="space-y-2 text-gray-700">
            <p className="text-sm lg:text-base">
              {t("imprint.responsibility.according")}
            </p>
            <p className="text-sm lg:text-base">
              {t("imprint.responsibility.name")}
            </p>
            <p className="text-sm lg:text-base">
              {t("imprint.responsibility.address")}
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-sm lg:text-xl font-semibold mb-4 text-gray-900">
            {t("imprint.disclaimer.title")}
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-sm lg:text-xl font-medium mb-2">
                {t("imprint.disclaimer.content.title")}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                {t("imprint.disclaimer.content.text")}
              </p>
            </div>

            <div>
              <h3 className="text-sm lg:text-xl font-medium mb-2">
                {t("imprint.disclaimer.links.title")}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                {t("imprint.disclaimer.links.text")}
              </p>
            </div>

            <div>
              <h3 className="text-sm lg:text-xl font-medium mb-2">
                {t("imprint.disclaimer.copyright.title")}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                {t("imprint.disclaimer.copyright.text")}
              </p>
            </div>

            <div>
              <h3 className="text-sm lg:text-xl font-medium mb-2">
                {t("imprint.disclaimer.dataProtection.title")}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                {t("imprint.disclaimer.dataProtection.text")}
              </p>
            </div>

            <div>
              <h3 className="text-sm lg:text-xl font-medium mb-2">
                {t("imprint.disclaimer.validity.title")}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                {t("imprint.disclaimer.validity.text")}
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
