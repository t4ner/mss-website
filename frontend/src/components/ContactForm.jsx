import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemleri buraya gelecek
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Sol Sütun - Başlık ve İletişim Bilgileri */}
        <div className="lg:sticky lg:top-6 px-2 lg:px-0">
          <h2 className="text-lg lg:text-5xl font-krona font-bold text-[#1a1a1a] mb-4 leading-tight">
            {t("contact.form.title")}
          </h2>
          <p className="text-gray-600 text-sm lg:text-lg mb-6">
            {t("contact.form.subtitle")}
          </p>

          <div className="space-y-3 text-sm lg:text-lg">
            <div className="flex flex-col lg:flex-row gap-2 text-gray-600">
              <div className="flex items-center gap-2">
                <HiOutlineMail className="w-5 h-5" />
                <span>{t("contact.form.emailLabel")} </span>
              </div>

              <a
                href="mailto:manufacturing@mssmachinery.de"
                className="text-[#0C4A79] hover:text-[#0C4A79]/80"
              >
                manufacturing@mssmachinery.de
              </a>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 text-gray-600">
              <div className="flex items-center gap-2">
                <HiOutlinePhone className="w-5 h-5" />
                <span>{t("contact.form.phoneLabel")} </span>
              </div>
              <a
                href="tel:+4962186277411"
                className="text-[#0C4A79] hover:text-[#0C4A79]/80"
              >
                +49 621 86277411
              </a>
            </div>
          </div>
        </div>

        {/* Sağ Sütun - Form */}
        <div className="bg-white/50 rounded-xl mx-2 p-2 lg:p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg lg:text-xl mb-6">
            {t("contact.form.formTitle")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t("contact.form.fullName")}
                className="w-full px-4 py-3 text-sm lg:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C4A79]"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.email")}
                className="w-full px-4 py-3 text-sm lg:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C4A79]"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("contact.form.subject")}
                className="w-full px-4 py-3 text-sm lg:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C4A79]"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.message")}
                rows="4"
                className="w-full px-4  py-3 text-sm lg:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C4A79]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-br text-sm lg:text-base from-[#0C4A79] to-[#2171B5] text-white px-6 py-3 rounded-lg hover:bg-[#0C4A79]/80 transition-colors duration-300"
            >
              {t("contact.form.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
