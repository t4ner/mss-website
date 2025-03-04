import React from "react";
import companyInfo from "/homeImage/companyInfo.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CompanyInfo = () => {
  const { t } = useTranslation();
  return (
    <section aria-label="Company Information" className="company-info-section">
      {/* Full width image section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container h-[150px] lg:h-[400px] rounded-lg relative overflow-hidden"
      >
        <img
          src={companyInfo}
          alt="MSS Cable Machinery Manufacturing Facility"
          className="w-full h-full object-cover"
          loading="lazy"
          itemProp="image"
        />
      </motion.div>

      {/* Content section */}
      <div className="container mx-auto px-4 pt-10 lg:pt-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className=" lg:text-2xl font-semibold mb-6 text-[#0C4A79]">
            {t("companyInfo.aboutUs")}
          </h2>
          <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-16"
          aria-labelledby="technology-heading"
        >
          <h3 className="text-lg lg:text-4xl font-bold mb-4">
            {t("companyInfo.innovativeSolutions")}{" "}
            {t("companyInfo.cableManufacturing")}
          </h3>
          <div
            className="w-24 h-1 bg-black mx-auto rounded-full"
            role="presentation"
          ></div>
        </motion.section>
          <div className="space-y-6 text-lg leading-relaxed text-sm lg:text-lg">
            <p className="text-gray-700" itemProp="description">
              {t("companyInfo.mainDescription")}
            </p>
            <p className="text-gray-700">{t("companyInfo.productRange")}</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default CompanyInfo;
