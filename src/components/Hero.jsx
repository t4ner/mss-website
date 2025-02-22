import React from "react";
import hero from "/hero/home-hero.jpeg";

const Hero = () => {
  return (
    <section className="hero-section py-5">
      <div className="container mx-auto">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>

          <img
            src={hero}
            alt="home-hero"
            className="w-full h-[80vh] object-cover"
            loading="lazy"
            aria-hidden="false"
          />

          <div className="absolute inset-0 flex items-end justify-start p-4">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl font-krona leading-16">
              MSS Cable Machinery <br /> The Right Technology for Cable
              Manufacturing Machines
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
