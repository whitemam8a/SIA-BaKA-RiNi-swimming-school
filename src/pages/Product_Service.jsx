import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

const Product_Service = () => {
  const { t } = useTranslation();

  const WhileInView = { opacity: 1, x: 0 };
  const Transition = { duration: 3 };

  return (
    // <div className="flex flex-col items-center mx-5 py-16" id="products">
    //   <h2 className="text-3xl font-extrabold mb-6">
    //     {t("product_sevices.our_product")}
    //   </h2>
    //   <ol className="list-decimal text-xl text-gray-800 pl-5 space-y-4 max-w-4xl w-full">
    //     <li className="transition-colors">
    //       <Trans
    //         i18nKey={"product_sevices.1_product"}
    //         components={{ 1: <span className="font-semibold" /> }}
    //       ></Trans>
    //     </li>
    //     <li className="transition-colors">
    //       <Trans
    //         i18nKey={"product_sevices.2_product"}
    //         components={{ 1: <span className="font-semibold" /> }}
    //       ></Trans>
    //     </li>
    //     <li className="transition-colors">
    //       <Trans
    //         i18nKey={"product_sevices.3_product"}
    //         components={{ 1: <span className="font-semibold" /> }}
    //       ></Trans>
    //     </li>
    //     <li className="transition-colors">
    //       <Trans
    //         i18nKey={"product_sevices.4_product"}
    //         components={{ 1: <span className="font-semibold" /> }}
    //       ></Trans>
    //     </li>
    //   </ol>
    // </div>
    <div className="flex flex-col items-center components py-16" id="products">
      <motion.h2
        className="text-3xl font-extrabold mb-10"
        initial={{ opacity: 0, x: 100 }}
        whileInView={WhileInView}
        transition={Transition}
        viewport={{ once: true }}
      >
        {t("product_sevices.our_product")}
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl w-full"
        initial={{ opacity: 0, x: -100 }}
        whileInView={WhileInView}
        transition={Transition}
        viewport={{ once: true }}
      >
        {[
          "product_sevices.1_product",
          "product_sevices.2_product",
          "product_sevices.3_product",
          "product_sevices.4_product",
        ].map((key) => (
          <div
            key={key}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 border border-gray-200"
          >
            <p className="text-gray-800 text-lg leading-relaxed">
              <Trans
                i18nKey={key}
                components={{ 1: <span className="font-semibold" /> }}
              />
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Product_Service;
