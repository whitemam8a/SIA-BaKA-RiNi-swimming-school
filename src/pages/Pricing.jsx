import React from "react";
import Card from "../components/Card";
import { Box } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "react-i18next";
import AutoplayPlugin from "../assets/autoplay";

const Pricing = () => {
  const { t } = useTranslation();

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      dragSpeed: 1,
      slides: {
        perView: 1,
        spacing: 2,
        origin: "center",
      },
      defaultAnimation: {
        duration: 800,
        easing: (t) => t * (2 - t),
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 2,
            origin: "center",
          },
        },
        "(min-width: 800px)": {
          slides: {
            perView: 2.5,
            spacing: 2,
            origin: "center",
          },
        },
        "(min-width: 1000px)": {
          slides: {
            perView: 2.5,
            origin: "center",
          },
        },
        "(min-width: 1300px)": {
          slides: {
            perView: 3,
            spacing: 2,
            origin: "center",
          },
        },
      },
    },
    [AutoplayPlugin]
  );

  return (
    <div
      className="flex flex-col items-center gap-12 py-16 bg-gray-50 components"
      id="pricing"
    >
      <h2 className="text-4xl font-extrabold ">{t("pricing.pricing")}</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div> */}
      <div className="block xl:hidden w-full px-10 flex">
        <Box ref={sliderRef} className="keen-slider">
          <Box className="keen-slider__slide" sx={{ pb: 4 }}>
            <Card
              image={
                "https://fitnessacademy.com.ua/wp-content/uploads/2018/11/kak-nauchit-rebenka-plavat.jpg"
              }
              imgAlt={"3 babies swimming in the pool"}
              title={t("pricing.1_card.title")}
              description={t("pricing.1_card.description")}
              price={t("pricing.1_card.price")}
            />
          </Box>
          <Box className="keen-slider__slide">
            <Card
              image={
                "https://static.tildacdn.com/tild6464-3261-4433-b062-383737656434/grudnichkovoe-i-dets.jpg"
              }
              imgAlt={"4 kids looking at the camera at the beachside bessin."}
              title={t("pricing.2_card.title")}
              description={t("pricing.2_card.description")}
              price={t("pricing.2_card.price")}
            />
          </Box>
          <Box className="keen-slider__slide">
            <Card
              image={
                "https://splash-school.com/wp-content/uploads/2021/10/img_1411.jpg"
              }
              imgAlt={"the coach is explaining a task to a child by the pool "}
              title={t("pricing.3_card.title")}
              description={t("pricing.3_card.description")}
              price={t("pricing.3_card.price")}
            />
          </Box>
          <Box className="keen-slider__slide">
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
          </Box>
        </Box>
      </div>

      <div className="hidden xl:grid grid-cols-4 w-full gap-6">
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
