import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Contact_form = ({ button }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.init(publicKey);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    emailjs.send(serviceID, templateID, formData).then(
      (response) => {
        console.log("Успешно отправлено: ", response);
        toast.success("Your message has been sent successfully!", {
          autoClose: 8000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        console.log("Ошибка при отправке: ", error);
        toast.error("Some error occurred, try again later ", {
          autoClose: 8000,
        });
      }
    );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-full max-w-lg mx-auto px-4 md:px-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            {t("contact_form.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("contact_form.name")}
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-black focus:outline-none focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            {"Email"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-black focus:outline-none focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-medium text-gray-700"
          >
            {t("contact_form.number")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder={t("contact_form.number")}
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-black focus:outline-none focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            {t("contact_form.message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact_form.message")}
            required
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-black focus:outline-none focus:ring-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF918F] hover:bg-[#FFBABA] text-black font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {button}
        </button>
      </form>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Contact_form;
