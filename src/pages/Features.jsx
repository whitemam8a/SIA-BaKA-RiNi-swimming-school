import React from "react";
import CardFeatures from "../components/CardFeatures";
import DollarIcon from "../assets/icons/DollarIcon";
import LifeRingIcon from "../assets/icons/LifeRingIcon";
import CupIcon from "../assets/icons/CupIcon";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const IconSize = 40;

  return (
    // <div className="flex flex-col items-center gap-6 div_custom" id="features">
    //   <strong className="strong-style">Почему Мы?</strong>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
    //     <CardFeatures
    //       logo={<CupIcon size={30} />}
    //       title={"Член союза по плаванию в Латвии"}
    //       description={
    //         "Присоединившись к нашему клубу Ваш ребенок сможет представлять нашу школу на соревнованиях по плаванию"
    //       }
    //     />
    //     <CardFeatures
    //       logo={<DollarIcon size={30} />}
    //       title={"Ваши занятия не пропадают"}
    //       description={
    //         "Мы ценим ваше время и хотим, чтобы ни одно занятие не пропадало даром из-за болезни. Если ваш ребенок неможет посетить занятие, мы предоставим бесплатную возможность посетить занятие в другое группе"
    //       }
    //     />
    //     <CardFeatures
    //       logo={<LifeRingIcon size={30} />}
    //       title={"Удобное время"}
    //       description={
    //         "Мы понимаем, что ваше расписание может быть загружено. Поэтому мы предлагаем гибкое расписание наших занятий"
    //       }
    //     />
    //   </div>
    // </div>
    <div
      className="flex flex-col items-center gap-12 py-16 bg-gray-50 components"
      id="features"
    >
      <h2 className="text-3xl font-extrabold ">{t("features.why_we")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      </div>
    </div>
  );
};

export default Features;
