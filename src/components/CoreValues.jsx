import React from "react";
import { motion } from "framer-motion";
import { BiCog, BiLineChart, BiWrench } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const CoreValues = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: <BiCog className="text-3xl lg:text-5xl text-white" />,
      title: t("coreValues.technology.values.0.title"),
      description: t("coreValues.technology.values.0.description"),
    },
    {
      icon: <BiLineChart className="text-3xl lg:text-5xl text-white" />,
      title: t("coreValues.technology.values.1.title"),
      description: t("coreValues.technology.values.1.description"),
    },
    {
      icon: <BiWrench className="text-3xl lg:text-5xl text-white" />,
      title: t("coreValues.technology.values.2.title"),
      description: t("coreValues.technology.values.2.description"),
    },
  ];

  const CardGrid = ({ items, sectionId }) => (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      role="list"
      aria-label="Feature cards"
    >
      {items.map((item, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="relative group h-[300px] lg:h-[400px]"
          role="listitem"
          aria-labelledby={`${sectionId}-title-${index}`}
        >
          <div
            className={`
              h-full bg-red-600/60
              rounded-2xl p-8 shadow-xl transform transition-all duration-300
              hover:shadow-2xl flex flex-col justify-center
            `}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className="mb-6 p-4 rounded-full bg-white/20 backdrop-blur-sm"
                role="img"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3
                id={`${sectionId}-title-${index}`}
                className="text-lg lg:text-2xl font-bold font-krona mb-4 text-white"
              >
                {item.title}
              </h3>
              <p className="text-white text-sm lg:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          </div>
        </motion.article>
      ))}
    </div>
  );

  return (
    <main>
      <div className="container mx-auto px-2 lg:px-4">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-16"
          aria-labelledby="technology-heading"
        >
          <h2
            id="technology-heading"
            className="text-lg lg:text-4xl font-bold mb-4 font-krona"
          >
            {t("coreValues.technology.heading")}
          </h2>
          <div
            className="w-24 h-1 bg-black mx-auto rounded-full"
            role="presentation"
          ></div>
        </motion.section>

        <CardGrid items={values} sectionId="technology" />
      </div>
    </main>
  );
};

export default CoreValues;
