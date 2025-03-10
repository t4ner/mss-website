import { motion } from "framer-motion";
import React from "react";
import { FaTools, FaLightbulb, FaHandshake } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CompanyBenefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      id: "01",
      title: t("companyBenefits.benefits.0.title"),
      description: t("companyBenefits.benefits.0.description"),
      icon: FaTools,
    },
    {
      id: "02",
      title: t("companyBenefits.benefits.1.title"),
      description: t("companyBenefits.benefits.1.description"),
      icon: FaLightbulb,
    },
    {
      id: "03",
      title: t("companyBenefits.benefits.2.title"),
      description: t("companyBenefits.benefits.2.description"),
      icon: FaHandshake,
    },
  ];

  return (
    <section
      className=" relative overflow-hidden"
      aria-labelledby="benefits-title"
    >
      <div className="container mx-auto px-2 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="benefits-title"
            className="text-lg lg:text-4xl  font-bold font-krona text-gray-900 mb-6"
          >
            {t("companyBenefits.heading")}
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/50 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/20 hover:border-[#0C4A79]/30 transition-all duration-300 group h-[260px] lg:h-[300px]"
            >
              <div className="absolute -top-6 left-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0C4A79]/20 blur-xl rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-[#0C4A79] to-[#2171B5] p-4 rounded-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg lg:text-2xl font-bold font-krona text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-sm lg:text-lg text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div
                className="absolute top-4 right-8 text-8xl font-bold text-[#0C4A79]/5 select-none"
                aria-hidden="true"
              >
                {benefit.id}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompanyBenefits;
