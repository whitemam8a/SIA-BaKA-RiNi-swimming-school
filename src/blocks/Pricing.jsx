import React from "react";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col items-center gap-12 px-5 py-16 bg-gray-50"
      id="pricing"
    >
      <h2 className="text-4xl font-extrabold ">{t("pricing.pricing")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          image={
            "https://fitnessacademy.com.ua/wp-content/uploads/2018/11/kak-nauchit-rebenka-plavat.jpg"
          }
          imgAlt={"3 babies swimming in the pool"}
          title={t("pricing.1_card.title")}
          description={t("pricing.1_card.description")}
          price={t("pricing.1_card.price")}
        />
        <Card
          image={
            "https://static.tildacdn.com/tild6464-3261-4433-b062-383737656434/grudnichkovoe-i-dets.jpg"
          }
          imgAlt={"4 kids looking at the camera at the beachside bessin."}
          title={t("pricing.2_card.title")}
          description={t("pricing.2_card.description")}
          price={t("pricing.2_card.price")}
        />
        <Card
          image={
            "https://splash-school.com/wp-content/uploads/2021/10/img_1411.jpg"
          }
          imgAlt={"the coach is explaining a task to a child by the pool "}
          title={t("pricing.3_card.title")}
          description={t("pricing.3_card.description")}
          price={t("pricing.3_card.price")}
        />
        <Card
          image={
            "https://moysport.in/wp-content/uploads/2019/09/irfssqge-hy.jpg"
          }
          imgAlt={
            "coach explains swimming technique to a teenager by the pool "
          }
          title={t("pricing.4_card.title")}
          description={t("pricing.1_card.description")}
          price={t("pricing.4_card.price")}
        />
      </div>
    </div>
  );
};

export default Pricing;
