import React from "react";
import companyInfo from "/homeImage/companyInfo.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const CompanyInfo = () => {
  const { t } = useTranslation();
  return (
    <section aria-label="Company Information" className="company-info-section">
      <div className="bg-gray-50  text-black py-8 lg:py-16 relative overflow-hidden container mx-auto rounded-lg">
        <div className="container mx-auto px-6">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center lg:gap-16"
          >
            {/* Sol içerik */}
            <div className="lg:w-1/2">
              <header className="mb-12">
                <div className="inline-block bg-[#0C4A79] text-white backdrop-blur-sm px-4 py-1.5 rounded-full text-xs lg:text-sm mb-6">
                  {t("companyInfo.aboutUs")}
                </div>

                <h1 className="text-lg lg:text-4xl font-bold mb-8 leading-tight font-krona">
                  <span className="block ">
                    {t("companyInfo.innovativeSolutions")}
                  </span>
                  <span className="block mt-1">
                    {t("companyInfo.cableManufacturing")}
                  </span>
                </h1>

                <div className="space-y-4 text-sm lg:text-lg leading-relaxed mb-10">
                  <p itemProp="description">
                    {t("companyInfo.mainDescription")}
                  </p>
                  <p>
                    {t("companyInfo.productRange")}
                  </p>
                </div>                
              </header>
            </div>

            {/* Sağ içerik - Resim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <img
                src={companyInfo}
                alt="MSS Cable Machinery Manufacturing Facility and Equipment"
                className="w-full lg:h-[550px] object-cover rounded-xl shadow-lg"
                loading="lazy"
                itemProp="image"
              />

              {/* İstatistik kartı */}
         
            </motion.div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
