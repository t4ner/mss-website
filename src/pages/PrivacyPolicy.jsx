import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 lg:pt-36">
        <h1 className="text-base lg:text-4xl font-bold mb-8 text-black">
          {t("privacy.title")}
        </h1>

        <section
          id="section1"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">
              {t("privacy.introduction.title")}
            </span>
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.introduction.content")}
          </p>
        </section>

        <section
          id="section2"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">{t("privacy.controller.title")}</span>
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.controller.content")}
            <br />
            {t("privacy.controller.company")}
            <br />
            {t("privacy.controller.manager")}
            <br />
            {t("privacy.controller.address")}
            <br />
            {t("privacy.controller.city")}
            <br />
            {t("contact.form.phoneLabel")}{" "}
            <a
              href="tel:+496218627741"
              className="text-[#0C4A79] hover:underline"
            >
              {t("privacy.controller.phone")}
            </a>
            <br />
            {t("contact.form.emailLabel")}{" "}
            <a
              href="mailto:manufacturing@mssmachinery.de"
              className="text-[#0C4A79] hover:underline"
            >
              {t("privacy.controller.email")}
            </a>
          </p>
        </section>

        <section
          id="section3"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">
              {t("privacy.dataCollection.title")}
            </span>
          </h2>

          <h3 id="section3-1" className="text-sm lg:text-xl font-semibold mb-3">
            <span className="text-black">
              {t("privacy.dataCollection.websiteVisit.title")}
            </span>
          </h3>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.dataCollection.websiteVisit.content")}
          </p>
          <ul className="list-disc list-inside text-sm lg:text-base text-gray-700 mb-4 ml-4">
            {t("privacy.dataCollection.websiteVisit.items", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.dataCollection.websiteVisit.storage")}
          </p>

          <h3 id="section3-2" className="text-sm lg:text-xl font-semibold mb-3">
            <span className="text-black">
              {t("privacy.dataCollection.contactForm.title")}
            </span>
          </h3>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.dataCollection.contactForm.content")}
          </p>
        </section>

        <section
          id="section4"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">{t("privacy.dataSharing.title")}</span>
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.dataSharing.content")}
          </p>
          <ul className="list-disc list-inside text-sm lg:text-base text-gray-700 mb-4 ml-4">
            {t("privacy.dataSharing.items", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </section>

        <section
          id="section5"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">{t("privacy.cookies.title")}</span>
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.cookies.content")}
          </p>
        </section>

        <section
          id="section6"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">{t("privacy.analytics.title")}</span>
          </h2>
          <h3 id="section6-1" className="text-sm lg:text-xl font-semibold mb-3">
            <span className="text-black">
              {t("privacy.analytics.googleAnalytics.title")}
            </span>
          </h3>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.analytics.googleAnalytics.content")}
          </p>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.analytics.googleAnalytics.dataCollected")}
          </p>
          <ul className="list-disc list-inside text-sm lg:text-base text-gray-700 mb-4 ml-4">
            {t("privacy.analytics.googleAnalytics.items", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.analytics.googleAnalytics.optOut")}
          </p>
        </section>

        <section
          id="section7"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">{t("privacy.rights.title")}</span>
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.rights.content")}
          </p>
          <ul className="list-disc list-inside text-sm lg:text-base text-gray-700 mb-4 ml-4 space-y-4">
            {t("privacy.rights.items", { returnObjects: true }).map(
              (item, index) => (
                <li key={index} className="ml-4">
                  {item}
                </li>
              )
            )}
          </ul>
        </section>

        <section
          id="section8"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">
              {t("privacy.rightToObject.title")}
            </span>
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.rightToObject.content")}
          </p>
        </section>

        <section
          id="section9"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">
              {t("privacy.dataSecurity.title")}
            </span>
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.dataSecurity.content")}
          </p>
        </section>

        <section
          id="section10"
          className="mb-8 bg-white rounded-lg shadow-sm p-8"
        >
          <h2 className="text-sm lg:text-xl font-semibold mb-4">
            <span className="text-black">{t("privacy.updates.title")}</span>
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-4">
            {t("privacy.updates.content")}
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
