import React from "react";

const ContactHero = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto">
        <div className="relative rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12792.570109966384!2d8.516204!3d49.453593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c929901f636b%3A0xa20d933526c62008!2sKr%C3%BCgerstra%C3%9Fe%208-10%2C%2068219%20Mannheim%2C%20Almanya!5e1!3m2!1str!2sus!4v1740331456132!5m2!1str!2sus"
            className="w-full h-[70vh] lg:h-[80vh]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
