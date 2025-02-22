import React, { useTransition } from "react";
import { useTranslation, Trans } from "react-i18next";

const FirstScreen = () => {
  const { t } = useTranslation();

  return (
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
      <button className="btn bg-[#FF918F] hover:bg-[#FFBABA] border-none text-black font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-6">
        <a href="#FirstPrictice">{t("first_screen.button")}</a>
      </button>
    </div>
  );
};

export default FirstScreen;
