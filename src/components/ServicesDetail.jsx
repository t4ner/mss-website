import React from "react";
import { useTranslation } from "react-i18next";

const ServicesDetail = () => {
  const { t } = useTranslation();

  const services = t("services.detail", { returnObjects: true });

  return (
    <div>
      <div className="container mt-5 lg:mt-16 px-2 lg:px-0">
        <ul className="list-none p-0 grid grid-cols-1 gap-[4vw]">
          {services.map((service, index) => (
            <li
              key={index}
              className="sticky top-0"
              style={{ paddingTop: `calc(${index + 1} * 1.5em)` }}
            >
              <div
                className="box-border rounded-lg shadow-lg h-auto md:h-[70vh] 
                            flex flex-col md:flex-row transition-all duration-500 
                            relative overflow-hidden bg-white"
              >
                <div className="w-full md:w-2/3 relative h-[300px] md:h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                  <div className="max-w-xl">
                    <h2 className="text-lg lg:text-2xl mb-4 md:mb-6 text-gray-800 font-bold font-krona">
                      {service.title}
                    </h2>
                    <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesDetail;
