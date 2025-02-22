import { motion } from "framer-motion";
import React from "react";
import { FaTools, FaLightbulb, FaHandshake } from "react-icons/fa";

const benefits = [
  {
    id: "01",
    title: "Experience and Know-how",
    description:
      "With years of experience in the industry, we possess the necessary expertise to provide you with the best solutions.",
    icon: FaTools,
  },
  {
    id: "02",
    title: "Innovation",
    description:
      "We are constantly developing innovative solutions to meet the evolving demands of the market.",
    icon: FaLightbulb,
  },
  {
    id: "03",
    title: "Customer Satisfaction",
    description:
      "Our top priority is to satisfy our customers by providing high-quality products and services.",
    icon: FaHandshake,
  },
];

const CompanyBenefits = () => {
  return (
    <div className="">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-14 font-krona py-2 "
      >
        Why Choose MSS Cable Machinery?
        <div className="w-24 h-1 bg-[#0C4A79] mx-auto rounded-full mt-4"></div>
      </motion.h2>

      <div className="relative w-full container bg-gradient-to-br from-[#0C4A79] to-[#2171B5] py-10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2171B5] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0C4A79] rounded-full blur-[120px] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={benefit.id}
                className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl p-10 flex items-center gap-10 hover:bg-white/[0.07] transition-all duration-300 group border border-white/10 hover:border-white/20 shadow-lg h-full"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2171B5]/20 blur-2xl rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-[#0C4A79] to-[#2171B5] p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon size={40} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-krona font-bold text-white mb-3 group-hover:text-[#90CAF9] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <span className="text-8xl font-bold text-white/[0.03] absolute -top-6 right-8 group-hover:text-white/[0.05] transition-colors">
                  {benefit.id}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-10"
          >
            <p className="max-w-2xl mx-auto text-lg text-white leading-relaxed">
              Discover the benefits of our technology and let us elevate your
              cable manufacturing processes together. Contact us today to learn
              more about how we can help you achieve your production goals.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBenefits;
