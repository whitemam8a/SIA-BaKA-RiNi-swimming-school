import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { EasyWeekWidget } from "../components/EasyWeekWidget";

const FirstScreen = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-start px-5 gap-5 py-[170px] first_screen div_custom">
        <h1 className="text-5xl font-bold text-[#1F2937] leading-tight md:leading-snug">
          {t("first_screen.title")}
        </h1>
        <h2 className="text-xl text-gray-700 mb-6">
          <Trans
            i18nKey="first_screen.subtitle"
            components={{ 1: <span className="font-semibold" /> }}
          ></Trans>
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn bg-[#FF918F] hover:bg-[#FFBABA] border-none text-black font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-6"
        >
          {t("first_screen.button")}
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full relative shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">
              {t("first_screen.button")}
            </h3>
            <EasyWeekWidget />
          </div>
        </div>
      )}
    </>
  );
};

export default FirstScreen;
