import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="px-2 lg:px-0">
      <div className="bg-white/50 container rounded-lg my-10 lg:my-20">
        <p className="p-4 lg:p-8 text-sm lg:text-lg border-l-5 border-[#0C4A79]">
          {t("contact.info.description")}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
