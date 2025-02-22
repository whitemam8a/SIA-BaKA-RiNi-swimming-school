import React from "react";
import Contact_form from "../components/ContactForm/Contact_from";
import { useTranslation } from "react-i18next";

const ContactsForm = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center px-6 py-12" id="FirstPrictice">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
        Записаться на первое занятие
      </h2>
      <div className="w-full md:w-[500px] lg:w-[600px]">
        {/* Contacts */}
        <Contact_form button={t("contact_form.button")} />
      </div>
    </div>
  );
};

export default ContactsForm;
