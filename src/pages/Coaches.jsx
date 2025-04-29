import React from "react";
import { useTranslation } from "react-i18next";
import CardCoach from "../components/CoachCard/CoachCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { IconButton, Box } from "@mui/material";
import AutoplayPlugin from "../assets/autoplay";
import Ruslan_Sereda from "../assets/images/Ruslan_Sereda.jpg";

const Coaches = () => {
  const { t } = useTranslation();

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
      dragSpeed: 1,
      slides: {
        perView: 1,
        spacing: 2,
        origin: "center",
      },
      defaultAnimation: {
        duration: 600,
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

  const coachData = [
    {
      image:
        "https://olimpiec.by/wp-content/uploads/2023/01/chudnikov-anton.jpg",
      name: t("coaches.Anton.name"),
      imgAlt: "photo Антон Чудников",
      short_description: t("coaches.Anton.short_description"),
      description: t("coaches.Anton.description"),
    },
    {
      image:
        "https://olympicstyle.com.ua/wp-content/uploads/2020/08/IMG_0995.jpg",
      name: t("coaches.Vitaliy.name"),
      imgAlt: "photo Виталий Пупкин",
      short_description: t("coaches.Vitaliy.short_description"),
      description: t("coaches.Vitaliy.description"),
    },
    {
      image: Ruslan_Sereda,
      name: t("coaches.Ruslan.name"),
      imgAlt: "photo Ruslan Sereda",
      short_description: t("coaches.Ruslan.short_description"),
      description: t("coaches.Ruslan.description"),
    },
    {
      image:
        "https://irklider.ru/wp-content/uploads/2022/09/photo_2022-09-23_11-12-56.jpg",
      name: t("coaches.Vasily.name"),
      imgAlt: "photo Виталий Брызговиков",
      short_description: t("coaches.Vasily.short_description"),
      description: t("coaches.Vasily.description"),
    },
  ];

  return (
    <div
      className="flex flex-col items-center gap-12 py-16 components"
      id="coaches"
    >
      <h2 className="text-3xl font-extrabold">{t("coaches.our_coaches")}</h2>

      {/* Карусель: видна только до lg */}
      <div className="block xl:hidden w-full px-10 flex">
        {/* <IconButton onClick={() => slider.current?.prev()} className="">
          <KeyboardArrowLeft />
        </IconButton> */}

        <div ref={sliderRef} className="keen-slider ">
          {coachData.map((coach, index) => (
            <Box
              key={index}
              className="keen-slider__slide flex justify-start"
              sx={{ pb: 4 }}
            >
              <CardCoach
                image={coach.image}
                name={coach.name}
                imgAlt={coach.imgAlt}
                short_description={coach.short_description}
                description={coach.description}
              />
            </Box>
          ))}
        </div>
        {/* <IconButton onClick={() => slider.current?.next()} className="">
          <KeyboardArrowRight />
        </IconButton> */}
      </div>

      {/* Сетка: видна только на lg и выше */}
      <div className="hidden xl:grid grid-cols-4 w-full gap-6">
        {coachData.map((coach, index) => (
          <CardCoach
            key={index}
            image={coach.image}
            name={coach.name}
            imgAlt={coach.imgAlt}
            short_description={coach.short_description}
            description={coach.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Coaches;
