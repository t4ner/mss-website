import { motion } from "framer-motion";
import React from "react";
import { FaTools, FaLightbulb, FaHandshake } from "react-icons/fa";

const benefits = [
  {
    id: "01",
    title: "Experience and Know-how",
    description:
      "With years of industry expertise, we provide professional solutions backed by technical mastery and a proven track record.",
    icon: FaTools,
  },
  {
    id: "02",
    title: "Innovation",
    description:
      "We deliver cutting-edge technology and forward-thinking solutions, ensuring continuous improvement and market-leading innovations.",
    icon: FaLightbulb,
  },
  {
    id: "03",
    title: "Customer Satisfaction",
    description:
      "Our commitment to quality assurance, dedicated support, and reliable service ensures a truly client-focused approach.",
    icon: FaHandshake,
  },
];

const CompanyBenefits = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      aria-labelledby="benefits-title"
    >


      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="benefits-title"
            className="text-4xl  font-bold font-krona text-gray-900 mb-6"
          >
            Why Choose MSS Cable Machinery?
          </h2>
          <div className="w-24 h-1 bg-[#0C4A79] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
          {benefits.map((benefit, index) => (
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
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold font-krona text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to elevate your cable manufacturing process?{" "}
            <a
              href="/contact"
              className="text-[#0C4A79] hover:text-[#0C4A79]/80 font-semibold underline transition-colors"
            >
              Contact us today
            </a>{" "}
            to discover how we can help you achieve your production goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyBenefits;
