import { motion } from "framer-motion";
import React from "react";
import { FaSearch, FaTools, FaCogs } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const icons = {
  FaSearch: FaSearch,
  FaTools: FaTools,
  FaCogs: FaCogs,
};

const ContactBenefits = () => {
  const { t } = useTranslation();
  const benefits = t("contact.benefits.items", { returnObjects: true });

  return (
    <section
      className="pt-10 lg:pt-20 relative overflow-hidden"
      aria-labelledby="assistance-title"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="assistance-title"
            className="text-lg lg:text-4xl font-bold font-krona text-gray-900 mb-6"
          >
            {t("contact.benefits.heading")}
          </h2>
          <div className="w-24 h-1 bg-[#0C4A79] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = icons[benefit.icon] || FaSearch;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-white/50 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/20 hover:border-[#0C4A79]/30 transition-all duration-300 group"
              >
                <div className="absolute -top-6 left-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#0C4A79]/20 blur-xl rounded-full"></div>
                    <div className="relative bg-gradient-to-br from-[#0C4A79] to-[#2171B5] p-4 rounded-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
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
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 lg:mt-16"
        >
          <p className="text-sm lg:text-lg text-gray-700 max-w-4xl mx-auto">
            {t("contact.benefits.footer.text")}{" "}
            <a
              href="/contact"
              className="text-[#0C4A79] hover:text-[#0C4A79]/80 font-semibold underline transition-colors"
            >
              {t("contact.benefits.footer.contactLink")}
            </a>{" "}
            {t("contact.benefits.footer.afterLink")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBenefits;
