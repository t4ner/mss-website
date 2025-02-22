import React from "react";

const Hero = ({ title, subtitle, image }) => {
  return (
    <section className="hero-section pt-5 pb-10">
      <div className="container mx-auto">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>

          <img
            src={image}
            alt="hero"
            className="w-full h-[80vh] object-cover"
            loading="lazy"
            aria-hidden="false"
          />

          <div className="absolute inset-0 flex items-end justify-start p-4">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl font-krona leading-16">
              {title} <br /> {subtitle}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
