import React from "react";

const ServicesDetail = () => {
  const services = [
    {
      title: "Turnkey Cable Factories",
      image: "/servicesDetail/servicesdetail1.jpg",
      description:
        "We provide complete solutions for the setup and commissioning of cable factories. From planning to final implementation, we handle all necessary steps to ensure your project's success.",
    },
    {
      title: "Cable Machine Production",
      image: "/servicesDetail/servicesdetail2.jpg",
      description:
        "Our production lines include a variety of machines for cable manufacturing that meet the highest quality standards. We develop and manufacture machines tailored to our specific requirements.",
    },
    {
      title: "Machine Installation",
      image: "/servicesDetail/servicesdetail3.jpg",
      description:
        "Our expert team ensures the professional installation of your machines. We make sure all components are correctly installed and configured to guarantee a smooth startup.",
    },
    {
      title: "Modernization and Upgrading",
      image: "/servicesDetail/servicesdetail4.jpg",
      description:
        "We offer services for modernizing and upgrading existing machines and equipment. By employing the latest technologies, we help you improve the performance and extend the lifespan of your machines.",
    },
    {
      title: "Technical Support and Service",
      image: "/servicesDetail/servicesdetail5.jpg",
      description:
        "Our technical support is available around the clock. We provide quick and efficient solutions for any technical issues to minimize downtime and maximize productivity.",
    },
    {
      title: "Maintenance and HR Services",
      image: "/servicesDetail/servicesdetail6.jpg",
      description:
        "Regular maintenance is crucial for the longevity and efficiency of your machines. Our maintenance team offers comprehensive services to ensure your machines are always in top condition.",
    },
  ];

  return (
    <div>
      <div className="container">
        <ul className="list-none p-0 grid grid-cols-1 gap-[4vw] mb-[4vw]">
          {services.map((service, index) => (
            <li
              key={index}
              className="sticky top-0"
              style={{ paddingTop: `calc(${index + 1} * 1.5em)` }}
            >
              <div
                className="box-border rounded-lg shadow-lg h-[70vh] 
                            flex flex-row transition-all duration-500 
                            relative overflow-hidden bg-white"
              >
                <div className="w-2/3 relative h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 p-12 flex flex-col justify-center">
                  <div className="max-w-xl">
                    <h2 className="text-2xl mb-6 text-gray-800 font-bold font-krona">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
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
