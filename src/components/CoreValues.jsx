import React from "react";
import { motion } from "framer-motion";
import { BiCog, BiLineChart, BiWrench } from "react-icons/bi";
import { MdOutlineEngineering, MdBuildCircle, MdSupport } from "react-icons/md";

const CoreValues = () => {
  const values = [
    {
      icon: <BiCog className="text-5xl text-white" />,
      title: "Precision and Reliability",
      description:
        "Our machines are engineered to deliver precise and reliable results, ensuring the quality of your cable production.",
      gradient: "from-[#0C4A79] to-[#2171B5]",
    },
    {
      icon: <BiLineChart className="text-5xl text-white" />,
      title: "Efficiency Enhancement",
      description:
        "By employing state-of-the-art technologies and automation solutions, we help our customers optimize their production processes and enhance efficiency.",
      gradient: "from-[#E5153D] to-[#FF4D6A]",
    },
    {
      icon: <BiWrench className="text-5xl text-white" />,
      title: "Adaptability",
      description:
        "We offer tailored solutions that cater to the specific needs and requirements of our customers.",
      gradient: "from-[#0C4A79] to-[#2171B5]",
    },
  ];

  const services = [
    {
      icon: <MdOutlineEngineering className="text-5xl text-white" />,
      title: "Consultation and Planning",
      description:
        "Our experts support you in planning and implementing your cable manufacturing projects.",
      gradient: "from-[#0C4A79] to-[#2171B5]",
    },
    {
      icon: <MdBuildCircle className="text-5xl text-white" />,
      title: "Installation and Commissioning",
      description:
        "We provide comprehensive installation and commissioning services to ensure your machines operate smoothly.",
      gradient: "from-[#E5153D] to-[#FF4D6A]",
    },
    {
      icon: <MdSupport className="text-5xl text-white" />,
      title: "Maintenance and Support",
      description:
        "Our dedicated support team is available to ensure your machines are always in optimal condition and running smoothly.",
      gradient: "from-[#0C4A79] to-[#2171B5]",
    },
  ];

  const CardGrid = ({ items, sectionId }) => (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          className="relative group h-[400px]"
          role="listitem"
          aria-labelledby={`${sectionId}-title-${index}`}
        >
          <div
            className={`
              h-full bg-gradient-to-br ${item.gradient} 
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
                className="text-xl font-krona font-semibold mb-4 text-white"
              >
                {item.title}
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
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
    <main >
      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          aria-labelledby="technology-heading"
        >
          <h2
            id="technology-heading"
            className="text-4xl font-bold mb-4 font-krona"
          >
            Our Technology
          </h2>
          <div
            className="w-24 h-1 bg-[#0C4A79] mx-auto rounded-full"
            role="presentation"
          ></div>
        </motion.section>

        <CardGrid items={values} sectionId="technology" />

        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-20"
          aria-labelledby="services-heading"
        >
          <h2
            id="services-heading"
            className="text-4xl font-bold mb-4 font-krona"
          >
            Our Services
          </h2>
          <div
            className="w-24 h-1 bg-[#0C4A79] mx-auto rounded-full"
            role="presentation"
          ></div>
        </motion.section>

        <CardGrid items={services} sectionId="services" />
      </div>
    </main>
  );
};

export default CoreValues;
