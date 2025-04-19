import React from "react";
import CardFeatures from "../components/CardFeatures";
import DollarIcon from "../assets/icons/DollarIcon";
import LifeRingIcon from "../assets/icons/LifeRingIcon";
import CupIcon from "../assets/icons/CupIcon";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Features = () => {
  const { t } = useTranslation();

  const IconSize = 40;

  const WhileInView = { opacity: 1, x: 0 };
  const Transition = { duration: 3 };

  return (
    <div
      className="flex flex-col items-center gap-12 py-16 bg-gray-50 components"
      id="features"
    >
      <motion.h2
        className="text-3xl font-extrabold"
        initial={{ opacity: 0, x: -100 }}
        whileInView={WhileInView}
        transition={Transition}
        viewport={{ once: true }}
      >
        {t("features.why_we")}
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, x: 100 }}
        whileInView={WhileInView}
        transition={Transition}
        viewport={{ once: true }}
      >
        <CardFeatures
          logo={<CupIcon size={IconSize} className="text-indigo-600" />}
          title={t("features.1_card.title")}
          description={t("features.1_card.description")}
        />
        <CardFeatures
          logo={<DollarIcon size={IconSize} className="text-green-600" />}
          title={t("features.2_card.title")}
          description={t("features.2_card.description")}
        />
        <CardFeatures
          logo={<LifeRingIcon size={IconSize} className="text-blue-600" />}
          title={t("features.3_card.title")}
          description={t("features.3_card.description")}
        />
      </motion.div>
    </div>
  );
};

export default Features;
