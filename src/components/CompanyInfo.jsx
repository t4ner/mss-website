import React from "react";
import companyInfo from "/homeImage/companyInfo.jpg";
import { motion } from "framer-motion";


const CompanyInfo = () => {
  return (
    <section aria-label="Company Information" className="company-info-section">
      <div className="bg-gray-50  text-black py-16 relative overflow-hidden container mx-auto rounded-lg">
    

        <div className="container mx-auto px-6">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            {/* Sol içerik */}
            <div className="lg:w-1/2">
              <header className="mb-12">
                <div className="inline-block bg-[#0C4A79] text-white backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-6">
                  About Us
                </div>

                <h1 className="text-4xl font-bold mb-8 leading-tight font-krona">
                  <span className="block text-[#0C4A79]">
                    Innovative Solutions in
                  </span>
                  <span className="block mt-1 text-[#E5153D]">
                    Cable Manufacturing
                  </span>
                </h1>

                <div className="space-y-4 text-lg leading-relaxed mb-10">
                  <p itemProp="description">
                    MSS Cable Machinery is a leading provider of innovative
                    solutions for cable manufacturing. With our expertise and
                    advanced technologies, we develop machines that ensure the
                    highest precision and efficiency.
                  </p>
                  <p>
                    Our product range includes a wide variety of cable
                    manufacturing machines designed to meet our customers'
                    requirements and maximize their productivity.
                  </p>
                </div>

                {/* Özellik kartları */}
                <div className="grid grid-cols-2 gap-4 mb-10" role="list">
                  {[
                    {
                      title: "Precision Engineering",
                      desc: "High-precision manufacturing",
                    },
                    {
                      title: "Global Support",
                      desc: "24/7 technical assistance",
                    },
                    {
                      title: "Custom Solutions",
                      desc: "Tailored to your needs",
                    },
                    {
                      title: "Innovation",
                      desc: "Advanced technologies",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      key={index}
                      className="bg-gray-200 p-5 rounded-lg hover:bg-white/90 transition-colors duration-300"
                      role="listitem"
                    >
                      <h2 className="font-medium text-lg mb-2">
                        {feature.title}
                      </h2>
                      <p className="text-gray-400 text-lg">{feature.desc}</p>
                    </motion.div>
                  ))}
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
                className="w-full h-[550px] object-cover rounded-xl shadow-lg"
                loading="lazy"
                itemProp="image"
              />

              {/* İstatistik kartı */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%]"
              >
                <div
                  className="bg-white rounded-lg shadow-lg p-6 flex justify-between"
                  role="list"
                >
                  {[
                    { value: "25+", label: "Years Experience" },
                    { value: "1000+", label: "Machines Delivered" },
                    { value: "50+", label: "Countries Served" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center" role="listitem">
                      <div className="text-3xl font-bold text-[#E5153D]">
                        {stat.value}
                      </div>
                      <div className="text-base text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.article>
        </div>
      </div>
    
    </section>
  );
};

export default CompanyInfo;
