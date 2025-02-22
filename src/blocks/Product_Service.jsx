import React from "react";
import { useTranslation, Trans } from "react-i18next";

const Product_Service = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mx-5 py-16" id="products">
      <h2 className="text-3xl font-extrabold mb-6">
        {t("product_sevices.our_product")}
      </h2>
      <ol className="list-decimal text-xl text-gray-800 pl-5 space-y-4 max-w-4xl w-full">
        <li className="transition-colors">
          <Trans
            i18nKey={"product_sevices.1_product"}
            components={{ 1: <span className="font-semibold" /> }}
          ></Trans>
        </li>
        <li className="transition-colors">
          <Trans
            i18nKey={"product_sevices.2_product"}
            components={{ 1: <span className="font-semibold" /> }}
          ></Trans>
        </li>
        <li className="transition-colors">
          <Trans
            i18nKey={"product_sevices.3_product"}
            components={{ 1: <span className="font-semibold" /> }}
          ></Trans>
        </li>
        <li className="transition-colors">
          <Trans
            i18nKey={"product_sevices.4_product"}
            components={{ 1: <span className="font-semibold" /> }}
          ></Trans>
        </li>
      </ol>
    </div>
  );
};

export default Product_Service;
