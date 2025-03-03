import React from "react";
import { motion } from "framer-motion";
import { BiCog, BiSupport, BiBookContent, BiWrench } from "react-icons/bi";
import {
  MdOutlineEngineering,
  MdInstallMobile,
  MdPeople,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

const ProductServices = () => {
  const { t } = useTranslation();

  const serviceIcons = [
    <BiBookContent className="text-3xl lg:text-5xl text-white" />,
    <MdInstallMobile className="text-3xl lg:text-5xl text-white" />,
    <BiSupport className="text-3xl lg:text-5xl text-white" />,
    <MdOutlineEngineering className="text-3xl lg:text-5xl text-white" />,
    <BiWrench className="text-3xl lg:text-5xl text-white" />,
    <MdPeople className="text-3xl lg:text-5xl text-white" />,
  ];

  

  const items = t("products.services.items", { returnObjects: true }).map(
    (item, index) => ({
      ...item,
      icon: serviceIcons[index],
    
    })
  );

  const CardGrid = ({ items }) => (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 "
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
          className="relative group  h-[300px] lg:h-[400px]"
          role="listitem"
          aria-labelledby={`features-title-${index}`}
        >
          <div
            className={`
              h-full bg-[#336E95]
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
                id={`features-title-${index}`}
                className="text-lg lg:text-2xl font-krona font-bold mb-4 text-white"
              >
                {item.title}
              </h3>
              <p className="text-white/90 text-sm lg:text-lg leading-relaxed">
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
    <main className="mt-20">
      <div className="container mx-auto px-2 lg:px-4">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-16"
          aria-labelledby="services-heading"
        >
          <h2
            id="services-heading"
            className="text-lg lg:text-4xl font-bold mb-4 font-krona"
          >
            {t("products.services.title")}
          </h2>
          <div
            className="w-24 h-1 bg-black mx-auto rounded-full"
            role="presentation"
          ></div>
        </motion.section>

        <CardGrid items={items} />
      </div>
    </main>
  );
};

export default ProductServices;
